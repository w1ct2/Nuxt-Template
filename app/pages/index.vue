<template>
    <Header />
    <main class="main">
        <HeroOffset />
        <HeroCentred />
        <HeroSplit />
        <HeroOffsetWithTabs />
        <HeroTiles></HeroTiles>
    </main>
    <Footer />
</template>

<script setup>
import HeroOffset from '~/components/Hero/HeroOffset.vue';
import HeroCentred from '~/components/Hero/HeroCentred.vue';
import HeroSplit from '~/components/Hero/HeroSplit.vue';
import HeroOffsetWithTabs from '~/components/Hero/HeroOffsetWithTabs.vue';
import Header from '~/components/Header/Header.vue';
import Footer from '~/components/Footer/Footer.vue';
import HeroTiles from '~/components/Hero/HeroTiles.vue';
</script>

<style scoped>

</style>