/**
 * Class representing a form
 */
class Form {

  /**
   * Create a form
   * @param {string} title
   * @param {sintrg} catchPhrase
   * @param {string} description
   */
  constructor(title, catchPhrase, description) {
    this.title = title;
    this.catchPhrase = catchPhrase;
    this.description = description;
    this.productManager = new Product(this.title, this.catchPhrase, this.description);
  }

  /**
   * Add product to DOM
   */
  addProduct() {
    this.productManager.createProduct();
  }

}

/**
 * Class representing a product
 */
class Product {

  /**
   * Create a product
   * @param {string} title
   * @param {string} catchPhrase
   * @param {string} description
   */
  constructor(title, catchPhrase, description) {
    this.title = title;
    this.catchPhrase = catchPhrase;
    this.description = description;
  }

  /**
   * Prepare HTML for product
   */
  createProduct() {
    let product =
        '<div>'
      +   '<div>' + this.title + '</div>'
      +   '<div>' + this.catchPhrase + '</div>'
      +   '<div>' + this.description + '</div>'
      + '</div > ';
    this.addProduct(product);
  }

  /**
   * Add the product to HTML
   * @param {string} product
   */
  addProduct(product) {
    document.getElementById('products-container').innerHTML += product;
  }


}

document.getElementById('submit').addEventListener('click', function () {
  let title = document.getElementById('title').value;
  let catchPhrase = document.getElementById('catch-phrase').value;
  let description = document.getElementById('description').value;

  let form = new Form(title, catchPhrase, description);
  form.addProduct();
});
