<script lang="ts">
	import type { Feedback } from "../types";

	import { v4 as uuid } from "uuid";
	import { FeedbackStore, SelectedStore } from "../stores";
	import Button from "./Button.svelte";
	import Card from "./Card.svelte";
	import RatingSelect from "./RatingSelect.svelte";

	let text = "";
	const minLength = 10;
	$: displayMessage = !!text?.length && text.trim().length <= minLength;

	const onSubmit = () => {
		if (text.trim().length < minLength)
			return alert(
				`Text must be at least ${minLength} characters ya cheeky bastard`
			);

		FeedbackStore.update((current: Feedback[]) =>
			current.concat({
				id: uuid(),
				text,
				rating: $SelectedStore,
			})
		);
	};
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={onSubmit}>
		<RatingSelect />
		<div class="input-group">
			<input
				type="text"
				bind:value={text}
				placeholder="Tell us something that keeps you coming back"
			/>
			<Button type="submit" disabled={!text?.length || displayMessage}
				>Send</Button
			>
		</div>
		{#if displayMessage}
			<div class="message">
				Text must be at least {minLength} characters
			</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}
	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}
	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}
	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}
	input:focus {
		outline: none;
	}
	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
