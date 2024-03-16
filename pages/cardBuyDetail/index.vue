<template>
	<!--大牌卡劵购物车页面-->
	<view class="card-container">
		<view class="card-header">
			<view class="left-wrap">
				<view class="img-wrap">
					<image class="img" mode="heightFix" :src="orderData.normalImg"></image>
				</view>
				<view class="product-desc">
					<view class="name">{{orderData.productFullName}} <text
							class="versionColor">【{{orderData.currSeletedItem.version}}】</text></view>
					<view class="face-value redColor">
						金额：{{orderData.currSeletedItem.amount=='定制版'?'协商定价':orderData.currSeletedItem.amount}} </view>
				</view>
			</view>
			<view class="notice-desc">不支持退换货</view>
		</view>
		<view class="line-operate"></view>
		<view class="use-desc">支付成功后，可前往 "个人中心 - 我的订单 - 查看使用"</view>
		<view class="goodsDesc">本商品为软件定制开发产品（非标品），下单前请联系产品经理进行需求确认后再支付。</view>
		<view class="buy-wrap">
			<view class="buy-title">购买数量</view>
			<view class="buy-operate">
				<u-number-box v-model="buyNum" v-if="isCustom" disabled="" @change="valChange" integer></u-number-box>
				<u-number-box v-model="buyNum" v-else @change="valChange" integer></u-number-box>
			</view>
		</view>
		<!-- 支付方式选择 start -->
		<view class="buy-wrap">
			<view class="buy-title">支付方式</view>
			<view class="buy-operate">
				<u-radio-group v-model="radiovalue1" @change="groupChange" class="radioGroup">
					<u-radio :customStyle="{marginBottom: '8px',marginLeft:'20px'}" v-for="(item, index) in radiolist1"
						:key="index" :label="item.name" :name="item.key" @change="radioChange"
						:disabled="item.disabled">
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<!-- 支付方式选择 end -->
		<view class="total-wrap product-total" v-if="!isCustom">
			<view class="title">商品售价</view>
			<view class="total-style deleteLine" v-if="coupon > 0">¥ {{totalPrice}}</view>
			<view class="total-style" v-else>¥ {{totalPrice}}</view>
		</view>
		<view class="total-wrap product-total opline" v-if="isCustom">
			<view class="title">协商价格</view>
			<view class="customCnt">
				<view class="priceCustom">
					<u--input placeholder="请输入" border="surround" type="number" clearable v-model="totalPrice"
						@change="changeCustom"></u--input>
				</view>
				<view>元</view>
			</view>

		</view>
		<!-- 下单声明 -->
		<u-line></u-line>
		<view class="mustknowe">下单须知：</view>
		<view class="orderNotice">
			<view class="noticeCnt"> <text class="noticeHeader">注意事项:</text>
				{{'&nbsp;&nbsp;&nbsp;'}}付款金额是根据您所选版本(或与产品经理确认需求后)的报价，后续如需增加需求，需要联系技术人员收费加需求，下单前，请一定确认好需求，如果中途需求改变，就需要收费变更。
			</view>
		</view>
		<view class="orderNotice btmPx">
			<view class="noticeCnt"> <text class="noticeHeader">开发流程:</text> {{'&nbsp;&nbsp;&nbsp;'}}
				需求沟通➜出功能清单➜确认➜报价➜合同签署➜用户需求确认及UI确认➜开始开发➜测试完成➜用户验收➜结项。</view>
		</view>
		<view class="footer-wrap">
			<view class="left-box">
				<view class="total-num">共 {{buyNum}} 件,</view>
				<view class="total-money">合计 <i class="price-style">¥ {{totalPrice}}</i></view>

			</view>
			<view class="buy-btn" @tap="handleExchangePay">立即支付</view>
		</view>
		<u-notify ref="uNotify" message="支付金额不能为空！"></u-notify>
	</view>
</template>

