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
        sh "node -v"
        sh "yarn -v"
      }
    }
    
    stage("Build") {
      steps {
        sh "yarn"
        sh "yarn build"
      }
    }

    stage("Deploy") {
      steps {
        sh "yarn start"
      }
    }
  } 
}
