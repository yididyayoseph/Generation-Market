import { ProductsController } from './itemsController.js'; 
 

const productsController = new ProductsController(0);

function addProductCard(products) {
        const htmlCode =
          `
            <div class="card h-100 text-right ">
            <div class="row no-gutters">
            <div class="col-md-4">
            <img src="${products.img}" class="${products.id} card-img-top">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h3 class="card-name">${products.name}</h3>
            <p class="card-description">${products.description}</p>
            <p class="card-created">${products.createdAt}</p>
            </div>
            </div>
            </div>
            </div>
            <br>
        `;
      
      const productCards = document.getElementById("list-products");
      
    
      if(document.getElementById("list-products") != null){
        productCards.innerHTML += htmlCode;
    } 
    //  productCards.innerHTML += htmlCode;
    
}

function savesSamples(){
       if(!localStorage.getItem("products")){
            const sampleProducts = [{'name':'Monitor',
        'description':'Used AOC 24" 1080P',
        'img':'./images/Monitor.jpg',
        'createdAt':'Date added:'},
        {'name':'Laptop',
        'description':'Dell XPS 15, 1080P, 1TB SSD, Intel CPU.',
        'img':'./images/DellXPS.jpg',
        'createdAt':'Date added:'},
        {'name':'Webcam',
        'description':'Logitech C9220 Pro, 1080P.',
        'img':'./images/Logitech.jpg',
        'createdAt':'Date added:'}];
            localStorage.setItem("products", JSON.stringify(sampleProducts));
        }
    }


function cardsProductsController(){
        for(let i = 0; i < productsController.products.length; i++){
            const product = productsController.products[i];
            addProductCard(product);
        }
    }

savesSamples();
//productsController.getAll();
productsController.productsFromLocalStorage();
cardsProductsController();