pipeline {

  agent any

  stages {

    stage('Install Packages') {

      steps {
        echo "installing the application..."
        nodejs('Node-17.0.1') {
          sh 'npm install'
        }
      }
    }

    stage('Test and Build') {

      parallel {

        stage('Run Tests') {

          steps {
            echo "testing the application..."
            nodejs('Node-17.0.1') {
              sh 'npm run test'
            }
          }
        }

        stage('Create Build Artifacts') {

          steps {
            echo "building the application..."
            nodejs('Node-17.0.1') {
              sh 'npm run build'
            }
          }
        }
      }
    }
  }
}
