<template>
	<!--大牌卡劵购物车页面-->
	<view class="card-container">
		<view class="card-header">
			<view class="left-wrap">
				<view class="img-wrap">
					<image class="img" mode="heightFix" :src="orderData.normalImg"></image>
				</view>
				<view class="product-desc">
					<view class="name">{{orderData.productFullName}} <text class="versionColor">【{{orderData.currSeletedItem.version}}】</text></view>
					<!-- <view class="face-value">面值：{{orderData.currSeletedItem.amount}}元</view> -->
					<!-- <view class="face-value" v-if="coupon > 0">规格：内含{{orderData.currSeletedItem.buy_price}}元电子卡 + {{orderData.currSeletedItem.coupon}}元{{etypeName}} </view> -->
					<view class="face-value redColor">金额：{{orderData.currSeletedItem.amount}} </view>
					
					<!-- <view class="price">{{orderData.currSeletedItem.amount}} 积分</view> -->
				</view>
			</view>
			<view class="notice-desc">不支持退换货</view>
		</view>
		<view class="line-operate"></view>
		<view class="use-desc">支付成功后，可前往 "个人中心 - 我的订单 - 查看使用"</view>
		<view class="buy-wrap">
			<view class="buy-title">购买数量</view>
			<view class="buy-operate">
				<u-number-box v-model="buyNum" @change="valChange" integer></u-number-box>
			</view>
		</view>
	<!-- 	<view class="buy-wrap buy_notice">
			<view class="buy-title"></view>
			<view class="buy-operate redColor">
				活动促销，单笔订单限购一件！
			</view>
		</view> -->
		<!-- 支付方式选择 start -->
		<view class="buy-wrap">
			<view class="buy-title">支付方式</view>
			<view class="buy-operate">
				<u-radio-group v-model="radiovalue1" @change="groupChange" class="radioGroup">
					<u-radio :customStyle="{marginBottom: '8px',marginLeft:'20px'}" v-for="(item, index) in radiolist1" :key="index"
						:label="item.name" :name="item.key" @change="radioChange" :disabled="item.disabled">
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		
		<!-- 支付方式选择 end -->
		<view class="total-wrap product-total">
			<view class="title">商品售价</view>
			<!-- <view class="total-style deleteLine" v-if="zhekou < 1">¥ {{totalPrice}}</view>
			<view class="total-style" v-else>¥ {{totalPrice}}</view> -->
			<view class="total-style deleteLine" v-if="coupon > 0">¥ {{totalPrice}}</view>
			<view class="total-style" v-else>¥ {{totalPrice}}</view>
		</view>
	<!-- 	<view class="total-wrap product-total" v-if="zhekou < 1">
			<view class="title">折扣价</view>
			<view class="total-style">¥ {{totalPrice * zhekou}}</view>
		</view> -->
		<view class="total-wrap product-total"  v-if="coupon > 0">
			<view class="title">折扣价</view>
			<view class="total-style">¥ {{zhekouPrice}}</view>
			<!-- <view class="total-style" v-if = "coupon == 0">¥ {{totalPrice}}</view> -->
		</view>
		<view class="footer-wrap">
			<view class="left-box">
				<view class="total-num">共 {{buyNum}} 件,</view>
				<view class="total-money" >合计 <i class="price-style">¥ {{totalPrice}}</i></view>
			
			</view>
			<view class="buy-btn" @tap="handleExchangePay">立即支付</view>
			<!-- <view class="buy-btn">立即支付</view> -->
		</view>
	</view>
</template>

