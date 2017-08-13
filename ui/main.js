console.log('Loaded!');
var imt = document.getElementById('img1');
var mrg = 0;
function moveright(){mrg = mrg + 1;
imt.style.marginLeft = mrg +'px';}
imt.onclick = function() {
    var interval = setInterval(moveright,50);
};

var button =document.getElementById('bt') ;


button.onclick = function() {
  
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readystate == XMLHttpRequest.DONE){
          if (request.status == 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter;
          }
      }
  };
  request.open('GET','http://ansarazeemk.imad.hasura-app.io/counter', true);
  request.send(null);
};

