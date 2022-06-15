<script lang="ts">
  import { onMount } from "svelte"
  import { createEventDispatcher } from 'svelte';

  interface Events {
    edit: string;
    upOutOf: void;
    moveOutOf: void;
    enter: void;
  }

	const dispatch = createEventDispatcher<Events>();

  interface MathQuillConfig {
    autoCommands: string;
    autoOperatorNames: string;
    maxDepth: number;
    restrictMismatchedBrackets: boolean;
    spaceBehavesLikeTab: boolean;
    leftRightIntoCmdGoes: "up" | "down";
    sumStartsWithNEquals: boolean;
    supSubsRequireOperand: boolean;
    charsThatBreakOutOfSupSub: string;
  }

  let spanElement: HTMLSpanElement;
  export let latex: string;
  let clazz = "";

  export { clazz as class }

  export let config: Partial<MathQuillConfig> = {}
  let mathField: any | undefined;

  export const focus = () => mathField?.focus()
  export const blur = () => mathField?.blur()
  export const reflow = () => mathField?.reflow()
  export const select = () => mathField?.select()
  export const clearSelection = () => mathField?.clearSelection()
  export const keystroke = (text: string) => mathField?.keystroke(text)
  export const typedText = (text: string) => mathField?.typedText(text)

  $: processedConfig = Object.fromEntries(Object.entries(config).filter(([_, value]) => value))

  $: if (mathField && mathField.latex() !== latex) mathField.latex(latex)
  $: if (processedConfig && mathField) mathField.config(config)

  onMount(() => {

    const MQ = ((globalThis as any).MathQuill as any).getInterface(2);

    mathField = MQ.MathField(spanElement, {
      ...processedConfig,
      handlers: {
        edit() {
          dispatch("edit", mathField.latex())
          latex = mathField.latex();
        },
        upOutOf() {
          dispatch("upOutOf")
        },
        moveOutOf() {
          dispatch("moveOutOf")
        },
        enter() {
          dispatch("enter")
        }
      }
    });
  })
</script>

<span class={clazz} bind:this={spanElement}></span>