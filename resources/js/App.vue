<template>
    <main>
        <header-component-vue ></header-component-vue>

        <WelcomeVue />
        <footer-component-vue></footer-component-vue>
    </main>
</template>


<script>
    import HeaderComponentVue from "./components/HeaderComponent.vue";
    import FooterComponentVue from "./components/FooterComponent..vue";
    import WelcomeVue from "./pages/Welcome.vue";

    export default{
        components:{
            HeaderComponentVue,
            FooterComponentVue,
            WelcomeVue,

        }
    }
</script>



