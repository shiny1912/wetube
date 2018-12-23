const express = require('express'); //express 모듈을 폴더에서 찾는 코드
const app = express();

const PORT = 4000;

function handleListening (){
console.log('Listening on: http://localhost:4000');

}

app.listen(PORT, handleListening);
