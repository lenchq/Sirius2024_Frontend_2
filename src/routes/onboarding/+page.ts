import type { PageLoad } from "./$types"

export type OnboardingType = {
    pages: ({ title: string } & {
        form:
            | SliderForm
            | SelectOneForm
            | SelectMultipleForm
            | GridForm
            | TwoGridForm
            | SearchGridForm
    })[]
}

export type Form = { type: string }

export type SliderForm = {
    type: "slider"
    caption: string
    min: number
    max: number
}
export type SelectOneForm = {
    type: "select-one"
    options: string[]
}
export type SelectMultipleForm = {
    type: "select-multiple"
    options: string[]
}
export type GridForm = {
    type: "grid"
    options: { title: string; img: string }[]
}
export type TwoGridForm = {
    type: "two-grid"
    options: { title: string; img: string }[]
}
export type SearchGridForm = {
    type: "search-grid"
    options: { title: string; img: string }[]
}

export const load: PageLoad = ({ params }): OnboardingType => {
    return {
        pages: [
            {
                title: "Укажите ваши финансовые возможности на приготовление одного блюда",
                form: {
                    type: "slider",
                    caption: "Стоимость блюда",
                    min: 150,
                    max: 2000,
                },
            },
            {
                title: "Как вы оцениваете свои кулинарные способности",
                form: {
                    type: "select-one",
                    options: [
                        "Я не очень умею готовить, смогу приготовить простые блюда",
                        "Я уже неплохо разбираюсь на кухне, умею готовить средние рецепты, но что-то сложное - не для меня",
                        "Я хорошо умею готовить, переодически готовлю сложные блюда",
                        "Я - шеф-повар, умею готовить блюда любой сложности, уверенно чувствую себя на кухне",
                    ],
                },
            },
            {
                title: "Укажите ваши приёмы пищи",
                form: {
                    type: "select-multiple",
                    options: ["Завтрак", "Обед", "Ужин", "Перекус"],
                },
            },
            {
                title: "Что бы вы выбрали на завтрак",
                form: {
                    type: "grid",
                    options: [
                        {
                            title: "Вафли",
                            img: "waffles.png",
                        },
                        {
                            title: "Йогурт",
                            img: "yogurt.png",
                        },
                        {
                            title: "Яйцо",
                            img: "eggs.png",
                        },
                        {
                            title: "Блины",
                            img: "pancakes.png",
                        },
                        {
                            title: "Хлопья",
                            img: "flakes.png",
                        },
                        {
                            title: "Сырники",
                            img: "sirniki.png",
                        },
                        {
                            title: "Сэндвич",
                            img: "sandwich.png",
                        },
                        {
                            title: "Каша",
                            img: "kasha.png",
                        },
                        {
                            title: "Фрукты",
                            img: "fruits.png",
                        },
                    ],
                },
            },
            {
                title: "Что бы вы выбрали на обед",
                form: {
                    type: "grid",
                    options: [
                        {
                            title: "Суп",
                            img: "soup.png",
                        },
                        {
                            title: "Паста",
                            img: "pasta1.png",
                        },
                        {
                            title: "Комплексный обед",
                            img: "flex.png",
                        },
                        {
                            title: "Рыба и гарнир",
                            img: "fishand.png",
                        },
                        {
                            title: "Роллы",
                            img: "roll.png",
                        },
                        {
                            title: "Плов",
                            img: "pilaf.png",
                        },
                        {
                            title: "Стейк",
                            img: "steak.png",
                        },
                        {
                            title: "Салат",
                            img: "salad.png",
                        },
                        {
                            title: "Овощной обед",
                            img: "vegs.png",
                        },
                    ],
                },
            },
            {
                title: "Что бы вы выбрали на ужин",
                form: {
                    type: "grid",
                    options: [
                        {
                            title: "Стейк и гарнир",
                            img: "steakand.png",
                        },
                        {
                            title: "Наггетсы",
                            img: "naggets.png",
                        },
                        {
                            title: "Салат",
                            img: "salad2.png",
                        },
                        {
                            title: "Курица",
                            img: "chicken.png",
                        },
                        {
                            title: "Пицца",
                            img: "pizza.png",
                        },
                        {
                            title: "Пельмени",
                            img: "pelmen.png",
                        },
                        {
                            title: "Печёный картофель",
                            img: "potato.png",
                        },
                        {
                            title: "Блины",
                            img: "pancakes.png",
                        },
                        {
                            title: "Паста",
                            img: "pasta2.png",
                        },
                    ],
                },
            },
            {
                title: "Что бы вы выбрали на перекус",
                form: {
                    type: "grid",
                    options: [
                        {
                            title: "Шоколад",
                            img: "choco1.png",
                        },
                        {
                            title: "Злаковый батончик",
                            img: "bounty.png",
                        },
                        {
                            title: "Свежие фрукты",
                            img: "fruits2.png",
                        },
                        {
                            title: "Смузи",
                            img: "smuzi.png",
                        },
                        {
                            title: "Печенье",
                            img: "cookies.png",
                        },
                        {
                            title: "Мармелад",
                            img: "marmelade.png",
                        },
                        {
                            title: "Fast food",
                            img: "fastfood.png",
                        },
                        {
                            title: "Орехи",
                            img: "nuts.png",
                        },
                        {
                            title: "Хлебцы",
                            img: "hleb.png",
                        },
                    ],
                },
            },
            {
                title: "На какие продукты у вас есть аллергия",
                form: {
                    type: "search-grid",
                    options: [
                        {
                            title: "Яйца",
                            img: "eggs.png",
                        },
                        {
                            title: "Молоко",
                            img: "milk.png",
                        },
                        {
                            title: "Шоколад",
                            img: "choco2.png",
                        },
                        {
                            title: "Рыба",
                            img: "fish.png",
                        },
                        {
                            title: "Клубника",
                            img: "straw.png",
                        },
                        {
                            title: "Орехи",
                            img: "nuts.png",
                        },
                    ],
                },
            },
            {
                title: "Что бы вы выбрали?",
                form: {
                    type: "two-grid",
                    options: [
                        {
                            title: "Кофе",
                            img: "coffee.png",
                        },
                        {
                            title: "Чай",
                            img: "tea.png",
                        },
                    ],
                },
            },
        ],
    }
}
