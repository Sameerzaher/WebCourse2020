function onClick1()
{    document.getElementsByTagName("button")[0].onclick = function() {
    var section = document.getElementById("allAritcles").getElementsByTagName("article");
    if(section[0].style.backgroundColor == "green"){
        for( i=0; i<firstName.length ; i++) {
            section[i].style.backgroundColor = "black";
            section[i].style.color = "black";

        }
    }
    else{
        for( i=0; i<firstName.length ; i++) {
            section[i].style.backgroundColor = "green";
            section[i].style.color = "green";

        }
    }
}

}

var firstName= "Sameer";
function initliaze(){
    var main = document.getElementsByTagName("main")[0] ;
    var articles= "";
    lastNmae = "Zaher" ,nameToghther= firstName+lastNmae;
    var section = document.createElement("section");
    section.id = "allAritcles";
    main.appendChild(section);
    for( i=0; i<(firstName.length+lastNmae.length)*2 ; i++) {
        articles += "<article></article>";
    }
    section.innerHTML= articles;

    onClick1();
    mouseOver();


}

function mouseOver(){
    var articles = document.getElementById("allAritcles").getElementsByTagName("article")[0];
    articles.onmouseover = function(){
        if(this.backgroundColor ="green"){
            document.getElementsByTagName("article")[0].innerHTML= firstName[0];
            this.style.backgroundColor = "black";
        }
        else
            this.style.backgroundColor = "green";
    }
    articles.onmouseout = function(){
        if(this.backgroundColor ="black"){
            document.getElementsByTagName("article")[0].innerHTML= "";
            this.style.backgroundColor = "green";
        }
        else
            this.style.backgroundColor = "black";
    }
}

