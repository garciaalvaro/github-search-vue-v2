import Vue from "vue";

import { store } from "@/store";
import styles from "./MinStars.styl";

interface Data {
	values: Option[];
	styles: Record<string, string>;
}

interface Computed {
	min_stars: State["min_stars"];
}

interface Methods {
	updateMinStars: (value: MinStars) => void;
}

export default Vue.extend<Data, Methods, Computed, unknown>({
	name: "MinStars",

	data(): Data {
		return {
			values: [10, 100, 1000, 10000, 50000, 100000].map(value => ({
				value,
				label: value.toLocaleString(),
			})),

			styles,
		};
	},

	computed: {
		min_stars() {
			const min_stars = store.state.min_stars;

			return min_stars;
		},
	},

	methods: {
		updateMinStars(value) {
			store.state.min_stars = value;
		},
	},
});
