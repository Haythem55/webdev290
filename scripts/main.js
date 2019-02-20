const increment_btn= document.querySelector('.increment');
const decrement_btn= document.querySelector('.decrement');
const startOver_btn= document.querySelector('.startOver');
const numbers= document.querySelector('.numbers');


const num= document.querySelector('.num');

startOver_btn.addEventListener('click', function start(){
    decrement_btn.disabled=false;
    increment_btn.disabled=false;
    num.textContent=0;
});

increment_btn.addEventListener('click', function increment(){
    let a=parseInt(num.textContent);
    a+=1;
    if(a>5){
        num.textContent="You cannot have a number greater than 5";
        decrement_btn.disabled=true;
        increment_btn.disabled=true;
        a=0;
        startOver_btn.addEventListener('click', function start(){
            decrement_btn.disabled=false;
            increment_btn.disabled=false;
            num.textContent=0;
        });
    }
    let array=[10];
    for(let i=0; i<array.length; i++){
        array[i]=a;
        console.log(array[i]);
        numbers.textContent='The number is: '+array[i];
    }
    num.textContent=a;
});

decrement_btn.addEventListener('click', function decrement(){
    let a=parseInt(num.textContent);
    a-=1;
    if(a<-5){
        num.textContent="You cannot have a number less than -5";
        decrement_btn.disabled=true;
        increment_btn.disabled=true;
        a=0;
        startOver_btn.addEventListener('click', function start(){
        decrement_btn.disabled=false;
        increment_btn.disabled=false;
        num.textContent=0;
        a=0;
        let array=[10];
        for(let i=0; i<array.length; i++){
            array[i]=a;
            console.log(array[i]);
            numbers.textContent='The number is: '+array[i];
        }       
        });
    }  
    else{
        num.textContent=a; 
        let array=[10];
        for(let i=0; i<array.length; i++){
            array[i]=a;
            console.log(array[i]);
            numbers.textContent='The number is: '+array[i];
        }       
        
    }   
    
});








