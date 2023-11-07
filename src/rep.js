import repl from "repl"

// 자바스크립트의 비동기방식에 대한 예로 repl 모듈의 메소드를 호출함. 
// 사용자의 입력을 기다리지 않고 24행을 수행함. 
repl.start({
	
	prompt:"숫자입력>>",
	eval : function(command,x,y,finish) {
		
		console.log(command)
		
		command = Number(command)
		
		if(isNaN(command))
		    console.log("숫자가 아닙니다")
		else
			console.log("숫자입니다.") 
			
		finish();	
	}
	
});

console.log("End....")