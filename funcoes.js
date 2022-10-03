var iniciar = document.getElementById('iniciar');
var pausar = document.getElementById('pausar');
var cancelar = document.getElementById('cancelar');

var h = document.getElementById('hora');
var m = document.getElementById('minuto');
var s = document.getElementById('segundo');

var som = document.getElementById('som');
som.volume = 0.1;

var iniciarTimer = null;

iniciar.addEventListener('click', function(){
    function iniciarInterval(){
        iniciarTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    iniciarInterval();
})

document.addEventListener('keydown', function(event){
    if(event.key == "i")
    {
        function iniciarInterval(){
            iniciarTimer = setInterval(function() {
                timer();
            }, 1000);
        }
        iniciarInterval();
    }})

pausar.addEventListener('click', function(){
        clearInterval(iniciarTimer);
    })

    document.addEventListener('keydown', function(event){
        if(event.key == "p")
        {
            clearInterval(iniciarTimer);
        }})

cancelar.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    cancelarInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        document.getElementById('som').play();
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    } 
    
    return;
}

function cancelarInterval() {
    clearInterval(iniciarTimer);
}