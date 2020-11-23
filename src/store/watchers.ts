import Vue from "vue";

import { actions } from "./actions";
import { state } from "./state";
import { debounce } from "@/utils";

new Vue({
	created() {
		this.$watch(
			() => state.page,

			() => {
				actions.fetchRepositories();
			}
		);

		this.$watch(
			() => state.status,

			() => {
				if (state.status === null) return;

				actions.emptyRepositories();
			}
		);

		this.$watch(
			() => [
				state.keywords,
				state.last_update,
				state.min_stars,
				state.language,
			],

			() => {
				if (state.keywords.length < 3) return;

				state.status = "WAITING";

				debounce(() => {
					if (state.keywords.length < 3) return;

					actions.fetchRepositories();
				});
			}
		);

		this.$watch(
			() => state.keywords,

			keywords => {
				if (keywords.length >= 3) return;

				switch (keywords.length) {
					case 0:
						state.status = "CHARACTERS_0";
						break;

					case 1:
						state.status = "CHARACTERS_1";
						break;

					case 2:
						state.status = "CHARACTERS_2";
						break;

					default:
						break;
				}
			}
		);
	},
});
