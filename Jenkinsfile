pipeline {
    agent any

    stages {
        stage("Verify tooling") {
            steps {
                sh '''
                    docker info
                    docker version
                    docker-compose version
                    curl --version
                    
                '''
            }
        }

        stage("Prune docker data") {
            steps {
                sh 'docker system prune -a --volumes -f'
            }
        }

        stage("Build") {
            steps {
                sh "pwd"
                sh "docker-compose -f Docker-compose-build.yaml build"
                sh "docker tag udagram-api-feed giabaohb48/udagram-api-feed:latest"
                sh "docker tag udagram-api-user giabaohb48/udagram-api-user:latest"
                sh "docker tag udagram-frontend giabaohb48/udagram-frontend:latest"
                sh "docker tag udagram-reverseproxy giabaohb48/udagram-reverseproxy:latest"              
            }
        }

        stage("Docker push") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin"
                    sh '''
                        docker push giabaohb48/udagram-api-feed:latest
                        docker push giabaohb48/udagram-api-user:latest
                        docker push giabaohb48/udagram-frontend:latest
                        docker push giabaohb48/udagram-reverseproxy:latest
                    '''
                }

                // clean to save disk
                sh '''
                    docker rmi udagram-api-feed:latest
                    docker rmi udagram-api-user:latest
                    docker rmi udagram-frontend:latest
                    docker rmi udagram-reverseproxy:latest
                '''
            }
        }
    }
    
}