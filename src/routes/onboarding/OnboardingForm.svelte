<script lang="ts">
    import Slider from "$lib/components/Slider.svelte"
    import Select from "$lib/components/Select.svelte"
    import type {
        GridForm,
        SearchGridForm,
        SelectMultipleForm,
        SelectOneForm,
        SliderForm,
        TwoGridForm,
    } from "./proxy+page"
    import Grid from "$lib/components/Grid.svelte"

    export let formData:
        | SliderForm
        | SelectOneForm
        | SelectMultipleForm
        | GridForm
        | TwoGridForm
        | SearchGridForm
</script>

{#if formData.type == "slider"}
    <Slider
        {...formData}
        initial={[500, 700]}
    />
{:else if formData.type == "select-one"}
    {#each formData.options as option, i}
        <Select
            radio
            label={option}
            name={"select-one"}
            value={i.toString()}
        />
    {/each}
{:else if formData.type === "select-multiple"}
    {#each formData.options as option, i}
        <Select
            label={option}
            name={option}
        />
    {/each}
{:else if formData.type === "grid"}
    <Grid items={formData.options} />
{:else if formData.type === "search-grid"}
    <Grid
        search
        items={formData.options}
    />
{:else if formData.type === "two-grid"}
    <Grid
        two
        items={formData.options}
    />
{/if}
