class ProductsController {
    constructor(currentId = 0) {
      this.products = [];
      this.currentId = currentId;
    }
  
    addItem(name, description, img, createdAt) {
      const product = {
        //id: this.currentId++,
        name: name,
        description: description,
        img: img,
        createdAt: createdAt,
      };
      this.products.push(product);
  
      localStorage.setItem("products", JSON.stringify(this.products));
  
      this.save({ name, description, img, createdAt});
    }
  
    save({ name, description, img, createdAt }) {
      const data = {
        name,
        description,
        img,
        createdAt
      };
  
      // fetch('http://localhost:8080/api/items/add', {
      //   method: 'POST',
      //   headers: {
      //       'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      //   })
      //   .then(response => response.json())
      //   .then(data => {
      //   console.log('Save Success:', data);
      //   })
      //   .catch((error) => {
      //   console.error('Save Error:', error);
      //   });
  
      const asyncPost = async () => {
        try {
          const rawResponse = await fetch("http://localhost:8080/api/items/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const content = await rawResponse.json();
          console.log(content);
        } catch (error) {
          console.log(error);
        }
      };
      asyncPost();
    }
    // not implemented
    updateItem({ name, description, img }) {
      const data = {
        name,
        description,
        img,
      };
  
      fetch("http://localhost:8080/api/items/{id}", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Update Success:", data);
        })
        .catch((error) => {
          console.error("Update Error:", error);
        });
    }
    // not implemented
    delete(id) {
      fetch("http://localhost:8080/api/items/" + id, {
        method: "DELETE",
      })
        .then((data) => {
          console.log("Delete Success:", data);
        })
        .catch((error) => {
          console.error("Delete Error:", error);
        });
    }
    // not implemented
    findById(id) {
      fetch("http://localhost:8080/api/items/" + id, {
        method: "GET",
      })
        .then((data) => {
          console.log("Find Success:", data);
        })
        .catch((error) => {
          console.error("Find Error:", error);
        });
    }
    // not implemented
    getAll() {
      fetch("http://localhost:8080/api/items/all", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((info) => {
          console.log("info", info);
          JSON.stringify(info);
          return info;
        })
        .then((error) => {
          console.error("GetAll Error:", error);
        });
  
      // let products = (this.info);
      // console.log("products",products)
      // for (let i = 0; i < info.length; i++) {
      //   const product = products[i];
      //   this.products.push(product);
      // }
    }
  
    productsFromLocalStorage() {
      const storageproducts = localStorage.getItem("products");
      if (storageproducts) {
        const products = JSON.parse(storageproducts);
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          this.products.push(product);
        }
      }
    }
  }
  
//   const items = new ProductsController();
  
//   items.addItem('Pan', 'Grey stainless steel pan', '../images/pan.jpg', '2022-07-13');
//   items.addItem('Notebook', 'Spiral Notebook - ruled paper', '../images/notebook.jpg', '2019-02-01');
//   items.addItem('Bowls and a Teapot', 'A set of 6 white porcelain bowls with a teapot'
//   , '../images/bowls.jpg', '2021-12-20');
//   console.log(items);
  
  export { ProductsController };