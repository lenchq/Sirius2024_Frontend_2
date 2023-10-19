<script lang="ts">
    import { uuid } from "$lib"
    import Input from "./Input.svelte"
    import checkIcon from "$lib/assets/icons/check.svg?raw"

    export let items: { title: string; img: string }[] = []
    export let search: boolean = false
    export let two: boolean = false;

    let filterText: string = ""

    $: grid_class = two ? "grid-rows-2 grid-cols-1" : "grid-cols-3 grid-rows-3"

    function filter(event: any) {
        filterText = event.target.value
    }
</script>

{#if search}
    <div class="pb-5">
        <Input
            on:input={filter}
            placeholder={"Введите название продукта"}
        />
    </div>
{/if}
<div class="grid {grid_class} gap-x-2 gap-y-8">
    {#each items as item, i (item.title)}
        <!-- emulate search function -->
        {#if item.title.toLowerCase().indexOf(filterText) >= 0}
            {@const id = uuid()}
            <input
                type="checkbox"
                name={item.title}
                {id}
                class="hidden"
            />
            <label
                for={id}
                class="flex flex-col gap-y-[10px] place-items-center cursor-pointer"
            >
                <span class="check relative hidden top-1/2 z-10">
                    {@html checkIcon}
                </span>
                <img
                    src="/src/lib/assets/images/{item.img}"
                    alt={item.img}
                    class="h-25 w-25 rounded-[20px]"
                    class:twoimg={two}
                />
                <span class="leading-4 text-center">
                    {item.title}
                </span>
            </label>
        {/if}
    {/each}
</div>

<style lang="scss">
    input:checked + label {
        img {
            filter: brightness(0.55)
        }
        & {
            margin-top: -40px;
        }
        span.check {
            display: block !important;
        }
    }
</style>