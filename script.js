var colors = ['#DD4524', '#351F1A', '#B0144F','#08134D']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 4000);