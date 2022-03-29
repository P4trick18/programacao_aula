var sec=00
var min=00

function start(){
  setInterval(watch,1000)
}

function pause(){
    console.log('Pausou')
}

function stop(){
    console.log('Parou')
}

function watch(){
    sec++
     document.getElementById('watch').innerText=sec
}