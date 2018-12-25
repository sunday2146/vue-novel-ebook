<template>
    <div>
        <div class="store-loging" v-if="login">登录中……</div>
        <div class="store-home" v-else>
            <search-bar></search-bar>
            <flap-card :data="random"></flap-card>
            <scroll :top="scrollTop" :bottom="scrollBottom" @onScroll="onScroll" ref="scroll">
                <div class="banner-wrapper">
                    <div class="banner-img" :style="{backgroundImage:`url('${banner}')`}"></div>
                </div>
                <guess-you-like :data="guessYouLike"></guess-you-like>
                <recommend :data="recommend" class="recommend"></recommend>
                <featured :data="featured" :titleText="$t('home.featured')" :btnText="$t('home.seeAll')"
                          class="featured"></featured>
                <div class="category-list-wrapper" v-for="(item, index) in categoryList" :key="index">
                    <category-book :data="item"></category-book>
                </div>
                <category class="categories" :data="categories"></category>
            </scroll>
            <nav-bar></nav-bar>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { storeHomeMixin } from '../../utils/mixin'
    import { home } from '../../api/store'
    import SearchBar from '../../components/home/SearchBar'
    import Scroll from '../../components/common/Scroll'
    import FlapCard from '../../components/home/FlapCard'
    import GuessYouLike from '../../components/home/GuessYouLike'
    import Recommend from '../../components/home/Recommend'
    import Featured from '../../components/home/Featured'
    import CategoryBook from '../../components/home/CategoryBook'
    import Category from '../../components/home/Category'
    import NavBar from '../../components/common/NavBar'

    export default {
        mixins: [storeHomeMixin],
        components: {
            NavBar,
            Category,
            CategoryBook,
            Featured,
            Recommend,
            GuessYouLike,
            SearchBar,
            Scroll,
            FlapCard
        },
        data() {
            return {
                scrollBottom: 55,
                scrollTop: 94,
                random: null,
                banner: '',
                guessYouLike: null,
                recommend: null,
                featured: null,
                categoryList: null,
                categories: null,
                login: false,
                openid: null,
                error: null
            }
        },
        methods: {
            onScroll(offsetY) {
                this.setOffsetY(offsetY)
                if (offsetY > 0) {
                    this.scrollTop = 52
                    this.scrollBottom = 55
                } else {
                    this.scrollTop = 94
                    this.scrollBottom = 97
                }
                this.$refs.scroll.refresh()
            },
            // getCookie(name) {
            //     let arr
            //     let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            //     console.log(reg)
            //     if (arr === document.cookie.match(reg)) {
            //         console.log(arr)
            //         return unescape(arr[0])
            //     } else {
            //         return null
            //     }
            // }
            getCookie(name) {
                return this.$cookies.get(name)
            }
        },
        mounted() {
            const openid = this.$route.query.openid
            // 如果url里有openid, 设置进cookie
            if (typeof openid !== 'undefined') {
                let exp = new Date()
                exp.setTime(exp.getTime() + 3600 * 1000) // 过期时间60分钟
                // document.cookie = 'openid=' + openid + ';expires=' + exp.toGMTString()
                this.$cookies.set('openid', openid, exp.toGMTString())
            }
            // 获取openid
            if (this.getCookie('openid') === null) {
                this.login = true
                location.href = process.env.VUE_APP_BASE_URL + '/wechat/authorize?returnUrl=' + encodeURIComponent(process.env.VUE_APP_HOME_NGINX_URL + '/#/')
            }
            this.login = false
            home().then(response => {
                if (response && response.status === 200 && response.data && response.data.err_no === 0) {
                    const data = response.data.data
                    const randomIndex = Math.floor(Math.random() * data.random.length)
                    this.random = data.random[randomIndex]
                    this.banner = data.banner
                    this.guessYouLike = data.guessYouLike
                    this.recommend = data.recommend
                    this.featured = data.featured
                    this.categoryList = data.categoryList
                    this.categories = data.categories
                }
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .store-loging {
        width: 100%;
        height: 100%;
        @include center;
    }

    .store-home {
        width: 100%;
        height: 100%;

        .banner-wrapper {
            width: 100%;
            padding: px2rem(10);
            box-sizing: border-box;

            .banner-img {
                width: 100%;
                height: px2rem(150);
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }

        .recommend {
            margin-top: px2rem(20);
        }

        .featured {
            margin-top: px2rem(20);
        }

        .category-list-wrapper {
            margin-top: px2rem(20);
        }

        .categories {
            margin-top: px2rem(20);
        }
    }
</style>
