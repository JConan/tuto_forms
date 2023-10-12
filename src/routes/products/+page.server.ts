import { addProduct, getProducts } from '$lib/server/products'
import { fail } from '@sveltejs/kit'
import { z } from "zod"
import { superValidate } from 'sveltekit-superforms/server';

const NewProductSchema = z.object({
    name: z.string().min(1, { message: "le nom doit avoir au moins 1 caractère" }),
    price: z.number().positive({ message: "le prix doit être positive et non nul" })
})

export async function load({ depends }) {
    depends("products")
    const form = await superValidate(NewProductSchema);

    return {
        form,
        products: getProducts()
    }
}

export const actions = {
    add: async ({ request }) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const form = await superValidate(request, NewProductSchema);

        if (!form.valid) {
            return fail(400, { form });
        }


        addProduct(form.data)
        return { form }
    },
}