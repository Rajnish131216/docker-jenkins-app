pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp"
        CONTAINER_NAME = "myapp_container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning GitHub repository...'
                checkout scm
            }
        }

        stage('Docker Version') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Removing old container if it exists...'
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Starting application container...'
                sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
                sh 'docker logs $CONTAINER_NAME'
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo 'PIPELINE EXECUTED SUCCESSFULLY!'
            echo 'Docker image built successfully.'
            echo 'Application container started successfully.'
            echo 'Application: http://localhost:3000'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'PIPELINE FAILED!'
            echo 'Check the Console Output for details.'
            echo '======================================'
        }

        always {
            echo 'Jenkins Pipeline execution completed.'
        }
    }
}
