<template>
	<view>
		<u-subsection activeColor="#3c9cff" :list="list" mode="subsection" :current="curNow"
			@change="sectionChange"></u-subsection>
		<view class="empty" v-if="!orders.length">
			<u-empty mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png">
			</u-empty>
		</view>
		<view class="order_info_content" v-else>
			<block v-for="(item, index) in orders" :key="index">
				<view class="orderList">
					<view class="orderTitle">
						<view class="orderNum commonFont">订单号:{{item.outtradeno}}</view>
						<view class="orderState" v-if="item.pay_state == 1">已完成
						</view>
						<view class="orderState" v-if="item.pay_state == 0">已关闭</view>
					</view>
					<view class="orderContent">
						<view class="orderCnt_img">
							<image class="img" mode="widthFix" :src="item.detail_img"></image>
						</view>
						<view class="orderCnt_info">
							<view class="orderCnt_info_name">{{item.product_name}}</view>
							<view class="desc">面额:{{item.amount}}</view>
						</view>
						<view class="orderCnt_no">
							<view class="placeholderBox"></view>
							<view>x {{item.buy_no}}</view>
						</view>
					</view>
						<view class="orderInfos commonFont">
						<view class="orderInfo">
							<view class="orderItme">下单时间: {{item.create_time}}</view>
							<view class="orderModel">积分支付</view>
						</view>
					</view>
						<view class="orderOperate" v-if="item.pay_state == 0">
						<view class="priceBox">总价:
							<i class="totalPrice"> ¥{{item.amount}}</i>
						</view>
						<view class="operateBox">
							<view class="operate refund" @tap="deleteCurrentOrder"
								v-if="item.pay_state == 0">删除记录</view>
						</view>
					</view>
				</view>
				<u-line></u-line>
			</block>
		</view>
	</view>
</template>

<script>
	import {
		getOrderListByType
	} from '@/config/api.js';
	export default {
		data() {
			return {
				list: ['未付款', '待发货', '已完成', '退款/售后'],
				curNow: 0,
				orders: [],
				payState: 0, // 订单支付状态0:未支付 1:支付成功，待发货  2:支付成功，已发货  3:退款中 4:已退款
				tabs: [{
						id: 0,
						value: "待支付",
						isActive: true
					},
					{
						id: 1,
						value: "待发货",
						isActive: false
					},
					{
						id: 2,
						value: "已完成",
						isActive: false
					},
					{
						id: 3,
						value: "退款/售后",
						isActive: false
					},
				],
				orderNumber: null, // 当前待支付的订单号
				currTypeData: {
					productType: 0,
				},
				intervalTimer: null, // 定时器
				hidden: true,
				returnReasonValue: "", //退款原因 
				returnItemData: {}, // 退款的订单信息
				currSelectedReturnData: {}, // 当前选择的退款原因
				currIndex: 0, // 当前所选择的退款原因下标
			};
		},
		onLoad(options) {
			this.getOrderListByType();
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
				this.payState = index;
				this.getOrderListByType();
			},
			getOrderListByType() {
				let openid = "ovYh85fxwyGPxCPRjZ4uXpvmmPVU";
				let params = {
					openid: openid,
					payState: this.payState
				};
				getOrderListByType({
					...params
				}).then((res) => {
					this.orders = res;
				}).catch((err) => {
					this.orders = [];
				})
			},
		}
	}
</script>

