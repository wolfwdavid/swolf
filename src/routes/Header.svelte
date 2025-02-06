<script>
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">Directory</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Get Listed</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/create an account') ? 'page' : undefined}>
				<a href="/sverdle">Create an Account</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
</header>

<style>
	/* Ensure header spans the full width of the screen */
	header {
		display: flex;
		justify-content: center; /* Center the content */
		align-items: center;
		width: 100vw; /* Full viewport width */
		background: var(--background); /* Ensures background consistency */
		position: fixed; /* Sticks the header to the top */
		top: 0;
		left: 0;
		z-index: 1000; /* Keeps it above other content */
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Adds slight shadow */
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 1200px; /* Prevents content from stretching too much */
		padding: 0 1rem; /* Adds padding for spacing */
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
		background: var(--background);
	}

	li {
		position: relative;
		height: 3em;
		padding: 0 1rem;
		display: flex;
		align-items: center;
	}

	/* Smaller divider using ::after pseudo-element */
	li:not(:last-child)::after {
		content: "";
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		height: 40%; /* Adjust to make dividers smaller */
		width: 1px;
		background: var(--color-text);
		opacity: 0.7; /* Optional: Makes divider slightly transparent */
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}
</style>
