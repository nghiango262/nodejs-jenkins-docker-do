pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-u 0:0 -v /tmp:/root/.cache'
    }
  } 

  stages {
    stage("Test") {
      steps {
        echo "yarn test"
      }
    }
    
    stage("Build") {
      steps {
        echo "yarn install"
        sh "npm install"
      }
    }

    stage("Deploy") {
      steps {
        echo "yarn start"
      }
    }
  } 
}
