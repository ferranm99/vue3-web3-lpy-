<template>
  <HeaderSection />
  <PowerSection />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/home/HeaderSection.vue'
import PowerSection from '../container/home/PowerSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

export default {
  name: 'Home',
  components: {
    HeaderSection,
    PowerSection,
    FooterSection
  }
}
</script>

<style>

</style>
