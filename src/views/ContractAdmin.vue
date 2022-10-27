<template>
    <div class="w-100 p-4 d-flex justify-content-center pb-1">
      <b-card title="Contract Admin Section">
        <b-card :title="'Crowdsale ' + (weiRaised? weiRaised + ' BNB Raised':'Loading')" class="contract">
        <section class="container w-100 p-4 justify-content-center pb-1">
          <b-row>
            <b-col sm="4">
            </b-col>
            <b-col sm="4" class="align-content-center " >
              <b-button id="btnTogglePause" @click="togglePaused()" :disabled="typeof web3CrowdsaleDetails.paused === 'undefined'" :variant="web3CrowdsaleDetails.paused?'danger':'success'" style="width:100%;">{{web3CrowdsaleDetails.paused ? "Stopped": 'Running'}}</b-button>
            </b-col>
            <b-col sm="4">
              
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" v-if="web3CrowdsaleDetails.bnbRate && web3CrowdsaleDetails.tokenRate">
              1BNB = ${{web3CrowdsaleDetails.bnbRate}} = {{web3CrowdsaleDetails.tokenRate}} LPY
            </b-col>
          </b-row>
          <b-row v-if="web3CrowdsaleError">
            <b-col sm="12" style="color:#c10606">
              {{web3CrowdsaleError}}
            </b-col>
          </b-row>
                        

          <b-card v-if="web3CrowdsaleDetails.initialized == false">
            <b-row>
              <b-col sm="12">
                Uninitialized:
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <label for="price">Erc-20:<br/></label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="price" v-model="initERC20" type="text"></b-form-input>
              </b-col>
              <b-col sm="2">
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <label for="price">BNB Wallet:<br/></label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="price" v-model="initWallet" type="text"></b-form-input>
              </b-col>
              <b-col sm="2">
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <label for="price">Rate (USD):<br/></label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="price" v-model="initRate" type="text"></b-form-input>
              </b-col>
              <b-col sm="2">
              </b-col>
            </b-row>
            
            <b-row>
              <b-col sm="8">
              </b-col>
              <b-col sm="2">
                <b-button id="setPrice" @click="initializeWallet(initERC20, initWallet, initRate)" variant="primary">Initialize</b-button>
              </b-col>
              <b-col sm="2">
              </b-col>
            </b-row>
          </b-card>
          
          <b-row>
            <b-col sm="2">
              <label for="price">Rate:<br/></label>
            </b-col>
            <b-col sm="8">
              <div v-if="!web3CrowdsaleDetails.paused" style="color: gray; height: 0px;  width:100%; text-align: right; padding-right:15px; padding-top: 5px;margin-bottom:-5px;">(stop to edit)</div>
              <b-form-input id="price" v-model="newRate" :disabled="!web3CrowdsaleDetails.paused" type="text"></b-form-input>
              <span>Current Rate: ${{web3CrowdsaleDetails.rate}}</span>
            </b-col>
            <b-col sm="2">
              <b-button id="setPrice" @click="setRate()" :disabled="!web3CrowdsaleDetails.paused" variant="primary">Set</b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="2">
              <label for="txtTokens"> LPY:</label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="txtTokens" v-model="newTokens" type="text"></b-form-input>
            </b-col>
            <b-col sm="2">
              <b-button id="cmdTaketokens" @click="depositTokens()"  variant="primary">Give</b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="2">
              
            </b-col>
            <b-col sm="8">
              {{web3CrowdsaleDetails.tokenBalance}}
            </b-col>
            <b-col sm="2">
              <b-button id="cmdTaketokens" @click="takeTokenBalance()"  variant="primary">Take</b-button>
            </b-col>
          </b-row>
        </section>
        </b-card>
      </b-card>
    </div>
</template>

<script>
import { ref } from 'vue'; //eslint-disable-line
import { createNamespacedHelpers } from "vuex";
import {ethers} from 'ethers';
import BigNumber from "bignumber.js"

