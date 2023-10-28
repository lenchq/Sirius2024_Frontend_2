<script lang="ts">
    import Like from "$lib/components/Like.svelte"
    import { Motion, useAnimation, useTransform } from "svelte-motion"
    import { useMotionValue } from "svelte-motion"

    type TinderCardItem = {
        img: string
        ttc: number
        title: string
        ings: string[]
        features: {
            calories: number
            proteins: number
            fats: number
            carbohydrates: number
        }
    }

    const maxRotate = 80

    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-50, 50])
    const opacity = useTransform(
        x,
        [-maxRotate, -maxRotate + 50, 0, maxRotate - 50, maxRotate],
        [0, 1, 1, 1, 0],
    )
    const controls = useAnimation()

    export let item: TinderCardItem
</script>

<Motion
    drag="x"
    animate={controls}
    style={{ x, rotate, opacity }}
    dragConstraints={{ left: -1000, right: 1000 }}
    let:motion
    onDrag={(e, i) => {
        console.log(i.offset)
    }}
    onDragEnd={(event, info) => {
        // controls.start({ x: 0 });
        // If the card is dragged only upto 150 on x-axis
        // bring it back to initial position
        // console.log(info.point)
        if (Math.abs(info.offset.x * 1.5) <= maxRotate) {
            controls.start({ x: 0 })
        } else {
            // If card is dragged beyond 150
            // make it disappear

            // Making use of ternary operator
            controls.start({
                x: info.offset.x * 1.5 < 0 ? -maxRotate : maxRotate,
            })
        }
    }}
>
    <div
        use:motion
        class="my-4 card select-none cursor-pointer rounded-[30px] w-full h-[55vh] flex flex-col p-[15px] text-white bg-no-repeat bg-cover"
        style="background-image:linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0) 26.56%
        ),
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 32.81%,
            rgba(0, 0, 0, 0.35) 47.4%,
            rgba(0, 0, 0, 0.8) 82.29%
        ), url('{new URL(item.img, import.meta.url).href}');"
    >
        <div
            class="icons flex gap-x-[10px] w-full place-content-end place-items-center place-self-start"
        >
            <div class="icon">
                {item.ttc} мин
            </div>
            <div class="icon slim">
                <Like />
            </div>
        </div>
        <div class="spacer h-full" />
        <div class="title font-bold text-center text-[24px]">
            {item.title}
        </div>
        <div
            class="ings leading-[160%] uppercase font-medium text-[12px] text-center py-[15px]"
        >
            {item.ings.join(" • ")}
        </div>
        <div class="attrs flex gap-x-[14px] w-full place-content-around">
            <div class="attr">
                <span class="title">Калорийность</span>
                <span class="value">{item.features.calories}</span>
                <span class="unit">ккал</span>
            </div>
            <div class="attr">
                <span class="title">Белки</span>
                <span class="value">{item.features.proteins}</span>
                <span class="unit">ккал</span>
            </div>
            <div class="attr">
                <span class="title">Жиры</span>
                <span class="value">{item.features.fats}</span>
                <span class="unit">ккал</span>
            </div>
            <div class="attr">
                <span class="title">Углеводы</span>
                <span class="value">{item.features.carbohydrates}</span>
                <span class="unit">ккал</span>
            </div>
        </div>
    </div>
</Motion>

<style lang="scss">
    .attrs .attr {
        @apply flex flex-col gap-y-[3px] place-items-center place-content-between text-white;

        .title,
        .unit {
            @apply font-medium text-[12px] leading-[150%];
        }
        .unit {
            @apply text-gray;
        }
        .value {
            @apply font-bold text-[20px];
        }
    }
    .icon {
        @apply px-4 py-3 rounded-[15px] cursor-pointer font-semibold text-[14px] leading-[150%] h-full flex place-items-center;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(2.5px);
        &.slim {
            @apply p-[10px];
        }
    }
</style>
