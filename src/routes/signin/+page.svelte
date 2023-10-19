<script>
    import signinBanner from "$lib/assets/images/signinBanner.png"
    import Button from "$lib/components/Button.svelte"
    import Input from "$lib/components/Input.svelte"
</script>

<section

    id="main"
    class="h-screen flex place-content-start place-items-center flex-col"
>
    <div
        style="background-image: url({signinBanner})"
        id="empty"
        class="h-[60%] w-full bg-cover"
    />
    <div
        class="bg-white w-full h-max flex flex-col -mt-10 gap-y-[22px] rounded-t-[30px] p-5 relative z-10"
    >
        <span class="text-3xl font-bold place-self-center"> Войти </span>

        <Input
            type="email"
            placeholder="Email"
        />
        <Input
            type="password"
            placeholder="Введите пароль"
        />

        <Button to="/onboarding">Войти</Button>
        <span class="text-gray text-[14px] place-self-center">
            Нет аккаунта? <a href="/">Зарегистрируйтесь!</a>
        </span>
    </div>
</section>
