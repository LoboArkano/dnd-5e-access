pipeline {

  agent any

  stages {

    stage('Install Packages') {

      steps {
        sh 'npm install'
      }
    }

    stage('Test and Build') {

      parallel {

        stage('Run Tests') {

          steps {
            echo "testing the application..."
            sh 'npm run test'
          }
        }

        stage('Create Build Artifacts') {

          steps {
            sh 'npm run build'
          }
        }
      }
    }
  }
}
