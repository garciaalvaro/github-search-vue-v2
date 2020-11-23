import Vue from "vue";

import { store } from "@/store";
import { getTextFromStatus } from "@/utils";
import { Message } from "../Message";

interface Computed {
	text: string;
}

export default Vue.extend<unknown, unknown, Computed, unknown>({
	name: "Status",

	components: { Message },

	computed: {
		text() {
			const text = getTextFromStatus(store.state.status);

			return text;
		},
	},
});
