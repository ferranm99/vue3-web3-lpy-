<template>
  <HeaderSection />
  <ContentSection />
  <FaqSection />
  <BlockchainSection />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/brand/HeaderSection.vue'
import ContentSection from '../container/brand/ContentSection.vue'
import FooterSection from '../components/common/FooterSection.vue'
import FaqSection from '../container/brand/FaqSection.vue'
import BlockchainSection from '../container/brand/BlockchainSection.vue'

export default {
  name: 'Brand',
  components: {
    HeaderSection,
    ContentSection,
    FaqSection,
    BlockchainSection,
    FooterSection
  }
}
</script>

<style>

</style>