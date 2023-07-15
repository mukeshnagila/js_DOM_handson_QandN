
var a = document.getElementById("hello");
function headingchange(){
        a.innerHTML = "HELLO WORLD"
}

var b = document.getElementById("hello2");
function textchange(){
        b.innerHTML = "Welcome to Elevation academy"
}

var c = document.getElementById("heading");
function colorchange(){
        c.style.color = "red";
}


function changedirection(){
        const d =document.getElementById("flex1");
        
        if(d.style.flexDirection === 'row'){
            d.style.flexDirection = 'column'
        }else{
            d.style.flexDirection = 'row'
        }
        
}

function clock(){
    //var e = new Date().toLocaleTimeString();
    //document.getElementById("time1").innerHTML = e;
    document.getElementById("time1").innerHTML = new Date().
    toLocaleTimeString();
}
setInterval(clock,1000);