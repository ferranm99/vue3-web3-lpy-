<template>
  <HeaderSection />
  <ContentSection />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/update/HeaderSection.vue'
import ContentSection from '../container/update/ContentSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

export default {
  name: 'Update',
  components: {
    HeaderSection,
    ContentSection,
    FooterSection
  }
}
</script>

<style>

</style>