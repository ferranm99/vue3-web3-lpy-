<template>
  <HeaderSection />
  <ContentSection />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/partner/HeaderSection.vue'
import ContentSection from '../container/partner/ContentSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

export default {
  name: 'Partner',
  components: {
    HeaderSection,
    ContentSection,
    FooterSection
  }
}
</script>

<style>

</style>