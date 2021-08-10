

var aText = new Array(
                        "HELLO!",
                        "My name is Anna.", 
                        "Web development is my passion!"    
                    );
    var arrayIndex = 0; // start printing array at this position
    var lineLength = aText[0].length; 
    var textPos = 0; // initialise text position
    var slash = document.createElement('span')
    slash.innerHTML = '_';
    slash.style.color="rgb(21, 153, 206)";
    var destination;
   
     
    function typewriter() {

 
     destination = document.getElementById("part_"+ (arrayIndex+1));
     destination.innerHTML= aText[arrayIndex].substring(0, textPos);
     destination.appendChild(slash);

     textPos++;
    
     if ( textPos == lineLength+1 ) {
      textPos = 0;
      arrayIndex++;

      if ( arrayIndex < aText.length ) {
       lineLength = aText[arrayIndex].length;
       setTimeout("typewriter()", 500);
      }
    } else {
        setTimeout("typewriter()", 90);
    }
    
    
  }
    
    typewriter();

