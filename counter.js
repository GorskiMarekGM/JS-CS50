let counter = 0;

function count(){
    counter++;
    
    document.querySelector('h1').innerHTML = counter; 

    if(counter % 10 === 0){
        alert(`Count is now ${counter}`);
    }
}
//we need to call this function to render whole page
document.addEventListener('DOMContentLoaded',function(){
    //count is assignes like a value
    //null error - count returns null because can't find button
    document.querySelector('button').onclick = count;
});