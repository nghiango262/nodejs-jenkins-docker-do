pipeline {
  agent any 

  stages {
    stage("Test") {
      steps {
        echo "yarn test"
      }
    }
    
    stage("Build") {
      steps {
        echo "yarn install"
        echo "yarn build"
      }
    }

    stage("Deploy") {
      steps {
        echo "yarn start"
      }
    }
  } 
}
