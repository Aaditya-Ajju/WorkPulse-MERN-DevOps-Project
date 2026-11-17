
pipeline {
    agent {
        label 'workpulse-agent'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Backend CI') {
            steps {
                dir('backend') {
                    sh 'npm ci'
                    sh 'npm test'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Verification') {
            steps {
                sh 'docker --version'
                sh 'docker compose version'
                sh 'docker system df'
            }
        }

        stage('Docker Compose Validation') {
            steps {
                sh 'docker compose config --quiet'
                echo 'Docker Compose configuration is valid'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t workpulse-backend:latest ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t workpulse-frontend:latest -f frontend/Dockerfile .'
            }
        }

        stage('List Docker Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
