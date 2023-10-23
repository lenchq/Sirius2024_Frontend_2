import { writable } from "svelte/store";

export const formData = {
    priceRange: writable([0,0]),
    cookSkills: writable(0),
    meals: writable([]),
    breakfast: writable([]),
    dinner: writable([]),
    supper: writable([]),
    snack: writable([]),
    allergy: writable([]),
    tea: writable([]),
}