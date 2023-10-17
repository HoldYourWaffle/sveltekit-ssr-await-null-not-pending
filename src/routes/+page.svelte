<script lang="ts">
    let ClientOnlyComponent = import("$lib/ClientOnlyComponent.svelte")
</script>

<svelte:head>
    <title>Hello World!</title>
</svelte:head>

{#await ClientOnlyComponent}
    <p>Loading...</p>
{:then ClientOnlyComponent}
    <p>Loaded!</p>
    <svelte:component this={ClientOnlyComponent.default} />
{/await}
