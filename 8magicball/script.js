const options = [
'It is certain', 
'It is decidedly so' ,
'Without a doubt' ,
'Yes definitely' ,
'You may rely on it' ,
'As I see it, yes' ,
'Most likely' ,
'Outlook good' ,
'Yes' ,
'Signs point to yes' ,
'Reply hazy, try again' ,
'Ask again later' ,
'Better not tell you now' ,
'Cannot predict now' ,
'Concentrate and ask again' ,
'Do not count on it' ,
'My reply is no' ,
'My sources say no' ,
'Outlook not so good' ,
'Very doubtful' ,

]


const magicBall= document.getElementById("mb-container")
const response = document.getElementById("response")
 
magicBall.addEventListener("click", function()
{
    const index= Math.floor(Math.random()*20)
    const message  = options[index]
    magicBall.className='magicball_outer animate'
    setTimeout(() => {
          response.textContent = message;
          response.style.fontSize='20px'
          magicBall.className='magicball_outer'
    }, 1000);
})