<script lang="ts">
    export let icon: any;
    export let padding: number = 10;
    let clazz: string = "";
    export let bg: string = "light-gray";
    export { clazz as class };
</script>

<div style="padding: {padding}px;" class="bg-{bg} rounded-[15px] cursor-pointer {clazz}">
    {@html icon}
</div>