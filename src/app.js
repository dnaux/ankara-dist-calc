import data from './edges.json' assert { type: 'json' };
const stations = document.getElementsByClassName('station');
const text_start = document.getElementById('from');
const text_end = document.getElementById('to');
const text_eta = document.getElementById('eta');
const text_cur = document.getElementById('cur_selected');
const btn_start = document.getElementById('set_from');
const btn_end = document.getElementById('set_to');

console.log(data);

let cur = NaN;
let start = NaN;
let end = NaN;

for(let i = 0; i < stations.length; i++) {
    stations[i].addEventListener('click', function() {
        cur = i;
        text_cur.innerHTML = 'Selected: ' + cur;
    });
}

btn_start.addEventListener('click', function(){
    start = cur;
    text_start.innerHTML = 'From: ' + start;

    if(start != NaN && end != NaN) {
        calculate_dist(start, end);
    }
});

btn_end.addEventListener('click', function(){
    end = cur;
    text_end.innerHTML = 'To: ' + end;

    if(start != NaN && end != NaN) {
        calculate_dist(start, end);
    }
});

function calculate_dist(start, end) {

}
