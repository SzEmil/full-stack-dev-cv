pipeline {

    environment {
    registry = "szemil/my-nextjs-app"
    registryCredential = 'dockerhubcredentials'
    dockerImage = ''
    }

    agent any

    tools {nodejs "node"}
    // agent {
    //     docker {
    //         image: "node:16-alpine"
    //       //  args '-p 3000:3000'
    //     }
    // }

    stages {
        stage('Build') {
            steps {
                echo 'building'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'testing'
                sh "chmod +x ./jenkins/scripts/test.sh"
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                echo 'deliver'
                sh "chmod +x ./jenkins/scripts/deliver.sh"
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh "chmod +x ./jenkins/scripts/kill.sh"
            }
        }
            stage('Cloning our Git') {
                steps {
                    git 'https://github.com/SzEmil/full-stack-dev-cv'
                }
            }

            stage('Building Docker Image') {
                steps {
                    script {
                        dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                        }
                    }
                }
            }

            stage('Cleaning Up') {
                steps{
                  sh "docker rmi --force $registry:$BUILD_NUMBER"
                }
            }

        
    }
}