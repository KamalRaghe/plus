let num1 = document.querySelector('.num-1')
let num2 = document.querySelector('.num-2')
let start= document.querySelector('.start')
let answer = document.querySelector('.answer')

function nu1(){
    let x = Math.floor(Math.random()*10)
    console.log(x)
    num1.innerHTML= x
    return x
   
}

function nu2(){
    let y = Math.floor(Math.random()*10)
    console.log(y)
    num2.innerHTML= y
    return y
}



start.addEventListener('click', () => {
    
   
    answer.innerHTML= nu1() + nu2()
})

