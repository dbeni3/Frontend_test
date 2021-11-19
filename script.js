function setNext(){
    var x = document.getElementsByClassName('rd');
    var arr = [...x];
    var couner=0
    for(let i=0;i<5;i++){
        if (arr[i].checked) {
            couner=i;
          }
    }
    if(couner==4){
        arr[0].checked=true;
    } else{
        arr[couner+1].checked=true;
    } 
}
function setPrev(){
    var x = document.getElementsByClassName('rd');
    var arr = [...x];
    var couner=0
    for(let i=0;i<5;i++){
        if (arr[i].checked) {
            couner=i;
          }
    }
    if(couner==0){
        arr[4].checked=true;
    } else{
        arr[couner-1].checked=true;
    } 
}
var i=0;
setInterval(()=>{ 
    var url=["image\ 36.png","image\ 37.png","image\ 38.png"];
    document.getElementById("bg").style.backgroundImage= `url('./assets/${url[i]}')`;
    i==2 ? i=0 : i++;
 }, 7000);