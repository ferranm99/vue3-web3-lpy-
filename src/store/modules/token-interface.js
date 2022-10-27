/* eslint-disable */

// Store Modules are used to organize Vuex store contents.
// Create a new module by duplicating this component and giving it a meaningful name

import axios from "../../../utils/axios";
import {ethers} from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";

import BigNumber from "bignumber.js"
import Web3Modal from "web3modal";

var lpyJsonAbi = require('../../contracts/LPY.abi.json');
var crowdsaleJsonAbi = require('../../contracts/Presale.abi.json');
var pancakeRouterAbi = require('../../contracts/PancakeRouter.json');

function ethToUINT256(eth) {
  return ethers.utils.parseEther(BigNumber(eth).toFixed())
}

function uint256ToBigNumber(uint) {
  return BigNumber(uint.toHexString(), 16);
}

function uint256ToBigNumberEther(uint) {
  return BigNumber(ethers.utils.formatUnits(uint256ToBigNumber(uint).toFixed(), "ether"));
}

function uint256ToWei(uint) {
  return uint256ToBigNumber(uint).toFixed();
}

function uint256ToEth(uint) {
  return uint256ToBigNumberEther(uint).toFixed();
} 
    // pancake router
    // 0xD99D1c33F9fC3444f8101754aBC46c52416550D1 //TESTNET
    // 0x10ED43C718714eb63d5aA57B78B54704E256024E // MAINNET

    // BUSD
    // 0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47 //TESTNET
    // 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56 // MAINNET

    // WBNB
    // 0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F //TESTNET
    // 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c // MAINNET


var nodes = {
  56: [
    "https://bsc-dataseed.binance.org",
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed.binance.org",
  ],
  97: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s1.binance.org:8545",
  ]
};


const unmonitored = {
  web3Modal: null,
  provider: null,
  etherProvider: null,
  signer: null,
  ethers: null,
  expectChainId: 97,// testnet
  // expectChainId: 56,// live net
  lpyContract: null,
  crowdsaleContract: null,
  pancakeRouterContract: null,

  workingOnContractDetails: false,
  workingOnCrowdsaleDetails: false, 
};

if (process.env.NODE_ENV ==='production') {
  unmonitored.expectChainId = 56;
}

const state = {
  unmonitoredCount: 0,
  instance: null,
  chainId: null,
  fetching: null,
  connected: null,
  address: null,
  initialized: null,
  bnbAddress: null,
  contractDetails: {},
  crowdsaleDetails: {},
  crowdsaleError: null,
};

// getters
const getters = {

  // These are the getter functions used to obtain state contents in a clean way.
  getWeb3Modal: state => state.unmonitoredCount && unmonitored.web3Modal,
  getInstance: state => state.unmonitoredCount && unmonitored.instance,
  getProvider: state => state.unmonitoredCount && unmonitored.provider,
  getEtherProvider: state => state.unmonitoredCount && unmonitored.etherProvider,
  getSigner: state => state.unmonitoredCount && unmonitored.signer,
  getEthers: state => state.unmonitoredCount && unmonitored.ethers,
  getChainId: state => state.chainId,
  getFetching: state => state.fetching,
  getConnected: state => state.connected, 
  getAddress: state => state.address,
  getInitialized: state => state.initialized,
  getContractDetails: state => state.contractDetails,
  getCrowdsaleDetails: state => state.crowdsaleDetails,
  getCrowdsaleError: state => state.crowdsaleError,
  getLPY: state => {
    return {
      address: state.chainId == 56? "0xfBeF7220dfEFD788A18ee634721a1C82A229f8c6": "0x0a6B8CFfCdBaCbfb7FD9f96d1a8D61Ba4E6F375C" ,
      abi: lpyJsonAbi, 
      contract: unmonitored.lpyContract,
      updatecount: state.unmonitoredCount
    }
  },

  getCrowdsale: state => {
    return {
      address: state.chainId == 56 ? "0x14aA2A4c4C0299a1Cd985D22B6A66F2141C1d55b" : "0x60F1765F4d99b3E0fe0eCC2edD3d76D77f4fA902",
      abi: crowdsaleJsonAbi,
      contract: unmonitored.crowdsaleContract,
      updatecount: state.unmonitoredCount
    }
  },
  
  getPancakeRouter: state => {
    return {
      address:state.chainId == 56 ? "0x10ED43C718714eb63d5aA57B78B54704E256024E":"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
      abi: pancakeRouterAbi,
      contract: unmonitored.pancakeRouterContract,
      updatecount: state.unmonitoredCount
    }
  },


  getPancakeRouterAddress: state => state.chainId == 56 ? "0x10ED43C718714eb63d5aA57B78B54704E256024E":"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
  getPancakeRouterAbi: state => pancakeRouterAbi,
  getPancakeRouterContract: state => {
    return {
      updateCount: state.unmonitoredCount,
      contract: unmonitored.pancakeRouterContract,
    }
  },


    // BUSD
    // 0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47 //TESTNET
    // 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56 // MAINNET

    // WBNB
    // 0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F //TESTNET
    // 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c // MAINNET

  getBNBAddress: state => state.chainId == 56 ? "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c": "0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F", 
  getUSDAddress: state => state.chainId == 56 ? "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56": "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47",
  



};

