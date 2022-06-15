<script lang="ts">
  import { onMount } from "svelte";

  let span: HTMLSpanElement

  onMount(() => {
    const MQ = (globalThis as any).MathQuill.getInterface(2);

    MQ.StaticMath(span);
  })
</script>

<span bind:this={span}><slot/></span>