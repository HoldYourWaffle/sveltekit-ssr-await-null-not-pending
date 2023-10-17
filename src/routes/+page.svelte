<script lang="ts">
    import { browser } from "$app/environment"
    import { doClientOnlyShenanigans } from '$lib/client-only'

    let clientOnlyPromise: Promise<string>
    if (browser) {
        clientOnlyPromise = doClientOnlyShenanigans()
    } /*else {
        // Workaround: never resolving promise on the server to force rendering only the pending-state
        clientOnlyPromise = new Promise(() => {})
    }*/
</script>

<!--
    FIXME: during SSR clientOnlyPromise will remain undefined
    This renders the fullfiled branch of the await block,
    even though the documentation explicitly states that only the pending state will be rendered on the server.
    See: https://svelte.dev/docs/logic-blocks#await

    In this example this causes a flash of "undefined" on the page before hydration.
    In real world applications this can cause much more severe issues like layout shifts :(
-->

{#await clientOnlyPromise}
    <p>Loading...</p>
{:then clientOnlyValue}
    <p>Loaded!</p>
    {clientOnlyValue}
{/await}
