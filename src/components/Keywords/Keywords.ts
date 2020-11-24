import Vue from "vue";

import { store } from "@/store";
import IconSearch from "./IconSearch.vue";
import colors from "../App/_colors.styl";
import styles from "./Keywords.styl";

interface Data {
	styles: Record<string, string>;
}

interface Methods {
	fetchRepositories: () => void;
	updateKeywords: (value: string) => void;
}

interface Computed {
	keywords: State["keywords"];
}

export default Vue.extend<Data, Methods, Computed, unknown>({
	name: "Keywords",

	components: { IconSearch },

	data(): Data {
		return {
			styles: { ...styles, ...colors },
		};
	},

	computed: {
		keywords() {
			const keywords = store.state.keywords;

			return keywords;
		},
	},

	methods: {
		fetchRepositories() {
			if (this.keywords.length < 3 || store.state.status === "NO_RESULTS")
				return;

			store.actions.fetchRepositories();
		},

		updateKeywords(value) {
			store.state.keywords = value;
		},
	},
});
