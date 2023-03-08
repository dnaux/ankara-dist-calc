let station_list = document.getElementById("station_ul");
for (let i = 0; i <= 53; i++) {
    station_list.innerHTML += '<li><div class="station" id="s' + i + '"></div></li>';
}
