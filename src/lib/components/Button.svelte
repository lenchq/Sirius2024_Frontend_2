<script lang="ts">
    export let to: string | null = null
    export let secondary: boolean = false

    $: coloring = secondary
        ? "bg-white text-black hover:bg-[#D3D3D3]"
        : "bg-orange-accent text-white hover:bg-[#E18D0F]"
</script>

{#if to}
    <a
        href={to}
        class=" block w-full"
    >
        <div on:click on:keyup class="btn {coloring}">
            <slot />
        </div>
    </a>
{:else}
    <div on:click on:keyup class="btn {coloring}">
        <slot />
    </div>
{/if}

<style lang="scss">
    .btn {
        @apply py-[18px] cursor-pointer rounded-[16px] w-full text-center transition-colors select-none;
    }
</style>
