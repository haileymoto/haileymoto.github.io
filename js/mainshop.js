//Choose colors
var btns = document.getElementsByClassName("dot");

function clicked(){
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
      
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
          this.className += " active";
        });
    }
}

//Choose fillings


function feather(){
    var x = document.getElementById("feather");
    var y = document.getElementById("hypoallergenic");
    var z = document.getElementById("memoryfoam");
    if (x.className=="no-border"){
        x.className="fill-icon";
        y.className="no-border";
        z.className="no-border"
    }
}

function hypo(){
    var x = document.getElementById("feather");
    var y = document.getElementById("hypoallergenic");
    var z = document.getElementById("memoryfoam");
    if (y.className=="no-border"){
        y.className="fill-icon";
        x.className="no-border";
        z.className="no-border"
    }
}

function memory(){
    var x = document.getElementById("feather");
    var y = document.getElementById("hypoallergenic");
    var z = document.getElementById("memoryfoam");
    if (z.className=="no-border"){
        z.className="fill-icon";
        y.className="no-border";
        x.className="no-border"
    }
}

function added(){
    var confirm = document.getElementById("cartbutton");
    if (confirm.value = "add to cart"){
        confirm.value = "added to cart";
    }
}

var count=0

function quantity(){
    var x = document.getElementById("quantity").selectedIndex;
    var select = document.getElementById("quantity").options;
    count=select[x].value;
    console.log(count);
    var show = document.getElementById("itemCount");
        show.style.display = "block";
    var quantity = document.getElementById("number");
        quantity.innerHTML = count;
    var added= document.getElementById("cartbutton");
        added.innerHTML = "added to cart";
    

}




 
