function work(){
    let login=document.getElementById("log").value;
    let password=document.getElementById("pas").value;
    if(login=="abc" && password=="123"){
        location.assign("../dollarproject/project1.html")
    }
    else{
        window.alert("no project");
    }
}