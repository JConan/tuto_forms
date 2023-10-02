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

	function getArticle(id: number) {
		return data.articles.find((article) => article.id === id);
	}
</script>

<ul>
	{#each data.articles as article}
		<div class="article">
			<span>{article.name}</span>
			<span>{article.price}€</span>
			<button on:click={() => addItem(article.id)}>+</button>
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
						{getArticle(cartItem.id)?.name} x {cartItem.number}
					</span>
				</li>
			{/each}
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
	}
</style>