// actions
const actions = {
  delay: async (module, payload) => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, payload);
    });
  },


  refreshContractDetails: async (module, payload) => {
    if (unmonitored.workingOnContractDetails) {
      return;
    }
    unmonitored.workingOnContractDetails = true;
    var lpyContract = unmonitored.lpyContract;
    var crowdsaleContract = unmonitored.crowdsaleContract;
    var pancakeRouterContract = unmonitored.pancakeRouterContract;

    if (!lpyContract && !crowdsaleContract && !pancakeRouterContract) {
      
    }
    else {

      var lpy = module.getters.getLPY;
      var crowdsale = module.getters.getCrowdsale;
      var pancakeRouter = module.getters.getPancakeRouter;

      var web3BNBAddress = module.getters.getBNBAddress;
      var web3USDAddress = module.getters.getUSDAddress;
      var web3WalletAddress = module.getters.getAddress;

      var result = {};

      try {
        // Start Pancake Commands
        if (pancakeRouterContract) {
          var amounts = await pancakeRouterContract.getAmountsOut("1000000000000000000", [web3BNBAddress, web3USDAddress]);
          result.currentBNBPriceInUSD = BigNumber(ethers.utils.formatUnits(BigNumber(amounts[1].toString()).toFixed(), "ether")).toPrecision(6);
          amounts = await pancakeRouterContract.getAmountsOut("1000000000000000000", [web3USDAddress, web3BNBAddress]);
          result.currentUSDPriceInBNB = BigNumber(ethers.utils.formatUnits(BigNumber(amounts[1].toString()).toFixed(), "ether")).toPrecision(6);
        }
        // End Pancake Commands
        
        // Start LPY Commands
        
        if (lpyContract) {
          var amount = await lpyContract.balanceOf(web3WalletAddress);
          result.tokenBalance = BigNumber(ethers.utils.formatUnits(BigNumber(amount.toString()).toFixed(), "ether")).toFixed();

        }
        if (lpyContract && crowdsale.address) {
          amount = await lpyContract.balanceOf(crowdsale.address);
          result.crowdsaleBalance = BigNumber(ethers.utils.formatUnits(BigNumber(amount.toString()).toFixed(), "ether")).toString();
        } 

        if (crowdsaleContract && crowdsale.address){
          amount = await crowdsaleContract.rate();
          result.crowdsaleRate = BigNumber(ethers.utils.formatUnits(BigNumber(amount.toString()).toFixed(), "ether")).toFixed();
        }
        module.commit("UpdateContractDetails", result)

        // End LPY Commands
      }
      catch (ex) {
        //Nothing to see here
        console.error("Details Error:", ex)
      }
    }
    unmonitored.workingOnContractDetails = false;
    return result;
  },



  refreshCrowdsaleDetails: async (module, payload) => {
    if (unmonitored.workingOnCrowdsaleDetails) {
      return;
    }
    unmonitored.workingOnCrowdsaleDetails = true;
    var lpyContract = unmonitored.lpyContract;
    var crowdsaleContract = unmonitored.crowdsaleContract;
    var pancakeRouterContract = unmonitored.pancakeRouterContract;

    if (!lpyContract && !crowdsaleContract && !pancakeRouterContract) {
      
    }
    else {

      var lpy = module.getters.getLPY;
      var crowdsale = module.getters.getCrowdsale;
      var pancakeRouter = module.getters.getPancakeRouter;

      var web3BNBAddress = module.getters.getBNBAddress;
      var web3USDAddress = module.getters.getUSDAddress;
      var web3WalletAddress = module.getters.getAddress;

      var result = {};

      try {
        if (crowdsale && crowdsale.contract) {
          let rate = await crowdsale.contract.rate();
          result.rate = uint256ToBigNumberEther(rate).toFixed();

          let paused = await crowdsale.contract.paused();
          result.paused = paused;

          let initialized = await crowdsale.contract.initialized();
          result.initialized = initialized;

          let weiRaised = await crowdsale.contract.weiRaised();
          result.weiRaised = uint256ToWei(weiRaised);
          
          let bnbRate = await crowdsale.contract.bnbToBUSD(ethToUINT256(1));
          result.bnbRate = uint256ToBigNumberEther(bnbRate).toFixed(2);
          
          let tokenRate = await crowdsale.contract.getTokenAmount(ethToUINT256(1));
          result.tokenRate = uint256ToBigNumberEther(tokenRate).toFixed(8);
        }

        if (lpy && lpyContract && crowdsale && crowdsale.address) {
          let tokenBalance = await lpyContract.balanceOf(crowdsale.address);
          result.tokenBalance = uint256ToBigNumberEther(tokenBalance).toFixed();
        }


        
        module.commit("UpdateCrowdsaleDetails", result)
      }
      catch (ex) {
        //Nothing to see here
        console.error("Details Error:", ex)
      }
    }
    unmonitored.workingOnCrowdsaleDetails = false;
    return result;
  },

  initCrowdsale: async (module, payload) => {
    module.commit("UpdateCrowdsaleError", null);
    if (payload) {
      var crowdsaleContract = unmonitored.crowdsaleContract;
      if (crowdsaleContract) {
        if (payload.token && payload.wallet && payload.rate) {
          //alert("initialize(" + payload.token + ", " + payload.wallet + ", " + payload.rate + ")");
          await crowdsaleContract.initialize(payload.token, payload.wallet, payload.rate).catch(x => module.commit("UpdateCrowdsaleError",x.data.message));
          module.dispatch("refreshCrowdsaleDetails");
        }
      }
    }
  },
  
  setCrowdsaleRate: async (module, payload) => {
    var crowdsaleContract = unmonitored.crowdsaleContract;
    if (crowdsaleContract) {
      await crowdsaleContract.changeRate(payload);
      var amount = await crowdsaleContract.rate();
      var crowdsaleRate = uint256ToBigNumberEther(amount).toFixed()
      module.commit("UpdateCrowdsaleRate", crowdsaleRate);
    }
  },
  
  takeCrowdsaleTokenBalance: async (module, payload) => {
    
    var crowdsaleContract = unmonitored.crowdsaleContract;
    var lpyContract = unmonitored.lpyContract;
    var crowdsale = module.getters.getCrowdsale;

    if (crowdsaleContract && lpyContract && crowdsale && crowdsale.address) {
      await crowdsaleContract.recoverRemainingToken().catch(x => module.commit("UpdateCrowdsaleError",x.data.message));
      var tokenBalance = await lpyContract.balanceOf(crowdsale.address);
      tokenBalance = uint256ToBigNumberEther(tokenBalance).toFixed();
      module.commit("UpdateCrowdsaleTokenBalance", tokenBalance);
    }
  },
  giveCrowdsaleTokens: async(module, payload) => {
    var lpyContract = unmonitored.lpyContract;
    var walletAddress = module.getters.getAddress;
    var crowdsale = module.getters.getCrowdsale;
    if (lpyContract && walletAddress && crowdsale && crowdsale.address){

      await lpyContract.transfer(crowdsale.address, payload).catch(x => module.commit("updateCrowdsaleError", x.data.message));
    }
  },
  setCrowdsalePaused: async (module, payload) => {
    var crowdsaleContract = unmonitored.crowdsaleContract;
    if (crowdsaleContract) {
      if (payload) {
        await crowdsaleContract.pause();
      }
      else {
        await crowdsaleContract.unPause();
      }
      var paused = await crowdsaleContract.paused();
      module.commit("UpdateCrowdsalePaused", paused);
    }
  },


  // These are the action functions. They are considered middleware and allow async callbacks/promises to perform long/remote operations. 
  // Module has access to the namespaced vuex functionality, payload is the single payload object sent in when calling the function.
  testAction: async (module, payload) => {
    // using this to test things;
    let { commit, dispatch, getters, state, rootGetters, rootState } = module;
    module.dispatch("initializeWeb3");
  },
  init: async (module, payload) => {
    module.dispatch("initializeWeb3");
  },
  buildTokens: async (module, payload) => {

    var ethersProvider = module.getters.getEtherProvider;
    var signer = module.getters.getSigner;

    var chainId = module.getters.getChainId;

    var lpyAddress = module.getters.getLPY.address;
    var lpyAbi = module.getters.getLPY.abi;
    var lpyContract = module.getters.getLPY.contract;

    var crowdsaleAddress = module.getters.getCrowdsale.address;
    var crowdsaleAbi = module.getters.getCrowdsale.abi;
    var crowdsaleContract = module.getters.getCrowdsale.contract;
    
    var pancakeRouterAddress = module.getters.getPancakeRouter.address;
    var pancakeRouterAbi = module.getters.getPancakeRouter.abi;
    var pancakeRouterContract = module.getters.getPancakeRouter.contract;
    
    var provider = module.getters.getProvider;
    if (provider && pancakeRouterAddress && !pancakeRouterContract){
      pancakeRouterContract = new ethers.Contract(pancakeRouterAddress, pancakeRouterAbi, signer);
      var bnbAddress = await pancakeRouterContract.WETH();
      await module.commit("updateBNBAddress", bnbAddress);
      await module.commit("updatePancakeRouterContract", pancakeRouterContract);
      
    }
    if (provider && lpyAddress && !lpyContract){
      lpyContract = new ethers.Contract(lpyAddress, lpyAbi, signer);
      await module.commit("updateLPYContract", lpyContract);
    }
    if (provider && crowdsaleAddress && !crowdsaleContract){
      crowdsaleContract = new ethers.Contract(crowdsaleAddress, crowdsaleAbi, signer);
      await module.commit("updateCrowdsaleContract", crowdsaleContract);
    }
    
    if (provider && pancakeRouterContract && lpyContract && crowdsaleContract) {
      return;
    }

    setTimeout(() => {
      setTimeout(() => {
        try {
          module.dispatch("buildTokens");
        }
        catch {
          module.dispatch("buildTokens");
        }
      },100);
    },200);
  },
  connect: async(module, payload) => {
    module.dispatch("initializeWeb3", {userGenerated: true});
  },
  initializeWeb3: async (module, payload = {}) => { /* eslint-disable-line */
    // async action will await
    let { commit, dispatch, getters, state, rootGetters, rootState } = module;
    if (module.state.initialized) return;

    await module.dispatch("getChainId", payload);
    await module.dispatch("testNetwork", payload);
    await module.dispatch("getChainId", payload);
    await module.dispatch("finalizeWeb3Init", payload);

  },
    
  finalizeWeb3Init: async(module, payload = {}) => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          //package: WalletConnectProvider,
          options: {
            rpc: {
              56: "https://bsc-dataseed.binance.org",
              97: "https://data-seed-prebsc-1-s1.binance.org:8545",
            },
          },
        },
      },
    });
    
    module.commit("updateWeb3Modal", web3Modal);
    if(web3Modal.cachedProvider && module.state.chainId == unmonitored.expectChainId){
      await module.dispatch("performConnection", payload);
    }else if (payload.userGenerated){
      //var result = await web3Modal._toggleModal();
      await module.dispatch("performConnection", payload);
    }
    
    await module.dispatch("buildTokens")
    //module.commit("updateInitialized", true);

  },
  subscribeProvider: async (module, payload) => {
    const provider = unmonitored.provider;
    if (!provider.on) {
      alert("no on")
      return;
    }
    provider.on("accountsChanged", async (accounts) => {
      await module.dispatch("getChainId");
      if(accounts.length === 0){
        await module.dispatch("close");
      }else{
        await module.commit("updateAddress",accounts[0]);
        await module.commit("updateConnected",true);
      }
    });
    provider.on("chainChanged", async (chainId) => {
      await module.dispatch("resetApp", {automatedRequest: true});
      await module.dispatch("getChainId");
      module.dispatch("initializeWeb3", {automatedRequest: true});
      
    });
    provider.on("connect", () => {
      // module.dispatch("connect");
    });
    provider.on("disconnect", () => {
      // module.dispatch("disconnect");
    });
  },
  disconnect: async(module, payload) => {
    module.dispatch("resetApp");
  },
  resetApp: async(module, payload = {}) => {
    await module.dispatch("close", payload);
    if (unmonitored.etherProvider || unmonitored.provider) {
      await module.commit("updateInitialized", false);
    }
  },
  close: async (module, payload = {}) => {
    if (unmonitored.web3Modal && !payload.automatedRequest){
      await unmonitored.web3Modal.clearCachedProvider();
    }
    if (unmonitored.etherProvider || unmonitored.provider) {
      await module.commit("updateEthers", null);
      await module.commit("updateEtherProvider", null);
      await module.commit("updateProvider", null);
      await module.commit("updateAddress", "");
      await module.commit("updateConnected", false);
      await module.commit("updateSigner", null);
      await module.commit("updateChainId", null);
      await module.commit("resetContracts");
    }
  },
  setupNetwork: async (module, payload) => {

    let chainId = module.state.chainId;
    if (chainId != unmonitored.expectChainId) {
      var provider = unmonitored.etherProvider || unmonitored.provider || window.ethereum;
      chainId = unmonitored.expectChainId;
      if (provider) {
        const testnet = chainId === 97
        try {
          var result = await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${chainId.toString(16)}`,
                chainName: `Binance Smart Chain ${ testnet ? "Testnet" : "Mainnet"}`,
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
                  decimals: 18,
                },
                rpcUrls: nodes[chainId],
                blockExplorerUrls: [testnet ? 'https://testnet.bscscan.com/' : "https://bscscan.com/"],
              },
            ],
          })
          module.dispatch("getChainId");
          return true
        } catch (error) {
          return false
        }
      } else {
        alert("Can't setup the BSC network on metamask because provider is undefined")
        return false
      }
    }
  },
  setupToken: async(module, payload) => {
    
    var provider = module.getters.getProvider;
    var tokenAddress = module.getters.getLPY.address;
    var tokenSymbol = "LPY";
    var tokenDecimals = 18;
    //var tokenImage = "data:text/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2096%2096%22%20style%3D%22enable-background%3Anew%200%200%2096%2096%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%3Cpolygon%20points%3D%2267.2%2C58.4%2048.3%2C77.3%208.6%2C37.6%202.6%2C43.5%2048.3%2C89.2%2051.3%2C86.2%2054.3%2C83.3%2073.1%2C64.4%2094%2C43.5%2088.1%2C37.6%20%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M36.8%2C21.2l0.9-0.9c6.2-6.2%2C12.1-6.6%2C16.9-1.8s4.3%2C10.7-1.8%2C16.9l-8.2%2C8.2l-10-10l-7%2C7l23.7%2C23.7l7-7l-7.8-7.8l8.5-8.5%20%20c10-10%2C11-21.3%2C2.7-29.6C53.4%2C2.9%2C42.1%2C4%2C32.2%2C14L16.6%2C29.5l5.9%2C5.9l7-7L36.8%2C21.2z%22%2F%3E%0A%3C%2Fsvg%3E";
    var tokenImage = location.protocol + '//' + location.host + "/LpyIcon.svg";
    const tokenAdded = await provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image:  tokenImage,
        },
      },
    });
    
    return tokenAdded
  },
  getChainId: async (module, payload) => {
    let { commit, dispatch, getters, state, rootGetters, rootState } = module;
    
    var chainId = 0;
    const provider = unmonitored.provider || window.ethereum;
    if (provider) {
      chainId = await provider.request({ method: 'eth_chainId' })
      if (typeof chainId === 'string') chainId = parseInt(chainId, 16);
    }
    await module.commit("updateChainId", chainId);
    return chainId;
  },
  testNetwork: async(module, payload = {}) => {
    if (module.state.chainId != unmonitored.expectChainId && payload.userGenerated && !payload.automatedRequest) {
      
      await module.dispatch("setupNetwork", payload);
    }
  },
  performConnection: async(module, payload = {}) => {
    let { commit, dispatch, getters, state, rootGetters, rootState } = module;
    
    const web3Modal = unmonitored.web3Modal;
    if(!web3Modal) {return false;}

    if (module.state.chainId != unmonitored.expectChainId) return;
    

    var provider = await web3Modal.connect().catch(ex => ex);
    provider = await web3Modal.connect();

    await module.commit("updateProvider", provider);
    await module.dispatch("getChainId", payload);
    await module.dispatch("testNetwork", payload);
    await module.dispatch("subscribeProvider", payload);
    
    const etherProvider = new ethers.providers.Web3Provider(provider);
    const signer = await etherProvider.getSigner();
    const address = await signer.getAddress();
    await module.dispatch("getChainId");
    const chainId = module.state.chainId;
    await module.commit("updateEthers", etherProvider)
    await module.commit("updateEtherProvider", etherProvider)
    await module.commit("updateAddress", address)
    await module.commit("updateConnected", true)
    await module.commit("updateChainId", chainId)
    await module.commit("updateFetching", false)
    await module.commit("updateSigner", signer)
    await module.commit("resetContracts");
    module.dispatch("buildTokens");
  }
};

// mutations
const mutations = {
  // Mutations are the only place that state should be updated, and they should be performed relatively fast.
  updateWeb3Modal(state, mergeInfo) {
    unmonitored.web3Modal = mergeInfo;
    state.unmonitoredCount++;
  },
  updateProvider(state, mergeInfo) {
    unmonitored.provider = mergeInfo;
    state.unmonitoredCount++;
  },
  updateEtherProvider(state, mergeInfo) {
    unmonitored.etherProvider = mergeInfo;
    state.unmonitoredCount++;
  },
  updateEthers(state, mergeInfo) {
    unmonitored.ethers = mergeInfo;
    state.unmonitoredCount++;
  },
  updateSigner(state, mergeInfo) {
    unmonitored.signer = mergeInfo;
    state.unmonitoredCount++;
  },
  updateChainId(state, mergeInfo) {
    if (typeof mergeInfo === "string") {
      if (mergeInfo.indexOf("x")){
        mergeInfo = parseInt(mergeInfo, 16);
      }
      else {
        mergeInfo = parseInt(mergeInfo);
      }
    }
    state.chainId = mergeInfo;
  },
  updateAddress(state, mergeInfo) {
    state.address = mergeInfo;
  },
  updateConnected(state, mergeInfo) {
    state.connected = mergeInfo;
  },
  updateFetching(state, mergeInfo) {
    state.fetching = mergeInfo;
  },
  updateInitialized(state, mergeInfo) {
    state.initialized = mergeInfo;
  },
  updateLPYContract(state, mergeInfo) {
    unmonitored.lpyContract = mergeInfo;
    state.unmonitoredCount++;
  },
  updateCrowdsaleContract(state, mergeInfo) {
    unmonitored.crowdsaleContract = mergeInfo;
    state.unmonitoredCount++;
  },
  updatePancakeRouterContract(state, mergeInfo) {
    unmonitored.pancakeRouterContract = mergeInfo;
    state.unmonitoredCount++;
  },
  updateBNBAddress(state, mergeInfo) {
    state.bnbAddress = mergeInfo;
  },
  resetContracts(state, mergeInfo) {
    unmonitored.lpyContract = null;
    unmonitored.crowdsaleContract = null;
    unmonitored.pancakeRouterContract = null;
    state.unmonitoredCount++;
  },
  UpdateContractDetails(state, mergeInfo) {
    state.contractDetails = mergeInfo;
  },




  UpdateCrowdsaleDetails(state, mergeInfo) {
    console.log("Updating Crowdsale Details:", mergeInfo)
    state.crowdsaleDetails = mergeInfo;
  },
  UpdateCrowdsaleRate(state, mergeInfo) {
    state.crowdsaleDetails.rate = mergeInfo;
  },
  UpdateCrowdsalePaused(state, mergeInfo) {
    state.crowdsaleDetails.paused = mergeInfo;
  },
  UpdateCrowdsaleTokenBalance(state, mergeInfo) {
    state.crowdsaleDetails.tokenBalance = mergeInfo;
  },
  UpdateCrowdsaleError(state, mergeInfo) {
    state.crowdsaleError = mergeInfo
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};