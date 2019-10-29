var getProduct = JSON.parse(localStorage.getItem("product"));

function popColor(){
  var colorChange = document.getElementById("productcolor");
  getProduct.color = colorChange.innerHTML;
}