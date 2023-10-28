<script lang="ts">
    type Product = {
        img: string
        name: string
    }

    export let products: Product[] = []
</script>

<span class="font-bold text-black text-[24px]"> Категории по продуктам </span>

<div class="flex gap-x-2 horscroll max-w-full py-4 h-[150px]">
    {#each products as product}
        <div
            class="flex flex-col place-items-center gap-y-1 place-content-between w-[107px] h-[107px]"
        >
            <img
                class="rounded-[20px] w-[107px] h-[107px] select-none"
                src={product.img}
                alt={product.name}
            />
            <div
                class="font-medium leading-[150%] text-[14px] text-center w-[107px]"
            >
                {product.name}
            </div>
        </div>
    {/each}
</div>
