<script>
  const options = ["yarro", "herro", "merro"];

  let chosen;
  let text;
</script>

<div>
  <select bind:value={chosen}>
    {#each options as value}
      <!-- content here -->
      <option {value}>{value}</option>
    {/each}
  </select>
  <input type="text" bind:value={text} />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: papayawhip;
  }
</style>
