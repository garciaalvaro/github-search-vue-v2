<template>
	<nav :class="styles.pagination">
		<span>Page {{ page }}</span>

		<button
			:class="styles.prev"
			:disabled="page === 1"
			@click="updatePage(page - 1)"
		>
			Prev
		</button>

		<button
			:class="styles.next"
			:disabled="repositories_found <= page * results_per_page"
			@click="updatePage(page + 1)"
		>
			Next
		</button>
	</nav>
</template>

<script src="./Pagination.ts" lang="ts"></script>
