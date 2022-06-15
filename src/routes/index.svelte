<script lang="ts">
  import MathQuill from "$lib/MathQuill.svelte";

  let latex = ""
  let autoCommands = "pi theta sqrt sum"
  let autoOperatorNames = "sin cos tan arcsin arccos arctan"
</script>

<div class="m-8">
  <MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>

  <input placeholder="Auto Commands" bind:value={autoCommands}><br/>
  <input placeholder="Auto Operator Names" bind:value={autoOperatorNames}><br/>
  <br/>
  <input bind:value={latex}/>
</div>