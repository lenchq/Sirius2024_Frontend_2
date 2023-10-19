<script lang="ts">
    export let type: string = "text";
    export let placeholder: string = "";

    // $: secondary_class = secondary ? "bg-white text-black hover:bg-[#D3D3D3]" : "bg-orange-accent text-white hover:bg-[#E18D0F]";
</script>

<div class="py-4 px-5 bg-light-gray cursor-text rounded-[22px] w-full transition-all leading-[150%] text-[14px] text-black">
    <input on:input {type} {placeholder} class="placeholder:text-gray w-full outline-none bg-light-gray"/>
</div>
