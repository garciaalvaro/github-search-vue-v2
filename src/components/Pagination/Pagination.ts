import Vue from "vue";

import { store } from "@/store";
import styles from "./Pagination.styl";

interface Data {
	results_per_page: number;
	styles: Record<string, string>;
}

interface Computed {
	page: State["page"];
	repositories_found: State["repositories_found"];
}

interface Methods {
	updatePage: (value: number) => void;
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
			const page = store.state.page;

			return page;
		},

		repositories_found() {
			const repositories_found = store.state.repositories_found;

			return repositories_found;
		},
	},

	methods: {
		updatePage(value) {
			store.state.page = value;
		},
	},
});
