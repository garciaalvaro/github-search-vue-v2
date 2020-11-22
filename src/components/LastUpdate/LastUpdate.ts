import Vue from "vue";

import styles from "./LastUpdate.styl";

interface Data {
	styles: Record<string, string>;
}

interface Computed {
	last_update: LastUpdate | null;
}

interface Methods {
	updateLastUpdate: () => void;
}

export default Vue.extend<Data, Methods, Computed, unknown>({
	name: "LastUpdate",

	data(): Data {
		return {
			styles,
		};
	},

	computed: {
		last_update() {
			// TODO
			return null;
		},
	},

	methods: {
		updateLastUpdate() {
			// TODO
		},
	},
});
