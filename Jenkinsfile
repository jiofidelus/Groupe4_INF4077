pipeline {
    agent any

    stages {
        stage('Verification de la branche') {
            steps {
                echo "$GIT_BRANCH"
                // sh (script: 'echo hello world')
            }
        }
        stage('Docker Build') {
            steps: {
                sh (script: 'docker images -a')
                sh (script: "docker build -t node_cholera_backend .")
                sh (script: 'docker images -a')
                
            }
        }
    }
}
