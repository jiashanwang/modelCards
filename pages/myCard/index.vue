<template>
	<view>
		<view class="searchBox">
			<u-search placeholder="请输入搜索内容" v-model="searchInputVal" :showAction="false"></u-search>
		</view>
		<view class="my-card" v-if="orders.length">
			<block v-for="(item, index) in orders" :key="index">
				<view class="orderList">
					<view class="orderTitle">
						<view class="orderNum commonFont">订单号:{{item.outtradeno}}</view>
						<view class="orderState greenColor">已发货</view>
					</view>
					<view class="orderContent">
						<view class="orderCnt_img">
							<image class="img" mode="widthFix" :src="item.detail_img"></image>
						</view>
						<view class="orderCnt_info">
							<view class="orderCnt_info_name">{{item.product_name}}</view>
							<view class="orderCnt_price desc">金额:{{item.amount}}</view>
						</view>
						<view class="orderCnt_no">
							<view class="placeholderBox"></view>
							<view>× {{item.buy_no}}</view>
						</view>
					</view>
					<view class="orderInfos">
						<view class="orderInfo commonFont">
							<view>发货时间: {{item.ship_time}}</view>
							<view class="operate" @tap="checkDetail(item)">查看详情</view>
						</view>
					</view>
				</view>
				<u-line></u-line>
			</block>
		</view>
		<view v-else>
			<u-empty mode="order" icon="http://cdn.uviewui.com/uview/empty/order.png">
			</u-empty>
		</view>
		<!-- 弹窗显示电子卡信息 -->
		<view class="card-list" v-if="showDialog">
			<view class="card-wrap">
				<view class="inner-wrap">
					<view class="box-cnt">
						<!-- <image class="img" mode="widthFix" :src="currItem.detail_img"></image> -->
						<view class="header-title">恭喜您</view>
						<view class="title">获得{{currItem.product_name}}</view>
					</view>
					<view class="ecard-wrap">
						<view class="card-content">
							<view class="card-no-wrap">
								<!-- <view class="card-no-title common1">您的服务账号为</view> -->
								<view class="card-no-title common1">您的卡号为</view>
								<view class="card-no-desc common2">{{currItem.card_no}}</view>
							</view>
							<view class="card-no-wrap">
								<!-- <view class="card-pwd-title common1">您的服务密码为</view> -->
								<view class="card-pwd-title common1">您的密码为</view>
								<view class="card-pwd-desc common2">{{currItem.card_pwd}}</view>
							</view>
							<view class="card-operate">
								<view class="copy-no" @tap="copyCardInfo(1)">复制账号
								</view>
								<view class="copy-no" @tap="copyCardInfo(2)">复制密码
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="closeImg">
					<view class="" @tap="closeDialogModel">
						<image class="close" mode="widthFix" src="../../static/close.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getMyCardList
	} from '@/config/api.js';
	export default {
		data() {
			return {
				orders: [],
				currItem: {}, // 查看详情的订单数据
				showDialog: false,
				searchInputVal: "",
			};
		},
		onLoad() {
			this.getMyCardList();
		},
		methods: {
			closeDialogModel(){
				this.showDialog = false;
			},
			copyCardInfo(type,item){
				let content = this.currItem.card_no;
				if(type == 2){
					content = this.currItem.card_pwd;
				};
				uni.setClipboardData({
				  data: content,
				  success: function() {
				    console.log('复制成功');
				  }
				})
			},
			// 查看详情
			checkDetail(item) {
				this.currItem = item;
				this.showDialog = true;
			},
			getMyCardList() {
				let openid = "ovYh85fxwyGPxCPRjZ4uXpvmmPVU";
				let params = {
					openid: openid,
					searchName: this.searchInputVal
				};
				getMyCardList({
					...params
				}).then((res) => {
					this.orders = res;
				}).catch((err) => {
					this.orders = [];
				})
			},
			searchInputEvent(e) {},
		}
	}
</script>

