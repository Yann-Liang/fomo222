<template>
    <section>
        <!-- 导航栏 start -->
        <con-nav></con-nav>
        <!-- 导航栏 end -->
        <div class="blurryboy"> </div>
        <b-container class="jumbotron rounded-0 text-light teaser-cover ">
            <iframe width="100%" height="850px" :src="url" frameborder="0"></iframe>
            <!-- <b-row class="jumbotron jumbotron-adjust teamscore">
                <b-col v-for="(item, index) in list" :key="index" cols="12" sm="12" align-self="center">
                    <h5 class="title text-center" @click="show(item)">{{item.title}}
                        <span class="fr">
                            {{item.updateTime}}&nbsp;
                            <i class="iconfont  icon-show" :class="item.show?'icon-up':'icon-down'"></i>
                        </span>
                    </h5>
                    <hr/>
                    <div class="content" v-if="item.show" v-html="item.content"></div>
                </b-col>
            </b-row> -->
        </b-container>
    </section>
</template>

<script>
import apiService from "@/services/API-service";
import conNav from "@/components/nav/nav.vue";
import keyIcon from "@/components/icon/key-icon";
import ethIcon from "@/components/icon/eth-icon";
const { getBaseUrl, getUrlParms } = require("@/lib/tools");
const ethEnv = require("@/lib/etherEnv");
const fp3d = require("@/lib/fomo222");

export default {
    //组件名
    name: "notice",
    //实例的数据对象
    data() {
        return {
            url: `https://editor.happy8.io/store/load/1_cn`,
            // list: [
            //     {
            //         title: `标题`,
            //         content: `<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p>`,
            //         show: false,
            //         updateTime:`2018-09-09 09:09:09`,
            //     },
            //     {
            //         title: `标题`,
            //         content: `<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p>`,
            //         show: false,
            //         updateTime:`2018-09-09 09:09:09`,
            //     },
            //     {
            //         title: `标题`,
            //         content: `<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p>`,
            //         show: false,
            //         updateTime:`2018-09-09 09:09:09`,
            //     },
            //     {
            //         title: `标题`,
            //         content: `<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p>`,
            //         show: false,
            //         updateTime:`2018-09-09 09:09:09`,
            //     },
            // ],
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        show(item) {
            item.show = !item.show;
        },
        changeUrl(lang) {
            switch (lang) {
                case "en":
                    this.url = "https://editor.happy8.io/store/load/1_en";
                    break;
                case "zh_cn":
                    this.url = "https://editor.happy8.io/store/load/1_cn";
                    break;
                default:
                    this.url = "https://editor.happy8.io/store/load/1_cn";
                    break;
            }
        },
    },
    //生命周期函数 请求写在created中
    created() {
        const { lang } = localStorage;
        if (lang) {
            this.changeUrl(lang);
        }
    },
    beforeMount() {},
    mounted() {},
    //组件
    components: {
        conNav,
    },
    //监视
    watch: {
        "$i18n.locale": function(now, old) {
            this.changeUrl(now);
        },
    },
    //过滤器
    filters: {},
    //自定义指令
    directive: {},
};
</script>

<style lang="less" scope>
// .title {
//     // margin: 0 auto;
//     // line-height: 1.75rem;
//     // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//     // border-top: 1px solid rgba(0, 0, 0, 0.1);
//     .fr{
//         padding: 0.7rem 0 0;
//         font-size: .75rem;
//     }
// }
// .content{
//     margin: 0 0 1rem;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//     p{
//         text-indent: 2em;
//     }
// }
</style>
