<script lang="ts">
    import './style.scss'
    import { slide } from "svelte/transition"
    // import { page } from "$app/stores";
</script>

<div
    class="w-screen min-h-screen"
    id="app"
    
>
    <slot />
</div>
