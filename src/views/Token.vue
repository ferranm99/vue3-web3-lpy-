<template>
  <HeaderSection />
  <BillionSection />
  <PurchaseSection />
  <MilestoneSection />
  <JourneySection />
  <BlockchainSection />
  <FooterSection />
</template>

<script>
import HeaderSection from '../container/token/HeaderSection.vue'
import BillionSection from '../container/token/BillionSection.vue'
import PurchaseSection from '../container/token/PurchaseSection.vue'
import MilestoneSection  from '../container/token/MilestoneSection.vue'
import JourneySection from '../container/token/JourneySection.vue'
import BlockchainSection from '../container/token/BlockchainSection.vue'
import FooterSection from '../components/common/FooterSection.vue'

export default {
  name: 'Token',
  components: {
    HeaderSection,
    BillionSection,
    PurchaseSection,
    MilestoneSection,
    JourneySection,
    BlockchainSection,
    FooterSection
  }
}
</script>

<style>

</style>
