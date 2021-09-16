pipeline {
    agent any
    tools {nodejs "nodejs16"} // helps with "npm not found issue"
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        sh 'npx cypress run --record --key 1a755fd7-0b44-42e8-9382-1e9bb0ede89c --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        sh 'npx cypress run --record --key 1a755fd7-0b44-42e8-9382-1e9bb0ede89c --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        sh 'npx cypress run --record --key 1a755fd7-0b44-42e8-9382-1e9bb0ede89c --parallel'
                    }
                }
            }
        }
    }
}