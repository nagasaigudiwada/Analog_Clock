const hour = document.getElementById('hr');
const minu = document.getElementById('min');
const seco = document.getElementById('sec');
setInterval(() =>
{
    let date = new Date(); 
    let hr = date.getHours()*30;
    let min = date.getMinutes()*6; 
    let sec = date.getSeconds()*6;
    hour.style.transform = `rotateZ(${(hr)+(min/12)}deg)`;
    minu.style.transform = `rotateZ(${min}deg)`;
    seco.style.transform = `rotateZ(${sec}deg)`;
})  