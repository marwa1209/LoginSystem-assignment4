/** @format */

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productTaxesInput = document.getElementById("taxes");
var productAdsInput = document.getElementById("ads");
var productDiscountInput = document.getElementById("discount");
var total = document.getElementById("total");
var productCountInput = document.getElementById("productCountInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var deleteallbtn = document.getElementById("deleteallbtn");
var updatebtn = document.getElementById("updatebtn");
var addbtn = document.getElementById("addbtn");
var tmp;
var search = document.getElementById("search");
var searchByCategort = document.getElementById("searchByCategort");
var searchyNameBtn = document.getElementById("searchyNameBtn");
;var searchyCategoryBtn = document.getElementById("searchyCategoryBtn");
//.....................Total Price..................//
function getTotalPrice() {
  if (productPriceInput.value != "") {
    var totalPrice;
    totalPrice =
      +productPriceInput.value +
      +productTaxesInput.value +
      +productAdsInput.value -
      +productDiscountInput.value;
    total.innerHTML = totalPrice;
    total.classList.replace("bg-danger", "bg-success");
  } else {
    total.innerHTML = "";
    total.classList.replace("bg-success", "bg-danger");
  }
}

//create product
var Products;
if (localStorage.getItem("products") != null) {
  Products = JSON.parse(localStorage.getItem("products"));
  display();
} else {
  Products = [];
}
function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    taxes: productTaxesInput.value,
    ads: productAdsInput.value,
    discount: productDiscountInput.value,
    total: total.innerHTML,
    count: productCountInput.value,
    category: productCategoryInput.value,
    description: productDescInput.value,
  };
  if (product.count > 1) {
    for (var i = 0; i < product.count; i++) {
      Products.push(product);
    }
  } else {
    Products.push(product);
  }

  localStorage.setItem("products", JSON.stringify(Products));
  display();
  // clear();
}

// clear
function clear() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productTaxesInput.value = "";
  productAdsInput.value = "";
  productDiscountInput.value = "";
  (total.innerHTM = getTotalPrice()),
    (productCountInput.value = ""),
    (productCategoryInput.value = ""),
    (productDescInput.value = "");
}

//display (read)
function display() {
  var cartoona = ``;
  for (var i = 0; i < Products.length; i++) {
    cartoona += `  <tr>
            <td>${i + 1}</td>
            <td>${Products[i].name}</td>
            <td>${Products[i].price}</td>
            <td>${Products[i].taxes}</td>
            <td>${Products[i].ads}</td>
            <td>${Products[i].discount}</td>
            <td>${Products[i].total}</td>
            <td>${Products[i].category}</td>
            <td class="w-20">${Products[i].description}</td>
  <td><button  class="btn border border-1 border-black px-5  p-2 " onclick="setData(${i})">update</button></td>
  <td><button class="btn border border-1 border-black px-5  p-2 " onclick="deleteProduct(${i})">Delete</button></td>
          </tr>`;
  }
  if (Products.length > 0) {
    deleteallbtn.classList.remove("d-none");
    deleteallbtn.innerHTML = `Delete ${Products.length} Products`;
  } else {
    deleteallbtn.classList.add("d-none");
  }
  document.getElementById("tablebody").innerHTML = cartoona;
}

//delete
function deleteProduct(index) {
  Products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(Products));
  display();
}

//delete all
function deleteAll() {
  Products.splice(0);
  localStorage.clear();
  display();
}

//update
function updateProduct() {
  updatebtn.classList.add("d-none");
  addbtn.classList.remove("d-none");
  productCountInput.classList.remove("d-none");
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    taxes: productTaxesInput.value,
    ads: productAdsInput.value,
    discount: productDiscountInput.value,
    count: productCountInput.value,
    category: productCategoryInput.value,
    description: productDescInput.value,
  };

  Products.splice(tmp, 1, product);
  localStorage.setItem("products", JSON.stringify(Products));
  display();
  clear();
}

function setData(index) {
  updatebtn.classList.remove("d-none");
  addbtn.classList.add("d-none");
  productNameInput.value = Products[index].name;
  productPriceInput.value = Products[index].price;
  productTaxesInput.value = Products[index].tax;
  productAdsInput.value = Products[index].ads;
  productDiscountInput.value = Products[index].discount;
  getTotalPrice();
  productCountInput.classList.add("d-none");
  productCategoryInput.value = Products[index].category;
  productDescInput.value = Products[index].description;
  tmp = i;
  scroll({ top: 0, behavior: "instant" });
}

//search
function searchProductByName() {
  var searchcartoona = "";
  var term = search.value;
  for (var i = 0; i < Products.length; i++) {
    if (Products[i].name.toLowerCase().includes(term.toLowerCase())) {
      searchcartoona += `  <tr>
            <td>${i + 1}</td>
            <td>${Products[i].name}</td>
            <td>${Products[i].price}</td>
            <td>${Products[i].taxes}</td>
            <td>${Products[i].ads}</td>
            <td>${Products[i].discount}</td>
            <td>${Products[i].total}</td>
            <td>${Products[i].category}</td>
            <td class="w-20">${Products[i].description}</td>
  <td><button  class="btn border border-1 border-black px-5 " onclick="setData(${i})">update</button></td>
  <td><button class="btn border border-1 border-black px-5" onclick="deleteProduct(${i})">Delete</button></td>
          </tr>`;
    }
  }
  document.getElementById("tablebody").innerHTML = searchcartoona;
}
function searchProductByCategory() {
  var searchcartoona = "";
  var term = searchByCategort.value;
  for (var i = 0; i < Products.length; i++) {
    if (Products[i].category.toLowerCase().includes(term.toLowerCase())) {
      searchcartoona += `  <tr>
            <td>${i + 1}</td>
            <td>${Products[i].name}</td>
            <td>${Products[i].price}</td>
            <td>${Products[i].taxes}</td>
            <td>${Products[i].ads}</td>
            <td>${Products[i].discount}</td>
            <td>${Products[i].total}</td>
            <td>${Products[i].category}</td>
            <td class="w-20">${Products[i].description}</td>
  <td><button  class="btn border border-1 border-black px-5" onclick="setData(${i})">update</button></td>
  <td><button class="btn border border-1 border-black px-5" onclick="deleteProduct(${i})">Delete</button></td>
          </tr>`;
    }
  }
  document.getElementById("tablebody").innerHTML = searchcartoona;
}

function showSearchByCategory(){
searchByCategort.classList.remove('d-none')
search.classList.add("d-none");
}
function showSearchByName() {
  searchByCategort.classList.add("d-none");
  search.classList.remove("d-none");
}
