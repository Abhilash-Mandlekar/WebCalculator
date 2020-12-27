
function dis(val) {
    document.getElementById("result").value += val
}

$( document ).ready(function() {
    //the javascript eval() function is a great resource that takes in a string and outputs that strings operations as a number eval("3 + 2") sends back 5
    
    $("#1").click(function() {
     document.getElementById("textbox").value += '1';
    });
      
    $("#2").click(function() {
     document.getElementById("textbox").value += '2';
    });
      
    $("#3").click(function() {
     document.getElementById("textbox").value += '3';
    });
      
    $("#4").click(function() {
     document.getElementById("textbox").value += '4';
    });  
    
    $("#5").click(function() {
     document.getElementById("textbox").value += '5';
    }); 
      
    $("#6").click(function() {
     document.getElementById("textbox").value += '6';
    }); 
      
    $("#7").click(function() {
     document.getElementById("textbox").value += '7';
    }); 
      
    $("#8").click(function() {
     document.getElementById("textbox").value += '8';
    }); 
      
    $("#9").click(function() {
     document.getElementById("textbox").value += '9';
    }); 
      
    $("#0").click(function() {  document.getElementById("textbox").value += '0';
    }); 
      
    $("#dot").click(function() {  document.getElementById("textbox").value += '.';
    });
      
      
    $("#plus").click(function() {
     document.getElementById("textbox").value += ' + ';
    });
      
    $("#minus").click(function() {
     document.getElementById("textbox").value += ' - ';
    });
      
    $("#multiply").click(function() {
     document.getElementById("textbox").value += ' * ';
    });
      
    $("#divide").click(function() {
     document.getElementById("textbox").value += ' / ';
    });
      
    $("#modulus").click(function() {
     document.getElementById("textbox").value += ' % ';
    });
      
      
    $("#equals").click(function() {
     document.getElementById("textbox").value =  eval(document.getElementById("textbox").value);
    $("input").change()
    });  
      
    $("#clear").click(function() {
     document.getElementById("textbox").value =  '';
    });      
      
    }); 