<script lang="ts">
	import { RatingStore, SelectedStore } from "../stores";
</script>

<ul class="rating">
	{#each $RatingStore as { rating, id } (id)}
		<li>
			<input
				{id}
				type="radio"
				name="rating"
				value={rating}
				on:change={(e) => SelectedStore.update(() => +e.currentTarget.value)}
				checked={rating === $SelectedStore}
			/>
			<label for={id}>{rating}</label>
		</li>
	{/each}
</ul>

<style>
	.rating {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 30px 0;
	}

	.rating li {
		position: relative;
		background: #f4f4f4;
		width: 50px;
		height: 50px;
		text-align: center;
		border-radius: 50%;
		font-size: 19px;
		border: 1px #eee solid;
		transition: 0.3s;
	}

	.rating li label {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50px;
		height: 50px;
		padding: 10px;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
	}

	.rating li:hover {
		background: #ff6a95;
		color: #fff;
	}

	[type="radio"] {
		opacity: 0;
	}

	[type="radio"]:checked ~ label {
		background: #ff6a95;
		color: #fff;
	}
</style>
