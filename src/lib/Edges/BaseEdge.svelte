<script lang="ts">
  import EdgeText from "$lib/Edges/EdgeText.svelte";
  import type { EdgeProps } from "$lib/types/types";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let baseEdgeProps: EdgeProps;

  // destructuring the props passed in from the parent component
  $: ({
    id,
    path,
    label,
    labelBgColor,
    labelTextColor,
    edgeColor,
    centerX,
    centerY,
  } = baseEdgeProps);

  // setting edge text props
  $: edgeTextProps = {
    label: label,
    labelBgColor: labelBgColor,
    labelTextColor: labelTextColor,
    centerX: centerX,
    centerY: centerY,
  };
</script>

<path
  on:click={() => dispatch("removeEdge", id)}
  d={path}
  fill="transparent"
  stroke={edgeColor ? edgeColor : "gray"}
  aria-label="svg-path"
/>

{#if edgeTextProps.label}
  <EdgeText {edgeTextProps} />
{/if}

<style>
  path:hover {
    stroke: red;
    stroke-width: 3px;
  }
</style>
