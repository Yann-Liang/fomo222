<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="jumboshade">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand text-center" :href="'./index.html?r='+refId">
                <!-- <img src="./images/logo.png" alt="" srcset="" width="42" height="42"> -->
                <iframe src="./images/logo.svg" frameborder="0" width="48" height="74" style="padding:.5rem 0 0;"></iframe>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="'./index.html?r='+refId">{{$t('nav.home')}}</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="'./notice.html?r='+refId">{{$t('nav.notice')}}</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="contract" target="_blank">{{$t('nav.contract')}}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="nav-link-purp-on nav-link-purp" href="javascript:void(0);" @click="navClick('invite')">{{$t('nav.home')}}</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="'./community.html?r='+refId">{{$t('nav.community')}}</b-nav-item>
                    <!-- 个人中心 -->
                    <b-nav-item class="nav-link-purp-on nav-link-purp no-mobile" :href="'./personal.html?r='+refId">{{$t('nav.personal')}}</b-nav-item>
                    <b-nav-item-dropdown class="nav-link-purp-on nav-link-purp only-mobile" :text="$t('nav.personal')" extra-toggle-classes="nav-link-custom">
                        <b-dropdown-item @click="changeTab(1)">{{$t('nav.inviteFriends')}}</b-dropdown-item>
                        <b-dropdown-item @click="changeTab(2)">{{$t('nav.walletManager')}}</b-dropdown-item>
                        <b-dropdown-item @click="changeTab(3)">{{$t('nav.capitalHistory')}}</b-dropdown-item>
                        <b-dropdown-item @click="changeTab(4)">{{$t('nav.community')}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown class="nav-link-purp-on nav-link-purp" :text="lang" extra-toggle-classes="nav-link-custom">
                        <b-dropdown-item v-for="(item, index) in langList" :key="index" @click="changeLang(item)">{{item.label}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
const deployed = require("@/lib/deployed");
const ethEnv = require("@/lib/etherEnv");
const { getCurrentUrl, getUrlParms } = require("@/lib/tools");

export default {
    //组件名
    name: "component-nav",
    //实例的数据对象
    data() {
        return {
            contract: ``, //智能合约的跳转地址
            refId: "",
            lang:'简体中文',
            langList:[{
                value:'en',
                label:'English'
            },
            {
                value:'zh-cn',
                label:'简体中文'
            }]
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        changeTab(index) {
            console.log("nav change", index);
            if (location.pathname == "personal.html") {
                this.$emit("changeTab", index);
            } else {
                location.href = `personal.html?tab=${index}&r=${this.refId}`;
            }
        },
        navClick(type) {
            this.$emit("navClick", type);
            if (type == "community") {
                this.changeTab(4);
            } else if (type == "invite") {
                this.changeTab(1);
            }
        },
        changeLang(item){
            this.lang=item.label;
            this.$i18n.locale =item.value;
            localStorage.lang=item.value;
        }
    },
    //生命周期函数 请求写在created中
    created() {
        let r = getUrlParms("r");
        r && (this.refId = r);
        ethEnv.Init(window.web3).then(cxt => {
            if (deployed.fomo222.hasOwnProperty(cxt.network)) {
                this.contract = ethEnv.contractOnEtherscan(
                    deployed.fomo222[cxt.network],
                );
            }
        });
    },
    beforeMount() {},
    mounted() {},
    //组件
    components: {},
    //监视
    watch: {},
    //过滤器
    filters: {},
    //自定义指令
    directive: {},
};
</script>

<style lang="less">
.navbar-brand {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0;
}
//覆盖
.navbar{
 padding: 0;
}
</style>
