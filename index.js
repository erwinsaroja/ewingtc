var no1=document.uts.item1.value;
var no2=document.uts.item2.value;
var no3=document.uts.item3.value;

var nilaiangka=0;
var nilaihuruf="";

function nilai() {
    if (no1==="item1a") {
        nilaiangka+=3;
    }
    
     if (no2==="item2b") {
        nilaiangka+=3;
    }
    
     if (no3==="item3c") {
        nilaiangka+=3;
    }
    
    if (nilaiangka>=7 && nilaiangka<=9) {
        nilaihuruf="A";
    }
    
    if (nilaiangka>=4 && nilaiangka<=6) {
        nilaihuruf="B";
    }
    
    if (nilaiangka>=0 && nilaiangka<=3) {
        nilaihuruf="C";
    }
    
    document.uts.hasil.value=nilaihuruf +" " + "("+nilaiangka+")";
    
     
    
}



