<script>
    import Icon from "$lib/components/Icon.svelte"
    import editIcon from '$lib/assets/icons/edit.svg?raw'
    import settingsIcon from '$lib/assets/icons/settings.svg?raw'
    import likeIcon from '$lib/assets/icons/liked.svg?raw'
    import alisa from '$lib/assets/icons/alisa.svg?raw'


</script>

<div class="flex flex-col py-5">
    <div class="flex w-full place-content-between place-items-center p-2">
        <Icon icon={editIcon} />
        <span class="text-red font-medium text-[16px] cursor-pointer">
            Выйти
        </span>
    </div>
    <div class="flex flex-col w-full place-content-center place-items-center py-2 my-5 gap-y-5">
        <img src="/ava.jpg" class="w-[95px] h-[95px] bg-cover object-cover rounded-[22px]" alt="some">
        <span class="font-bold text-[20px]">Иван Димитров</span>
    </div>
    <div class="text-white flex flex-col w-full rounded-[30px] gap-y-[14px] p-5 bg-[linear-gradient(96deg,#FFA011_0%,#EDBD75_100%)]">
        <div class="flex place-items-center  gap-x-2  font-bold text-[24px]">
            keepfoód <span class="py-1 px-2 rounded-[15px] bg-white text-orange-accent text-[16px]">family</span>
        </div>
        <div class="text-[14px]">
            Испытайте все преимущества сервиса с подпиской Keepfoód family
        </div>
        <div class="font-bold text-[24px]">
            349,00₽ <span class="text-[14px] font-medium">/мес</span>
        </div>
    </div>
    <div class="flex my-5 flex-col gap-y-[15px]">
        <a href="/app/profile/settings" class="flex place-items-center gap-x-[17px] cursor-pointer text-black w-fit">
            <Icon padding={15} icon={settingsIcon} />
            <span class="font-bold">Настройки</span>
        </a>
        <a href="/app/profile/" class="flex place-items-center gap-x-[17px] cursor-pointer text-black w-fit">
            <Icon padding={15} icon={alisa} />
            <span class="font-bold">Яндекс.Алиса</span>
        </a>
        <a href="/app/profile/" class="flex place-items-center gap-x-[17px] cursor-pointer text-black w-fit">
            <Icon padding={15} icon={likeIcon} />
            <span class="font-bold">Избранное</span>
        </a>
    </div>

</div>