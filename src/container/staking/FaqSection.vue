<template>
  <div class="contain mt-5">
    <div class="top-content">
      <div class="p-2 bg-black text-white">We do we offer staking?</div>
      <div class="p-2 text-black border">
        For stability of the token, persons with large balances are encouraged to hold. But to effectively encourage them we want to offer to increase their holdings during the period they keep their tokens locked up.
      </div>
      <br/>
      <div class="p-2 bg-black text-white">How does staking work?</div>
      <div class="p-2 text-black border">
        By providing your tokens to our staking contract, you give the team peace of mind that you will not disrupt the organic flow of exchanges by flooding the market with your assets. For that we reward you with a return on your investment.
      </div>
      <br/>
      <div class="p-2 bg-black text-white">How do I take part?</div>
      <div class="p-2 text-black border">
        Contact your sales representative, and staking options can be presented to you on a customized basis.
      </div>
      <br/>
      <div v-if='false' class="mt-2 p-2 text-black border Montserrat fw-bold">
        What Is Proof of Stake?
      </div>
      <div v-if='false' class="mt-2 p-2 text-black border Montserrat fw-bold">
        Staking Coins &amp; Cryptocurrencies
      </div>
      <div v-if='false' class="mt-2 p-2 text-black border Montserrat fw-bold">
        On-chain And off-chain Staking
      </div>
    </div>
    <div v-if='false' class="content mb-5">
      <p class="title Montserrat text-white text-center fw-bold">
        ANY ADDITIONAL QUESTIONS?
      </p>
      <p class="Montserrat text-white text-center m-0">
        PLEASE CHECK OUR FAQS PAGE HERE
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  padding: 0 10vw;
}
.content {
  background: url("../../assets/images/Discover_BG.png") no-repeat;
  background-size: 100% 100%;
  padding: 50px 0;
  margin-top: 100px;
}
.top-content {
  padding: 0 100px;
}
.title {
  margin: 20px;
  font-size: 25px;
}
.btn-start {
  padding: 10px 20px;
  color: black;
  border-radius: 3px;
}
@media screen and (max-width: 900px) {
  .top-content {
    padding: 0;
  }
}
</style>
