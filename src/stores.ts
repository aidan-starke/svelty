import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import type { Feedback, Rating } from "./types";

export const FeedbackStore = writable<Feedback[]>([
	{
		id: uuid(),
		rating: 10,
		text: "It's bitching",
	},
	{
		id: uuid(),
		rating: 9,
		text: "It's pretty tight",
	},
	{
		id: uuid(),
		rating: 8,
		text: "It's aight",
	},
]);

export const RatingStore = writable<Rating[]>(
	new Array(11).fill({}).map((_, rating) => ({
		rating,
		id: `num${rating}`,
	}))
);

export const SelectedStore = writable<number>(10);
