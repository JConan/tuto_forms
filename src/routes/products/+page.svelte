<script lang="ts">
	// import { enhance } from '$app/forms';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;
	const { form, errors, enhance, submitting } = superForm(data.form, {
		invalidateAll: true,
		resetForm: true
	});

	$: products = data.products;
</script>

<SuperDebug data={$form} />

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
	<label for="name">Nom du produit</label>
	<input type="text" name="name" bind:value={$form.name} />

	<label for="price">Prix du produit</label>
	<input type="text" name="price" bind:value={$form.price} />

	{#if $submitting}
		<button disabled>
			<SyncLoader size="24" />
		</button>
	{:else}
		<button formaction="?/add">ajouter</button>
	{/if}
</form>

{#if $errors.name}
	<p class="errors">{$errors.name}</p>
{/if}

{#if $errors.price}
	<p class="errors">{$errors.price}</p>
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
