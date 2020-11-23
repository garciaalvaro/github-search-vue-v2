import Vue from "vue";

import { Message } from "../Message";

interface Computed {
	text: string;
}

export default Vue.extend<unknown, unknown, Computed, unknown>({
	name: "Status",

	components: { Message },

	computed: {
		text() {
			// TODO
			return "";
		},
	},
});
