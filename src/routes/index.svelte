<script lang="ts">
  import MathQuill from "$lib/MathQuill.svelte";

  let latex = ""
  let autoCommands = "pi theta sqrt sum"
  let autoOperatorNames = "sin cos tan arcsin arccos arctan"
</script>

<div class="m-8">
  <MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>

  Auto Commands: <input placeholder="Auto Commands" bind:value={autoCommands}><br/>
  Auto Operator Names: <input placeholder="Auto Operator Names" bind:value={autoOperatorNames}><br/>
  <br/>
  <input placeholder="Result (editable) Latex" bind:value={latex}/>
</div>