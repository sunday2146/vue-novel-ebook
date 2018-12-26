<template>
    <div class="banner-wrapper">
        <div class="carousel">
            <ul class="imgsWrp">
                <li v-for="item in imgsArray" :key="item.bannerId">
                    <img class="banner-img" :src="item.bannerImg" :alt="item.title">
                </li>
            </ul>
            <!--<p><span>1</span>/{{imgsArray.length}}</p>-->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Swiper',
        props: {
            imgsArray: Array
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .banner-wrapper {
        width: 100%;
        height: px2rem(150);
        padding: px2rem(10);
        box-sizing: border-box;
        .carousel {
            .banner-img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
