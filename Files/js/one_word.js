    if (window.XMLHttpRequest){
      // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
    }
    else{
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET","https://source.fanciers.site/oneword/index.php?charset=utf-8",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          document.getElementById("oneword").innerHTML=xmlhttp.responseText;
      }
    };