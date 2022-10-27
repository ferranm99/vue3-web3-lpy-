<template>
  <div class="signUpFrame">
    
    <b-tabs pills content-class="mt-3 fill-small" class="fill" align="center">
      
      <b-tab title="extra" v-if="false">
        1BNB = {{web3ContractDetails.currentBNBPriceInUSD}} USD<br/>
        1USD = {{web3ContractDetails.currentUSDPriceInBNB}} BNB<br/>
        Crowdsale@<a :href="'https://' + (chainId == 56 ? '' : 'testnet.') + 'bscscan.com/address/' + web3Crowdsale.address" target="_new">{{web3Crowdsale.address}}</a>
      </b-tab>
      <b-tab :title="TokenPurchase.crypto">
        <div class="mb-2 d-flex justify-content-center">
          <b-card class="mb-2" :title="TokenPurchase.crowdsaleTitle">
            <b-row v-if="!web3Connected" >
              <b-col sm="12">
                <button @click="toggleWeb3()" class="web3Button" :class="web3Connected?'connected':'disconnected'">
                  <svg width="30" height="30" class="web3Icon">
                    <circle class="progress" id="pr1" r="6" cx="15" cy="15"/>
                  </svg>Web3 {{TokenPurchase.disconnected}}
                </button>
              </b-col>
            </b-row>
            <b-row class="pb-3">
              <b-col sm="12" v-if="web3CrowdsaleDetails.bnbRate && web3CrowdsaleDetails.tokenRate">
                <center>1BNB ≈ ${{web3CrowdsaleDetails.bnbRate}} ≈ {{web3CrowdsaleDetails.tokenRate}} LPY</center>
                <center>1LPY ≈ ${{web3CrowdsaleDetails.rate}}USD</center>
                <center><span>{{TokenPurchase.priceIsApproximate}}</span></center>
              </b-col>
            </b-row>
            <b-row class="pb-2">
              <b-col sm="3">
                    {{TokenPurchase.inventoryLabel}}                     
              </b-col>
              <b-col sm="9">
                {{crowdsaleBalance}} LPY
              </b-col>
              
            </b-row>
            <b-row class="pb-2">
              <b-col sm="3">
                <label class="form-label pt-1" for="customerName">BNB:</label>
              </b-col>
              <b-col sm="8">
                <input
                  id="customerName"
                  v-model="cryptoPrice"
                  @change="cryptoPriceChange($event)"
                  class="form-control"
                />
              </b-col>
              <b-col sm="1">
              </b-col>
            </b-row>
            <b-row class="pb-2">
              <b-col sm="3">
                <label class="form-label" for="purchasePrice">USD:</label>
              </b-col>
              <b-col sm="8">
                
                <input
                  id="purchasePrice"
                  v-model="usdPrice"
                  @change="usdPriceChange($event)"
                  class="form-control"
                />
                <span>{{TokenPurchase.usdFieldNote}}</span>

              </b-col>
              <b-col sm="1">
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <center>
                  <span>
                    {{TokenPurchase.presaleWarningLine1}}
                    <br/>
                    {{TokenPurchase.presaleWarningLine2}}
                  </span>
                </center>
              </b-col>
            </b-row>
            <b-row class="pb-2">
              <b-col sm="12">
                <section v-if="buyWithCryptoErrorMessage" class="w-100 d-flex justify-content-center pb-0 errormessage">
                  <span>{{buyWithCryptoErrorMessage}}</span>
                </section>                
              </b-col>
            </b-row>
            <b-row class="pb-2">
              <b-col sm="12">
                <center><button class="btn btn-success leisurePay-button" :disabled="!web3Connected" @click="buyTokensWithCrypto()">{{web3Connected ? TokenPurchase.buyTokens: TokenPurchase.buyTokensMustConnect }}</button>
                </center>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-tab>
      <b-tab :title="TokenPurchase.fiat" class="fill">
        <iframe v-if="fiatGoogleForm" class="fill" src="https://docs.google.com/forms/d/e/1FAIpQLSdi9tuuhZU0q7cLKyLlF2rrZoVaT-eKbb5-jJPlqtJGPUldgw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <div v-else>
          <section class="w-100 p-4 d-flex justify-content-center pb-1">
            <div class="form-outline">
              <label class="form-label" for="customerName">{{TokenPurchase.fullName}}</label>
              <input
                id="customerName"
                v-model="customerName"
                @blur="customerNameChange($event)"
                class="form-control"
              />
            </div>
          </section>
          <section class="w-100 p-1 d-flex justify-content-center pb-1">
            
            <div class="form-outline">
              <label class="form-label" for="purchasePrice">{{TokenPurchase.purchasePrice}}</label>
              <input
                id="purchasePrice"
                v-model="purchasePrice"
                @blur="purchasePriceChange($event)"
                class="form-control"
              />
            </div>
          </section>
          <section class="w-100 p-1 d-flex justify-content-center pb-1">
            
            <div class="form-outline">
              <label class="form-label" for="purchasePrice">{{TokenPurchase.emailAddress}}</label>
              <input
                id="purchasePrice"
                v-model="purchaseEmail"
                @blur="setPurchase()"
                class="form-control"
              />
            </div>
          </section>
          <section class="w-100 p-1 d-flex justify-content-center pb-1">
            
            <div class="form-outline">
              <label class="form-label" for="purchasePrice">{{TokenPurchase.lpyWalletLabel}}</label>
              <input
                id="purchasePrice"
                v-model="purchaseWallet"
                @blur="setPurchase()"
                class="form-control"
              />
            </div>
          </section>
          <section class="w-100 p-4 d-flex justify-content-center pb-4">
            <div v-show="paymentVerified" style="text-align:center">
              Your LPY purchase is now complete.<br>Funds may take up to 3 days to clear before receiving your tokens.<br>Thank you for your purchase.
            </div>
            <div v-show="!paymentVerified" id="buttonParent">
            </div>
          </section>
        </div>
      
      </b-tab>
    </b-tabs>
    
      
    <!-- <section class="w-100 p-4 d-flex justify-content-center pb-4">
      
      <div id="myButton" class="">
        <button id="nothing" class="btn btn-success" @click="connectWeb3()">Test</button>
      </div>
    </section> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import {ethers} from 'ethers';
