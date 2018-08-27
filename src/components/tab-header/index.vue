<template>
    <div class="container">
        <b-row>
            <div class="col">
                <p class="lead nomarginb">{{title}}</p>
            </div>
            <div class="col-auto">
                <p class="text-right nomarginb tutorial">
                    <svg class="svg-inline--fa fa-arrow-right fa-w-14 pulsetutorial tutorialArrow l-svg-right" aria-hidden="true" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                    <button tabindex="0" type="button" class="qbtn" @click="btnClick" v-b-modal="id">
                        <svg class="svg-inline--fa fa-question-circle fa-w-16  l-svg-qus" aria-hidden="true" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                        </svg>
                    </button>
                </p>
            </div>
        </b-row>
        <hr/>
    </div>
</template>

<script>
export default {
    //组件名
    name: "tab-header",
    //实例的数据对象
    data() {
        return {
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {
        title: {
            type: String,
            default: ""
        },
        id:{
            type: String,
            default: "id"
        }
    },
    //计算
    computed: {},
    //方法
    methods: {
        btnClick(){
            console.log('btnClick')
            // this.show = !this.show;
        }
    },
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
    directive: {}
};
</script>

<style lang="less">
.qbtn{
    margin:0 -12px 6px 0;
}
.l-svg-right {
    width: 14px;
    height: 16px;
}
.l-svg-qus {
    width: 16px;
    margin:-5px 0  0;

}
</style>
