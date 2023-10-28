<script lang="ts">
    import likeIcon from "$lib/assets/icons/like.svg?raw"
    import likedIcon from "$lib/assets/icons/liked.svg?raw"

    export let stroke_inherit: boolean = false;

    $: liked = false
    $: stroke_class = stroke_inherit ? "stroke-[inherit]" : "stroke-white"
</script>

<div class="w-8 h-8 flex place-content-center place-items-center {stroke_class}">
    <div class="w-8 h-8" on:keyup on:click={() => liked = !liked}>
        {#if liked}
            {@html likedIcon}
        {:else}
            {@html likeIcon}
        {/if}
    </div>
</div>

