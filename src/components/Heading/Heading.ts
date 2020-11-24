import Vue from "vue";

import colors from "../App/_colors.styl";
import styles from "./Heading.styl";

interface Data {
	styles: Record<string, string>;
}

export default Vue.extend<Data, unknown, unknown, unknown>({
	name: "Heading",

	data(): Data {
		return {
			styles: { ...styles, ...colors },
		};
	},
});
