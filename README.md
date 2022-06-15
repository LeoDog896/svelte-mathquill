# svelte-mathquill

A wrapper around MathQuill, a very intuitive math typing editor

## Usage

MathQuill is legacy, so using it can be tricky -- this library solves *some* issues but not all:

Add this to your `__layout.svelte` or any wrapper file where you use MathQuill:

```html
<svelte:head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="../../node_modules/mathquill/build/mathquill.min.js"/>
  <link rel="stylesheet" href="../../node_modules/mathquill/build/mathquill.css"/>
</svelte:head>
```

This imports the necessary files globally.

Simple example:

```html
<script lang="ts">
  import MathQuill from "$lib/MathQuill.svelte";

  let latex = ""
</script>

<MathQuill bind:latex={latex}/>
<br/>
<input bind:value={latex}/>
```

```