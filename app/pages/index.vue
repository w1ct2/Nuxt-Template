<template>
    <Header />
    <main class="main">
        <HeroOffset />
        <!-- <HeroCentred />
        <HeroSplit />
        <HeroOffsetWithTabs />
        <HeroTiles></HeroTiles> -->
        
        <!-- <FeaturesInline />
        <FeaturesCentred2x2 />
        <FeaturesProdScreenshot /> -->
        <FeaturesOffset2x2 />
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
import FeaturesInline from '~/components/Features/FeaturesInline.vue';
import FeaturesCentred2x2 from '~/components/Features/FeaturesCentred2x2.vue';
import FeaturesProdScreenshot from '~/components/Features/FeaturesProdScreenshot.vue';
import FeaturesOffset2x2 from '~/components/Features/FeaturesOffset2x2.vue';
</script>

<style scoped>
</style>
