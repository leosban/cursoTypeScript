// Agregação entre classes
// Ou seja, uma classe necessita da outra para poder funcionar corretamente.

// Criação da classe do carrinho de compras
export class shopCart {
  private readonly products: Product[] = [];

  // Metódo criado para inserir um ou mais produtos no carrinho de compras
  // Usamos for of para fazer a iteração dos produtos
  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }
  // Metódo criando para nos mostrar a quantidade de produtos no carrinho
  quantityProducts(): number {
    return this.products.length;
  }

  // Metodo criado para exibir os valores totais dos produtos no carrinho
  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

// Criação da classe do produto
export class Product {
  constructor(public name: string, public price: number) {}
}

// Variavel para armazenar um produto
const productOne = new Product('shirt', 49.9);
const productTwo = new Product('pants', 99.9);
const productThree = new Product('jacket', 179.9);

// Variavel para criar um carrinho de compras com produtos
const shopCartOne = new shopCart();

// Usando o metodo para inserir o produto no carro de forma efetiva
shopCartOne.insertProducts(productOne, productTwo, productThree);

// Impressão do carrinho com valores totais
console.log(shopCartOne.totalValue().toFixed(2));

// Impressão do carrinho com a quantidade de produtos
console.log(shopCartOne.quantityProducts());
