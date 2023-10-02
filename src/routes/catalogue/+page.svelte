<script lang="ts">
	import { articles } from '$lib/articles';
</script>

<ul>
	{#each articles as article}
		<div class="article">
			<span>{article.name}</span>
			<span>{article.price}€</span>
		</div>
	{/each}
</ul>

<style>
	.article {
		width: 200px;
		display: flex;
		justify-content: space-between;
	}
</style>
