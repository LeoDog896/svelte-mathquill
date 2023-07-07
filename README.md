# [svelte-mathquill](https://leodog896.github.io/svelte-mathquill)

A wrapper around MathQuill, a very intuitive math typing editor

`npm i -D svelte-mathquill`

## Usage

MathQuill uses legacy bundling, so using it can be tricky -- by wrapping around the CDN scripts, we can make it easier to use. The source code for the setup injection is [here](https://github.com/LeoDog896/svelte-mathquill/blob/main/src/lib/MathQuillSetup.svelte), in case you want to modify the imported scripts yourself or get the URLs for a service worker implementation.

In general, it depends on jQuery.js, and both mathquill.js and mathquill.css

Add this to your `+layout.svelte` or any wrapper file where you use MathQuill:

```html
<script>
	import { MathQuillSetup } from 'svelte-mathquill';
</script>

<MathQuillSetup />
```

This imports the necessary files globally.

Simple example:

```html
<script lang="ts">
	import { MathQuill } from 'svelte-mathquill';

	let latex = '';
</script>

<MathQuill bind:latex="{latex}" />
<br />
<input bind:value="{latex}" />
```

## Documetation

### Properties

`autofocus: boolean` - if the element should focus on mount

`latex: string (bindable & updates)` - the content of the element

`noBorderOutline: boolean` - if styling should be applied to remove borders / outlines. **Only use if you have a wrapper that's styled (outlines help accessibility!)**

`class: string` - classes to apply to the math element

`config: MathQuillConfig (updateable)` - Apply a config to the element.

### Events

Triggers when the text is edited: `on:edit={latex => ...}`

Triggers when the enter key is pressed: `on:enter={() => ...}`

#### Direction Events (L(eft) | R(ight) | U(p) | D(own))

Triggers when the up arrow is pressed: `on:upOutOf={() => ...}`

Triggers when the down arrow is pressed: `on:downOutOf={() => ...}`

Triggers when the right / left arrows are pressed: `on:moveOutOf={("L" | "R") => ...}`

Triggers when the content is selected out of: `on:selectOutOf={("L" | "R") => ...}`

Triggers when the content is deleted: `on:deleteOutOf={("L" | "R") => ...}`

Triggers when any out of is triggered: `on:outOf={("L" | "R" | "U" | "D") => ...}`

Triggers when any out of is triggered WITHOUT deleteOutOf: `on:outOfOnly={("L" | "R" | "U" | "D") => ...}`

### Functions

Focus the element: `mathQuillElement.focus()`

Unfocus the element: `mathQuillElement.blur()`

Refresh the element: `mathQuillElement.reflow()`

Select the current element: `mathQuillElement.select()`

Clear any active selection: `mathQuillElement.clearSelection()`

Mimic a keystroke (ex Shift-Left): `mathQuillElement.keystroke(string)`

Type Text: `mathQuillElement.typedText(string)`
