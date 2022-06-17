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
    stage("Clone") {
      steps {
        echo "clone app"
        git 'https://github.com/nghiango262/nodejs-jenkins-docker-do.git'
      }
    }

  stages {
    stage("Test") {
      steps {
        echo "yarn test"
        sh "ls -la"
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
