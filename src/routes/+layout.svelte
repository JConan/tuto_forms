<script>
	import '../app.css';
	import 'the-new-css-reset/css/reset.css';
</script>

<header>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/catalogue">Catalogue</a>
		</li>
		<li>
			<a href="/products">Products</a>
		</li>
	</ul>
</header>

<main>
	<slot />
</main>

<style>
	ul {
		margin-bottom: 3rem;
		width: 500px;
		display: flex;

		& li {
			margin-right: 20px;
			font-size: 26px;
			text-decoration: underline;

			&:hover {
				font-weight: bold;
			}
		}
	}
</style>
