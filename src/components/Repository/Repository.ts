import { store } from "@/store";
import Vue from "vue";

import IconStar from "./IconStar.vue";
import styles from "./Repository.styl";

interface Data {
	styles: Record<string, string>;
}

interface Props {
	id: Repository["id"];
}

interface Computed {
	repository: Repository;
}

export default Vue.extend<Data, unknown, Computed, Props>({
	name: "Repository",

	components: { IconStar },

	props: {
		id: {
			type: Number,
			default: 0,
		},
	},

	data(): Data {
		return {
			styles,
		};
	},

	computed: {
		repository() {
			const repository = store.state.repositories[this.id];

			return repository;
		},
	},
});
