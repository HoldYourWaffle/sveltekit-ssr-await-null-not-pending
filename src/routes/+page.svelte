<svelte:head>
    <title>Hello World!</title>
</svelte:head>

{#await import("$lib/ClientOnlyComponent.svelte")}
    <p>Loading...</p>
{:then ClientOnlyComponent}
    <p>Loaded!</p>
    <svelte:component this={ClientOnlyComponent.default} />
{/await}
