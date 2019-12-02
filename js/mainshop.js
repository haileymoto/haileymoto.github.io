cart = [];

myProduct={
    "color":"color",
    "filling": "filling",
    "quantity": 4,
}

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
          
          var currActive = document.getElementsByClassName("active");
          var pickColor = currActive[0].id;
          myProduct.color = pickColor;
        });
    }
}





//Choose fillings

var pick = document.getElementsByClassName("no-border");
var currFilling= document.getElementsByClassName("fill-icon");



function feather(){
    var x = document.getElementById("feather");
    var y = document.getElementById("hypoallergenic");
    var z = document.getElementById("memoryfoam");
    if (x.className=="no-border"){
        x.className="fill-icon";
        y.className="no-border";
        z.className="no-border";
        myProduct.filling = x.name;

    }

}


function hypo(){
    var x = document.getElementById("feather");
    var y = document.getElementById("hypoallergenic");
    var z = document.getElementById("memoryfoam");
    if (y.className=="no-border"){
        y.className="fill-icon";
        x.className="no-border";
        z.className="no-border";
        myProduct.filling = y.name;

    }
}

function memory(){
    var x = document.getElementById("feather");
    var y = document.getElementById("hypoallergenic");
    var z = document.getElementById("memoryfoam");
    if (z.className=="no-border"){
        z.className="fill-icon";
        y.className="no-border";
        x.className="no-border";
        myProduct.filling = z.name;

    }
}      



function added(){
    var confirm = document.getElementById("cartbutton");
    if (confirm.value = "add to cart"){
        quantity();
        confirm.value = "added to cart";
        localStorage.setItem("product", JSON.stringify(myProduct));

    }

}

var count=0

function quantity(){
    //show #items in cart
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
    myProduct.quantity=count;
}

function onLoad(){
    var getProduct = JSON.parse(localStorage.getItem("product"));
    console.log(getProduct)
    popColor();
    popFilling();
    popQuant();
    popPrice();
    subtotal();
    estimate();


}

function popColor(){
    var getProduct = JSON.parse(localStorage.getItem("product"));
    var colorChange = document.getElementById("productcolor");
    var pickedColor= getProduct["color"];
    colorChange.innerHTML = pickedColor;

}

function popFilling(){
    var getProduct = JSON.parse(localStorage.getItem("product"));
    var fillingChange = document.getElementById("productfilling");
    var pickedFilling= getProduct["filling"];
    fillingChange.innerHTML = pickedFilling;

}

 
function popQuant(){
    var getProduct = JSON.parse(localStorage.getItem("product"));
    var quant = document.getElementById("number");
    var pickedQuant = getProduct["quantity"];
    quant.innerHTML = pickedQuant;
 
}

function popPrice(){
    var getPrice = document.getElementById("dollar");
    var quant = document.getElementById("number");
    var price = (Number(quant.innerHTML) * 39);
    getPrice.innerHTML = ("$" + price);
}

function subtotal(){
    var getSub = document.getElementById("sub");
    var quant = document.getElementById("number");
    var price = (Number(quant.innerHTML) * 39);
    getSub.innerHTML = ("$" + price);
}


function estimate(){
    var getEst = document.getElementById("est");
    var quant = document.getElementById("number");
    var price = (Number(quant.innerHTML) * 39);
    getEst.innerHTML = ("$" + price);
}

function remove(){
    var hide = document.getElementById("productbox");
    hide.style.display = "none";
    var getEst = document.getElementById("est");
    getEst.innerHTML = "--";
    var getSub = document.getElementById("sub");
    getSub.innerHTML = "--";
    if (hide.style.display = "none") {
        localStorage.removeItem("product");
    }
}


function like(){
    var pick = document.getElementById("emptyheart");
    pick.style.color = "#E86E5F";
}

function wishadd(){
    var go = document.getElementById("cartbutton");
    console.log(go.innerHTML);
    if(go.innerHTML = "add to cart"){
        go.innerHTML="added to cart";
    }
}


