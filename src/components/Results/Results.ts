import Vue from "vue";

import { Message } from "../Message";
import { Repository as RepositoryComponent } from "../Repository";
import { Pagination } from "../Pagination";
import styles from "./Results.styl";

interface Data {
	styles: Record<string, string>;
}

interface Computed {
	repositories_ids: Repository["id"][];
	text: string;
}

export default Vue.extend<Data, unknown, Computed, unknown>({
	name: "Results",

	components: { Message, Repository: RepositoryComponent, Pagination },

	data(): Data {
		return {
			styles,
		};
	},

	computed: {
		repositories_ids() {
			// TODO
			return [];
		},

		text() {
			// TODO
			return "";
		},
	},
});
