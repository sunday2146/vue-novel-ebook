<!--充值页面-->
<template>
    <div class="store-charge">
        <charge-title></charge-title>
        <scroll :top="top" :bottom="bottom" @onScroll="onScroll">
            <div class="store-charge-info-wrapper">
                <div class="info-account-left-wrapper">
                    <div class="account-head-img">
                        <span class="head-img">
                            <img v-lazy="userAvatar">
                        </span>
                    </div>
                    <div class="account-nick-name-and-id">
                        <div class="account-nick-name">
                            <span class="account-title">{{$t('charge.nickName')}}</span>
                            <span class="nick-name colorFontBlue">{{ userNickName }}</span>
                        </div>
                        <div class="account-id">
                            <span class="account-title">{{$t('charge.id')}}</span>
                            <span class="id colorFontBlue">{{ id }}</span>
                        </div>
                    </div>
                </div>
                <div class="info-account-center-wrapper">
                    <span class="velotity-linear"></span>
                </div>
                <div class="info-account-right-wrapper">
                    <div class="info-money">
                        <span class="money-title">{{$t('charge.money')}}</span>
                        <span class="money-info colorFontBlue">{{ balance }}书币</span>
                    </div>
                </div>
            </div>
            <div class="store-charge-item-list-wrapper">
                <div class="store-charge-item-wrapper">
                    <div class="store-charge-item-title">
                        <span class="title">{{$t('charge.pay')}}</span>
                        <span class="info">{{$t('charge.title')}}</span>
                    </div>
                    <div class="store-charge-item-money" v-for="(item, index) in tabs" :key="index">
                        <div class="charge-item-money-wrapper" @click="selected(item, index)" :class="{'isSelected' : activeIndex === index}">
                            <div class="money-info">
                                <span class="money">{{item.money}}</span>
                            </div>
                            <div class="shubi-info-wrapper">
                                <span class="shubi-info">{{item.moneyBi}}</span>
                                <span class="shubi-song-info">{{item.songMoneyBi}}</span>
                            </div>
                            <div class="charge-item-paihang-wrapper">
                                <span class="charge-item-paihang">{{item.paiHang}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="store-charge-btn">
                        <span class="charge-btn" @click.stop.prevent="onCharge">立即充值</span>
                    </div>
                </div>
            </div>
            <div class="store-charge-warning-info-wrapper">
                <span>
                    <span>温馨提示：</span>
                    <ul>
                        <li>1、充值获得的书币仅限在本公司书城使用。</li>
                        <li>2、若是发现充值未到账，请先确认充值的账号与登录的账号是否一致。</li>
                        <li>3、用户一旦充值成功，不得已任何理由要求本公司退还全部或者部分充值款项，因不可抗力或本公司单方面的原因除外。</li>
                        <li>4、充值赠送的书币存在有效期，有效期为：自领取时间起，5天有效；消费时优先扣除赠送的书币。</li>
                        <li>5、充值用户一旦充值成功，不得已任何理由要求本公司退还全部或者部分充值款项，因不可抗力或本公司单方面的原因除外。</li>
                    </ul>
                </span>
            </div>
        </scroll>
        <nav-bar></nav-bar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { storeHomeMixin } from '../../utils/mixin'
    import NavBar from '../../components/common/NavBar'
    import ChargeTitle from '../../components/charge/ChargeTitle'
    import { userInfo } from '../../api/store'
    import Scroll from '../../components/common/Scroll'
    import { realPx } from '../../utils/utils'

    export default {
        mixins: [storeHomeMixin],
        components: {
            Scroll,
            NavBar,
            ChargeTitle
        },
        methods: {
            onScroll (offsetY) {
                this.setOffsetY(offsetY)
            },
            selected (item, index) {
                this.activeIndex = index
                this.selectProduct(this.activeIndex)
            },
            selectProduct(activeIndex) {
                this.selectedProduct = this.tabs[activeIndex]
            },
            onCharge() {
                if (this.selectedProduct === null) {
                    this.selectProduct(this.activeIndex)
                }
                // console.log(this.selectedProduct)
                location.href = `${process.env.VUE_APP_BASE_URL}/pay/create?productId=` + this.selectedProduct.productId +
                    '&openid=' + this.openid +
                    '&returnUrl=' + encodeURIComponent(`${process.env.VUE_APP_HOME_NGINX_URL}` + this.$route.path) +
                    '&productQuantity=' + this.selectedProduct.moneyBiVal +
                    '&orderAmount=' + this.selectedProduct.moneyVal
            }
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
                top: realPx(60),
                bottom: realPx(50),
                colorFontBlue: true,
                isSelected: false,
                openid: '',
                activeIndex: 2,
                tabs: [
                    {
                        money: this.$t('charge.money10'),
                        moneyVal: this.$t('charge.money10Val'),
                        productId: this.$t('charge.productId10'),
                        moneyBi: this.$t('charge.moneyBi10'),
                        moneyBiVal: this.$t('charge.moneyBi10Val'),
                        songMoneyBi: this.$t('charge.moneyDuo10'),
                        paiHang: this.$t('charge.moneyHot10'),
                        moneyBiDesc: this.$t('charge.moneyBiDesc10')
                    },
                    {
                        money: this.$t('charge.money30'),
                        moneyVal: this.$t('charge.money30Val'),
                        productId: this.$t('charge.productId30'),
                        moneyBi: this.$t('charge.moneyBi30'),
                        moneyBiVal: this.$t('charge.moneyBi30Val'),
                        songMoneyBi: this.$t('charge.moneyDuo30'),
                        paiHang: this.$t('charge.moneyHot30'),
                        moneyBiDesc: this.$t('charge.moneyBiDesc30')
                    },
                    {
                        money: this.$t('charge.money50'),
                        moneyVal: this.$t('charge.money50Val'),
                        productId: this.$t('charge.productId50'),
                        moneyBi: this.$t('charge.moneyBi50'),
                        moneyBiVal: this.$t('charge.moneyBi50Val'),
                        songMoneyBi: this.$t('charge.moneyDuo50'),
                        paiHang: this.$t('charge.moneyHot50'),
                        moneyBiDesc: this.$t('charge.moneyBiDesc50')
                    },
                    {
                        money: this.$t('charge.money100'),
                        moneyVal: this.$t('charge.money100Val'),
                        productId: this.$t('charge.productId100'),
                        moneyBi: this.$t('charge.moneyBi100'),
                        moneyBiVal: this.$t('charge.moneyBi100Val'),
                        songMoneyBi: this.$t('charge.moneyDuo100'),
                        paiHang: this.$t('charge.moneyHot100'),
                        moneyBiDesc: this.$t('charge.moneyBiDesc100')
                    },
                    {
                        money: this.$t('charge.money180'),
                        moneyVal: this.$t('charge.money180Val'),
                        productId: this.$t('charge.productId180'),
                        moneyBi: this.$t('charge.moneyBi180'),
                        moneyBiVal: this.$t('charge.moneyBi180Val'),
                        songMoneyBi: this.$t('charge.moneyDuo180'),
                        paiHang: this.$t('charge.moneyHot180'),
                        moneyBiDesc: this.$t('charge.moneyBiDesc180')
                    },
                    {
                        money: this.$t('charge.money365'),
                        moneyVal: this.$t('charge.money365Val'),
                        productId: this.$t('charge.productId365'),
                        moneyBi: this.$t('charge.moneyBi365'),
                        moneyBiVal: this.$t('charge.moneyBi365Val'),
                        songMoneyBi: this.$t('charge.moneyDuo365'),
                        paiHang: this.$t('charge.moneyHot365'),
                        moneyBiDesc: this.$t('charge.moneyBiDesc365')
                    }
                ],
                selectedProduct: null
            }
        },
        mounted () {
            userInfo(this.openid).then(response => {
                if (response && response.status === 200) {
                    const data = response.data
                    this.userInfo = data.data
                    if (this.userInfo) {
                        this.userAvatar = this.userInfo.userAvatar
                        this.userNickName = this.userInfo.userNickName
                        this.id = this.userInfo.id
                        this.balance = this.userInfo.balance
                    }
                }
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/styles/global";

    .store-charge {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        font-size: px2rem(14);

        .store-charge-info-wrapper {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 10%;
            box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);

            .info-account-left-wrapper {
                height: 100%;
                width: 45%;
                display: flex;
                left: 0;
                padding-left: px2rem(15);

                .account-head-img {
                    width: px2rem(50);
                    height: px2rem(50);
                    box-sizing: border-box;

                    .head-img img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }

                .account-nick-name-and-id {
                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;
                    padding: px2rem(10) 0 0 px2rem(10);

                    .account-nick-name {
                        .account-title {
                        }

                        .nick-name {
                        }

                        .colorFontBlue {
                            color: $color-blue;
                        }
                    }

                    .account-id {
                        .account-title {
                        }

                        .id {
                        }

                        .colorFontBlue {
                            color: $color-blue;
                        }
                    }
                }
            }

            .info-account-center-wrapper {
                height: 100%;
                width: 10%;
                display: flex;
                left: 45%;
                right: 45%;
                @include columnLeft;

                .velotity-linear {
                    width: 100%;
                    height: 20%;
                    box-sizing: border-box;
                    border-right: px2rem(1) solid #ccc;
                }
            }

            .info-account-right-wrapper {
                height: 100%;
                width: 45%;
                display: flex;
                right: 0;
                padding-right: px2rem(15);

                .info-money {
                    @include center;
                    top: 50%;

                    .money-title {
                    }

                    .money-info {
                    }

                    .colorFontBlue {
                        color: $color-blue;
                    }
                }
            }
        }

        .store-charge-item-list-wrapper {
            width: 100%;
            height: 60%;
            padding: 0 0;
            box-sizing: border-box;
            box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);

            .store-charge-item-wrapper {
                width: 100%;
                height: px2rem(50);
                display: flex;
                flex-flow: row wrap;
                align-items: flex-start;

                .store-charge-item-title {
                    width: 100%;
                    height: px2rem(34);
                    display: flex;
                    flex-direction: row;
                    font-size: px2rem(14);
                    @include center;

                    .title {
                        color: #444;
                    }

                    .info {
                        color: #999;
                    }
                }

                .store-charge-item-money {
                    display: flex;
                    width: 46.25%;
                    height: 100%;
                    margin: px2rem(10) px2rem(5) px2rem(10) px2rem(5);
                    font-size: px2rem(12);
                    line-height: px2rem(14);
                    @include center;

                    .charge-item-money-wrapper {
                        flex: 1;
                        width: 50%;
                        height: 100%;
                        padding: px2rem(5) px2rem(2.5) px2rem(5) px2rem(2.5);
                        border: px2rem(2) solid #ccc;

                        &.isSelected {
                            border: px2rem(2) solid #0c0;
                        }

                        .money-info {
                            .money {
                            }
                        }

                        .shubi-info-wrapper {
                            .shubi-info {
                            }

                            .shubi-song-info {
                            }
                        }

                        .charge-item-paihang-wrapper {
                            .charge-item-paihang {
                            }
                        }
                    }

                }

                .store-charge-btn {
                    position: relative;
                    width: 100%;
                    left: 0;
                    top: 25%;
                    height: 50%;

                    .charge-btn {
                        position: absolute;
                        width: 50%;
                        height: 100%;
                        left: 25%;
                        right: 25%;
                        background: #0c0;
                        border-radius: px2rem(10);
                        color: white;
                        font-weight: bold;
                        font-size: px2rem(14);
                        line-height: px2rem(16);
                        @include columnCenter;
                    }
                }
            }
        }

        .store-charge-warning-info-wrapper {
            width: 100%;
            height: 30%;
            padding: px2rem(10) px2rem(10);
            box-sizing: border-box;

            ul {
                padding-top: px2rem(5);
                line-height: px2rem(20);
            }
        }
    }
</style>
