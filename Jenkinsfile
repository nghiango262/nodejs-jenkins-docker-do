pipeline {
  agent any 

  stages {
    stage("Build") {
      steps {
        sh "npm install"
        sh "npm build"
      }
    }

    stage("Deploy") {
      steps {
        sh "npm start"
      }
    }
  } 
}