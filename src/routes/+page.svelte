<script lang="ts">
	import { MathQuill, MathQuillStatic } from '$lib/index.ts';
	import '@fontsource-variable/inter';

	let latex = 'x + \\sqrt{5}';
	let autoCommands = 'pi theta sqrt sum';
	let autoOperatorNames = 'sin cos tan arcsin arccos arctan';
	let noBorderOutline = false;
	let focused = false;
</script>

<main>
	<h1>
		svelte-mathquill <span>mathquill wrapper for svelte</span><br/>
		<span><a href="https://github.com/LeoDog896/svelte-mathquill">github</a> | <a href="https://www.npmjs.com/package/svelte-mathquill">npm</a></span>
	</h1>

	<code>npm i -D svelte-mathquill</code><br />

	<MathQuill
		style="margin: 10px 0;"
		bind:focused
		config={{ autoCommands, autoOperatorNames }}
		{noBorderOutline}
		bind:latex
	/><br />

	Auto Commands: <input placeholder="Auto Commands" bind:value={autoCommands} /><br />
	Auto Operator Names: <input placeholder="Auto Operator Names" bind:value={autoOperatorNames} /><br
	/>
	No outline / border (these are common css controls): <input type="checkbox" bind:checked={noBorderOutline} /><br />
	Is focused: {focused}<br />
	Static: <MathQuillStatic {latex} /><br />
	Latex: <input placeholder="Result (editable) Latex" bind:value={latex} />
	<p class="py-4">
		Code: <code
			>{`<MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>`}</code
		>
	</p>

	<h2>Examples</h2>

	<ul>
		<li><a href="list">list</a></li>
	</ul>
</main>

<style>
	main {
		padding: 2rem;
		height: 100%;
		font-family: 'Inter Variable', sans-serif;
	}

	h1 {
		margin-top: 4rem;
		padding: 1rem;
		width: calc(100% - (4rem + 1rem) * 2);
		border-bottom: 1px dotted #000;
	}

	h1 span {
		font-size: 1rem;
		color: #666;
	}

	code {
		background: #eee;
		padding: 0.5rem;
		border-radius: 0.5rem;
		display: inline-block;
		margin-bottom: 1rem;
	}

	a {
		color: rgb(21, 98, 198);
		text-decoration: none;
		border-bottom: 1px dotted #000;
	}
</style>
