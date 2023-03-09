const stations = document.getElementsByClassName('station');
const text_start = document.getElementById('from');
const text_end = document.getElementById('to');
const text_eta = document.getElementById('eta');
const text_cur = document.getElementById('cur_selected');
const btn_start = document.getElementById('set_from');
const btn_end = document.getElementById('set_to');

let response = await fetch('src/edges.json')
let graph = await response.json();
let cur = NaN;
let start = NaN;
let end = NaN;

function change_select(sel = -1) {
    if(sel >= 0) {
        text_cur.innerHTML = 'Selected: ' + graph.stations[sel];
    }
    else {
        cur = -1;
        text_cur.innerHTML = 'Selected: None';
    }
}

for(let i = 0; i < stations.length; i++) {
    stations[i].addEventListener('click', function() {
        cur = i;
        change_select(i);
    });
}

btn_start.addEventListener('click', function(){

    if(cur == -1)
        return;
    
    start = cur;
    text_start.innerHTML = 'From: ' + graph.stations[start];
    change_select();

    if(start != NaN && end != NaN) {
        calculate_dist(start, end, 0, -1);
    }
});

btn_end.addEventListener('click', function(){

    if(cur == -1)
        return;

    end = cur;
    text_end.innerHTML = 'To: ' + graph.stations[end];
    change_select();

    if(start != NaN && end != NaN) {
        calculate_dist(start, end, 0, -1);
    }
});

function calculate_dist(cur, end, sum, par) {
    if(cur == end) {
        text_eta.innerHTML = 'ETA: ' + sum + ' minutes';
        return;
    }

    let cur_node = graph.edges[cur];
    for(let i = 0; i < cur_node.length; i++) {
        if(cur_node[i].node != par) {
            calculate_dist(cur_node[i].node, end, sum + cur_node[i].val, cur);
        }
    }
}