# svelte-mathquill

A wrapper around MathQuill, a very intuitive math typing editor

`npm i -D svelte-mathquill`

## Usage

MathQuill is legacy, so using it can be tricky -- this library solves *some* issues but not all:

Add this to your `__layout.svelte` or any wrapper file where you use MathQuill:

```html
<script>
  import { MathQuillWrap } from 'svelte-mathquill';
</script>

<MathQuillSetup/>
```

This imports the necessary files globally.

Simple example:

```html
<script lang="ts">
  import { MathQuill } from "svelte-mathquill";

  let latex = ""
</script>

<MathQuill bind:latex={latex}/>
<br/>
<input bind:value={latex}/>
```

```