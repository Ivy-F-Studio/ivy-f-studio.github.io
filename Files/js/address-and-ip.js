window.onload = function(){
  var bbs = document.getElementById("bbs");
  if(window.location.host == "f-studio.top"){ bbs.href="https://bbs.f-studio.top"; }
  if(window.location.host == "www.f-studio.top"){ bbs.href="https://bbs.f-studio.top"; }
  var title = document.getElementById("title");
  var name = document.getElementById("name");
  if(window.location.host == "fanciers.site"){ title.innerHTML=name.innerHTML="TheFanciers"; }
  if(window.location.host == "www.fanciers.site"){ title.innerHTML=name.innerHTML="TheFanciers"; }
  
  var result = returnCitySN;
  var city = result.cname;
  document.getElementById("cityShow").innerHTML=city;
  var ip = result.cip;
  document.getElementById("ipShow").innerHTML=ip;
}