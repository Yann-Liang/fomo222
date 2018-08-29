<template>
    <section>
        <!-- 导航栏 start -->
        <con-nav></con-nav>
        <!-- 导航栏 end -->
        <div class="blurryboy"> </div>
        <b-container>
            <b-row>
                <b-col class="no-mobile" cols="0" sm="2" xl="2">
                </b-col>
                <b-col cols="12" sm="10" xl="10">
                    <div class="jumbotron jumbotron-adjust teamscore">
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <!-- 幸运大奖 -->
                                <p class="h4">{{$t('index.currentPrizePool')}}</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right glow ethglitch"> {{ stat.pool.toFixed(8) }}
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
                                    <embed src="http://dnf.sdcslog.com/img/egg2.svg" width="25" height="25" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
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
                                <p class="h2 text-right"> {{ stat.profit.toFixed(8) }}
                                    <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                                </p>
                            </div>
                        </div>
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

export default {
    //组件名
    name: 'personal',
    //实例的数据对象
    data() {
        return {
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
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {},
    //生命周期函数 请求写在created中
    created() {},
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

<style lang="less">

</style>
