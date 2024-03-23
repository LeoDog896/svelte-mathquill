<script lang="ts" context="module">
	import { state } from 'signal-async';
	export const jQueryLoaded = state(false);
	export const mathQuillLoaded = state(false);
</script>

<script lang="ts">
	import jQuery from 'jquery';
	import MathQuillRaw from './scripts/mathquill.min.js.txt';
	import './scripts/mathquill.css';
	import { onMount } from 'svelte';

	function onLoad() {
		mathQuillLoaded.set(true);
	}

	onMount(() => {
		// @ts-ignore
		window.jQuery = jQuery;
		const script = document.createElement('script');
		script.src = MathQuillRaw;
		script.onload = onLoad;
		document.head.appendChild(script);
		jQueryLoaded.set(true);
	});
</script>
