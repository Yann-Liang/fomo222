<template>
    <svg class="svg-inline--fa fa-ethereum fa-w-10" :class="svgClass" aria-hidden="true" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
        <path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
    </svg>
</template>

<script>
export default {
    //组件名
    name: 'eth-svg',
    //实例的数据对象
    data() {
        return {};
    },
    //数组或对象，用于接收来自父组件的数据
    props: {
        svgClass: {
            type: String,
            default: 'l-tag-svg',
        },
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
svg.l-tag-svg {
    margin: -7px 0 0 0;
    width: 18px;
}
svg.l-svg-eth{
    width: 0.625em;
}
svg.l-svg-eth1{
    width: 0.625em;
    margin: -5px 0 0 0;
}
svg.l-svg-ethbtn{
    width: 0.6em;
    margin: -5px 0 0 0;
}
</style>
