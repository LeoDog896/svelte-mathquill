<script lang="ts">
  import { onMount } from "svelte"

  interface MathQuillConfig {
    autoCommands: string;
    autoOperatorNames: string;
  }

  let spanElement: HTMLSpanElement;
  export let latex: string;
  let clazz: string;

  export { clazz as class }

  export let config: Partial<MathQuillConfig> = {}
  let mathField: any | undefined;

  export const focus = () => mathField?.focus()
  export const blur = () => mathField?.blur()

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

<span class={clazz} bind:this={spanElement}>x</span>