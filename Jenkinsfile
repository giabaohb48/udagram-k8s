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
                    pwd
                '''
            }
        }

        stage("Build") {
            steps {
                sh "docker-compose -f Docker-compose-build.yml build"
            }
        }
    }
    
}