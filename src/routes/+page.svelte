<script lang="ts">
	import { MathQuill, MathQuillStatic } from '$lib/index.ts';

	let latex = 'x + \\sqrt{5}';
	let autoCommands = 'pi theta sqrt sum';
	let autoOperatorNames = 'sin cos tan arcsin arccos arctan';
	let noBorderOutline = false;
	let focused = false;
</script>

<div class="p-8 w-full h-full">
	<h1 class="my-6 text-3xl p-3 border-b border-black border-dashed">
		svelte-mathquill <span class="text-xl text-gray-600">mathquill wrapper for svelte</span>
	</h1>

	<p class="mb-4">
		<span class="rounded-lg font-mono bg-gray-200 p-2">npm i -D svelte-mathquill</span>
	</p>

	<MathQuill
		bind:focused
		config={{ autoCommands, autoOperatorNames }}
		{noBorderOutline}
		bind:latex
	/><br />

	Auto Commands: <input placeholder="Auto Commands" bind:value={autoCommands} /><br />
	Auto Operator Names: <input placeholder="Auto Operator Names" bind:value={autoOperatorNames} /><br
	/>
	No outline / border: <input type="checkbox" bind:checked={noBorderOutline} /><br />
	Is focused: {focused}<br />
	Static: <MathQuillStatic {latex} /><br />
	Latex: <input placeholder="Result (editable) Latex" bind:value={latex} />
	<p class="py-4">
		Code: <span class="font-mono rounded-lg bg-gray-200 p-2"
			>{`<MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>`}</span
		>
	</p>
</div>
