console.log('Loaded!');
var imt = document.getElementById('img1');
var mrg = 0;
function moveright(){mrg = mrg + 1;
imt.style.marginLeft = mrg +'px';}
imt.onclick = function() {
    var interval = setInterval(moveright,50);
};

var button = document.getElementById('counter') ;


button.onclick = function() {
  
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200){
           console.log(request.response);
            console.log(request.responseText);
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          
      }
  };
  request.open('GET','http://ansarazeemk.imad.hasura-app.io/counter', true);
  request.send(null);
};

var nameinput = document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submit');
submit.onClick = function() {
    var names =['name1','name2','name3'];
    var list ='';
    for (var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
        
    }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};