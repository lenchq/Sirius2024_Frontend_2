<script lang="ts">
    import { get } from "svelte/store"
    import { formData } from "$lib/stores/boardingStore"
    import TinderCard from "./TinderCard.svelte"
    import Recommendations from "./Recommendations.svelte"

    let meals: string[]

    meals = get(formData.meals) //["Завтрак", "Обед", "Ужин", "Перекус"]//

    $: selectedMeal = meals ? meals[0] : ""
</script>

<div
    class=" py-4 font-bold relative flex flex-col place-items-center text-[24px]"
>
    <div class="px-2">Рецепт на ближайший приём пищи:</div>

    <div
        class="flex horscoll py-5 max-w-[calc(100%-20px)] overflow-auto relative gap-x-[15px]"
    >
        {#each meals.map((el) => el.toLowerCase()) as meal}
            <div
                class="flex font-bold text-[24px] text-gray cursor-pointer select-none"
                on:keydown
                on:click={() => (selectedMeal = meal.toLowerCase())}
                class:selected={selectedMeal.toLowerCase() ===
                    meal.toLowerCase()}
            >
                {meal}
            </div>
        {/each}
    </div>

    <TinderCard
        item={{
            img: "/waffle-t.png",
            ttc: 15,
            title: "Венские вафли с медом и черникой",
            ings: [
                "Яйца",
                "Мука",
                "Черника",
                "сахар",
                "сливочное масло",
                "молоко",
                "соль",
                "Разрыхлитель",
            ],
            features: {
                proteins: 10,
                fats: 46,
                carbohydrates: 55,
                calories: 676,
            },
        }}
    />

    <Recommendations />
</div>

<style lang="scss">
    // .horscroll {
    //     overflow-x: auto;
    //     scroll-behavior: smooth;
    //     scroll-snap-type: x mandatory;
    //     scrollbar-width: none;
    // }
    .selected {
        @apply text-orange-accent;
    }
</style>
