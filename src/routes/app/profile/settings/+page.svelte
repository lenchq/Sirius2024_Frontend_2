<script>
    import arrow from '$lib/assets/icons/arrow.svg?raw'
    import Icon from '$lib/components/Icon.svelte'
    import SettingSection from './SettingSection.svelte'
    import './toggle.scss';
</script>

<a href="/app/profile" class="flex place-items-center my-6 px-4 gap-x-3 text-black">
    <Icon icon={arrow} padding={15} />
    <span class="font-bold text-[24px]">Настройки</span>
</a>

<div class="flex flex-col gap-y-[30px] py-6 px-5">
    <SettingSection checkbox category="Приватность" title="Приватный аккаунт" description="Ваш аккаунт будет доступен к просмотру только вашим друзьям"/>
    <SettingSection checkbox category="Уведомления" title="Push-уведомления" />
    <SettingSection checkbox category="ЯНДЕКС АЛИСА" title="Голосовые команды" />
    <SettingSection setting category="Безопасность" title="Поменять пароль"/>
</div>