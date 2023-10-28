<script lang="ts">
    import search from "$lib/assets/icons/search.svg?raw"
    import home from "$lib/assets/icons/home.svg?raw"
    import fridge from "$lib/assets/icons/fridge.svg?raw"
    import fridgeFull from "$lib/assets/icons/fridge-full.svg?raw"
    import profile from "$lib/assets/icons/profile.svg?raw"
    import NavIcon from "$lib/components/NavIcon.svelte"
</script>

<nav class="place-self-end h-20 fixed place-content-center top-[calc(100%-80px)] w-full flex gap-x-3 z-10 bg-white">
    <NavIcon
        icon={home}
        fill={true}
        href="/app"
        title="Главная"
    />
    <NavIcon
        icon={search}
        fill={true}
        href="/app/explore"
        title="Поиск"
    />
    <NavIcon
        icon={fridge}
        replace={fridgeFull}
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
<section
    class="min-h-[calc(100vh-80px)] flex flex-col place-content-start place-items-center px-4 pt-4 pb-20 gap-y-[22px]"
>
    <div class="w-full">
        <slot />
    </div>
</section>
