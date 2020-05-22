function clock(){ 
    var ho= document.getElementById('hour');
    var mi= document.getElementById('minutes');
    var se= document.getElementById('seconds');

    var h= new Date().getHours();
    var m= new Date().getMinutes();
    var s= new Date().getSeconds();

    ho.innerHTML = h;
    mi.innerHTML = m;
    se.innerHTML = s;

}

var interval = setInterval(clock, 1000);