<template>
  <HeaderSection />
  <button @click="addNetwork(56)">Add Network</button>
  <button @click="addToken()">Add Token</button>
  <span>CorrectChain == {{isCorrectChain()}}</span>
  <button @click="setLanguage('EN')">Set EN</button>
  <button @click="setLanguage('CN')">Set CN</button>
  
  <button @click="setLanguage('KR')">Set KR</button>
  <pre>{{langData}}</pre>
  <FooterSection />
</template>

<script>
import HeaderSection from "../container/update/HeaderSection.vue";
import FooterSection from "../components/common/FooterSection.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");


export default {
  name: "Test",
  data() {
    return {
      targetNetworkId:"0x38"
    }
  },
  components: {
    HeaderSection,
    FooterSection,
  },
  computed: {
    ...interfaceGetters({
      langData:"getLangData"
    })
  },
  methods: {
    setLanguage(lang) {
      this.setLang({language: lang});
    },
    ...interfaceActions({
      setLang:"setLanguage"
    }),
  /* eslint-disable */
    async isCorrectChain() {
      if (window.ethereum) {
        const currentChainId = await window.ethereum.request({
          method: 'eth_chainId',
        }); 

        if (currentChainId == this.targetNetworkId) return true;
        // return false is network id is different
        return false;
      }
      
    },
      async addToken() {
const tokenAddress = '0xfbef7220dfefd788a18ee634721a1c82a229f8c6';
const tokenSymbol = 'LPY';
const tokenDecimals = 18;
const tokenImage = 'https://leisurepay.io/favicon.png';

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}

      },
      addNetwork(id) {
      let networkData;

      switch (id) {

        //bsctestnet

        case 97:

          networkData = [

            {

              chainId: "0x61",

              chainName: "BSCTESTNET",

              rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],

              nativeCurrency: {

                name: "BINANCE COIN",

                symbol: "BNB",

                decimals: 18,

              },

              blockExplorerUrls: ["https://testnet.bscscan.com/"],

            },

          ];

          break;

        //bscmainet

        case 56:

          networkData = [

            {

              chainId: "0x38",

              chainName: "BSCMAINET",

              rpcUrls: ["https://bsc-dataseed1.binance.org"],

              nativeCurrency: {

                name: "BINANCE COIN",

                symbol: "BNB",

                decimals: 18,

              },

              blockExplorerUrls: ["https://testnet.bscscan.com/"],

            },

          ];

          break;

        default:

          break;

      }

      // agregar red o cambiar red

      return window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: networkData,
      });
    }
  }
};
</script>

<style>
</style>




