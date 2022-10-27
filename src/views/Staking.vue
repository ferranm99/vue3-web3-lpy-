<template>
  <HeaderSection />
  <ContentSection />
  <RewardSection />
  <FaqSection v-if='false' />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/staking/HeaderSection.vue'
import ContentSection from '../container/staking/ContentSection.vue'
import RewardSection from '../container/staking/RewardSection.vue'
import FaqSection from '../container/staking/FaqSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

export default {
  name: 'Partner',
  components: {
    HeaderSection,
    ContentSection,
    RewardSection,
    FaqSection,
    FooterSection
  }
}
</script>

<style>

</style>