function dropdownmenu() {
    var x = document.getElementById("dropdownclick");
    var y = document.getElementById("drop");
    
    if (x.className === "navdiv"){
        x.className += " responsive";
        /*### change navdiv to navdiv.responsive ####*/ 
    }else{
        x.className = "navdiv";
        
    }
}