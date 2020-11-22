import Vue from "vue";

import "./_reset.styl";
import styles from "./App.styl";

interface Data {
	styles: Record<string, string>;
}

// Data, Methods, Computed, Props
export default Vue.extend<Data, unknown, unknown, unknown>({
	name: "App",

	data(): Data {
		return {
			styles,
		};
	},
});
