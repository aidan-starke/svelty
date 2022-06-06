<script lang="ts">
	export let style = "primary";
	export let type = "button";
	export let disabled = false;
</script>

<button {type} class={style} {disabled}>
	<slot />
</button>

<style>
	button {
		color: #fff;
		border: 0;
		border-radius: 8px;
		width: 100px;
		height: 40px;
		cursor: pointer;
	}

	.primary {
		background-color: #202142;
	}

	.secondary {
		background-color: #ff6a95;
	}

	button:hover {
		transform: scale(0.98);
		opacity: 0.9;
	}

	button:disabled {
		background-color: grey;
		color: lightgray;
		cursor: default;
	}

	button:disabled:hover {
		transform: scale(1);
		opacity: 1;
	}
</style>
