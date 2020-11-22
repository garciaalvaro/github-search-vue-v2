<template>
	<article :class="styles.container">
		<header>
			<h4>
				<a :href="url" :class="styles.link">{{ title }}</a>
			</h4>
		</header>

		<section :class="styles.body">
			<p>{{ description }}</p>
		</section>

		<footer :class="styles.footer">
			<div :class="styles.stars">
				<IconStar />

				<span>{{ stars }}</span>
			</div>

			<span :class="styles.language">{{ language }}</span>

			<span :class="styles.license">{{ license }}</span>

			<span :class="styles.updated">{{ updated }}</span>
		</footer>
	</article>
</template>

<script src="./Repository.ts" lang="ts"></script>
