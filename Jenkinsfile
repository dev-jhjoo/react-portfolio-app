pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'sudo npm install'
                sh 'sudo npm run build'
            }
        }
        // stage('Test') {
        //     steps {
        //         echo 'Testing..'
        //     }
        // }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