<script>
	import {
		randomNumber
	} from "@/config/tools.js"
	import {
		createThirdOrder,
		createPayOrder,
		createJingXiuOrder,
	} from '@/config/api.js';
	export default {
		data() {
			return {
				orderData: {}, // 下单商品
				totalPrice: 0, //结算金额
				buyNum: 0, //下单数量
				chargePrice: 0, // 手续费
				currRadioVal: 1, // 支付方式，1 积分支付，2 组合支付，默认为积分支付
				combinationVal: 0, // 积分支付的金额
				weixinVal: 0, // 微信支付的金额
				appid: "",
				specsId: 484, // 美团10元卷
				isCustom: false, //是否是定制版本，定制版本需要自定义输入价格
				radiolist1: [{
						name: '微信',
						key: "wxpay",
						disabled: false
					},
					// {
					// 	name: '支付宝',
					// 	key:"alipay",
					// 	disabled: true
					// },
					{
						name: '快捷支付',
						key: "cardpay",
						disabled: true
					},
				],
				radiovalue1: 'wxpay',
				zhekou: 1,
				etypeName: "优惠券",
				coupon: 0,
				showDialog: false,
				message: "支付金额不能为空！",
				token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImFwcF9pZCI6InRkaGY2dTMxeG15NDVvdyIsImFwcF9zZWNyZXQiOiJiYzc3Yjc0OTMwZDg4NmI0ZDQ4MTcwM2EwYWY4M2FkMCJ9fQ.MLs3jEyrcNYrx8SJkPQbsGyDa1JFL3U0hzyHdUgj46c",
				url: "",
			};
		},
		onLoad(options) {
			if (options.data) {
				// 正常进入到商品详情页面
				let orderData = JSON.parse(decodeURIComponent(options.data));
				this.handleOrderData(orderData);
			}
		},
		methods: {
			changeCustom(e) {
				this.totalPrice = Number(e);
				console.log('change', e);
			},
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			valChange(e) {
				let currNum = e.value;
				this.totalPrice = this.orderData.currSeletedItem.amount * currNum;
			},
			handleExchangePay() {
				let openid = uni.getStorageSync("openid");
				if (!openid) {
					uni.showModal({
						title: "提示",
						content: "您还未登录，请先登录!",
						success: function(res) {
							if (res.confirm) {
								wx.navigateTo({
									url: "/pages/login/index"
								});
							} else {}
						}
					})
				} else {
					// 临时关闭 begin
					// uni.showModal({
					// 	title: "提示",
					// 	content: "系统维护，临时关闭!",
					// 	success: function(res) {
					// 		if (res.confirm) {

					// 		} else {}
					// 	}
					// })
					// 临时关闭 end
					let outtradeno = window.sessionStorage.getItem("outOrderNo");
					let orderType = 2;
					if (!outtradeno) {
						outtradeno = randomNumber();
						orderType = 1;
					};
					// let outtradeno = randomNumber();
					let amount = this.totalPrice;
					this.preparePay(outtradeno, amount, orderType, openid);
				}
			},
			// 对订单详情页的数据进行处理
			handleOrderData(orderData) {
				debugger;
				if (orderData.currSeletedItem.amount == '定制版') {
					this.isCustom = true;
				} else {
					let totalPrice = orderData.buyNum * orderData.currSeletedItem.amount;
					this.totalPrice = totalPrice;
				}
				debugger;
				let chargePrice = 0;
				this.orderData = orderData;
				this.buyNum = orderData.buyNum;
				this.specsId = orderData.currSeletedItem.specs_id;
			},
			async getOrderData(outtradeno) {
				let paramsData = {
					outtradeno
				};
				// let res = await request({
				// 	url: getOrderData,
				// 	data: paramsData,
				// 	method: "post",
				// });
				// let resData = res.data;
				// if (resData.code == 0) {
				// 	this.setData({
				// 		amount: resData.data.amount,
				// 		createTime: resData.data.create_time
				// 	})
				// 	this.preparePay(outtradeno, resData.data.amount);
				// }
			},
			preparePay(outtradeno, amount, orderType, openid) {
				let productName = this.orderData.sendName;
				debugger;
				if (!amount) {
					this.$refs.uNotify.show({
						top: 300,
						type: 'warning',
						color: '#ffffff',
						bgColor: '#F9AE3D',
						message: '支付金额不能为空！',
						duration: 1000 * 3,
						fontSize: 20,
						safeAreaInsetTop: true
					})
					return;
				};
				this.getWxPlateOrder(outtradeno, amount); // 调用官方微信支付
				// let handleAmount = amount;
				// let params = {
				// 	outtradeno,
				// 	amount: handleAmount,
				// 	orderType,
				// 	openid: openid, // 小程序用户openid ，H5 用户就是用户名
				// 	appid: "", // 小程序appid
				// 	productName: productName,
				// 	buyNum: this.orderData.buyNum,
				// 	detailImg: this.orderData.normalImg,
				// 	specsId: this.specsId
				// };
				// createPayOrder({
				// 	...params
				// }).then((res) => {
				// 	let result = res.data;
				// 	if (result.code == 0) {
				// 		// this.getAliPayFormData(outtradeno,amount); // 调起官方原生支付
				// 		// this.getThirdOrder(outtradeno, amount); //调起第三方米花支付
				// 		// this.getJingXiuOrder(outtradeno, amount); // 调用第三方支付精秀
				// 		this.getWxPlateOrder(outtradeno, amount); // 调用官方微信支付
				// 	}
				// }).catch((err) => {})
			},
			getWxPlateOrder(outtradeno, amount) {
				// 调用官方微信支付 后台配置收款商户号
				uni.showLoading({
					title: '正在连接，请稍候...',
					mask: true
				});
				let params = {
					outOrderNo: outtradeno,
					amount: amount,
					notifyUrl: "", // 测试回调通知
					payMethod: this.radiovalue1,
					userName: ""
				}
				let token = this.token;
				uni.request({
					url: 'http://1.14.43.168/paymentcmj/main/createOrder',
					// url: 'http://192.168.10.106:4002/paymentcmj/main/createOrder',
					data: {
						outOrderNo: outtradeno,
						amount: amount,
						notifyUrl: "", // 测试回调通知
						payMethod: this.radiovalue1,
						userName: ""
					},
					method: "POST",
					header: {
						'Authorization': 'Bearer ' + this.token
					},
					success: (res) => {
						uni.hideLoading();
						debugger;
						let result = res.data;
						if (result.code == 0) {
							// 支付平台为官方
							if (result.data.paymentType == 3) {
								// 微信小程序支付
								debugger;
								let url = result.data.url_link;
								this.url = url;
								// this.getQrcodeImg(url);
								this.generateCode(url);
							}
						} else if (result.code == 20) {
							uni.showToast({
								title: "订单号重复，请刷新页面",
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: "付款链接获取失败",
								icon: 'none'
							});
						}
					},
					fail: (err) => {},
					complete: () => {
						uni.hideLoading();
					}
				})
			},
			//直接拉起支付
			generateCode(url) {
				// 方法1:
				// const newPage = window.open(); 
				// newPage.location.href = url
				// 方法2: 推荐
				const a = document.createElement('a');
				const id = 'newpage'
				a.setAttribute('href', url);
				a.setAttribute('target', '_self');
				a.setAttribute('id', id);
				// 防止反复添加
				if (!document.getElementById(id)) {
					document.body.appendChild(a);
				}
				a.click();
			},
			getThirdOrder(outOrderNo, amount) {
				let params = {
					outOrderNo: outOrderNo,
					amount: amount * this.zhekou,
					goodsName: this.orderData.productFullName + "(" + amount + "面值)",
					merAccount: "d5ee5ce45d5746b2864fae54bd0dbef9", // 第三方支付商户标识 // 如风商户
					payType: this.radiovalue1
				}
				createThirdOrder({
					...params
				}).then((res) => {
					let result = res.data;
					if (result.code == "000000") {
						let url = result.data.payUrl;
						this.generateCode(url);
					}
				}).catch((err) => {})
			},
			getJingXiuOrder(outtradeno, amount) {
				let productName = "";
				let handleAmount = 0;
				if (this.coupon > 0) {
					productName = this.orderData.productFullName + amount + "(内含" + this.zhekouPrice + "元电子卡" +
						"+" + this
						.coupon + "元" + this.etypeName + ")";
					handleAmount = this.zhekouPrice;
				} else {
					productName = this.orderData.productFullName + amount + "(内含" + amount + "元电子卡)";
					handleAmount = amount;
				};
				let params = {
					outOrderNo: outtradeno,
					amount: handleAmount,
					// amount: amount * this.zhekou,
					goods_name: productName,
					// goods_name: this.orderData.productFullName + "(" + amount + "面值)",
					merAccount: "", // 第三方支付商户标识 // 如风商户
					payType: this.radiovalue1
				}
				createJingXiuOrder({
					...params
				}).then((res) => {
					let result = res.data;
					if (result.code == 0) {
						let url = result.data.pay_url;
						this.generateCode(url);
					}
				}).catch((err) => {})
			},
			generateCode(url) {
				// 方法1:
				// const newPage = window.open(); 
				// newPage.location.href = url
				// 方法2: 推荐
				const a = document.createElement('a');
				const id = 'newpage'
				a.setAttribute('href', url);
				a.setAttribute('target', '_self');
				a.setAttribute('id', id);
				// 防止反复添加
				if (!document.getElementById(id)) {
					document.body.appendChild(a);
				}
				a.click();
			},
		}
	}
