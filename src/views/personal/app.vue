<template>
    <section>
        <!-- 导航栏 start -->
        <con-nav @changeTab="changeTab"></con-nav>
        <!-- 导航栏 end -->
        <div class="blurryboy"> </div>
        <b-container class="jumbotron rounded-0 text-center text-light teaser-cover ">
            <b-row>
                <b-col class="no-mobile" cols="0" sm="2" xl="2">
                    <b-nav vertical>
                        <b-nav-item :active="active==1" @click="changeTab(1)">邀请好友</b-nav-item>
                        <b-nav-item :active="active==2" @click="changeTab(2)">钱包管理</b-nav-item>
                        <b-nav-item :active="active==3" @click="changeTab(3)">资金历史</b-nav-item>
                        <b-nav-item :active="active==4" @click="changeTab(4)">社群</b-nav-item>
                    </b-nav>
                </b-col>
                <b-col cols="12" sm="10" xl="10">
                    <div v-if="active==1" class="jumbotron jumbotron-adjust teamscore">
                        <div v-if="stat.id !== -1">
                            <p>
                                {{$t('index.promotionLink')}}
                            </p>
                            <a target="_blank" :href="stat.ref_url">{{ this.stat.ref_url }}</a>
                        </div>

                        <div v-if="stat.id === -1">
                            <p class="text-center">
                                {{$t('index.buyPromotionLinkInfo')}}
                            </p>
                            <b-button size="lg" class="btn btn-outline-purp btn-block buyceo" @click="register">
                                {{$t('index.createPromotionLink')}}
                            </b-button>
                        </div>
                    </div>
                    <div v-if="active==2" class="jumbotron jumbotron-adjust teamscore">
                        钱包管理

                    </div>
                    <div v-if="active==3" class="jumbotron jumbotron-adjust teamscore">
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <!-- 幸运大奖 -->
                                <p class="h4">{{$t('index.currentPrizePool')}}</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right glow ethglitch"> {{ stat.win.toFixed(8) }}
                                    <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                                </p>
                            </div>
                        </div>
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <p class="h4">{{$t('index.haveEgg')}}</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right"> {{ stat.player_keys.toFixed(8) }}
                                    <key-icon :svg-class="'l-svg-key1 ethglow'"></key-icon>
                                    <!-- <embed src="http://dnf.sdcslog.com/img/egg2.svg" width="25" height="25" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /> -->
                                </p>
                            </div>
                        </div>
                        <!-- <div class="row marginb">
                            <div class="col text-right">{{$t('index.total')}}&nbsp;{{ this.stat.round_keys.toFixed(8) }}
                                <embed src="http://dnf.sdcslog.com/img/egg2.svg" width="25" height="25" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
                            </div>
                        </div> -->
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <!-- 当前收入 -->
                                <p class="h4">{{$t('index.currentIncome')}}</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right"> {{ stat.wallet.toFixed(8) }}
                                    <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                                </p>
                            </div>
                        </div>
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <!-- 推广奖励 -->
                                <p class="h4">推广奖励</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right"> {{ stat.affiliate.toFixed(8) }}
                                    <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="active==4" class="jumbotron jumbotron-adjust teamscore">
                        <p class="h4 text-center">组织图</p>
                        <hr/>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="borderchange"></th>
                                    <th scope="col" class="borderchange text-center">第一代</th>
                                    <th scope="col" class="borderchange tright">购买数额(ETH)</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tbody>

                            </tbody>
                        </table>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="borderchange"></th>
                                    <th scope="col" class="borderchange text-center">第一代</th>
                                    <th scope="col" class="borderchange tright">购买数额(ETH)</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import apiService from '@/services/API-service';
import conNav from '@/components/nav/nav.vue';
import keyIcon from '@/components/icon/key-icon';
import ethIcon from '@/components/icon/eth-icon';
const {getBaseUrl, getUrlParms} = require('@/lib/tools');
const ethEnv = require('@/lib/etherEnv');
const fp3d = require('@/lib/fomo222');

export default {
    //组件名
    name: 'personal',
    //实例的数据对象
    data() {
        return {
            active: 1,
            //html: '<i class="iconfont icon-caidan l-icon-loading"></i>',
            loadingFlag: true,
            show: true,
            //timer: '00:00:00',
            diff: -1,
            soldKeys: 0,
            buy_keys: 1,
            buy_cost: 0,
            ref_url: null,
            win_gain: 0,
            referer: 0,
            stat: {
                currentRound: 1,
                owner: null,
                dicimals: 1000000,
                round_eth: 0,
                round_keys: 0,
                mask: 0,
                winner: null,
                winner_link: null,
                pool: 0,
                id: -1,
                player_eth: 0,
                player_keys: 0,
                profit: 0,
                win: 0,
                wallet: 0,
                affiliate: 0,
            },
            params: {
                ta: 37.5,
                tb: 38.5,
                tc: 15.0,
                td: 5.0,
                te: 4.0,
                wa: 50.0,
                wb: 16.6,
                wc: 0.5,
                wd: 2.6,
                we: 30.3,
                maxTimeRemain: 4,
                timeGap: 30,
            },
            slogan: '看个蛋，赶紧买个蛋',
            /*addKeyList: [
                {
                    value: 1,
                    label: '+ 1 egg',
                    class: 'w-100',
                },
                {
                    value: 2,
                    label: '+ 2 eggs',
                    class: 'w-40',
                },
                {
                    value: 5,
                    label: '+ 5',
                    class: 'w-30',
                },
                {
                    value: 10,
                    label: '+ 10',
                    class: 'w-30',
                },
                {
                    value: 100,
                    label: '+ 100',
                    class: 'w-30',
                },
            ],*/
            winners: [{round: 0, winner: '0x11111111111', amount: 0.777777777}],
            disabled: false,
            loadingMsg: '加载中...',
            contract_url:
                'https://etherscan.io/address/0x46990b06EB818C33c776FAf3bB6a85Dd7C38a161',
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        changeTab(index) {
            this.active = index;
        },
        register() {},
    },
    //生命周期函数 请求写在created中
    created() {
        console.log('start personal')
        const tab = getUrlParms('tab');
        console.log('tab', tab);
        if (tab&&tab<5) {
            this.active=tab;
        }
        ethEnv.Init(window.web3)
            .then(cxt => {
                this.context = cxt
                return fp3d.getFp222(this.context.web3)
            })
            .then(fomo222 => {
                this.context.fp3d = fomo222
                let r = getUrlParms('r')
                r && (this.referer = Number(r))
                return this.context.fp3d.stat(this.context.address)
            })
            .then(_stat => {
                this.stat = Object.assign(this.stat, _stat)

                if ((this.stat.id >0) || (this.stat.id == 0 && this.context.address == this.stat.owner)) {
                    this.stat.ref_url = `${getBaseUrl()}?r=${this.stat.id}`    
                } else {
                    this.stat.id = -1
                }
            })
    },
    beforeMount() {},
    mounted() {},
    //组件
    components: {
        conNav,
        ethIcon,
        keyIcon,
    },
    //监视
    watch: {},
    //过滤器
    filters: {},
    //自定义指令
    directive: {},
};
</script>

<style lang="less" scoped>
.table {
    text-align: center;
    th {
        text-align: center;
    }
    td {
        // padding: 0;
    }
}
</style>

<style lang="less">
</style>
