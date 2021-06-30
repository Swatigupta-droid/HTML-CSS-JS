//Challenge 1: Your age in days

function ageInDays()
{
    var birthYear = prompt("What year were you born");//a prompt pops up which stores the input in var
    var ageInDayss = (2021-birthYear)*365;//variable to calculate
    var h1=document.createElement('h1');//creates element h1
    var textAnswer=document.createTextNode('You are '+ageInDayss+ ' days old');//creates and stores the string in the var 
    h1.setAttribute('id','ageInDays');//setting id to ageInDays
    h1.appendChild(textAnswer);//appending the h1 var the text answer
    document.getElementById('flex-box-result').appendChild(h1);//returns the reference and is appending it to the box
}
function reset()
{
    document.getElementById('ageInDays').remove();
}
function generatecat()
{
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}