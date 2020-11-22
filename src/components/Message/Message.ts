import Vue, { PropType } from "vue";

import styles from "./Message.styl";

interface Data {
	styles: Record<string, string>;
}

interface Props {
	tag: "P" | "H1" | "H2" | "H3" | "H4" | "SPAN";
	text: string;
}

export default Vue.extend<Data, unknown, unknown, Props>({
	name: "Message",

	props: {
		tag: {
			type: String as PropType<Props["tag"]>,
			default: "P",
		},

		text: {
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
