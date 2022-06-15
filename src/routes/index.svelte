<script lang="ts">
  import MathQuill from "$lib/MathQuill.svelte";

  let latex = "x + \\sqrt{5}"
  let autoCommands = "pi theta sqrt sum"
  let autoOperatorNames = "sin cos tan arcsin arccos arctan"
</script>

<div class="m-8">

  <h1 class="my-6 text-3xl">svelte-mathquill</h1>

  <p class="mb-4"><span class="rounded-lg font-mono bg-gray-300 p-2">npm i -D svelte-mathquill</span></p>

  <MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>

  Auto Commands: <input placeholder="Auto Commands" bind:value={autoCommands}><br/>
  Auto Operator Names: <input placeholder="Auto Operator Names" bind:value={autoOperatorNames}><br/>
  <br/>
  <input placeholder="Result (editable) Latex" bind:value={latex}/>
  <p class="p-4">Code: <span class="font-mono rounded-lg bg-gray-300 p-2">{`<MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>`}</span></p>
</div>