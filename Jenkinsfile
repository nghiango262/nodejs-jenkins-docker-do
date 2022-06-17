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
      }
    }
    
    stage("Build") {
      steps {
<<<<<<< HEAD
        sh "npm install"
        sh "npm build"
=======
        echo "yarn install"
        echo "npm install"
>>>>>>> 329d4884957acf7280145a5a80724ddfe14bb015
      }
    }

    stage("Deploy") {
      steps {
<<<<<<< HEAD
        sh "npm start"
=======
        echo "yarn start"
>>>>>>> 329d4884957acf7280145a5a80724ddfe14bb015
      }
    }
  } 
}
