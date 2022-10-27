<template>
  <HeaderSection />
  <ContentSection />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/roadmap/HeaderSection.vue'
import ContentSection from '../container/roadmap/ContentSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

export default {
  name: 'Roadmap',
  components: {
    HeaderSection,
    ContentSection,
    FooterSection
  }
}
</script>

<style>

</style>