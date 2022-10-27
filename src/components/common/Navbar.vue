<template>
  <div class="d-flex justify-content-between pt-4">
    <div class="logo-container">
      <router-link to="/" >
        <img src="../../assets/icons/Logo.png" class="logo mt-2" />
      </router-link>
    </div>
    <div v-if="phoneEnabled" style="height:0px; width:0px; overflow:hidden;">
      <iframe v-if="showPhoneFrame" src="tel:+17866523133">
      </iframe>
    </div>
    <Modal :show="modalIFrameContents && modalVisible" :onBackgroundClick="hideModal" >
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <div style="height:auto">
        <button class="btnClose" @click="hideModal()">
          X
        </button>

        <iframe v-if="typeof modalIFrameContents === 'string'" class="signUpFrame" :src="modalIFrameContents" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <VNodeRender :vnode="modalIFrameContents">
          
        </VNodeRender>
      </div>
    </Modal>
    <div class="menu">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-end">
          
          <div class="web3Container">
            <button v-if="web3Connected" class="web3Button" @click="addToken()">
              <svg id="web3Icon" class="web3Icon lpyTokenIcon" width="18" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" style="enable-background:new 0 0 96 96;" xml:space="preserve">
                <polygon points="67.2,58.4 48.3,77.3 8.6,37.6 2.6,43.5 48.3,89.2 51.3,86.2 54.3,83.3 73.1,64.4 94,43.5 88.1,37.6 "/>
                <path d="M36.8,21.2l0.9-0.9c6.2-6.2,12.1-6.6,16.9-1.8s4.3,10.7-1.8,16.9l-8.2,8.2l-10-10l-7,7l23.7,23.7l7-7l-7.8-7.8l8.5-8.5  c10-10,11-21.3,2.7-29.6C53.4,2.9,42.1,4,32.2,14L16.6,29.5l5.9,5.9l7-7L36.8,21.2z"/>
              </svg>
              {{web3ContractDetails.tokenBalance && web3ContractDetails.tokenBalance > 0 ? web3ContractDetails.tokenBalance : "Add Token"}}
            </button>
            <button @click="toggleWeb3()" class="web3Button" :class="web3Connected?'connected':'disconnected'">
              <svg width="30" height="30" class="web3Icon">
                <circle class="progress" id="pr1" r="6" cx="15" cy="15"/>
              </svg><span>Web3</span>
            </button>&nbsp;
          </div>
          <div>
            <button v-if="showLangButton" @click="clickLanguageButton()" class="dropbtn"><img :src="flags[getLanguage]"/>{{getLanguage}}</button>
            <div v-if="showLangButton" v-show="langVisible" id="myDropdown" class="dropdown-content">
              <div @click="setLanguage('EN')" class="dditem"><img :src="flags['EN']"/>EN</div>
              <div @click="setLanguage('KR')" class="dditem"><img :src="flags['KR']"/>KR</div>
              <div @click="setLanguage('CN')" class="dditem"><img :src="flags['CN']"/>CN</div>
            </div>
          </div>
          <button v-if="phoneEnabled" class="btn-phone" @click="callSupport()">
            <img src="../../assets/icons/Phone.png" class="phone" />
          </button>
          <p v-if="phoneEnabled" class="number Gotham text-white">1-(786)-652-3133</p>
          <button @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSd4fL3q0vv3UxcIrq4LmrHqKQwasWOg73hDgzIn2hqrAKrcvA/viewform?embedded=true')" class="btn-signup Gotham text-white">{{signupButtonText}}</button>
        </div>
        <div class="d-flex mt-3">
          <router-link v-for="(item, index) in menuItems()" :key="index" :to="item.href" class="menu-item Gotham text-white">{{item.text}}</router-link>
        </div>
      </div>
    </div>
    <div class="ham-menu mt-2" @click="showMenu">
      <div class="hamburger" ref="hamburger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </div>
  <div class="down-menu mt-2" ref="down">
    <div class="d-flex flex-column">
      <div>
        <button v-if="showLangButton" @click="clickLanguageButton()" class="dropbtn"><img :src="flags[getLanguage]"/>{{getLanguage}}</button>
        <div v-if="showLangButton" v-show="langVisible" id="myDropdown" class="dropdown-content">
          <div @click="setLanguage('EN')" class="dditem"><img :src="flags['EN']"/>EN</div>
          <div @click="setLanguage('KR')" class="dditem"><img :src="flags['KR']"/>KR</div>
          <div @click="setLanguage('CN')" class="dditem"><img :src="flags['CN']"/>CN</div>
        </div>
      </div>
      <router-link v-for="(item, index) in menuItems()" :key="index" 
        :to="item.href" 
        class="text-white Montserrat text-center fw-bold down-item">{{item.text}}</router-link>
      
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import router from "../../router";

