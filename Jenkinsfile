
pipeline {
    agent {
        label 'workpulse-agent'
    }

    options {
        skipDefaultCheckout(true)
    }

    stages {

        // 1. Checkout source code from GitHub
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // 2. Backend CI
        stage('Backend CI') {
            steps {
                dir('backend') {
                    sh 'npm ci'
                    sh 'npm test'
                }
            }
        }

        // 3. Frontend Build
        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        // 4. Docker Verification
        stage('Docker Verification') {
            steps {
                sh 'docker --version'
                sh 'docker compose version'
                sh 'docker system df'
            }
        }

        // 5. Docker Compose Validation
        stage('Docker Compose Validation') {
            steps {
                sh '''
                    touch backend/.env
                    trap 'rm -f backend/.env' EXIT
                    docker compose config --quiet
                '''
                echo 'Docker Compose configuration is valid'
            }
        }

        // 6. Build Backend Image
        stage('Build Backend Image') {
            steps {
                sh 'docker build -t workpulse-backend:latest ./backend'
            }
        }

        // 7. Build Frontend Image
        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t workpulse-frontend:latest -f frontend/Dockerfile .'
            }
        }

        // 8. List Docker Images
        stage('List Docker Images') {
            steps {
                sh 'docker images'
            }
        }

        // 9. Deploy to Application EC2
        stage('Deploy to App EC2') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'workpulse-app-ssh',
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    )
                ]) {
                    sh '''
                        ssh -i "$SSH_KEY" \
                            -o StrictHostKeyChecking=accept-new \
                            "$SSH_USER@172.31.5.218" \
                            'cd ~/WorkPulse-MERN-DevOps-Project &&
                             git pull origin main &&
                             docker compose up -d --build &&
                             docker compose ps'
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed. Check the failed stage in Jenkins.'
        }
    }
}
