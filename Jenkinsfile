pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-u 0:0 -v /tmp:/root/.cache'
    }
  } 
  
  environment {
    DOCKER_IMAGE = 'ntnghiant' 
  }

  stages {
    
    stage("Test") {
      steps {
        echo "yarn test"
        sh "ls -la"
        sh "pwd"
      }
    }
    
    stage("Build") {
      steps {
        echo "yarn install"
        echo "npm install"
      }
    }

    stage("Deploy") {
      steps {
        echo "yarn start"
      }
    }
  } 
}
