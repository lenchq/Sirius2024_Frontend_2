<script lang="ts">
    import { page } from "$app/stores"

    export let icon: any
    export let href: string
    export let title: string
    export let fill: boolean = false;
    // export let selected: boolean;

    $: selected = $page.route.id === href
</script>

<a
    {href}
    class="block"
>
    <div
        class="p-2 flex flex-col gap-y-2 place-content-center place-items-center justify-between"
    >
        <div
            class="nav-icon fill-transparent stroke-gray"
            class:fill={selected && fill}
            class:selected
        >
            {@html icon}
        </div>
        <span
            class="nav-text text-gray !font-[300]"
            class:selected
        >
            {title}
        </span>
    </div>
</a>

<style lang="scss">
    .selected {
        color: theme("colors.orange-accent");
        stroke: theme("colors.orange-accent");
    }
    .fill {
        fill: theme("colors.orange-accent");
    }
    
</style>
