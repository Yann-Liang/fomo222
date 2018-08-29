<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="jumboshade">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand text-center" href="./index.html">
                FOMO<br/>222
            </b-navbar-brand>
            <b-navbar-nav>
                <b-nav-item class="nav-link-purp-on nav-link-purp" href="./index.html">首页</b-nav-item>
                <b-nav-item class="nav-link-purp-on nav-link-purp" href="#" disabled>公告</b-nav-item>
                <b-nav-item class="nav-link-purp-on nav-link-purp" href="#" disabled>智能合约</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="nav-link-purp-on nav-link-purp" href="#">邀请链接</b-nav-item>
                <b-nav-item class="nav-link-purp-on nav-link-purp" href="./personal.html">个人中心</b-nav-item>
            </b-navbar-nav>
        </div>
    </b-navbar>
</template>

<script>
export default {
    //组件名
    name: 'template',
    //实例的数据对象
    data() {
        return {};
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
