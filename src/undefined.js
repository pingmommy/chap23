

let num


console.log(typeof num)
console.log(typeof typeof num)
console.log(typeof(num)=='undefined')

//let num=100
num = typeof(num) != 'undefined'? num:0;
console.log(num)


function xxx(a,b){
	console.log(`a=[${a}] , b = [${b}]`)
	console.log(arguments) // argument: 배열처럼 매개값을 다 갖고 있다. 
	
}


// 매개 변수의 갯수가 정해져 있지만 
// 넘겨주는 매개변수가 일치하지 않아도 오류가 나지 않는다. 
// undefined으로 값이 넘어감. 
// 스크립트 언어는 오버로딩기능이 따로 없다. (오버라이딩은 있음.)
xxx(10,20);
xxx(10); 
xxx();
xxx(10,20,30);


//함수를 만들 때 매개변수를 정하는 일반적인 방식으로 사용하는 게 좋다. 
// 매개값이 정상적으로 넘어오지 않아도 스크립트언어는 오류가 나지 않기 때문에
// 조건문을 함수 안에 넣어주는 게 좋다. 
function sum(){
	let sum =0;
	for(let i =0; i<arguments.length; i++)
	sum += arguments[i]
	
	return sum;
}


console.log(sum())
console.log(sum(10))
console.log(sum(10,20,30))
console.log(sum(10,20,30,40))








