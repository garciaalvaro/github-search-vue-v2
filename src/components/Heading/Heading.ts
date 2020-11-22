import Vue from "vue";

import styles from "./Heading.styl";

interface Data {
	styles: Record<string, string>;
}

export default Vue.extend<Data, unknown, unknown, unknown>({
	name: "Heading",

	data(): Data {
		return {
			styles,
		};
	},
});
