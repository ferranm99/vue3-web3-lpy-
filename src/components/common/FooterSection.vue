<template>
  <div class="tri-contain"></div>
  <div class="contain position-relative">
    <img
      src="../../assets/icons/Footer_Graphics01.png"
      class="top-graphic position-absolute"
      alt=""
    />
    <img src="../../assets/icons/Footer_Graphics02.png" class="foot-graphic position-absolute" alt="">
    <div class="d-flex flex-column flex-md-row w-100">
      <div class="foot-logo">
        <img src="../../assets/icons/Footer_Logo.png" class="logo mt-3" alt="" />
      </div>
      <div class="w-100 content">
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-between contact-list">
            <div class="d-flex mt-1 item">
              <div class="detail">
                <img src="../../assets/icons/Address.png" class="address mt-2" alt="" />
              </div>
              <div class="d-flex flex-column ms-3">
                <p class="text-white m-0 Montserrat">Address</p>
                <p class="text-white date-place Arboria" style="word-spacing: -5px;">
                  7901&nbsp;4th&nbsp;St&nbsp;N.&nbsp;Ste&nbsp;300 St.&nbsp;Peterburg,&nbsp;FL&nbsp;33702
                </p>
              </div>
            </div>
            <div v-if="phoneEnabled" class="vertical"></div>
            <div v-if="phoneEnabled" class="d-flex mt-2 item">
              <div class="detail">
                <img src="../../assets/icons/Phone.png" class="address mt-1" alt="" />
              </div>
              <div class="d-flex flex-column ms-3">
                <p class="text-white m-0 Montserrat">Phone</p>
                <p class="text-white date-place Arboria">1-(786)-652-3133</p>
              </div>
            </div>
            <div class="vertical"></div>
            <div class="d-flex mt-2 item">
              <div class="detail">
                <img src="../../assets/icons/Email.png" class="address mt-1" alt="" />
              </div>
              <div class="d-flex flex-column ms-3">
                <p class="text-white m-0 mt-1 Montserrat">Email</p>
                <p class="text-white date-place Arboria">
                  info&copy;leisurepay.io
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-white text-center text-small Arboria mt-3">
          BSC SCAN linked
          <a href="https://bscscan.com/token/0xfbef7220dfefd788a18ee634721a1c82a229f8c6">0xfbef7220dfefd788a18ee634721a1c82a229f8c6</a>
        </p>
      </div>
    </div>
    <div class="grey-line mt-4"></div>
    <div class="d-flex justify-content-between py-3">
      <p class="text-white Arboria text-small">
        Copyright&copy; 2022, LeisurePay All Rights Reserved
      </p>
      <div class="d-flex">
        <div class="mx-2">
          <a href="https://www.linkedin.com/company/leisurepay/">
            <img src="../../assets/icons/linkedin.png" alt="" />
          </a>
        </div>
        <div class="mx-2">
          <a href="https://www.facebook.com/LeisurePayHQ">
            <img src="../../assets/icons/Facebook.png" alt="" />
          </a>
        </div>
        <div class="mx-2">
          <a href="https://twitter.com/leisurepayhq">
            <img src="../../assets/icons/Twitter.png" alt="" />
          </a>
        </div>
        <div class="mx-2">
          <a href="https://www.reddit.com/r/LeisurePay">
            <img src="../../assets/icons/Reddit.png" alt="" />
          </a>
        </div>
        <div class="mx-2">
          <a href="https://t.me/LeisurePaytoken">
            <img src="../../assets/icons/Telegram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() { 
    return {
      phoneEnabled: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  background: url("../../assets/images/back4.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw;
}
.tri-contain {
  background: url("../../assets/images/back3.png") no-repeat;
  background-size: 100% 100%;
  height: 10vw;
  margin-bottom: -2px;
}
.item {
  max-width: 30%;
}
.top-graphic {
  left: 34%;
  top: -9vw;
  width: 10vw;
}
.foot-graphic {
  right: 2vw;
  bottom: 30px;
  width: 8vw;
}
.logo {
  width: 140px;
}
.vertical {
  height: 60px;
  width: 0.1px;
  background: rgb(153, 149, 149);
}
.date-place {
  font-size: 12px;
}
.grey-line {
  height: 1px;
  background: grey;
}
.contact-list {
  max-width: 900px;
}
.text-small {
  font-size: 12px;
}
.address {
  width: 35px;
}
@media screen and (max-width: 810px) {
  .foot-logo {
    display: none;
  }
}
@media screen and (max-width: 630px) {
  .detail {
    display: none;
  }
}
@media screen and (max-width: 473px) {
  .content, .grey-line {
    display: none;
  }
}
</style>
