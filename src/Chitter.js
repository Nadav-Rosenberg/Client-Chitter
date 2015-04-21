setInterval(function(){
  var peeps = $.get("http://localhost:9292/api/all_peeps");
  $("#peepList").html(peeps);
},3000);