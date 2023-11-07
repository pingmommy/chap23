import { sprintf } from "sprintf-js";
import sleep from "es7-sleep"

//자바스크립트는 비동기이기때문에 브레이킹이 안 됨. 
//await가 브레이킹 역할을 함. 
//웹은 멈추면 안 되기 때문에 비동기언어인 자바스크립트가 기본적으로 쓰인다.
//대부분의 언어는 동기 방식

//비동기방식을 이해하기 위한 예제 
//자바스크립트는 비동식방식 언어로 명령수행완료를 기다리지 않고 다음 명령어를 수행하기 때문에 
//슬립이라는 게 따로 없음. 
//슬립을 쓰기 위해 모듈과 메소드를 실행했지만 run메소드가 실행하는 동안 마지막 콘솔 메소드를 먼저 실행함. 
 
async function run(){
	
	let c = new Date();
	
	for(;;){
	
	console.log(sprintf("%02d %02d %02d" , c.getHours(),c.getMinutes(),c.getSeconds()));

	await sleep(1000);
  }
}

run();

console.log("Program End ...")