import Vue from "vue";

import { Message } from "../Message";
import styles from "./Status.styl";

interface Data {
	styles: Record<string, string>;
}

interface Computed {
	text: string;
}

export default Vue.extend<Data, unknown, Computed, unknown>({
	name: "Status",

	components: { Message },

	data(): Data {
		return {
			styles,
		};
	},

	computed: {
		text() {
			// TODO
			return "";
		},
	},
});
