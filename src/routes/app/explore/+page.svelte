<script>
    import Products from "../Products.svelte"
    import Recommendations from "../Recommendations.svelte"
    import SearchBar from "../SearchBar.svelte"

</script>


<SearchBar placeholder="Введите название рецепта" filter={true} search={true}/>
<Products products={[
    {
        img: '/image 10.png',
        name: 'Яйца',
    },
    {
        img: '/milk.png',
        name: 'Молоко',
    },
    {
        img: '/choco2.png',
        name: 'Шоколад',
    },
    {
        img: '/choco2.png',
        name: 'Шоколад',
    },
    {
        img: '/choco2.png',
        name: 'Шоколад',
    },
    {
        img: '/choco2.png',
        name: 'Шоколад',
    },{
        img: '/choco2.png',
        name: 'Шоколад',
    },{
        img: '/choco2.png',
        name: 'Шоколад',
    },{
        img: '/choco2.png',
        name: 'Шоколад',
    },{
        img: '/choco2.png',
        name: 'Шоколад',
    },
]} />
<Recommendations />