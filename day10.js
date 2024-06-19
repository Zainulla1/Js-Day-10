//Exercise -1

//find factor of a Given integer by using JS

const num=prompt("please enter a positive number")
console.log(`factors of ${num}`)
for(let i=0; i<=num; i++) {
 if(num%i==0) {
    console.log(i)
 }
}

//Exercise -2

//Simple calculator by using JS

const operator=prompt("please select operator either + - / * ")
const num1=parseFloat(prompt("enter num 1"))
const num2=parseFloat(prompt("enter num 2"))
if(operator =='+'){
    result=num1+num2
}
else if(operator== '-') {
    result=num1-num2
}
else if(operator== '*') {
    result=num1*num2
}
else {
    result=num1/num2
}
console.log(`${num1} ${operator} ${num2} = ${result}`)

//Exercise -3

//compare two Arrays are equal or not by using JS

var arr1=[2,9,6,8,4]
var arr2=[4,8,6,9,2]
const isArrSame=arr1.length==arr2.length &&
arr1.every((curEle)=>{
    if(arr2.indexOf(curEle)>-1){
  return(curEle=[arr2.indexOf(curEle)])
    }
})
console.log(isArrSame)