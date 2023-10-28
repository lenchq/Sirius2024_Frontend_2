<script>
    import mainBanner from "$lib/assets/images/mainBanner.png"
    import Button from "$lib/components/Button.svelte"
    import googleIcon from "$lib/assets/icons/google.svg"
    import "./style.scss"
</script>

<section

    style="background-image: url({mainBanner})"
    id="main"
    class="h-screen flex place-content-end place-items-start p-5 gap-y-[22px] flex-col"
>
    <span class="text-white text-3xl font-bold">
        Добро пожаловать в <br />
        <span class="text-orange-accent">keepfoód</span>
    </span>

    <span class="text-gray font-semibold leading-[150%] text-[16px]">
        Получайте каждый день уникальный рецепт, готовьте, наслаждайтесь.
    </span>

    <Button to="/signin">Войти через Email</Button>

    <Button
        to=""
        secondary
    >
        Продолжить через <img
            class="pl-2 inline"
            src={googleIcon}
            alt="google"
        />
    </Button>

    <span class="text-gray text-[14px] place-self-center pb-8">
        Нет аккаунта? <a href="/signup">Зарегистрируйтесь!</a>
    </span>
</section>

<style>
</style>
