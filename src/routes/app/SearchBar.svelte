<script lang="ts">
    import filterIcon from '$lib/assets/icons/filter.svg?raw'
    import searchIcon from '$lib/assets/icons/search.svg?raw'

    export let filter: boolean = false;
    export let search: boolean = false;
    export let placeholder: string;

    export let value: string = '';
</script>

<div class="flex gap-x-[6px] max-h-[52px] mt-8">
    <div class="py-2 px-3 bg-light-gray cursor-text rounded-[22px] w-full transition-all leading-[150%] text-[14px] text-black gap-x-2 flex">
        {#if search}
            <div class="w-8 h-8 stroke-gray fill-none flex place-items-center place-content-center">
                {@html searchIcon}
            </div>
        {/if}
        <input bind:value on:input type="text" {placeholder} class="placeholder:text-gray w-full outline-none bg-light-gray"/>    
    </div>
    {#if filter}
        <div class="rounded-[15px] bg-light-gray p-[10px] w-[52px] h-[52px] flex place-items-center place-content-center cursor-pointer">
            {@html filterIcon}
        </div>
    {/if}
</div>
