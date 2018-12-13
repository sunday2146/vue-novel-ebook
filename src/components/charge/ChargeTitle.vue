<template>
    <transition name="fade">
        <div class="charge-title" :class="{'hide-shadow': ifHideShadow}">
            <div class="charge-title-text-wrapper">
                <span class="charge-title-text">{{$t('book.charge')}}</span>
            </div>
            <div class="charge-title-btn-wrapper charge-title-left">
                <span class="icon-back icon" @click.stop="back"></span>
            </div>
            <div class="charge-title-btn-wrapper charge-title-right">
                <span class="icon-cart icon" @click.stop="cart"></span>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'ChargeTitle',
        methods: {
            back () {
                this.$router.go(-1)
                // console.log('back back')
            },
            cart () {
                // console.log('go to cart info')
            }
        },
        watch: {
            offsetY (offsetY) {
                if (offsetY > 0) {
                    this.ifHideShadow = false
                } else {
                    this.ifHideShadow = true
                }
            }
        },
        data () {
            return {
                ifHideShadow: true
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .charge-title {
        position: relative;
        z-index: 130;
        width: 100%;
        height: px2rem(42);
        background: white;
        box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);

        &.hide-shadow {
            box-shadow: none;
        }

        .charge-title-text-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: px2rem(42);
            @include columnCenter;

            .charge-title-text {
                font-size: px2rem(16);
                line-height: px2rem(20);
                font-weight: bold;
                color: #333;
            }
        }

        .charge-title-btn-wrapper {
            position: absolute;
            top: 0;
            box-sizing: border-box;
            height: 100%;
            @include center;

            .icon {
                font-size: px2rem(20);
                color: #666;
            }

            &.charge-title-left {
                left: 0;
                padding-left: px2rem(15);
            }

            &.charge-title-right {
                right: 0;
                padding-right: px2rem(15);
            }
        }
    }
</style>
