let usersName=prompt('What is your name?')
let usersAge = prompt('Enter your age.'); 
if((usersAge%2)===0){
    alert(`${usersName} Your age is even`)
}else if((usersAge%2)===1){
    alert(`${usersName} Your age is odd`)
}else{
    alert(`${usersName} Please enter correct age`)
}