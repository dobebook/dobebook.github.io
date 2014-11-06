
function play(obj){
    document.getElementById(obj).style.display="block";
    document.getElementById(obj).play();
}
function gotoPage(i){
    if(/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|android|iPod|mobile/i.test(navigator.userAgent.toLowerCase())){ 
        //alert(i);
        location.href="index.html#page_"+i;
    }else{
        $('#flipbook').turn('page', i);
    }
}
            //$('#flipbook').turn('page', 2);

function _init(){
    $("#flipbook").turn({
        width: 922,
        height: 600,
        autoCenter: true
    });
    $("#flipbook").bind("turning", function(event, page, view) {
        all_page=parseInt(document.getElementById("allpage").innerHTML);
        if(page!=1){
            //open
            document.getElementById("wrapbox").style.backgroundImage="url(res/book.png)";
            document.getElementById("menu").style.display="block";
            document.getElementById("tip").style.display="none";
            if(page>3){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book4.png)";
            }
            if(page>5){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book6.png)";
            }
            if(page>7){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book8.png)";
            }
            if(page>8){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book10.png)";
            }
            if(page==all_page-7){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end_3.png)";
            }
            if(page==all_page-6){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end_3.png)";
            }
            if(page==all_page-5){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end_2.png)";
            }
            if(page==all_page-4){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end_2.png)";
            }
            if(page==all_page-3){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end_1.png)";
            }
            if(page==all_page-2){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end_1.png)";
            }
            if(page==all_page-1){
                document.getElementById("wrapbox").style.backgroundImage="url(res/book_end.png)";
            }
        }
        if(page==1){
            //first
            document.getElementById("wrapbox").style.backgroundImage="none";
            document.getElementById("tip").style.display="block";
            document.getElementById("menu").style.display="none";
        }
    });
    document.getElementById("wrapbox").style.display="block";
    document.getElementById("tip").style.display="block";
}
//window.onload=_init;
function _mobile_init(){
    //document.getElementById("wrapbox").style.display="block";
    //document.getElementById("tip").style.display="block";
}
if(/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|android|iPod|mobile/i.test(navigator.userAgent.toLowerCase())){ 
    window.addEventListener("load",_mobile_init,false);    
}else{
    window.addEventListener("load",_init,false);
}