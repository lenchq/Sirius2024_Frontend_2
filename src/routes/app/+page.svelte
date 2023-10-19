<script lang="ts">
    import { formData } from "../store";
    import { get } from "svelte/store";

</script>

{get(formData.priceRange)}
{get(formData.meals)}
{get(formData.breakfast)}
{get(formData.dinner)}
{get(formData.tea)}
{get(formData.tea)}
{get(formData.tea)}