</script>

<style lang="scss">
	.card-container {
		display: block;
		/* margin:0 24rpx; */
		background-color: #f5f5f5;
		position: relative;
	}

	.card-header {
		display: block;
		padding: 0 24rpx;
		height: 180rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		position: relative;
	}

	.left-wrap {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 180rpx;
	}

	.product-desc {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		margin-left: 15rpx;
		height: 150rpx;
	}

	.img-wrap .img {
		height: 150rpx;
		border-radius: 15rpx;
	}

	.face-value,
	.use-desc {
		color: #999999;
		// font-size: 24rpx;
	}

	.use-desc {
		background-color: #ffffff;
		padding: 40rpx 24rpx 20rpx 24rpx;
	}

	.notice-desc {
		background-color: #fff6eb;
		color: #eb8013;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 20rpx;
		padding-left: 16rpx;
		padding-right: 16rpx;
		font-size: 20rpx;
		position: absolute;
		bottom: -20rpx;
		right: 24rpx;
	}

	.line-operate {
		height: 30rpx;
		background-color: #ffffff;
		border-bottom: 1rpx solid #eeeeee;
	}

	.buy-wrap {
		font-size: 34rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 140rpx;
		line-height: 140rpx;
		background-color: #ffffff;
		padding: 0rpx 24rpx;
	}

	.buy_notice {
		height: 0rpx;
		font-size: 24rpx;
	}

	.buy-operate {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60rpx;
	}

	.buy-operate .reduce,
	.buy-operate .add {
		width: 70rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border: 1rpx solid #f2f2f2;
	}

	.buy-operate .num-input {
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		background-color: #f8f8f8;
		border-top: 1rpx solid #f2f2f2;
		border-bottom: 1rpx solid #f2f2f2;
	}

	.total-wrap {
		display: flex;
		justify-content: space-between;
		padding: 0 24rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #ffffff;
		font-size: 34rpx;
	}

	.total-wrap .title {
		width: 200rpx;
	}

	.total-wrap .customCnt {
		width: 200rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.priceCustom {
		margin-right: 16rpx;
	}

	.priceCustom input {
		text-align: center;
	}

	.footer-wrap {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0rpx;
		left: 24rpx;
		right: 24rpx;
		height: 140rpx;
		font-size: 32rpx;
	}

	.left-box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
	}

	.price-style,
	.total-style {
		font-size: 34rpx;
		color: #eb8013;
		width: 100rpx;
		margin-left: 10rpx;
	}

	.total-style {
		flex: 1;
		text-align: right;
	}

	.buy-btn {
		width: 230rpx;
		text-align: center;
		color: #ffffff;
		height: 80rpx;
		line-height: 80rpx;
		background: linear-gradient(to right, #fdb208, #f97b04);
		letter-spacing: 5rpx;
		border-radius: 40rpx;
		font-size: 34rpx;
	}

	.total-num {
		margin-right: 20rpx;
	}

	.radioGroup {
		background-color: #ffffff;
		position: relative;
		top: 12rpx;
	}

	.deleteLine {
		text-decoration: line-through;
		/* 添加删除线 */
		color: #000;
	}

	.redColor {
		color: #eb8013;
	}

	.versionColor {
		color: #eb8013;
	}

	.orderNotice {
		background-color: #ffffff;
		
	}
	.btmPx{
		padding-bottom:200rpx;
	}

	.noticeHeader {
		padding-left: 20rpx;
		color: green
	}

	.noticeCnt {
		color: #999999;
		padding: 20rpx 20rpx;
		line-height: 48rpx;
	}

	.opline {
		padding-bottom: 40rpx;
	}

	.mustknowe {
		padding-left: 20rpx;
		padding-top: 40rpx;
		padding-bottom: 10rpx;
		font-size: 34rpx;
		font-weight: bold;
		color: #eb8013;
		background-color: #ffffff;
	}

	.goodsDesc {
		background-color: #ffffff;
		padding: 20rpx;
		padding-top: 0rpx;
		line-height: 48rpx;
		color: #eb8013;
		font-size: 24rpx;
	}
</style>