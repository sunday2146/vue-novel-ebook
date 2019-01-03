<!--我的页面-->
<template>
    <div class="store-mine">
        <nav-bar></nav-bar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { storeHomeMixin } from '../../utils/mixin'
    import NavBar from '../../components/common/NavBar'

    export default {
        mixins: [storeHomeMixin],
        components: {
            NavBar
        },
        created() {
            let openid = this.$cookies.get('openid')
            this.openid = openid
        },
        data () {
            return {
                userInfo: null,
                userAvatar: '',
                userNickName: '',
                id: '',
                balance: '',
                colorFontBlue: true,
                isSelected: false,
                openid: ''
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .store-mine {
        width: 100%;
        height: 100%;
    }
</style>