import usFlag from '../../assets/flags/us.svg';
import krFlag from '../../assets/flags/kr.svg';
import cnFlag from '../../assets/flags/cn.svg';


var { 
  mapGetters: interfaceGetters,
  mapActions: interfaceActions,
} = createNamespacedHelpers("interface-controls");

var { 
  mapActions: tokenActions,
  mapGetters: tokenGetters,
} = createNamespacedHelpers("token-interface");


import Modal from '../Modal.vue';
export default {
  name: "Navbar",
  components: {
    Modal,
  },
  data: () => {
    return {
      flags: {
        'EN': usFlag,
        'KR': krFlag,
        'CN': cnFlag,
      },
      showLangButton: true,
      langVisible: false,
      showPhoneFrame:false,
      phoneEnabled: false, // if phone enabled should show phone number and button
    };
  },
  created() {
    window.addEventListener('click',  this.windowClick);
    var urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang'); // "edit"
    this.setLanguage(lang);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.windowClick);
  },
  mounted() {
    const oThis = this;
    this.intervalId = setInterval(async () => {
      await oThis.refreshWeb3Data();
    }, 5000);
    this.refreshWeb3Data();
    
  },
  methods: {
    toggleWeb3() {
      if (this.web3Connected) {
        this.disconnectWeb3();
      }
      else {
        this.connectWeb3();
      }
    },
    refreshWeb3Data(){
      this.web3RefreshContractDetails();
    },
    setLanguage(language) {
      if (language && typeof language === 'string') {
        this.storageSetItem("lang",language.toUpperCase());
      }
      {
        let lang = this.storageGetItem("lang");
        this.setLang({language:lang});
      }
    },
    clickLanguageButton() {
      this.langVisible = !this.langVisible;
    },
    windowClick(e) {
      try {
      var paths = e.path.filter(e => e.className && e.className.indexOf('dropbtn') >= 0);
      if (paths.length == 0) this.langVisible = false;
      }
      catch (exception) {
        console.error("e.path.filter", e, exception);
      }
    },
    routes() {
      return router.routes;
    },
    menuItems() {
      var items = [];
      this.routes().forEach(route => {
        var navbarMenuItem = this.navbarMenuItems[route.name];
        if (navbarMenuItem && navbarMenuItem.route){
          items.push({
            text: navbarMenuItem.text,
            href: route.path,
          })
        }
      });
      return items;
    },
    callSupport() {
      this.showPhoneFrame = true;
      setTimeout(() => {
        this.showPhoneFrame = false;
      }, 1000);
    },
    showMenu: function () {
      if (document.body && document.body.scrollTop) document.body.scrollTop = 0; // For Safari
      if (document.documentElement && document.documentElement.scrollTop) document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      if (this.$refs.down.style.display != "block") {
        this.$refs.down.style.display = "block";
        this.$refs.hamburger.classList.toggle("active");
      } else {
        this.$refs.down.style.display = "none";
        this.$refs.hamburger.classList.remove("active");
      }
    },
    ...interfaceActions({
      showModal: "showModal",
      hideModal: "hideModal",
      setLang: "setLanguage",
    }),
    ...tokenActions({
      delay: "delay",
      testAction:"testAction",
      initWeb3:"init",
      connectWeb3: "connect",
      disconnectWeb3: "disconnect",
      addToken:"setupToken",
      web3RefreshContractDetails:"refreshContractDetails",
    }),
   
  },
  computed: {
    ...interfaceGetters({
      signupButtonText: "getNavbarSignupButtonText",
      navbarMenuItems: "getNavbarMenuItems",
      modalVisible: "getModalVisible",
      modalIFrameContents: "getModalIFrameContents",
      langData:"getLangData",
      getLanguage: "getLanguage",
    }),
    ...tokenGetters({
      web3ContractDetails: "getContractDetails",  
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
    })
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dropbtn img, 
.dditem img {
  width: 32px;
  margin-top: -3px;
  margin-right: 2px;
}

.dditem {
  padding-top: 3px;
  padding-bottom: 6px;
  color: white;
}

/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  border: 1px white solid;
  color: white;

  padding: 5px 8px;
  font-size: 16px;
  cursor: pointer;
}

