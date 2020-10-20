//let counter = 0;
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}

function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    
    document.querySelector('h1').innerHTML = counter; 

    localStorage.setItem('counter',counter)
    // if(counter % 10 === 0){
    //     alert(`Count is now ${counter}`);
    // }
}
//we need to call this function to render whole page
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    //count is assignes like a value
    //null error - count returns null because can't find button
    document.querySelector('button').onclick = count;

    //setInterval(count,1000);
});