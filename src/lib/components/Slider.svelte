<script lang="ts">
    //@ts-ignore
    import Slider from "@bulatdashiev/svelte-slider"
    import rangeSlide from "$lib/assets/icons/range-slide.svg?raw"

    export let caption: string = ""
    export let min: number = 0
    export let max: number = 1000
    export let initial: [number, number] = [300, 500]

    let range: [number, number] = initial
</script>

<div class="flex flex-col">
    <div class="flex place-content-between place-items-center">
        <span class="font-bold text-[20px]">
            {caption}
        </span>
        <span class="text-[16px] text-orange-accent">
            {range[0]}₽ - {range[1]}₽
        </span>
    </div>
    <div
        id="slider-div"
        class="flex flex-col px-[1.5px]"
    >
        <Slider
            step={50}
            {max}
            {min}
            name={["from", "to"]}
            bind:value={range}
            range
            order
        >
            <span slot="left">{@html rangeSlide}</span>
            <span slot="right">{@html rangeSlide}</span>
        </Slider>
        <div class="flex place-content-between place-items-center">
            <span class="">{min}₽</span>
            <span class="">{max}₽</span>
        </div>
    </div>
</div>

<style lang="scss">
    #slider-div {
        --track-bg: theme("colors.light-gray");
        --progress-bg: theme("colors.orange-accent");
        // --thumb-bg: theme("colors.orange-accent");
        --thumb-bg: transparent;
        .track {
            height: 6px !important;
            span {
                height: 25px;
                width: 25px;
            }
        }
    }
</style>
