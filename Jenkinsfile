pipeline {
    agent any

    tools {nodejs "node"}


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
    }
}