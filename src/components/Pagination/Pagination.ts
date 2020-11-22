import Vue from "vue";

import styles from "./Pagination.styl";

interface Data {
	results_per_page: number;
	styles: Record<string, string>;
}

interface Computed {
	page: number;
	repositories_found: number;
}

interface Methods {
	updatePage: () => void;
}

export default Vue.extend<Data, Methods, Computed, unknown>({
	name: "Pagination",

	data(): Data {
		return {
			results_per_page: 30,
			styles,
		};
	},

	computed: {
		page() {
			// TODO
			return 1;
		},

		repositories_found() {
			// TODO
			return 0;
		},
	},

	methods: {
		updatePage() {
			// TODO
		},
	},
});