<style lang="scss">
	.searchBox {
		margin: 20rpx;
	}

	.my-card {
		margin: 0 24rpx;
	}

	.order_info_content {
		height: calc(100vh - 110rpx);
	}

	.orderList {
		padding: 10rpx 0rpx;
		border-bottom: 1rpx dashed var(--lineColor);
		padding-bottom: 30rpx;
	}

	.orderTitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 0 20rpx 0;
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

	.orderCnt_info .desc {
		color: #A3A3A3;
		font-size: 24rpx;
	}

	.orderCnt_price {
		color: #fe4848 !important;
	}

	.orderInfo .operate {
		padding: 10rpx 0rpx 10rpx 20rpx;
		text-align: center;
		margin-right: 20rpx;
		font-size: 28rpx;
		color: #66b1ff;
		border-radius: 10rpx;
		/* border:1rpx solid var(--themeColor); */
	}

	/* 以下为弹窗样式 */
	.card-wrap {
		margin: 0 auto;
		background-color: #e50013;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 88%;
		border-radius: 20rpx;
		position: fixed;
		top: 100rpx;
	}

	.card-wrap .inner-wrap {
		background-color: #ffffff;
		width: 630rpx;
		position: relative;
		bottom: -20rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-top: 80rpx;
		margin-bottom: 40rpx;
		border-radius: 15rpx;
	}

	.card-wrap .inner-wrap:before {
		content: "";
		display: block;
		position: absolute;
		margin: 0 auto;
		top: -70rpx;
		left: 215rpx;
		height: 200rpx;
		width: 200rpx;
		border-radius: 50%;
		background-color: #ffffff;
	}

	.inner-wrap .img {
		width: 100rpx;
		height: 80rpx;
	}

	.header-title {
		font-size: 50rpx !important;
		font-weight: bold !important;
	}

	.card-content {
		width: 90%;
		margin: 0 auto;
		border-radius: 20rpx;
		padding: 30rpx 0;
		background-color: #f9f9f9;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card-no-wrap {
		width: 100%;
		text-align: center;
		margin-bottom: 30rpx;
	}

	.common1 {
		margin-bottom: 16rpx;
		color: #969596;
	}

	.inner-wrap .title {
		color: #969596;
		font-size: 32rpx;
		margin-top: 10rpx;
	}

	.card-operate {
		margin: 30rpx 0;
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.copy-no {
		background-color: #fff6eb;
		color: #eb8013;
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 30rpx;
		border-radius: 30rpx;
	}

	.box-cnt {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		z-index: 100;
		position: relative;
		top: -40rpx;
	}

	.orderInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15rpx;
	}

	.card-list {
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

	.ecard-wrap {
		position: relative;
		top: -20rpx;
		width: 100%;
		max-height: 440rpx;
		overflow-y: scroll;
	}

	.closeImg {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: -160rpx;
		right: 0rpx;
		left: 0rpx;
	}

	.closeImg .close {
		width: 80rpx;
		// height: 80rpx;
		// font-size: 80rpx;
		// color: #ffffff;
		// padding: 30rpx;
	}

	.search-wrap {
		height: 70rpx;
		background-color: #f3f3f3;
		border-radius: 35rpx;
		margin: 20rpx 0;
	}

	.search-wrap .iconfont {
		font-size: 40rpx;
		color: #bbbbbb;
		margin-left: 30rpx;
	}

	.search-input {
		flex: 1;
		/* color:#b4b4b4; */
		padding-left: 25rpx;
		font-size: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.nodataTip {
		height: calc(100vh - 110rpx);
		display: flex;
		justify-content: center;
		position: relative;
	}

	.nodataTip .tips {
		position: absolute;
		top: 20%;
		color: #A3A3A3;
	}

	.orderCnt_img .img {
		border-radius: 13rpx;
		width: 260rpx;
		// height:180rpx!important;
	}

	.getMore {
		z-index: 1000;
		position: absolute;
		right: 50rpx;
		top: 50%;
		color: #66b1ff;
		width: 12px;
		margin: 0 auto;
		line-height: 14px;
		font-size: 10px;
		opacity: 0.7;
	}

	.orderNo {
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		background-color: #66b1ff;
		color: #ffffff;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>