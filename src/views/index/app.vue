<template>
    <section>
        <!-- 导航栏 start -->
        <con-nav></con-nav>
        <!-- 导航栏 end -->
        <div class="blurryboy"> </div>
        <div class="jumbotron rounded-0 text-center text-light teaser-cover l-second-floor">
            <div class="container">
                <br/>
                <br/>
                <h3 class="display-3 scammed no-mobile">
                    一个独享！超级大奖等你赢取！
                </h3>
                <h2 class="display-3">
                    <span class="ethglitch titleglow l-info">
                        {{ this.stat.pool|numFormat(4) }}
                        <eth-icon :svg-class="'l-svg-eth ethglow'"></eth-icon>
                    </span>
                    <span class="headtimer">
                        {{ this.timer }}
                        <br/>
                    </span>
                </h2>
                <button :disabled="disabled" @click="buyOneKey" class="buyOneTicket btn btn-lg btn-block btn-purp pulse marginb">
                    <div class="row">
                        <div class="col-sm-1.5 no-mobile" style="padding-left: 10px">
                            <!-- <embed src="http://dnf.sdcslog.com/img/egg2.svg" width="25" height="25" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" style="margin: 0 0 -5px -5px;" /> -->
                            <key-icon :svg-class="'l-svg-key ethglow'"></key-icon>
                             1x
                        </div>
                        <div class="col-sm-11">
                            <span style="margin-right: 0rem;margin-left: -1rem" class="only-mobile mobile-text">
                                <!-- <embed src="http://dnf.sdcslog.com/img/egg2.svg" width="25" height="25" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" style="margin: 0 0 -5px -5px;" /> -->
                                <key-icon :svg-class="'l-svg-key ethglow'"></key-icon>
                                 1x
                            </span>{{slogan}}
                        </div>
                    </div>
                </button>
            </div>
        </div>

        <b-container>
            <b-row>
                <b-col class="text-center" cols="12" sm="6" align-self="center">
                    <div class="jumbotron jumbotron-adjust teamscore">
                        <p>总彩池</p>
                        <hr/>
                        <p class="h2 glow ethglitch">{{888888.88|numFormat}}
                            <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                        </p>
                    </div>

                </b-col>
                <b-col class="text-center" cols="12" sm="6" align-self="center">
                    <div class="jumbotron jumbotron-adjust teamscore">
                        <p>总投入</p>
                        <hr/>
                        <p class="h2 glow ethglitch">{{12888888.88|numFormat}}
                            <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                        </p>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center buy-item" cols="6" sm="4" xl="4" align-self="center">
                    <b-form-input class="buy-keys" v-model="buy_keys" @change="cal_buy" placeholder="输入数量"></b-form-input>
                    <!-- <b-input-group size="lg" :append="'@ '+this.buy_cost+' ETH'" class="key-input1">

                    </b-input-group> -->
                </b-col>
                <b-col class="text-center buy-item" cols="6" sm="4" xl="4" align-self="center">
                    <div class="jumbotron teamscore unit-price">
                        <span>当前单价：{{buy_cost}}</span>
                        <eth-icon :svg-class="'l-svg-eth1'"></eth-icon>
                    </div>
                </b-col>
                <b-col class="text-center buy-item" cols="9" sm="4" xl="4" align-self="center">
                    <b-row>
                        <b-col cols="6" sm="6" xl="6">
                            <button type="button" id="tixBuy" @click="buy" class="btn btn-block btn-purp ticketProcess">
                                {{$t('index.doIt')}}
                            </button>
                        </b-col>
                        <b-col cols="6" sm="6" xl="6">
                            <button type="button" id="tixReinvest" @click="reload" class="btn btn-block btn-outline-purp ticketProcess">
                                {{$t('index.buy1')}}
                            </button>
                        </b-col>
                    </b-row>

                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center" cols="12" sm="6" xl="6" align-self="center">
                    <div class="jumbotron jumbotron-adjust teamscore">
                        <p class="h4">25彩池</p>
                        <hr/>
                        <p class="h2 glow ethglitch">{{888888.88|numFormat}}</p>
                        <p class="h5">次数倒数：12/25</p>
                    </div>
                </b-col>
                <b-col class="text-center" cols="12" sm="6" xl="6" align-self="center">
                    <div class="jumbotron jumbotron-adjust teamscore">
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <!-- 幸运大奖 -->
                                <p class="h4">{{$t('index.currentPrizePool')}}</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right glow ethglitch"> {{ this.stat.pool.toFixed(8) }}
                                    <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                                </p>
                            </div>
                        </div>
                        <div class="row nomarginb">
                            <div class="col-auto">
                                <p class="h4">{{$t('index.haveEgg')}}</p>
                            </div>
                            <div class="col">
                                <p class="h2 text-right"> {{ this.stat.player_keys.toFixed(8) }}
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
                                <p class="h2 text-right"> {{ this.stat.profit.toFixed(8) }}
                                    <eth-icon :svg-class="'l-tag-svg ethglow'"></eth-icon>
                                </p>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center" cols="1" sm="1" xl="1" align-self="top">
                    <i>图标</i>
                </b-col>
                <b-col class="text-center jumbotron jumbotron-adjust teamscore" cols="11" sm="5" xl="5" align-self="center">
                    <p class="h4">25彩池榜单</p>
                    <hr/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="borderchange">{{$t('index.round')}}</th>
                                <th scope="col" class="borderchange text-center">{{$t('index.winner')}}</th>
                                <th scope="col" class="borderchange tright">{{$t('index.prizePool')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data,index) in winners" :key="index">
                                <th scope="row" class="playername truncate"> {{ data.round }}.</th>
                                <td class="text-center">{{ data.winner.substr(0, 15) + '...' }}</td>
                                <td class="tright">{{ data.amount.toFixed(8) }} ETH</td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </b-container>

        <b-modal ref="myModal" hide-footer>
            <div class="d-block text-center">
                <!-- 请在metamask中完成交易 -->
                <h3>{{$t('index.pleaceFinishTrade')}}</h3>
            </div>
        </b-modal>

        <b-modal id="currentRound" centered hide-footer :title="$t('gameRule.title')" body-class="game-rule-body" header-class="game-rule-header">
            <ul>
                <li>
                    {{$t('gameRule.rule1')}}
                    <b class="popoverglow">{{ this.params.wa }}%</b>。
                </li>
                <li>
                    {{$t('gameRule.rule2')}}
                    <b class="popoverglow">{{ this.params.we }}%</b>。
                </li>
                <li>
                    {{$t('gameRule.rule3')}}
                    <b class="popoverglow">{{ this.params.wc }}%</b>。
                </li>
                <li v-html="$t('gameRule.rule4',{val:this.params.wb})"></li>
            </ul>
            <br/>
            <ul>
                <li>{{$t('gameRule.rule5')}}</li>
                <li v-html="$t('gameRule.rule6',{val1:this.params.ta,val2:this.params.tb})"></li>
                <li v-html="$t('gameRule.rule7',{val1:this.params.tc,val2:this.params.td})"></li>
                <li v-html="$t('gameRule.rule8',{hours:this.params.maxTimeRemain.toFixed(3),s:this.params.timeGap})"></li>
            </ul>
        </b-modal>
        <b-modal id="player" centered hide-footer :title="$t('gameRule.title')" body-class="game-rule-body" header-class="game-rule-header">
            <ul>
                <li>
                    {{$t('gameRule.rule1')}}
                    <b class="popoverglow">{{ this.params.wa }}%</b>。
                </li>
                <li>
                    {{$t('gameRule.rule2')}}
                    <b class="popoverglow">{{ this.params.we }}%</b>。
                </li>
                <li>
                    {{$t('gameRule.rule3')}}
                    <b class="popoverglow">{{ this.params.wc }}%</b>。
                </li>
                <li v-html="$t('gameRule.rule4',{val:this.params.wb})"></li>
            </ul>
            <br/>
            <ul>
                <li>{{$t('gameRule.rule5')}}</li>
                <li v-html="$t('gameRule.rule6',{val1:this.params.ta,val2:this.params.tb})"></li>
                <li v-html="$t('gameRule.rule7',{val1:this.params.tc,val2:this.params.td})"></li>
                <li v-html="$t('gameRule.rule8',{hours:this.params.maxTimeRemain.toFixed(3),s:this.params.timeGap})"></li>
            </ul>
        </b-modal>

        <BlockUI v-if="loadingFlag" :message="loadingMsg" :html="html">
        </BlockUI>
        <operation-modal :params="params"></operation-modal>
    </section>

</template>

<script>
const ethEnv = require('@/lib/etherEnv');
const utils = require('@/lib/utils');
// const deployed = require('@/lib/deployed')
// const errors = require('@/lib/errors')
const fp3d = require('@/lib/fp3d2');
const api = require('@/api/backend');
const {getCurrentUrl, getUrlParms} = require('@/lib/tools');

import ethIcon from '@/components/icon/eth-icon';
import keyIcon from '@/components/icon/key-icon';
import piggyIcon from '@/components/icon/piggy-icon';
import tabHeader from '@/components/tab-header/index.vue';
import operationModal from '@/components/modal/operation-modal.vue';
import conNav from '@/components/nav/nav.vue';

export default {
    //组件名
    name: 'fp3d',
    data() {
        return {
            html: '<i class="iconfont icon-caidan l-icon-loading"></i>',
            loadingFlag: true,
            show: true,
            timer: '00:00:00',
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
            addKeyList: [
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
            ],
            winners: [{round: 0, winner: '0x11111111111', amount: 0.777777777}],
            disabled: false,
            loadingMsg: '加载中...',
            contract_url:
                'https://etherscan.io/address/0x46990b06EB818C33c776FAf3bB6a85Dd7C38a161',
        };
    },
    computed: {
        eggsSrc: function() {
            //    return process.env.NODE_ENV === 'production'?'./images/egg2.svg':'../../../static/images/egg2.svg'
            return 'http://dnf.sdcslog.com/img/egg2.svg';
        },
    },
    methods: {
        diffToTime() {
            if (this.diff < 0) {
                this.timer = `--:--:--`;
                this.slogan = `正在读取数据，请耐心等待...`;
                this.disabled = true;
            } else if (this.diff === 0) {
                this.disabled = false;
                this.timer = `00:00:00`;
                this.slogan = '我来揭标,领取0.5%分红!!';
            } else {
                this.disabled = false;
                const seconds = ('' + this.diff % 60).padStart(2, '0');
                const minutes = ('' + Math.floor(this.diff / 60) % 60).padStart(
                    2,
                    '0',
                );
                const hours = ('' + Math.floor(this.diff / 3600)).padStart(
                    2,
                    '0',
                );
                this.timer = `${hours}:${minutes}:${seconds}`;
                // this.slogan = '争夺奖金！！！';
            }
        },
        loopSlogan() {
            setInterval(() => {
                if (this.diff > 0) {
                    this.slogan = this.$t(
                        `slogans[${Math.floor(
                            Math.random() * this.$t('slogans').length,
                        )}]`,
                    );
                }
            }, 4000);
        },
        buyOneKey() {
            this.$refs.myModal.show();
            if (this.diff === 0) {
                return this.context.fp3d
                    .finalize(this.referer)
                    .then(tx => {
                        this.$refs.myModal.hide();
                    })
                    .catch(err => {
                        this.$refs.myModal.hide();
                    });
            } else {
                this.buy_keys = 1;
                this.cal_buy();
                return this.context.fp3d
                    .buy(
                        new this.context.web3.BigNumber(this.buy_cost),
                        this.referer,
                    )
                    .then(tx => {
                        this.$refs.myModal.hide();
                    })
                    .catch(err => {
                        this.$refs.myModal.hide();
                    });
            }
        },
        fp3dStat(address) {
            // 重新获取round，keyTh，bonus，wallet等信息
            return this.context.fp3d.stat(address).then(_stat => {
                this.stat = Object.assign(this.stat, _stat);
                this.stat.ref_url = `${getCurrentUrl()}?r=${this.stat.id}`;
                this.stat.winner_link = ethEnv.contractOnEtherscan(
                    this.stat.winner,
                );
            });
        },
        cal_buy() {
            let keys = this.buy_keys;
            if (keys <= 0) {
                alert(`购买数量错误`);
                // this.$alert(`购买数量错误`);
            } else {
                /*
                let sum = new this.context.web3.BigNumber(0);
                for (let i = 0; i < this.buy_keys; i++) {
                    sum = sum.add(this.context.fp3d.price(i + this.stat.round_keys + 1));
                }
                this.buy_cost = sum.toNumber();*/
                // 更换计算方法
                let round_keys = this.stat.round_keys;
                let c_key = Math.ceil(round_keys);
                let price = this._p(c_key);
                let remain = c_key - round_keys;
                if (remain >= keys) {
                    this.buy_cost = price * keys;
                    return;
                }

                let buy_cost = price * remain;
                keys = keys - remain;

                while (keys > 1) {
                    c_key = c_key + 1;
                    price = this._p(c_key);
                    buy_cost = buy_cost + price;
                    keys = keys - 1;
                }
                c_key = c_key + 1;
                price = this._p(c_key);
                buy_cost = buy_cost + price * keys;
                this.buy_cost = buy_cost.toFixed(10);
            }
        },
        _p(n) {
            return this.context.fp3d.params.a
                .mul(n)
                .add(this.context.fp3d.params.b)
                .dividedBy(Math.pow(10, 18))
                .toNumber();
        },
        buy() {
            this.$refs.myModal.show();
            this.cal_buy();
            let cost = new this.context.web3.BigNumber(this.buy_cost);
            return this.context.fp3d
                .buy(cost, this.referer)
                .then(tx => {
                    this.$refs.myModal.hide();
                })
                .catch(err => {
                    this.$refs.myModal.hide();
                });
        },
        reload() {
            let cost =
                this.buy_cost < this.stat.profit
                    ? this.buy_cost
                    : this.stat.profit;
            cost = new this.context.web3.BigNumber(cost);
            cost = cost.mul(Math.pow(10, 18)).sub(1000);
            this.$refs.myModal.show();
            return this.context.fp3d
                .reloadKeys(cost, this.referer)
                .then(tx => {
                    this.$refs.myModal.hide();
                })
                .catch(err => {
                    this.$refs.myModal.hide();
                });
        },
        withdrawal() {
            this.$refs.myModal.show();
            return this.context.fp3d
                .withdrawal(this.referer)
                .then(tx => {
                    this.$refs.myModal.hide();
                })
                .catch(err => {
                    this.$refs.myModal.hide();
                });
        },
        register() {
            this.$refs.myModal.show();
            return this.context.fp3d
                .register(this.referer)
                .then(tx => {
                    this.$refs.myModal.hide();
                })
                .catch(err => {
                    this.$refs.myModal.hide();
                });
        },
        addKeys(val) {
            this.buy_keys = parseFloat(this.buy_keys);
            this.buy_keys += parseFloat(val);
            this.cal_buy();
        },
    },
    created() {
        ethEnv
            .Init(window.web3)
            .then(cxt => {
                this.context = cxt;

                api.fp3dTimestamp().then(_timestamp => {
                    this.diff = _timestamp;
                    this.diffToTime();
                });

                setInterval(() => {
                    api.fp3dTimestamp().then(_timestamp => {
                        console.log(`load time ${_timestamp}`);
                        this.diff = _timestamp;
                        this.diffToTime();
                    });
                }, 20 * 1000);

                setInterval(() => {
                    if (this.diff > 0) {
                        this.diff = this.diff - 1;
                        this.diffToTime();
                    }
                }, 1000);
                return fp3d.getFp3d(this.context.web3);
            })
            .then(_fp3d => {
                this.context.fp3d = _fp3d;
                this.contract_url = ethEnv.contractOnEtherscan(
                    this.context.fp3d.c.instance.address,
                );
                let r = getUrlParms('r');
                r && (this.referer = Number(r));

                ['ta', 'tb', 'tc', 'td', 'wa', 'wb', 'wc', 'we'].forEach(
                    prop => {
                        this.params[prop] =
                            this.context.fp3d.params[prop].toNumber() / 10;
                    },
                );
                this.params.maxTimeRemain =
                    this.context.fp3d.params.maxTimeRemain.toNumber() / 3600;
                this.params.timeGap = this.context.fp3d.params.timeGap.toNumber();
                return this.fp3dStat(this.context.address);
            })
            .then(() => {
                this.loopSlogan();
                setInterval(() => {
                    this.fp3dStat(this.context.address);
                }, 10 * 1000);
            })
            .then(() => {
                this.cal_buy();
            })
            .then(() => {
                api.winnerData().then(_data => {
                    this.winners = _data;
                    console.log(_data);
                });
                setInterval(() => {
                    api.winnerData().then(_data => {
                        this.winners = _data;
                        console.log(_data);
                    });
                }, this.context.fp3d.params.maxTimeRemain.toNumber() * 1000);
            })
            .then(() => {
                this.loadingFlag = false;
            })
            .catch(err => {
                this.loadingFlag = false;
                alert(utils.zh(err));
                // this.$alert(utils.zh(err));
                console.log(err);
            });
    },
    components: {
        ethIcon,
        keyIcon,
        piggyIcon,
        tabHeader,
        operationModal,
        conNav,
    },
};
</script>

<style lang="less" scoped>
.buy-item {
    margin-bottom: 2rem;
}
.buy-keys {
    //  padding: 0.688rem 0.75rem;
}
.unit-price {
    margin-bottom: 0;
    padding: 0.438rem 0;
}

// ------------- old

// .header-list {
//     > li {
//         padding: 0 15px;
//         float: right;
//         color: #f8f9fa;
//         font-family: Poppins;
//     }
//     margin: 0 30px;
//     line-height: 66px;
//     font-size: 12px;
// }

//覆盖样式
.l-second-floor {
    margin-bottom: 0;
    padding-bottom: 1rem;
}
svg.l-tag-svg {
    margin: -7px 0 0 0;
    width: 18px;
}

.main {
    margin: 100px 0 0;
}
.l-info {
    display: flex;
    justify-content: center;
    > svg {
        margin: 4px 0 0 0;
        width: 1em;
        height: 1em;
    }
}

.l-key-icon {
    width: 20px;
}

.l-key-info {
    padding: 10px 0 50px;
    text-align: right;
}

.l-icon-caidan {
    font-size: 20px;
}
.l-icon-caidan1 {
    margin: 0 -6px 0 0;
    font-size: 28px;
}
.l-icon-caidan2 {
    font-size: 6rem;
}
.l-svg-piggy {
    margin: -5px 0 0;
    width: 23px;
}

.l-add-keys {
    margin-top: 16px; //覆盖样式
}

.headtimer {
    margin-top: 20px;
    margin-bottom: 30px;
}

.display-3 {
    margin-top: 30px;
}

button.buyOneTicket {
    margin-top: 20px;
    &:hover {
        .l-icon-caidan {
            &::before {
                content: '\e606';
            }
        }
    }
    cursor: url('./images/zajindan.png'), auto !important;
}

// .svg-inline--fa {
//     margin-left: 15px;
// }

// web less start
.send-box {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.key-input1 {
    .input-group-text {
        font-size: 14px;
    }
}
// web less end

//弹窗样式
.game-rule-model {
    color: #212529;
    background: #ccc;
}
.popover-container {
    background: #ccc;
    border-radius: 5px;
    width: 330px;
    text-align: left;
    .popover-header {
        line-height: 32px;
        color: #000;

        background: #f7f7f7;
    }
    .popover-body {
        color: #212529;
        background: #ccc;
        border-radius: 5px;
    }
}
</style>

<style lang="less">
.dropdown-item:focus {
    background: #ff00ff;
}
.dropdown-item:hover {
    background: #ff00ff;
}
.tooltip-inner {
    max-width: 330px;
}
.loading-container {
    .loading {
        text-shadow: 0 0 2px #2b002b, 0 0 5px #c0c, 0 0 2px #f0f;
        color: white;
        background: rgba(240, 0, 240, 0.8) !important;
    }

    .l-icon-loading {
        font-size: 3rem;
    }
    .loading-label {
        font-size: 1.5rem;
    }
}

//弹窗样式
.game-rule-header {
    color: #000;
    padding: 5px 16px;
    background: #f7f7f7;
}

.game-rule-body {
    background: #ccc;
    border-radius: 5px;
}
</style>




