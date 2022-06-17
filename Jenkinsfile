pipeline {
  agent any 

  stages {
    stage("Build") {
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
