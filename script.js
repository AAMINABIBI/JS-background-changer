const button =document.querySelector("button");
const body =document.querySelector("body");

const color =[
    'red','green','yellow','black','blue'
,'golden','pink','purple']


body.style.backgroundColor='violet';

button.addEventListener('click',changeB)

function changeB()
{

    const colorindex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorindex];

}