<style lang="scss">
	.order_info_content {
		height: calc(100vh - 80rpx);
	}

	.nodataTip {
		height: calc(100vh - 80rpx);
		display: flex;
		justify-content: center;
		position: relative;
	}

	.nodataTip .tips {
		position: absolute;
		top: 20%;
		color: #A3A3A3;
	}

	/* 设置背景遮罩层样式 */
	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.maskContent {
		width: 80%;
		background: #ffffff;
		border-radius: 5px;
		padding: 30rpx;
		position: relative;
	}

	.maskContent .close {
		position: absolute;
		top: 0;
		font-size: 50rpx;
		right: 0;
		color: #A3A3A3;
		padding: 10rpx;
	}

	.maskContent .title {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1rpx dashed var(--lineColor);
		padding-bottom: 20rpx;
	}

	.maskContent .desc {
		margin: 20rpx 0;
		display: flex;
	}

	.descTitle {
		flex: 3;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.descCnt {
		flex: 5;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 25rpx;
	}

	.makePhoneOperate {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 20rpx;
		border-top: 1rpx dashed var(--lineColor);
	}

	.makePhoneOperate button {
		color: #ffffff;
		background-color: var(--themeColor);
		opacity: 0.8;
	}

	.makePhoneOperate .btn1 {
		color: #ffffff;
		background-color: #6991E2;
		opacity: 0.8;
	}

	.orderList {
		padding: 10rpx 20rpx;
		border-bottom: 1rpx dashed var(--lineColor);
		padding-bottom: 30rpx;

		.empty {
			margin-top: 40rpx;
		}
	}

	.orderTitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx;
	}

	.orderState {
		color: var(--themeColor);
	}

	.greenColor {
		color: #66b1ff;
	}

	.commonFont {
		color: #A3A3A3;
		font-size: 28rpx;
	}

	.orderContent {
		display: flex;
		height: 160rpx;
	}

	.orderCnt_img {
		flex: 3;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.orderCnt_info {
		flex: 5;
		padding: 15rpx;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.orderCnt_img .img {
		border-radius: 13rpx;
		width:260rpx;
		// height:50rpx;
	}

	.orderCnt_no {
		flex: 1;
		color: #A3A3A3;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		align-items: center;
	}

	.orderCnt_info .desc {
		color: #A3A3A3;
		font-size: 24rpx;
	}

	.orderAddr {
		margin-top: 10rpx;
	}

	.orderInfo {
		margin-top: 20rpx;
	}

	.orderDesc {
		margin-top: 20rpx;
		color: #8fd6ff;
	}

	.totalPrice {
		color: var(--themeColor);
	}

	.orderOperate {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}

	.operateBox {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.orderOperate .operate {
		padding: 10rpx 20rpx;
		text-align: center;
		margin-right: 20rpx;
		font-size: 24rpx;
		color: var(--themeColor);
		border-radius: 10rpx;
		border: 1rpx solid var(--themeColor);
	}

	.orderCnt_no {
		flex: 1;
		color: #A3A3A3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 15rpx 0;
	}

	.placeholderBox {
		width: 40rpx;
		height: 40rpx;
	}

	.orderOperate .refund {
		color: #A3A3A3;
		border: 1rpx solid #cccccc;
	}

	.returnList {
		background-color: rgba(204, 204, 204, 0.3);
		border-radius: 10rpx;
		padding: 10rpx 15rpx;
		margin: 0 20rpx 20rpx 20rpx;
	}

	.returnWrap {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 20rpx;
	}

	.active {
		background-color: rgba(235, 68, 80, 0.5) !important;
		color: #ffffff;
	}

	textarea {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.orderCnt_price {
		color: #fe4848 !important;
	}

	.countdownTime {
		margin-top: 10rpx;
		background-color: #FEF6D8;
		color: #DFA652;
		text-align: center;
		padding: 10rpx;
	}

	.orderInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.orderModel {
		color: #67C23A !important;
	}

	.ifont {
		font-size: 18rpx;
		margin-left: 10rpx;
	}

	.returnWrap {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 20rpx;
	}

	.active {
		background-color: rgba(235, 68, 80, 0.5);
		color: #ffffff;
	}

	textarea {
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 100%;
	}

	.returnList {
		background-color: rgba(204, 204, 204, 0.3);
		border-radius: 10rpx;
		padding: 10rpx 15rpx;
		margin: 0 20rpx 20rpx 20rpx;
	}
</style>