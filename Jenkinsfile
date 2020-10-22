pipeline {
    agent any
    stages {
    stage('Install') {
        
      steps {  bat """
                         c:
                         cd \"C:\\Users\\gabyz\\OneDrive\\Documents\\GitHub\\A-D-Escuela-FrontEnd\"
                         npm install
                         """ }
    }
     stage('Unit tests') {
            steps { 
                    bat """
                         c:
                         cd \"C:\\Users\\gabyz\\OneDrive\\Documents\\GitHub\\A-D-Escuela-FrontEnd\"
                         npm run ng test
                         """
                    }
        }

    stage('Build') {
            steps { 
                    bat """
                         c:
                         cd \"C:\\Users\\gabyz\\OneDrive\\Documents\\GitHub\\A-D-Escuela-FrontEnd\"
                         npm run ng build
                         """
                    }
        }
    
  }
}
