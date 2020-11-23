import Vue from "vue";

import { store } from "@/store";
import { Message } from "../Message";
import { Repository as RepositoryComponent } from "../Repository";
import { Pagination } from "../Pagination";
import styles from "./Results.styl";

interface Data {
	styles: Record<string, string>;
}

interface Computed {
	repositories_ids: State["repositories_ids"];
	title: string;
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
			const repositories_ids = store.state.repositories_ids;

			return repositories_ids;
		},

		title() {
			const { repositories_found } = store.state;

			const title = `${repositories_found.toLocaleString()} repositor${
				repositories_found > 1 ? "ies" : "y"
			} found`;

			return title;
		},
	},
});
