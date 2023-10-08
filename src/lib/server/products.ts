export interface Product {
    id: number;
    name: string;
    price: number;
}

export type NewProduct = Omit<Product, 'id'>

const products: Product[] = [{
    id: 1,
    name: "pain au chocolat",
    price: 1.1
}]

export function getProducts() {
    // select * from products;

    return products
}

export function addProduct(newProduct: NewProduct) {
    // insert product to database

    products.push({
        ...newProduct,
        id: products.length,
    })
}