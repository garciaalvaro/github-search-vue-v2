<template>
	<div :class="[styles.container, 'theme-dark']">
		<div :class="styles.content">
			<label :for="styles.input" :class="styles.label">Search</label>

			<input
				:id="styles.input"
				:class="styles.input"
				:value="keywords"
				type="text"
				placeholder="Search repositories..."
				@change="updateKeywords"
			/>

			<button :class="styles.button" @click="fetchRespositories">
				<IconSearch />
			</button>
		</div>
	</div>
</template>

<script src="./Keywords.ts" lang="ts"></script>
