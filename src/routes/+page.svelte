<script lang="ts">
    import type { ComponentType } from "svelte"
    import { browser } from "$app/environment"
    import type ClientOnlyComponent from "$lib/ClientOnlyComponent.svelte"

    let ClientOnlyComponent: Promise<ComponentType<ClientOnlyComponent>>
    if (browser) {
        ClientOnlyComponent = import("$lib/ClientOnlyComponent.svelte").then((module) => module.default)
    }
</script>

<svelte:head>
    <title>Hello World!</title>
</svelte:head>

<!--
    FIXME during SSR ClientOnlyComponent will remain undefined
    This renders the fullfiled branch of the await block,
    even though the documentation explicitly states that only the pending state will be rendered on the server.
    See: https://svelte.dev/docs/logic-blocks#await
-->
{#await ClientOnlyComponent}
    <p>Loading...</p>
{:then ClientOnlyComponent}
    <p>Loaded!</p>
    <svelte:component this={ClientOnlyComponent} />
{/await}
