<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	let products = data.products;
	$: if (form && form.success) products = form.products!;
</script>

<p class="title">product list</p>

<ul>
	{#each products as product}
		<li>
			<span>{product.name}</span>
			<span>{product.price.toFixed(2)} €</span>
		</li>
	{/each}
</ul>

<p class="title">New Product</p>
<form method="POST" use:enhance>
	<label for="product_name">Nom du produit</label>
	<input type="text" name="product_name" value={form?.errors?.product_name.value || ''} />

	<label for="product_price">Prix du produit</label>
	<input type="text" name="product_price" value={form?.errors?.product_price.value || ''} />

	<button formaction="?/add">ajouter</button>
</form>

{#if form?.success === false}
	<div class="errors">
		<span class="title">errors</span>
		{#if form?.errors?.product_name.isError}
			<span>nom du produit non défini</span>
		{/if}
		{#if form?.errors?.product_price.isError}
			<span>prix du produit non défini</span>
		{/if}
	</div>
{/if}

<style>
	.errors {
		display: flex;
		flex-direction: column;
		color: red;
	}
	.title {
		margin-top: 1rem;
		font-size: 24px;
		text-decoration: underline;
	}
	form {
		display: flex;
		justify-content: space-between;
		width: 600px;
		& input {
			width: 100px;
			padding: 0 0.5rem;
			color: black;
			font-weight: 700;
			background-color: var(--silver);
		}
	}
</style>
