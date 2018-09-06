<template>
    <section>
        <!-- 导航栏 start -->
        <con-nav @changeTab="changeTab"></con-nav>
        <!-- 导航栏 end -->
        <div class="blurryboy"> </div>

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
    name: 'notice',
    //实例的数据对象
    data() {
        return {

        }
    },
    //数组或对象，用于接收来自父组件的数据
    props: {

    },
    //计算
    computed: {

    },
    //方法
    methods: {

    },
    //生命周期函数 请求写在created中
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    //组件
    components: {
        conNav,
    },
    //监视
    watch: {

    },
    //过滤器
    filters:{

    },
    //自定义指令
    directive:{

    }
}

</script>

<style lang="less">

</style>
