<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { jQueryLoaded, mathQuillLoaded } from './MathQuillSetup.svelte';

	type HorizontalDirection = 'L' | 'R';

	type VerticalDirection = 'U' | 'D';

	type Direction = HorizontalDirection | VerticalDirection;

	interface Events {
		edit: string;
		moveOutOf: HorizontalDirection;
		deleteOutOf: HorizontalDirection;
		selectOutOf: HorizontalDirection;
		upOutOf: void;
		downOutOf: void;
		outOfOnly: Direction;
		outOf: Direction;
		enter: void;
	}

	const dispatch = createEventDispatcher<Events>();

	interface MathQuillConfig {
		autoCommands: string;
		autoOperatorNames: string;
		maxDepth: number;
		restrictMismatchedBrackets: boolean;
		spaceBehavesLikeTab: boolean;
		leftRightIntoCmdGoes: 'up' | 'down';
		sumStartsWithNEquals: boolean;
		supSubsRequireOperand: boolean;
		charsThatBreakOutOfSupSub: string;
	}

	let spanElement: HTMLSpanElement;
	export let autofocus = false;
	export let latex = "";
	/** If the element shouldn't have a border / outline. Useful if you're wrapping this input. */
	export let noBorderOutline = false;
	export let focused = autofocus;
	let clazz = '';
	export let style = '';

	export { clazz as class };

	export let config: Partial<MathQuillConfig> = {};
	let mathField: any | undefined;
	
	/** Returns the current instance of MathQuill. Useful for using bindings that haven't been implemented yet. */
	export const mathQuillInstance = () => mathField;
	export const focus = () => mathField?.focus();
	export const blur = () => mathField?.blur();
	export const reflow = () => mathField?.reflow();
	export const select = () => mathField?.select();
	export const clearSelection = () => mathField?.clearSelection();
	export const keystroke = (text: string) => mathField?.keystroke(text);
	export const cmd = (text: string) => mathField?.cmd(text);
	export const typedText = (text: string) => mathField?.typedText(text);

	$: processedConfig = Object.fromEntries(Object.entries(config).filter(([_, value]) => value));

	$: if (mathField && mathField.latex() !== latex) mathField.latex(latex);
	$: if (processedConfig && mathField) mathField.config(config);

	onMount(async () => {
		await jQueryLoaded.waitFor(true);
		await mathQuillLoaded.waitFor(true);
		const MQ = ((globalThis as any).MathQuill as any).getInterface(2);

		const parseDirection = (dir: any): HorizontalDirection => (dir == MQ.L ? 'L' : 'R');

		mathField = MQ.MathField(spanElement, {
			...processedConfig,
			substituteTextarea() {
				const element = document.createElement('textarea');
				element.addEventListener('focus', () => (focused = true));
				element.addEventListener('blur', () => (focused = false));
				element.setAttribute('autocorrect', 'false');
				return element;
			},
			handlers: {
				edit() {
					dispatch('edit', mathField.latex());
					latex = mathField.latex();
				},
				upOutOf() {
					dispatch('upOutOf');
					dispatch('outOf', 'U');
					dispatch('outOfOnly', 'U');
				},
				downOutOf() {
					dispatch('downOutOf');
					dispatch('outOf', 'D');
					dispatch('outOfOnly', 'D');
				},
				moveOutOf(direction: any) {
					dispatch('moveOutOf', parseDirection(direction));
					dispatch('outOf', parseDirection(direction));
					dispatch('outOfOnly', parseDirection(direction));
				},
				selectOutOf(direction: any) {
					dispatch('selectOutOf', parseDirection(direction));
					dispatch('outOf', parseDirection(direction));
					dispatch('outOfOnly', parseDirection(direction));
				},
				deleteOutOf(direction: any) {
					dispatch('deleteOutOf', parseDirection(direction));
					dispatch('outOf', parseDirection(direction));
				},
				enter() {
					dispatch('enter');
				}
			}
		});

		if (autofocus) mathField.focus();
	});
</script>

<span
	class={clazz}
	style={(noBorderOutline ? 'border: none; outline: none; box-shadow: none;' : '') + style}
	bind:this={spanElement}
/>
