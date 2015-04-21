// function httpGet(theUrl)
// {
//     var xmlHttp = null;

//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, true );
//     xmlHttp.send();
//     return xmlHttp.responseText;
// }



setInterval(function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://immense-beach-9973.herokuapp.com/api/all_peeps", false);
  xhr.send();
  var peeps = xhr.responseText;
  console.log(xhr.responseText);
  $("#peepList").html(peeps);
},3000);

// setInterval(function(){
//   var x = new XMLHttpRequest();
//   x.open("GET", "http://localhost:9292/api/all_peeps", false);
//   x.send();
//   var peeps = x.responseText;
//   $("#peepList").html(peeps);
// },1200);


