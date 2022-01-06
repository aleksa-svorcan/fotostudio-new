<template>
  <q-page class="flex flex-center bg-black">
    <HomeHeroSection/>
    <HomeWhatWeDoSection/>
    <HomeSolutionsSection/>
    <HomeContactSection/>
  </q-page>
</template>

<script>
import HomeHeroSection from 'components/HomeHeroSection'
import HomeWhatWeDoSection from 'components/HomeWhatWeDoSection'
import HomeSolutionsSection from 'components/HomeSolutionsSection'
import HomeContactSection from 'components/HomeContactSection'
export default {
  name: 'PageIndex',
  components: {
    HomeHeroSection,
    HomeWhatWeDoSection,
    HomeSolutionsSection,
    HomeContactSection
  }
}
</script>
