<script lang="ts">
	import { tick } from 'svelte';
	import { MathQuill } from '$lib/index.ts';
	let latexes: { latex: string; element?: MathQuill }[] = [{ latex: '' }];
</script>

<main>
	<h1>List Demo</h1>
	<p>Click on the first input box, and type math!</p>
	<p>Enter will create a new box, and you can use the arrow keys to navagate.</p>
	<p>Backspace will delete the current box, unless it is the only box.</p>
	<p>Source on <a href="https://github.com/LeoDog896/svelte-mathquill/blob/main/src/routes/list/%2Bpage.svelte">GitHub</a></p>

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
</main>

<style>
	main {
		padding: 3rem;
	}
</style>
