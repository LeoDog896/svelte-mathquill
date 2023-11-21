<script lang="ts">
	import { MathQuill, MathQuillStatic } from '$lib/index.ts';
	import '@fontsource-variable/inter';
	import Highlight from "svelte-highlight";
  	import xml from "svelte-highlight/languages/xml";
	import "svelte-highlight/styles/github.css";

	const code = `<script lang="ts">
	import { MathQuillSetup, MathQuill } from "svelte-mathquill";
<\/script>
<MathQuillSetup \/>
<MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}\/>`

	let latex = 'x + \\sqrt{5}';
	let autoCommands = 'pi theta sqrt sum';
	let autoOperatorNames = 'sin cos tan arcsin arccos arctan';
	let noBorderOutline = false;
	let focused = false;
</script>

<main>
	<h1>
		svelte-mathquill <span>mathquill for svelte</span><br/>
		<span><a href="https://github.com/LeoDog896/svelte-mathquill">github</a> | <a href="https://www.npmjs.com/package/svelte-mathquill">npm</a></span>
	</h1>

	<code>npm i -D svelte-mathquill</code><br />

	<h2>Playground</h2>

	<MathQuill
		style="margin: 10px 0;"
		bind:focused
		config={{ autoCommands, autoOperatorNames }}
		{noBorderOutline}
		bind:latex
	/><br />

	<p>Auto Commands: <input placeholder="Auto Commands" bind:value={autoCommands} /></p>
	<p>Auto Operator Names: <input placeholder="Auto Operator Names" bind:value={autoOperatorNames} /></p>
	<p>No outline / border: <input type="checkbox" bind:checked={noBorderOutline} /></p>
	<p>Is focused: {focused}</p>
	<p>Static: <MathQuillStatic {latex} /></p>
	<p>Latex: <input placeholder="Result (editable) Latex" bind:value={latex} /></p>

	<h2>Code</h2>

	<p>
		Since MathQuill is (very) legacy, <code>MathQuillSetup</code> imports all resources
		from a CDN, injecting jQuery, and MathQuill's CSS and JS resources.
	</p>

	<Highlight language={xml} {code} />

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
		padding: 1rem;
		margin-top: 0;
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
