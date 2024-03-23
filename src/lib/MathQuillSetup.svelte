<script lang="ts">
	import jqueryMin from 'jquery/dist/cdn/jquery.min.js?url';
	import mathquill from 'mathquill/build/mathquill.js?url';
	import mathquillCss from 'mathquill/build/mathquill.css?url';
</script>

<svelte:head>
	<script src={jqueryMin}></script>
	<script src={mathquill}></script>
	<link rel="stylesheet" href={mathquillCss}>
</svelte:head>
