<script lang="ts">
  import { onMount, tick } from "svelte";

  let span: HTMLSpanElement
  let MQ: any;
  let field: any | undefined;
  export let latex = "";

  onMount(() => {
    MQ = (globalThis as any).MathQuill.getInterface(2);

    if (latex) refresh()
  })

  $: if (latex !== undefined) tick().then(refresh)

  function refresh() {
    if (latex == "") {
      field?.revert();
      return
    }
    
    if (field) field.revert()
    field = MQ?.StaticMath(span);
  }
</script>

<span bind:this={span}>{latex}</span>