function displayNum(num){
    result.value+=num
}
function clearbox(){
    result.value=""
}
function evaluateExpression(){
    result.value=eval(result.value)
}
function deleteFunction(){
    result.value=result.value.slice(0,-1)
}