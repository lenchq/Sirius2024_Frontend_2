<script lang="ts">
    import { onMount } from "svelte"
    import { formData } from "../../lib/stores/boardingStore"
    import { get } from "svelte/store"
    import search from "$lib/assets/icons/search.svg?raw"
    import home from "$lib/assets/icons/home.svg?raw"
    import fridge from "$lib/assets/icons/fridge.svg?raw"
    import profile from "$lib/assets/icons/profile.svg?raw"
    import NavIcon from "$lib/components/NavIcon.svelte"
    import { page } from "$app/stores"

    let meals: string[]

    onMount(() => {
        meals = get(formData.meals)
    })
</script>

<section
    class="min-h-[calc(100vh-80px)] flex flex-col place-content-start place-items-center p-4 gap-y-[22px]"
>
    {get(formData.priceRange)}
    {get(formData.breakfast)}
    {get(formData.dinner)}
    {get(formData.tea)}
    {get(formData.tea)}
    {get(formData.tea)}

    <div>
        {$page.route.id}
        <slot />
    </div>
</section>
<nav class="place-self-end h-20 place-content-center flex gap-x-3 max-w-full">
    <NavIcon
        icon={home}
        fill={true}
        href="/app"
        title="Главная"
    />
    <NavIcon
        icon={search}
        href="/app/explore"
        title="Поиск"
    />
    <NavIcon
        icon={fridge}
        href="/app/fridge"
        title="Холодильник"
    />
    <NavIcon
        fill={true}
        icon={profile}
        href="/app/profile"
        title="Профиль"
    />
</nav>
