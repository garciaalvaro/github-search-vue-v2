import Vue from "vue";

import { Language as LanguageComponent } from "../Language";
import styles from "./Languages.styl";

interface Data {
	languages: Language[];
	styles: Record<string, string>;
}

export default Vue.extend<Data, unknown, unknown, unknown>({
	name: "Languages",

	components: { Language: LanguageComponent },

	data(): Data {
		return {
			languages: [
				"JavaScript",
				"TypeScript",
				"HTML",
				"CSS",
				"Objective-C",
				"Java",
				"Ruby",
				"Python",
				"PHP",
				"C#",
			],

			styles,
		};
	},
});
