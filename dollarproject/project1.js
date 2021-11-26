
let mass=document.getElementById("BMI");
let height=document.getElementById("Res1");
let button=document.getElementById("btn");

mass.addEventListener('input',function(){
    let h=this.value;
    let re=h*70;
    height.value=re.toFixed(2);
    
      
    

});
height.addEventListener('input',function(){
    let m=this.value;
    let re1=m/70;
    mass.value=re1.toFixed(2);
    

});
