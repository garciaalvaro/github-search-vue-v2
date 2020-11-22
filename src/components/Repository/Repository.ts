import Vue from "vue";

import IconStar from "./IconStar.vue";
import styles from "./Repository.styl";

interface Data {
	styles: Record<string, string>;
}

export default Vue.extend<Data, unknown, unknown, Repository>({
	name: "Repository",

	components: { IconStar },

	props: {
		id: {
			type: String,
			default: "",
		},

		url: {
			type: String,
			default: "",
		},

		description: {
			type: String,
			default: "",
		},

		name: {
			type: String,
			default: "",
		},

		user: {
			type: String,
			default: "",
		},

		stars: {
			type: String,
			default: "",
		},

		language: {
			type: String,
			default: "",
		},

		updated: {
			type: String,
			default: "",
		},

		license: {
			type: String,
			default: "",
		},
	},

	data(): Data {
		return {
			styles,
		};
	},
});
