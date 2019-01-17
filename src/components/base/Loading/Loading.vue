<!-- loading 组件 -->
<template>
    <div class="loading">
        <img src="./loading.gif" height="24" width="24">
        <p class="desc">{{ title }}</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Loading',
        components: {},
        data () {
            return {}
        },
        props: {
            title: {
                type: String,
                default: '玩命加载中……'
            }
        },
        watch: {},
        methods: {},
        created() {},
        mounted() {},
        destroyed () {
            // 良好的习惯：销毁定时器
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../../assets/styles/global';
    .loading {
        width: 100%;
        text-align: center;
        .desc {
            line-height: px2rem(40);
            font-size: $font-size-small;
            color: $color-text-l;
        }
    }
</style>
