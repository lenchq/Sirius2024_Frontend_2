<script lang="ts">
    import { Toggle } from 'flowbite-svelte';
    import arrow from '$lib/assets/icons/arrow.svg?raw'
    import Icon from '$lib/components/Icon.svelte'
    export let category: string = "";
    export let title: string = "";
    export let description: string = "";
    export let checkbox: boolean = false;
    export let setting: boolean = false;
</script>

<div class="flex flex-col gap-y-[10px]">
    <div class="leading-[19.2px] font-bold uppercase text-[12px] text-gray">
        {category}
    </div>
    <div class="flex font-medium place-content-between">
        <div class="flex flex-col place-content-center font-bold">
            <span class="text-[14px]">
                {title}
            </span>
            <span class="text-[12px] text-gray font-semibold">
                {description}
            </span>
        </div>
        <div class="flex place-content-center place-items-center">
            {#if checkbox}
                <Toggle checked classDiv="bg-gray peer-focus:ring-orange-accent/40 dark:peer-focus:ring-orange-accent peer-checked:bg-orange-accent checkbox" customSize="after:h-8 after:w-8"/>
            {:else if setting}
                <Icon icon={arrow} class="rotate-180" bg="none" />
            {/if}
        </div>
    </div>
</div>