import Vue from "vue";

import "./_reset.styl";
import "./_colors.styl";
import "./_layout.styl";
import { Heading } from "../Heading";
import { Keywords } from "../Keywords";
import { Languages } from "../Languages";
import { Status } from "../Status";
import { MinStars } from "../MinStars";
import { LastUpdate } from "../LastUpdate";
import { Results } from "../Results";
import styles from "./App.styl";

interface Data {
	styles: Record<string, string>;
}

export default Vue.extend<Data, unknown, unknown, unknown>({
	name: "App",

	components: {
		Heading,
		Keywords,
		Languages,
		Status,
		MinStars,
		LastUpdate,
		Results,
	},

	data(): Data {
		return {
			styles,
		};
	},
});
