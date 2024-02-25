<template>
	<view class="home-page-header">
		<!-- 搜索 -->
		<view class="">
			<u-search placeholder="搜索大牌卡劵" v-model="keyword" :showAction="false"></u-search>
		</view>
		<!-- 轮播图 -->
		<view id="index_swiper">
			<u-swiper :list="swiperList" @change="change" @click="click"></u-swiper>
		</view>
		<view class="home-page-container">
			<!-- 最新公告 -->
			<view class="notice-wrap">
				<view class="title">最新公告：</view>
				<view class="notice">每个商品详情页都有使用方法和兑换说明，请仔细阅读后下单!</view>
			</view>
		</view>
		<view class="product-title"> <i>———</i>
			<view class="title">缤纷卡劵</view> <i>———</i>
		</view>
		<view class="product_list">
			<block v-for="(item, index) in productList" :key="index">
				<view class="product-item" @tap="jumpDetailPage(item)">
					<u--image :src="item.square_colour_icon" width="100%" height="100px" mode="widthFix"></u--image>
					<view class="product-desc-container">
						<view class="product_name">{{item.brand_name}}</view>
						<view class="sales">{{item.total_sales}} 人已买</view>
						<view class="product_price">
							<view class="integral_price">
								<view class="tag">¥</view>
								<view class="price">{{item.amount}} 起 </view>
							</view>
							<view class="card_type">电子卡</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {
		getCardList,getNotice
	} from '@/config/api.js';
	export default {
		data() {
			return {
				notice:"积分按照1:1兑换 1元 = 1积分",
				keyword: "搜索大牌卡劵",
				swiperList: [
					"../../static/dapaikajuan_banner.jpeg",
					"../../static/shitinghyzhutu.jpeg"
				],
				productList: [],
			}
		},
		onLoad() {
			this.getCardList();
			this.getNotice();
		},
		methods: {
			change(){},
			getNotice() {
				getNotice({
					keyword: ""
				}).then((res) => {
					this.notice = res.data.data;
				}).catch((err) => {})
			},
			/**
			 * 获取卡劵列表
			 */
			getCardList() {
				getCardList({
					keyword: ""
				}).then((res) => {
					this.productList = res.data.data;
				}).catch((err) => {})
			},
			jumpDetailPage(item) {
				let obj = {
					brand_id: item.brand_id,
					square_colour_icon: item.square_colour_icon,
					brand_name: item.brand_name,
					icon_img: item.circular_colour_icon,
					product_type: item.product_type,
					card_type: item.coupon_name,
					exchange_notice: item.exchange_notice,
					writeoff_notice: item.writeoff_notice
				};
				let data = encodeURIComponent(JSON.stringify(item))
				uni.navigateTo({
					url: "/pages/cardDetail/index?data=" + data
				});
			},
		}
	}
</script>
<style lang="scss">
	page {
		background-color: #ffffff;
	}
	.sales{
		font-size:24rpx;
		margin:10rpx 0;
		color:#cccccc;
	}
	.product_list {
		display: flex;
		justify-content: center;
		align-items: center;

		.u-transition {
			width: 100% !important;

			.u-image {
				height: 200px !important;
			}
		}

		.u-image__image {
			width: 80% !important;
		}
	}

	.uni-scroll-view-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
<style lang="scss" scoped>
	// .product_list ::v-deep .item {
	// 	border: 1px solid blue;
	// }


	.integral_price {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.home-page-header {
		display: block;
		padding: 0 24rpx;
	}

	.swiper-img {
		border-top-left-radius: 25rpx;
		border-top-right-radius: 25rpx;
	}

	.home-page-header {
		// height: 380rpx;
		// background: linear-gradient(#fff, #f5f5f5);
	}

	.home-page-container {
		// background: #f5f5f5;
	}

	.search-wrap {
		height: 60rpx;
		background-color: #f3f3f3;
		border-radius: 30rpx;
	}

	.search-wrap .iconfont {
		font-size: 38rpx;
		margin-top: 4rpx;
		color: #bbbbbb;
		margin-left: 30rpx;
	}

	.search-input {
		flex: 1;
		color: #b4b4b4;
		padding-left: 25rpx;
	}

	#index_swiper {
		position: relative;
		// height: 300rpx;
		margin-top: 20rpx;
	}

	.line-operate {
		width: calc(100% - 48rpx);
		margin: 0 auto;
		height: 10rpx;
		background-color: #f5f5f5;
	}

	.often-used-list {
		display: flex;
		height: 300rpx;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		background-color: #ffffff;
		border-bottom-left-radius: 25rpx;
		border-bottom-right-radius: 25rpx;
		padding-top: 10rpx;
	}

	.ofter-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.ofter-item .img {
		width: 80rpx;
	}

	.typeName {
		/* margin-top:10rpx; */
	}

	.notice-wrap {
		height: 60rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 20rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
	}

	.notice-wrap .title {
		width: 180rpx;
		text-align: center;
	}

	.notice-wrap .notice {
		color: #c0a633;
	}

	.mf-list {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		background-color: #ffffff;
	}

	.mf-item {
		width: 50%;
	}

	.mf-item .img {
		width: 100%;
	}

	.product-title {
		width: calc(100%-48rpx);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		padding: 30rpx 0 50rpx 0;
	}

	.product-title .title {
		text-align: center;
		font-size: 34rpx;
		margin: 0 20rpx;
	}

	.product-title i {
		color: #bbbbbb;
	}

	.product_list {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 20rpx;
	}

	.product-item {
		width: 48%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 34rpx;
		/* position: relative;
	    margin-top:94rpx; */
	}

	.product-item .img {
		width: 100%;
		border-top-left-radius: 25rpx;
		border-top-right-radius: 25rpx;
	}

	.product-item .imgWrap {
		position: relative;
	}

	.product-desc-container {
		width: 100%;
		padding: 10rpx 0 20rpx 20rpx;
		background-color: #ffffff;
		border-bottom-left-radius: 25rpx;
		border-bottom-right-radius: 25rpx;
	}

	.product-desc-container .product_price {
		height: 40rpx;
		display: flex;
		justify-content: space-between !important;
		align-items: center;
	}

	.product_price .tag {
		display: inline-block;
		font-size: 35rpx;
		margin-right: 5rpx;
	}

	.product-desc-container .product_name {
		font-size: 32rpx;
		overflow: hidden;
		white-space: nowrap;
	}

	.product-desc-container .product_sales {
		color: #bbbbbb;
		font-size: 26rpx;
		margin: 10rpx 0;
	}

	.product-desc-container .product_price {
		display: flex;
		justify-content: flex-start;
		color: #ec7e17;

	}

	.product-desc-container .card_type {
		margin-left: 20rpx;
		text-align: center;
		border: 1rpx solid #ec7e17;
		padding: 2rpx 12rpx;
		border-radius: 16rpx;
		font-size: 18rpx;
		margin-right: 20rpx;
	}
	.notice{
		font-size:20rpx;
		position: relative;
		top:2px;
	}
</style>