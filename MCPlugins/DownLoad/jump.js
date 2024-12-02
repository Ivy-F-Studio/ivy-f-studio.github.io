//alert("jsok");
function GetRequest() {
    var url = parent.location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
} 

function getParam(name) {
    var Request = new Object();
    Request = GetRequest();
    var Param;
    Param = Request[name];
    return Param;
}

function Refresh() {
    var element1 = document.getElementById("filename");
    element1.innerHTML = getParam('name');
    var element2 = document.getElementById("filesize");
    element2.innerHTML = getParam('size');
    var element3 = document.getElementById("download");
    element3.href = './files/' + getParam('name') + '_' + getParam('version') + '.jar';
    element3.downLoad = getParam('name') + '-' + getParam('version');
    var element4 = document.getElementById("fileversion");
    element4.innerHTML = getParam('version');

    var element0 = document.getElementById("download-old");
    switch (getParam('name')) {
        case "LockFoodLevel": 
            element0.href = "https://pan.fanciers.site/index.php?mod=shares&sid=SDRMR0gxVzJTTnAtc2ItTTVRcm5qWnBmM252Mm1SU0k3Wk91";
            break;
        default:
            alert("ValueError!");
            window.close();
            break;
    }
}

function getURL() {
    var hostname = window.location.host;
    var pagepath = window.location.pathname;
    var urlback = 'http://' + hostname + pagepath;
    return urlback;
}