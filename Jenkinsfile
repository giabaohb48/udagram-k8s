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

        stage("Build") {
            steps {
                sh "pwd"
                sh "docker-compose -f Docker-compose-build.yaml build"
            }
        }
    }
    
}