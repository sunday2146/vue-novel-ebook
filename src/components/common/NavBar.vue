<template>
    <div class="nav-bar">
        <tab-bar v-model="select" v-for="(item, index) in navTabs" :key="index">
            <tab-bar-item :data="{id: item.id, link: item.nav}">
                <img :src="item.icon" slot="icon-normal">
                <img :src="item.selectedIcon" slot="icon-active">
                <span class="m-tabbar-text">{{item.text}}</span>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script type="text/ecmascript-6">
    import TabBar from './TabBar'
    import TabBarItem from './TabBarItem'

    export default {
        components: {
            TabBar,
            TabBarItem
        },
        name: 'NavBar',
        computed: {
            navTabs() {
                return [
                    {
                        text: this.$t('book.shelf'),
                        icon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_subject_normal.png`,
                        selectedIcon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_subject_active.png`,
                        nav: '/store/shelf',
                        id: 'tab1'
                    },
                    {
                        text: this.$t('book.store'),
                        icon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_home_normal.png`,
                        selectedIcon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_home_active.png`,
                        nav: '/store/home',
                        id: 'tab2'
                    },
                    {
                        text: this.$t('book.charge'),
                        icon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_status_normal.png`,
                        selectedIcon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_status_active.png`,
                        nav: '/store/charge',
                        id: 'tab3'
                    },
                    {
                        text: this.$t('book.mine'),
                        icon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_profile_normal.png`,
                        selectedIcon: `${process.env.VUE_APP_ICON_RES_URL}/book/res/img/icon-bar/ic_tab_profile_active.png`,
                        nav: '/store/mine',
                        id: 'tab4'
                    }
                ]
            }
        },
        data() {
            return {
                select: 'tab2'
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .nav-bar {
        display: flex;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: px2rem(50);
        line-height: px2rem(50);
        z-index: 110;
        .m-tabbar-text{
            flex: 1;
        }
    }
</style>
