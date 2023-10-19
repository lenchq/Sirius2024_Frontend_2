<script lang="ts">
    import checkedIcon from "$lib/assets/icons/checked.svg?raw"
    import uncheckedIcon from "$lib/assets/icons/unchecked.svg?raw"
    import { uuid } from "$lib"

    export let radio: boolean = false
    export let label: string = ""
    export let name: string = ""
    export let value: string = ""

    let checked: boolean
    let id: string = uuid()
</script>

{#if radio}
    <input
        {id}
        {name}
        type="radio"
        class="hidden"
        bind:group={value}
        on:keydown
        required
    />
    <label
        for={id}
        class="text-center"
    >
        {label}
    </label>
{:else}
    <input
        {id}
        type="checkbox"
        class="hidden"
        {name}
        bind:checked
    />
    <div>
        <label
            class="text-left items-center !p-5 !flex-row gap-x-3"
            for={id}
            ><div class="inline w-4 h-4">
                {#if checked}
                    {@html checkedIcon}
                {:else}
                    {@html uncheckedIcon}
                {/if}
            </div>
            <span>
                {label}
            </span>
        </label>
    </div>
{/if}

<style lang="scss">
    label {
        @apply flex flex-col py-3 px-4 bg-light-gray
         text-black leading-[150%] cursor-pointer select-none rounded-[20px] my-5;
    }
    input:checked + label,
    input:checked + div > label {
        background: theme("colors.orange-accent") !important;
        color: theme("colors.white") !important;
    }
</style>
