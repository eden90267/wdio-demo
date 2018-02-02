node {
    stage 'Checkout'
    git 'https://github.com/eden90267/wdio-demo'

    stage 'build'
    sh 'docker build -t wdio-demo .'

    stage 'test'
    sh 'docker-compose down && docker-compose up -d && docker logs -f test'

    stage 'report'
    junit 'test-reports/*.xml'
}