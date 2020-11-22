import Vue, { PropType } from "vue";

import styles from "./Language.styl";

interface Data {
	styles: Record<string, string>;
}

interface Props {
	language: Language | null;
}

interface Methods {
	updateLanguage: () => void;
}

interface Computed {
	is_active: boolean;
}

export default Vue.extend<Data, Methods, Computed, Props>({
	name: "Language",

	props: {
		language: {
			type: String as PropType<Props["language"]>,
			default: null,
		},
	},

	data(): Data {
		return {
			styles,
		};
	},

	computed: {
		is_active() {
			// TODO
			return false;
		},
	},

	methods: {
		updateLanguage() {
			// TODO
		},
	},
});
