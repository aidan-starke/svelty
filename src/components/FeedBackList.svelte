<script lang="ts">
	import { FeedbackStore } from "../stores";
	import { scale, fade } from "svelte/transition";
	import FeedBackItem from "./FeedBackItem.svelte";
</script>

{#each $FeedbackStore as item (item.id)}
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedBackItem {item} />
	</div>
{/each}
