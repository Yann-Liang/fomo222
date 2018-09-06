<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="jumboshade">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand text-center" :href="'./index.html?r='+refId">
                <img src="./images/logo.png" alt="" srcset="" width="42" height="42">
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="'./index.html?r='+refId">首页</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="'./notice.html?r='+refId">公告</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" :href="contract" target="_blank">智能合约</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="nav-link-purp-on nav-link-purp" href="javascript:void(0);" @click="navClick('invite')">邀请链接</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp" href="javascript:void(0);" @click="navClick('community')">社群</b-nav-item>
                    <b-nav-item class="nav-link-purp-on nav-link-purp no-mobile" :href="'./personal.html?r='+refId">个人中心</b-nav-item>
                    <b-nav-item-dropdown class="nav-link-purp-on nav-link-purp only-mobile" text="个人中心" extra-toggle-classes="nav-link-custom">
                        <b-dropdown-item @click="changeTab(1)">邀请好友</b-dropdown-item>
                        <b-dropdown-item @click="changeTab(2)">钱包管理</b-dropdown-item>
                        <b-dropdown-item @click="changeTab(3)">资金历史</b-dropdown-item>
                        <b-dropdown-item @click="changeTab(4)">社群</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>

const deployed = require('@/lib/deployed')
const ethEnv = require('@/lib/etherEnv')
const {getCurrentUrl, getUrlParms} = require('@/lib/tools');

export default {
    //组件名
    name: 'component-nav',
    //实例的数据对象
    data() {
        return {
            contract:``,//智能合约的跳转地址
            refId:'',
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        changeTab(index){
            console.log('nav change',index);
            if(location.pathname=='personal.html'){
                this.$emit('changeTab',index);
            }else{
                location.href=`personal.html?tab=${index}&r=${this.refId}`
            }
        },
        navClick(type){
            this.$emit('navClick',type);
            if(type=='community'){
                this.changeTab(4)
            }else if(type=='invite'){
                this.changeTab(1)
            }
        }
    },
    //生命周期函数 请求写在created中
    created() {
        let r = getUrlParms('r');
        r&&(this.refId=r);
        ethEnv.Init(window.web3)
            .then(cxt => {
                if(deployed.fomo222.hasOwnProperty(cxt.network)) {
                    this.contract = ethEnv.contractOnEtherscan(deployed.fomo222[cxt.network])
                }
            })
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
}
</style>