var { 
  //mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

var { 
  mapActions: tokenActions,
  mapGetters: tokenGetters,
} = createNamespacedHelpers("token-interface");

import parseMoney from 'parse-money'; // eslint-disable-line



export default {
  components: { 

  },
  name: "ContractAdmin",
  data() {
    return {
      crowdsaleInterval: null,
      utils: null,
      newRate: null,
      newTokens: null,
      initERC20: null,
      initWallet: null, 
      initRate: null
    }
  },
  unmounted() {
    clearInterval(this.crowdsaleInterval);
  },
  mounted() {
    this.utils = ethers.utils;
    var oThis = this;
    this.crowdsaleInterval = setInterval(async () => {
      oThis.refreshWeb3Data();
    },window.timeout);
    this.refreshWeb3Data();
  },
  
  computed: {
    ...interfaceGetters({
      langData:"getLangData"
    }),
    ...tokenGetters({
      web3CrowdsaleDetails: "getCrowdsaleDetails",  
      web3CrowdsaleError: "getCrowdsaleError",

      web3Connected:"getConnected",

      web3WalletAddress: "getAddress",

      web3PancakeRouter: "getPancakeRouter",
      web3Crowdsale: "getCrowdsale",
      web3LPY: "getLPY",
      
    }),
    weiRaised() {
      var raised = this.web3CrowdsaleDetails.weiRaised;
      if(!raised) return '';
      raised = this.weiToETH(raised);
      return raised;
    }
  },
  methods: {
    initializeWallet(initERC20, initWallet, initRate){
      this.web3InitCrowdsale({
        token: initERC20, 
        wallet: initWallet, 
        rate:this.ethToWEI(initRate)
      });
    },
    async refreshWeb3Data(){
      await this.web3RefreshCrowdsaleDetails();
      var oThis = this;
      this.$nextTick(() => {
        if (oThis.newRate == null && oThis.web3CrowdsaleDetails.rate) {
          oThis.newRate = oThis.web3CrowdsaleDetails.rate;
        }

        if (oThis.initERC20 == null && oThis.web3LPY.address) {
          oThis.initERC20 = oThis.web3LPY.address;
        }
        
        if (oThis.initWallet == null && oThis.web3WalletAddress) {
          oThis.initWallet = oThis.web3WalletAddress;
        }

        if (oThis.initRate == null) {
          oThis.initRate = 0.022;
        }

        
        
      });
    },
    async buyTokensWithCrypto(){
      //crowdsaleContract.buyTokens(account, {value: web3.toWei(amount)}
      let value = ethers.utils.parseEther(this.cryptoPrice);
      var response = await this.web3Crowdsale.contract.buyTokens({value, from: this.web3WalletAddress}).catch(x => { return {err: x.data}});
      this.buyWithCryptoErrorMessage = response && response.err && response.err.message
      console.log("Response:", response)
    },
    weiToETH(wei) {
      return ethers.utils.formatEther(BigNumber(wei).toFixed());
    },
    ethToWEI(eth) {
      return eth && ethers.utils.parseEther(BigNumber(eth).toFixed());
    },
    weiToUSD(wei){
      return wei && this.ethToUSD(this.weiToETH(wei));
    },
    ethToUSD(eth){
      if (eth) {
        var money = parseMoney(BigNumber(eth).toFixed());
        if (money.amount) {
          return "$" + money.amount;
        }
        else {
          return money;
        }
      }
    },
    ...tokenActions({
      delay: "delay",
      testAction:"testAction",
      web3RefreshCrowdsaleDetails:"refreshCrowdsaleDetails",
      web3CrowdsaleSetRate: "setCrowdsaleRate",
      web3CrowdsaleTakeTokenBalance: "takeCrowdsaleTokenBalance",
      web3CrowdsaleGiveTokens: "giveCrowdsaleTokens",
      web3CrowdsaleSetPaused: "setCrowdsalePaused",
      web3InitCrowdsale: "initCrowdsale",
    }),
    setRate(){
      this.web3CrowdsaleSetRate(this.ethToWEI(this.newRate));
    },
    takeTokenBalance(){
      this.web3CrowdsaleTakeTokenBalance();
    },
    depositTokens() {
      this.web3CrowdsaleGiveTokens(this.ethToWEI(this.newTokens));
    },
    togglePaused(){
      this.web3CrowdsaleSetPaused(!this.web3CrowdsaleDetails.paused);
    },
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
.row span {
  font-size: .8em;
}
.fill {
  height: 100%;
  width: 100%;
}
.fill-small {
  height: 90%;
}
.row {
  margin-top: 10px;
  margin-bottom: 10px;
}

.contract h4.card-title {
  font-size: 1em;
}

.row div:last-of-type > button {
  width: 66px;
}

</style>