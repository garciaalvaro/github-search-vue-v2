import Vue, { PropType } from "vue";

import { store } from "@/store";
import styles from "./Language.styl";

interface Data {
	styles: Record<string, string>;
}

interface Props {
	language: Language | null;
}

interface Methods {
	updateLanguage: (value: Language) => void;
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
			const is_active = store.state.language === this.language;

			return is_active;
		},
	},

	methods: {
		updateLanguage() {
			store.state.language =
				this.language === store.state.language ? null : this.language;
		},
	},
});
