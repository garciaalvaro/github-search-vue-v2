import Vue from "vue";

import IconSearch from "./IconSearch.vue";
import styles from "./Keywords.styl";

interface Data {
	styles: Record<string, string>;
}

interface Methods {
	fetchRespositories: () => void;
	updateKeywords: () => void;
}

interface Computed {
	keywords: string;
}

export default Vue.extend<Data, Methods, Computed, unknown>({
	name: "Keywords",

	components: { IconSearch },

	data(): Data {
		return {
			styles,
		};
	},

	computed: {
		keywords() {
			// TODO
			return "";
		},
	},

	methods: {
		fetchRespositories() {
			// TODO
		},

		updateKeywords() {
			// TODO
		},
	},
});
