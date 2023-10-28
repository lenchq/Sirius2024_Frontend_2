<script lang="ts">
    import { uuid } from "$lib"
    import SearchBar from "../SearchBar.svelte"
    import Fuse from "fuse.js"
    import Enumerable from "linq"
    import addIcon from '$lib/assets/icons/add.svg?raw'

    function capitalize(str: string): string {
        return str[0].toUpperCase() + str.substring(1);
    }

    // let items: string[] = [];
    let searchText: string = ""
    let selected: {id:string;name:string}[] = []
    const products: string[] = [
        "яблоко",
        "абрикос",
        "ананас",
        "кокос",
        "арбуз",
        "помидоры",
        "огурцы",
        "апельсины",
        "клубника",
        "ежевика",
        "брусника",
        "мука",
        "масло",
        "яйца",
        "лук",
        "укроп",
        "петрушка",
        "бананы",
    ]

    const fuse = new Fuse(products, {
        isCaseSensitive: false,
        includeScore: true,
    })

    $: items = Enumerable.from(fuse.search(searchText))
        .orderBy((x) => x.score)
        .select((x) => x.item)

    // console.log(JSON.stringify(Enumerable.from(products).select((x,i)=>{return{id:i,name:x}}).toArray()))

    function addItem(id: string, name: string) {
        selected.push({
            id,
            name
        });
        searchText = "";
        // console.log(selected)
    } 
    function removeItem(id: string) {
        selected = Enumerable.from(selected).where(x => x.id != id).toArray();
    }
</script>

<div class="w-full">
    <div class="font-bold text-[24px] pt-8">Мой холодильник</div>
    <SearchBar
        placeholder="Введите название продукта"
        search={true}
        bind:value={searchText}
    />
    <div class="py-4">
        {#if searchText.length > 0}
            <div class="flex flex-col bg-light-gray gap-y-[10px] p-2 rounded-[22px]">
                {#each items.take(4).toArray() as item (uuid())}
                    <div on:keydown on:click={() => addItem(uuid(), item)} class=" flex p-4 cursor-pointer place-items-center place-content-between">
                        <span>
                            {capitalize(item)}
                        </span> 
                        <div>
                            {@html addIcon}
                        </div>
                    </div>
                {/each}
            </div>
        {:else if selected.length === 0}
            <div
                class="flex mt-[25vh] text-center leading-[150%] text-[14px] place-items-center h-full w-full flex-1 place-content-center"
            >
                Это ваш холодильник, выберите продукты которые у вас есть чтобы
                рекомендации блюд были максимально удобными и точными для вас
            </div>
        {:else}
            <div class="flex flex-wrap gap-x-[10px] w-full text-[14px] font-medium gap-y-[10px]"> 
                {#each selected as item (item.id)}
                    <div class="p-[10px] w-[140px] bg-light-gray rounded-[15px] flex place-content-between">
                        <div>
                            {capitalize(item.name)}
                        </div>
                        <div class="rotate-45 cursor-pointer"  on:keydown on:click={() => removeItem(item.id)}>
                            {@html addIcon}
                        </div>
                    </div>
                {/each}
            </div>

        {/if}
    </div>
</div>
