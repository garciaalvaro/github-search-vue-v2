import Vue from "vue";

import { store } from "@/store";
import styles from "./LastUpdate.styl";

interface Data {
	styles: Record<string, string>;
}

interface Computed {
	last_update: State["last_update"];
}

interface Methods {
	updateLastUpdate: (value: LastUpdate) => void;
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
			const last_update = store.state.last_update;

			return last_update;
		},
	},

	methods: {
		updateLastUpdate(value) {
			store.state.last_update = value;
		},
	},
});
