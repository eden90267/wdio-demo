node {
  try {
    notifyBuild('STARTED')

    stage 'checkout'
    git 'https://github.com/eden90267/wdio-demo'

    stage 'start selenium-server'
    sh 'docker-compose down && docker-compose up -d'

    stage 'build'
    sh 'docker build -t wdio-demo .'

    stage 'test'
    sh 'docker run -ti --rm -v $(pwd)/test-reports:/wdio-demo/test-reports --network=wdiodemo_front-tier wdio-demo npm test'

    stage 'report'
    junit 'test-reports/*.xml'

  } catch (e) {
    // If there was an exception thrown, the build failed
    currentBuild.result = "FAILED"
    throw e
  } finally {
    // Success or failure, always send notifications
    notifyBuild(currentBuild.result)
  }
}

def notifyBuild(String buildStatus = 'STARTED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"

  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    color = 'YELLOW'
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESSFUL') {
    color = 'GREEN'
    colorCode = '#00FF00'
  } else {
    color = 'RED'
    colorCode = '#FF0000'
  }

  // Send notifications
  slackSend baseUrl: 'https://104corp.slack.com/services/hooks/jenkins-ci/', channel: '#cteam-jenkins-ci', color: colorCode, message: summary, tokenCredentialId: 'jenkins-ci-integration-slack-token'
}