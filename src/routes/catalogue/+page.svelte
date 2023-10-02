<script lang="ts">
	export let data;

	interface Item {
		id: number;
		number: number;
	}

	let cart: Item[] = [];

	function addItem(id: number) {
		const itemIdx = cart.findIndex((item) => item.id === id);

		if (itemIdx === -1) {
			cart.push({ id, number: 1 });
		} else {
			cart[itemIdx].number += 1;
		}

		// force svelte reactivity
		cart = [...cart];
	}

	function removeItem(id: number) {
		const itemIdx = cart.findIndex((item) => item.id === id);
		if (itemIdx > -1) {
			cart[itemIdx].number -= 1;
			// force svelte reactivity
			cart = [...cart.filter((item) => item.number > 0)];
		}
	}

	function getArticle(id: number) {
		return data.articles.find((article) => article.id === id)!;
	}

	$: cartTotal = cart
		.map((item) => getArticle(item.id).price * item.number)
		.reduce((total, subTotal) => total + subTotal, 0);
</script>

<ul>
	{#each data.articles as article}
		<div class="article">
			<span>{article.name}</span>
			<span>{article.price}€</span>
			<button on:click={() => addItem(article.id)}>+</button>
			<button on:click={() => removeItem(article.id)}>-</button>
		</div>
	{/each}
</ul>
<div class="cart">
	{#if cart.length === 0}
		<p>Panier vide</p>
	{:else}
		<p>Panier:</p>
		<ul>
			{#each cart as cartItem}
				<li>
					<span>
						{getArticle(cartItem.id).name} x {cartItem.number}
					</span>
					<span>
						{getArticle(cartItem.id).price * cartItem.number} €
					</span>
				</li>
			{/each}
			<li class="total">
				<span>total</span>
				<span>{cartTotal} €</span>
			</li>
		</ul>
	{/if}
</div>

<style>
	.article {
		width: 600px;
		display: flex;
		justify-content: space-between;

		& * {
			width: 200px;
		}
	}
	.cart {
		margin-top: 3rem;

		& ul li {
			display: flex;
			justify-content: space-between;
		}

		& .total {
			margin-top: 1rem;
			border-top: 2px solid var(--silver);
			font-size: 18px;
			font-weight: bold;
		}
	}
</style>