.down-menu .dropbtn,
.down-menu .dropdown-content {
  margin-left: 50px;
}
.down-menu .dditem {
  padding-top: 15px;
  padding-bottom: 15px;
}


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  text-align: center;
  display: block;
  position: absolute;
  background-color: #24232b;
  --margin-top: 36px;
  margin-left: 0px;
  min-width: 72px;
  box-shadow: 0px 8px 16px 0px rgba(110, 109, 109, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content div {
  color: white;
 --padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

/* Change color of dropdown links on hover */
.dropdown-content div:hover {
  background-color: rgb(78, 77, 77)

}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */

</style>
<style scoped>
.btnClose {
  float: right;
  transform: translate(30%, -50%);
  background: transparent;
  border: 1px grey solid;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 10px;
}
.logo {
  width: 100px;
}
.btn-phone {
  background: transparent;
  border: 1px white solid;
  padding: 0px 10px 4px 10px;
}
.phone {
  width: 16px;
  height: 16px;
}
.number {
  margin: 7px 10px;
}
.btn-signup {
  background: transparent;
  border: 1px white solid;
  padding: 5px 15px;
  margin-left: 10px;
}
.menu-item {
  text-decoration: none;
  margin: 0 0 0 20px;
  font-size: 14px;
}
.hamburger {
  display: inline-block;
  cursor: pointer;
}
.ham-menu {
  display: none;
  z-index: 667;
}
.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}
.hamburger.active .bar2 {
  opacity: 0;
}

.hamburger.active .bar1 {
  transform: translateY(11px) rotate(45deg);
}

.hamburger.active .bar3 {
  transform: translateY(-11px) rotate(-45deg);
}
.down-menu {
  display: none;
  position: absolute;
  background: black;
  /* border-radius: 20px; */
  opacity: 0.8;
  margin-left: -10%;
  padding-top: 50px;
  width: 100%;
  top: -10px;
  height: 105%;
  z-index:666;
}
.down-item {
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
}
@media screen and (max-width: 880px) {
  .menu {
    display: none;
  }
  .ham-menu {
    display: block;
  }
}

@media screen and (min-width: 880px) {
  .down-menu {
    display: none !important;
  }
}


.web3Container {
  display: contents;
}
.web3Button:last-of-type {
  margin-right: 5px;
}
.web3Button {
  margin-left: 10px;
  color: white;
  margin-top: 0px;
  background-color: transparent;
  border: solid 1px white;
  padding: 0px 11px 0px 11px;
}

.web3Button > span {
  display: inline-block;
  padding-top: 2px;
}
.web3Icon {
  margin-left: -8px;
  margin-top: -4px;
  padding-top: 1px;
}
.web3Icon.lpyTokenIcon {
  margin-left: -5px;
  margin-top: -4px;
  padding-top: 1px;
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
.signUpFrame {
  height: 70vh;
  width: 100%;
}
@media screen and (max-width: 990px) {
  .signUpFrame {
    height: 80vh;
  }
}
</style>