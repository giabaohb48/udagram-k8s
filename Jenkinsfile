pipeline {
    agent any

    stages {
        stage("Verify tooling") {
            steps {
                sh '''
                    docker info
                    docker version
                    docker compose version
                    curl --version
                    jq --version
                '''
            }
        }

        // stage("Build") {
        //     agent { node {label 'master'}}
        //     steps {
        //         sh "docker build -t udagram-api-feed ./udagram-api-feed"
        //         sh "docker tag udagram-api-feed giabaohb48/udagram-api-feed:latest"
        //         sh "docker build -t udagram-api-user ./udagram-api-user"
        //         sh "docker tag udagram-api-user giabaohb48/udagram-api-user:latest"
        //         sh "docker build -t udagram-frontend ./udagram-frontend"
        //         sh "docker tag udagram-frontend giabaohb48/udagram-frontend:latest"
        //         sh "docker build -t udagram-reverseproxy ./udagram-reverseproxy"
        //         sh "docker tag udagram-reverseproxy giabaohb48/udagram-reverseproxy:latest"


        //     }
        // }
    }

    
}