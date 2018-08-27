<template>
    <b-modal id="operationModal" centered hide-footer title="开始孵蛋" body-class="game-rule-body" header-class="game-rule-header">
        <p>
            chancegg是一款运行在以太坊上的区块链游戏。<br/>
            chancegg游戏的智能合约代码完全公开，所有的游戏规则和利润分配方式都预先写在代码中，无法人为干预被更改。在区块链技术的武装之下，chancegg变得公开、透明、无人为干预，淋漓尽致地发挥了区块链去中心化、不可篡改的特点，不用担心项目方跑路和突然崩盘，幸福满满。<br/>
            游戏的玩家可以随时查看和提现自己的收益，以及整个游戏的运行参数，同时也消除了项目方作弊或者跑路等人为风险，这些都让玩家更有意愿参与其中，并邀请朋友一起参与。

        </p>
        <ul>
            <li>
                每轮游戏结束时，最后一个参与的玩家成为孵化幸运蛋的人，获得该轮奖池的
                <b class="popoverglow">{{ params.wa }}%</b>。
            </li>
            <li>
                所有该轮的参与者，根据持有该轮egg的数量瓜分奖池的
                <b class="popoverglow">{{ params.we }}%</b>。
            </li>
            <li>
                游戏结束时，任意玩家可以通过购买egg，或者揭标来发起清算并开始下一轮游戏，同时获得该轮奖池的
                <b class="popoverglow">{{ params.wc }}%</b>。
            </li>
            <li>
                每轮奖池的
                <b class="popoverglow">{{ params.wb }}%</b>会进入下一轮奖池
            </li>
        </ul>
        <br/>
        <ul>
            <li>
                玩家可以注册获得推广链接，其它玩家通过该链接参与游戏时，推广人会获得对应的奖励。
            </li>
            <li>
                每个玩家购买egg时，
                <b class="popoverglow">{{ params.ta }}%</b>会进入奖池，
                <b class="popoverglow">{{ params.tb }}%</b>分给该轮的egg持有人。
                <b class="popoverglow">{{ params.te }}%</b>分给社区运营。
            </li>
            <li>
                <b class="popoverglow">{{ params.tc }}%</b>会分给上级推荐人，
                <b class="popoverglow">{{ params.td }}%</b>分给上上级推荐人。
                
            </li>
            <li>
                每轮游戏开始时默认最长持续时间
                <b class="popoverglow"> {{ params.maxTimeRemain.toFixed(3) }}小时 </b>, 每当用户购买egg时，该轮剩余持续时间如果没超过最长持续时间，则剩余持续时间增加
                <b class="popoverglow">{{ params.timeGap }}秒</b>。
            </li>
        </ul>
        <p>
            点击查看<a target="_blank" type="color:black" href="https://dextop.zendesk.com/hc/zh-cn/articles/360004149133"> 如何切换MetaMask界面及语言版本  </a>
        </p>
    </b-modal>
</template>

<script>
export default {
    //组件名
    name: 'operation-modal',
    //实例的数据对象
    data() {
        return {};
    },
    //数组或对象，用于接收来自父组件的数据
    props: {
        params:{}
    },
    //计算
    computed: {},
    //方法
    methods: {},
    //生命周期函数 请求写在created中
    created() {},
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
.container {
}
</style>
