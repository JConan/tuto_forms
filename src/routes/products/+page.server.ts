import { addProduct, getProducts } from '$lib/server/products.js'


export function load() {
    return {
        products: getProducts()
    }
}

export const actions = {
    add: async ({ request }) => {
        const formData = await request.formData()
        const newProduct = {
            name: formData.get('product_name')!.toString(),
            price: Number.parseFloat(formData.get('product_price')!.toString())
        }


        if (newProduct.name !== "" && !isNaN(newProduct.price)) {
            addProduct(newProduct)
            return { success: true, products: getProducts() }
        }

        return {
            success: false, errors: {
                product_name: {
                    isError: newProduct.name === "",
                    value: newProduct.name
                },
                product_price: {
                    isError: isNaN(newProduct.price),
                    value: newProduct.price
                },
            }
        }
    },
}