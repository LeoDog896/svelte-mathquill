<script lang="ts">
	import { tick } from 'svelte';
	import { MathQuill } from '$lib/index';
	let latexes: { latex: string; element?: MathQuill }[] = [{ latex: '' }];
</script>

<div class="p-8">
	{#each latexes as { latex, element }, i}
		<div class="mb-2">
			<MathQuill
				bind:this={element}
				on:deleteOutOf={async () => {
					if (latexes.length === 1) return;
					latexes = latexes.filter((_, index) => i !== index);
					await tick();
					latexes[Math.max(i - 1, 0)].element?.focus();
				}}
				on:outOfOnly={async (event) => {
					if (event.detail == 'U' || (event.detail == 'L' && i !== 0)) {
						latexes[i - 1].element?.focus();
					} else if (i + 1 !== latexes.length) {
						latexes[i + 1].element?.focus();
					}
				}}
				on:enter={async () => {
					// If there is only one element OR the last element isn't empty, add a new one
					if (latexes.length === 1 || latexes[latexes.length - 1].latex) {
						latexes = [...latexes, { latex: '' }];
					}

					await tick();
					latexes[Math.min(i + 1, latexes.length - 1)].element?.focus();
				}}
				bind:latex
			/>
		</div>
	{/each}
</div>
