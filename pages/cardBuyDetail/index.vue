<template>
	<!--大牌卡劵购物车页面-->
	<view class="card-container">
		<view class="card-header">
			<view class="left-wrap">
				<view class="img-wrap">
					<image class="img" mode="heightFix" :src="orderData.normalImg"></image>
				</view>
				<view class="product-desc">
					<view class="name">{{orderData.productFullName}}</view>
					<view class="face-value">面值：{{orderData.currSeletedItem.amount}}元</view>
					<view class="price">{{orderData.currSeletedItem.amount}} 积分</view>
				</view>
			</view>
			<view class="notice-desc">不支持退换货</view>
		</view>
		<view class="line-operate"></view>
		<view class="use-desc">支付成功后，可前往 "个人中心 - 我的卡劵 - 查看详情" 使用</view>
		<view class="buy-wrap">
			<view class="buy-title">购买数量</view>
			<view class="buy-operate">
				<u-number-box v-model="buyNum" @change="valChange" integer></u-number-box>
			</view>
		</view>

		<!-- 支付方式选择 start -->
		<!-- 兑换流程和须知 -->
		<!-- <view class="redemption-process">
			<view class="line-operate1"></view>
			<view class="need-notice">
				<view class="title1">兑换须知</view>
				<view class="title1-list">
					<block v-for="(item,index) in orderData.exchange_notice" :key="index">
						<view class="title1-item">
							<view class="title1-name">{{item.name}}</view>
							<view class="title1-content">{{item.content}}</view>
						</view>
					</block>
				</view>
			</view>
			<view class="line-operate2"></view>
			<view class="need-notice">
				<view class="title1">核销须知</view>
				<view class="title1-list">
					<block v-for="(item,index) in orderData.writeoff_notice" :key="index">
						<view class="title2-item">
							<view class="title2-name">{{item.name}} </view>
							<view class="title1-content"> {{item.content}} </view>
							<i class="iconfont icon-dian"></i>
						</view>
					</block>
				</view>
			</view>
		</view> -->
		<!-- <paymentMode totalPrice="{{totalPrice + chargePrice}}" id="paymentMode" bind:radioChangeEvent = "radioChangeEvent" bind:combinationInputEvent="combinationInputEvent"></paymentMode> -->
		<!-- 支付方式选择 end -->
		<view class="total-wrap product-total">
			<view class="title">商品合计</view>
			<view class="total-style">¥ {{totalPrice}}</view>
		</view>
		<view class="footer-wrap">
			<view class="left-box">
				<view class="total-num">共 {{buyNum}} 件,</view>
				<view class="total-money">合计 <i class="price-style">¥ {{totalPrice}}</i></view>
			</view>
			<view class="buy-btn" bindtap="handleExchangePay">立即兑换</view>
			<!-- <view class="buy-btn">立即支付</view> -->
		</view>
	</view>
</template>

<script>
	import {
		randomNumber
	} from "@/config/tools.js"
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
				appid: "wx012623936b6b9aed",
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
			valChange(e) {
				let currNum = e.value;
				this.totalPrice = this.orderData.currSeletedItem.amount * currNum;
			},
			handleExchangePay() {
				let outtradeno = randomNumber();
				let amount = this.totalPrice;
				this.preparePay(outtradeno, amount);
			},
			// 对订单详情页的数据进行处理
			handleOrderData(orderData) {

				let totalPrice = orderData.buyNum * orderData.currSeletedItem.amount;
				let chargePrice = 0;
				this.orderData = orderData;
				this.buyNum = orderData.buyNum;
				this.totalPrice = totalPrice;
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
		}
	}
</script>

<style lang="scss">
	.title1-item .title1-name {
		color: #eb8013;
		width: 160rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title1-item .title1-content {
		flex: 1;
	}

	.line-operate,
	.line-operate1,
	.line-operate2 {
		background-color: #f5f5f5;
		height: 16rpx;
		margin-top: 30rpx;
	}

	.need-notice .title1 {
		margin: 40rpx 0 30rpx 20rpx;
		font-size: 34rpx;
	}

	.redemption-process {
		margin-bottom: 160rpx;
	}

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
		font-size: 24rpx;
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
		bottom: 10rpx;
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
</style>