/*

    crowdsale
    0xf7ca996Ac2e0e8489A7B583d7944D360e326c422

    lpy 
    0xf181ca4803772e7d550B0474a892a1DAb508C465
    

    pancake router
    0xD99D1c33F9fC3444f8101754aBC46c52416550D1 //TESTNET
    0x10ED43C718714eb63d5aA57B78B54704E256024E // MAINNET

    BUSD
    0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47 //TESTNET
    0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56 // MAINNET

    WBNB
    0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F //TESTNET
    0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c // MAINNET

*/

var { 
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

var { 
  mapActions: tokenActions,
  mapGetters: tokenGetters,
} = createNamespacedHelpers("token-interface");

import parseMoney from 'parse-money';
import BigNumber from 'bignumber.js';

export default {
  components: { 

  },
  name: "TokenPurchase",
  data() {
    return {
      fiatGoogleForm: false,
      customerName: null,
      purchasePrice: null,
      purchaseEmail: null,
      purchaseWallet: null,
      paymentVerified: false,
      intervalId: null,
      web3Updating: false,
      cryptoPrice: null,
      usdPrice: null,
      rateResult: null,
      buyWithCryptoErrorMessage: null,
      crowdsaleInterval: null,
      apiKey: '8CD2E091-6CED-4AF9-B0BB-A0BD72F57891',
      // apiKey: 'b9491ef5-332e-42df-a4f7-5b42c86d1caa',
      leisurePay: null,
    }
  },
  unmounted() {
    clearInterval(this.intervalId);
    var checkoutPluginScript = document.getElementById("checkoutPluginScript");
    if (checkoutPluginScript) checkoutPluginScript.remove();
    clearInterval(this.crowdsaleInterval);
    if (this.leisurePay && this.leisurePay.Cleanup) this.leisurePay.Cleanup();
  },
  mounted() {
    var btnParent = document.getElementById("buttonParent");
    if (btnParent) {
      btnParent.innerHTML = '';
      var myButtonDiv = document.createElement('div');
      myButtonDiv.id="myButton";
      btnParent.appendChild(myButtonDiv);
    }
    var oThis = this;
    this.crowdsaleInterval = setInterval(async () => {
      oThis.refreshWeb3Data();
    },window.timeout);
    this.refreshWeb3Data();
    if (this.fiatGoogleForm == false) {
    let checkoutPluginScript = document.createElement('script')
    checkoutPluginScript.id = "checkoutPluginScript";
    checkoutPluginScript.setAttribute('src', '/Plugin/Script/CheckoutPlugin?apikey=' + this.apiKey)
    /* global leisurePay */
    
      window.leisurePayLoaded = function () {
        leisurePay.CreateButton("myButton", {class:"btn btn-success", text:"Purchase"});

        leisurePay.ActivateAccount(oThis.apiKey); // Api Key Provided by Leisure Pay

        //leisurePay.SetPurchase("mikewazowski", 100.25); // Unique ID for customer, and Purchase Price
        leisurePay.SetCallback(async function (message) { // Callback from api. 
          console.log("From Callback:", message);
          if (message && message.messageName == 'purchaseComplete'){ 
            if (message.payload && message.payload.amount){
              var purchasePrice = parseMoney(oThis.purchasePrice);
              var payloadPrice = parseMoney('$' + message.payload.amount);
              if (purchasePrice.amount == payloadPrice.amount) {
                oThis.paymentVerified = await leisurePay.VerifyPayment(message.payload);
              }
            }
          }
          


          /*
          {
            "messageName": "purchaseComplete",
            "payload": {
                "amount": 12,
                "transactionId": "300fa1bf-c11f-4727-a1d7-a195baaf6975",
                "owner": "JASON EDWARD MCKINLEY"
            }
          }
          */
        });
        
  
        

        oThis.leisurePay = leisurePay;
      }
      document.head.appendChild(checkoutPluginScript);
    }
  },
  
  computed: {
    ...interfaceGetters({
      langData:"getLangData",
      TokenPurchase: "getTokenPurchase",
    }),
    ...tokenGetters({
      web3ContractDetails: "getContractDetails", 
      web3CrowdsaleDetails: "getCrowdsaleDetails",
      web3Connected:"getConnected",
      web3Provider: "getProvider",

      web3WalletAddress: "getAddress",

      web3PancakeRouter: "getPancakeRouter",
      web3Crowdsale: "getCrowdsale",
      web3LPY: "getLPY",
      
      web3USDAddress: "getUSDAddress",
      web3BNBAddress: "getBNBAddress",
      
      
      
      web3Signer: "getSigner",

      chainId:"getChainId",
    }),
    crowdsaleBalance() {
      return BigNumber(this.web3ContractDetails.crowdsaleBalance).toPrecision(18)
    }
  },
  methods: {
    async refreshWeb3Data(){
      await this.web3RefreshCrowdsaleDetails();
      var oThis = this;
      this.$nextTick(() => {
        if (oThis.newRate == null && oThis.web3CrowdsaleDetails.rate) {
          oThis.newRate = oThis.web3CrowdsaleDetails.rate;
        }
        if (oThis.purchaseWallet == null && oThis.web3WalletAddress) {
          oThis.purchaseWallet = oThis.web3WalletAddress;
        }
      });
    },
    async buyTokensWithCrypto(){
      //crowdsaleContract.buyTokens(account, {value: web3.toWei(amount)}
      let value = ethers.utils.parseEther(this.cryptoPrice);
      var response = await this.web3Crowdsale.contract.buyTokens({value, from: this.web3WalletAddress}).catch(x => { return {err: x.data}});
      console.log("Response:", response)
      this.buyWithCryptoErrorMessage = response && response.err && response.err.message
    },
    toggleWeb3() {
      if (this.web3Connected) {
        this.disconnectWeb3();
      }
      else {
        this.connectWeb3();
      }
    },
    customerNameChange() {
      this.setPurchase();
    },
    purchasePriceChange() {
      var money = parseMoney(this.purchasePrice);
      if (money.currency == null || money.currency == 'USD'){
        this.purchasePrice = "$" + money.amount;
      }
      this.setPurchase();
    },
    cryptoPriceChange() {
      console.log("cryptoPriceChange", this.cryptoPrice);
      this.amendPriceForCrypto(this.cryptoPrice);
    },
    async amendPriceForCrypto() {
      var usd = await this.web3Crowdsale.contract.bnbToBUSD(ethers.utils.parseUnits(this.cryptoPrice,"ether"));
      var tokenAmount = await this.web3Crowdsale.contract.getTokenAmount(ethers.utils.parseUnits(this.cryptoPrice,"ether"));
      this.rateResult = ethers.utils.formatEther(tokenAmount) + "LPY for " + this.cryptoPrice + "BNB";
      this.usdPrice = ethers.utils.formatEther(usd);
    },
    async usdPriceChange() {
      var bnb = await this.web3Crowdsale.contract.busdToBNB(ethers.utils.parseUnits(this.usdPrice,"ether"));
      this.cryptoPrice = ethers.utils.formatEther(bnb);
    },
    setPurchase(){
      if (this.customerName && this.purchasePrice) {
        leisurePay.SetPurchase(this.customerName, parseMoney(this.purchasePrice).amount, {
          customerName: this.customerName,
          purchasePrice: this.purchasePrice,
          emailAddress: this.purchaseEmail,
          walletAddress: this.purchaseWallet,
        });
      }
    },
    setLanguage(lang) {
      this.setLang({language: lang});
    },
    ...interfaceActions({
      setLang:"setLanguage"
    }),
    ...tokenActions({
      delay: "delay",
      testAction:"testAction",
      initWeb3:"init",
      connectWeb3: "connect",
      disconnectWeb3: "disconnect",
      addToken:"setupToken",
      web3RefreshContractDetails:"refreshContractDetails",
      web3RefreshCrowdsaleDetails: "refreshCrowdsaleDetails",
    }),
    async runTest() {
      const value = await this.testAction()
      console.log("Value:", value);
    }
  }
};
</script>

<style scoped>
.web3Button {
  background-color: transparent;
  border: solid 1px black;
  border-radius: 17px;
  padding: 0px 11px 0px 11px;
  font-size: .7em;
}
.web3Icon {
  margin-left: -11px;
}
.connected .web3Icon {
  fill: rgb(2, 202, 2);
}
.disconnected .web3Icon {
  fill: gray;
}
.errormessage {
  color: rgb(201 10 10);
}

</style>




<style>
.fill {
  height: 100%;
  width: 100%;
}
.fill-small {
  height: 90%;
}

.tab-content {
  overflow-y: auto;
}
.row span {
  font-size: .8em;
}
</style>