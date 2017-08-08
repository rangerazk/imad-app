console.log('Loaded!');
var imt = document.getElementById('img1');
var mrg = 0;
function moveright(){mrg = mrg + 1;
imt.style.marginLeft = mrg +'px';}
imt.onclick = function() {
    var interval = setInterval(moveright,50);
};



