<script lang="ts">
    import { page } from "$app/stores"
    import Button from "$lib/components/Button.svelte"
    import { formData } from "../store";
    import FormPage from "./OnboardingForm.svelte"
    import { goto } from "$app/navigation"

    let formNode: HTMLFormElement;
    let formPageNode: FormPage;

    let pageIndex = 0;
    let totalPages = $page.data.pages.length;
    let storeIndex: string[] = ["priceRange", "cookSkills", "meals", "breakfast", "dinner", "supper", "allergy", "tea"];

    const fillBars = (num: number): boolean[] => {
        let res: boolean[] = []
        for (let i = 0; i < num; i++) {
            res.push(true)
        }
        for (let i = 0; i < totalPages - num; i++) {
            res.push(false)
        }
        return res;
    }

    const handlePageInc = () => {
        if (!formNode.checkValidity())
            return;
        if (pageIndex + 1 == totalPages) {
            goto("/app")
            return;
        }
        
        if (currPage.form.type === "select-multiple" || currPage.form.type === "grid" || currPage.form.type === "two-grid") {
            let checked = document.querySelectorAll('input[type=checkbox]:checked');
            if (checked.length < 1) {
                return;
            }
        }

        let data = new FormData(formNode);
        //@ts-ignore
        formData[storeIndex[pageIndex]].set(Array.from(data.keys()))

        pageIndex += 1;
    }

    $: currPage = $page.data.pages[pageIndex];
    $: barData = fillBars(pageIndex + 1)
</script>

<section
    id="main"
    class="h-screen flex flex-col place-content-start place-items-center p-4 gap-y-[22px]"
>
    <div class="flex gap-x-[5px] w-full min-h-[8px] h-2 mt-4 mb-4">
        {#each barData as isActive, i}
            <!-- svelte-ignore a11y-no-static-element-interactions -->  
            <div
                on:click={() => { pageIndex = i}}
                on:keydown
                class:active={isActive}
                class="bar h-full w-full rounded-[5px] cursor-pointer"
            />
        {/each}
    </div>

    <div class="px-1 pt-5 place-self-start font-bold text-[24px]">
        {currPage.title}
    </div>

    <form bind:this={formNode} class="w-full px-1">
        <FormPage bind:this={formPageNode} formData={currPage.form}/>
    </form>

    <div class="w-full place-self-end mt-auto pb-4">
        <Button on:click={handlePageInc}>Далее</Button>
    </div>
</section>

<style lang="scss">
    .bar {
        &.active {
            background: theme("colors.orange-accent") !important;
        }
        background: theme("colors.light-gray");
    }
</style>
