import Vue from "vue";

import styles from "./MinStars.styl";

interface Data {
	values: Option[];
	styles: Record<string, string>;
}

interface Computed {
	min_stars: MinStars | null;
}

interface Methods {
	updateMinStars: () => void;
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
			// TODO
			return null;
		},
	},

	methods: {
		updateMinStars() {
			// TODO
		},
	},
});
