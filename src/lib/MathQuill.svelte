<script lang="ts">
  import { onMount } from "svelte"

  interface MathQuillConfig {
    autoCommands: string;
    autoOperatorNames: string;
  }

  let spanElement: HTMLSpanElement;
  export let latex: string;
  export let classInfo: string;
  export let config: Partial<MathQuillConfig> = {}
  let mathField: any;

  $: processedConfig = Object.entries(config).filter(([_, value]) => value)

  $: if (latex && mathField && mathField.latex() !== latex) mathField.latex(latex)
  $: if (processedConfig && mathField) mathField.config(config)

  onMount(() => {

    const MQ = ((globalThis as any).MathQuill as any).getInterface(2);

    mathField = MQ.MathField(spanElement, {
      ...processedConfig,
      handlers: {
        edit() {
          latex = mathField.latex();
        }
      }
    });
  })
</script>

<span bind:this={spanElement}>x</span>