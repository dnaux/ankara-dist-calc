var stations = document.getElementsByClassName('station');

for(let i = 0; i < stations.length; i++) {
    stations[i].addEventListener('click', alertcall.bind(null, i));
}

function alertcall(x) {
    window.alert(x);
}