<script>
	import {
		randomNumber
	} from "@/config/tools.js"
	import {
		createThirdOrder,createPayOrder,createJingXiuOrder
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
				specsId:484, // 美团10元卷
				radiolist1: [
					// {
					// 	name: '微信',
					// 	key:"wxpay",
					// 	disabled: false
					// },
					// {
					// 	name: '支付宝',
					// 	key:"alipay",
					// 	disabled: true
					// },
					{
						name: '快捷支付',
						key:"cardpay",
						disabled: false
					},
				],
				etypeList:["优惠券", "抵扣劵", "满减卷"],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue1: 'cardpay',
				zhekou:1,
				etypeName:"优惠券",
				zhekouPrice:0,
				coupon:0,
			};
		},
		onLoad(options) {
			if (options.data) {
				// 正常进入到商品详情页面
				let orderData = JSON.parse(decodeURIComponent(options.data));
				this.handleOrderData(orderData);
			}
			this.etypeName = this.getRandomElement(this.etypeList);
		},
		methods: {
			getRandomElement(arr) {
			    return arr[Math.floor(Math.random() * arr.length)];
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
				let totalPrice = orderData.buyNum * orderData.currSeletedItem.amount;
				let chargePrice = 0;
				this.orderData = orderData;
				this.buyNum = orderData.buyNum;
				this.totalPrice = totalPrice;
				this.specsId = orderData.currSeletedItem.specs_id;
				if (totalPrice > 100){
					this.coupon = orderData.currSeletedItem.coupon;
					this.zhekouPrice = orderData.currSeletedItem.buy_price;
				};
				this.zhekou = orderData.zhekou;
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
				let productName = "";
				let handleAmount = 0;
				if (this.coupon > 0){
					productName = this.orderData.productFullName + amount + "(内含" + this.zhekouPrice + "元电子卡" +"+" + this.coupon + "元" + this.etypeName + ")";
					handleAmount = this.zhekouPrice;
				}else {
					productName = this.orderData.productFullName + amount + "(内含" + amount + "元电子卡)" ;
					handleAmount = amount;
				};
				
				let params = {
					outtradeno,
					// amount:this.zhekouPrice,
					amount:handleAmount,
					orderType,
					openid: openid, // 小程序用户openid ，H5 用户就是用户名
					appid: "", // 小程序appid
					productName:productName,
					// productName: this.orderData.productFullName + amount + "(内含" + this.zhekouPrice + "元电子卡" +"+" + this.coupon + "元" + this.etypeName + ")",
					buyNum: this.orderData.buyNum,
					detailImg: this.orderData.normalImg,
					specsId:this.specsId
				};
					createPayOrder({
						...params
					}).then((res) => {
						let result = res.data;
						if (result.code == 0) {
							// this.getAliPayFormData(outtradeno,amount); // 调起官方原生支付
							// this.getThirdOrder(outtradeno, amount); //调起第三方米花支付
							// this.getJingXiuOrder(outtradeno, amount); // 调用第三方支付精秀
						}
					}).catch((err) => {})
			},
			getThirdOrder(outOrderNo, amount) {
				let params = {
					outOrderNo: outOrderNo,
					amount: amount * this.zhekou,
					goodsName: this.orderData.productFullName + "(" + amount + "面值)",
					merAccount: "d5ee5ce45d5746b2864fae54bd0dbef9", // 第三方支付商户标识 // 如风商户
					payType:this.radiovalue1
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
			getJingXiuOrder(outtradeno, amount){
				let productName = "";
				let handleAmount = 0;
				if (this.coupon > 0){
					productName = this.orderData.productFullName + amount + "(内含" + this.zhekouPrice + "元电子卡" +"+" + this.coupon + "元" + this.etypeName + ")";
					handleAmount = this.zhekouPrice;
				}else {
					productName = this.orderData.productFullName + amount + "(内含" + amount + "元电子卡)" ;
					handleAmount = amount;
				};
				let params = {
					outOrderNo: outtradeno,
					amount: handleAmount,
					// amount: amount * this.zhekou,
					goods_name:productName,
					// goods_name: this.orderData.productFullName + "(" + amount + "面值)",
					merAccount: "", // 第三方支付商户标识 // 如风商户
					payType:this.radiovalue1
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
		padding: 40rpx 24rpx;
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
	.buy_notice{
		height: 0rpx;
		font-size:24rpx;
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
	.radioGroup{
		background-color: #ffffff;
		position: relative;
		top:12rpx;
	}
	.deleteLine{
		text-decoration: line-through; /* 添加删除线 */
		color: #000;
	}
	.redColor{
		color:#eb8013;
	}
	.versionColor{
		color:#eb8013;
	}
</style>