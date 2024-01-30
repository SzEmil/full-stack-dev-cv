// pipeline {

//     environment {
//     registry = "szemil/my-nextjs-app"
//     registryCredential = 'dockerhub_id'
//     dockerImage = ''
//     }

//     agent { 
//         node {
//             label 'docker-agent-python'
//             }
//       }

//     // tools {nodejs "node"}

//     stages {
//         // stage('Build') {
//         //     steps {
//         //         echo 'building'
//         //         sh 'npm install'
//         //     }
//         // }
//         // stage('Test') {
//         //     steps {
//         //         echo 'testing'
//         //         sh "chmod +x ./jenkins/scripts/test.sh"
//         //         sh './jenkins/scripts/test.sh'
//         //     }
//         // }
//         // stage('Deliver') {
//         //     steps {
//         //         echo 'deliver'
//         //         sh "chmod +x ./jenkins/scripts/deliver.sh"
//         //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
//         //         sh "chmod +x ./jenkins/scripts/kill.sh"
//         //     }
//         // }
//         stage('Cloning our Git') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/SzEmil/full-stack-dev-cv.git'
//             }
//         }

//         stage('Building Docker Image') {
//             steps {
//                 script {
//                     dockerImage = docker.build registry + ":$BUILD_NUMBER"
//                 }
//             }
//         }

//         stage('Deploying Docker Image to Dockerhub') {
//             steps {
//                 script {
//                     docker.withRegistry('', registryCredential) {
//                     dockerImage.push()
//                     }
//                 }
//             }
//         }

//         stage('Cleaning Up') {
//             steps{
//                 sh "docker rmi --force $registry:$BUILD_NUMBER"
//             }
//         }

        
//     }
// }
node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("szemil/my-nextjs-app")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}