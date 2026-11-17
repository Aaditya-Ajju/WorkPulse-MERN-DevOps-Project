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
    }
}
