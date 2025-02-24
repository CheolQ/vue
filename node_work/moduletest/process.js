const process = require('process');
const ps = require('os')

// import process from 'process'

process.on('beforeExit', (code) =>{
    console.log('2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 직전: ', code);
});

process.on('exit',(code)=>{
    console.log('3. 노드 프로세스가 종료될 때:', code)
})
// process.exit()
console.log('1. 콘솔에 출력되는 첫 번째 메세지')
//console.log(process.env)
console.log('cpu: ',ps.arch())
console.log('memory: ',ps.totalmem())

//end
console.log('username',process.env.USERNAME);