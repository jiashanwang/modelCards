<template>
	<view>
		<view class="card-detail-warp">
			<view class="header">
				<view class="img-wrap">
					<u--image mode="widthFix" :src="detailImg"></u--image>
				</view>
				<view class="card-title">{{productData.brand_name}}</view>
				<view class="card-desc mt20 flexBetween">
					<view class="used-desc">
						<!-- <i class="iconfont icon-chacha"></i> -->
						<u-icon name="close-circle" color="#ff0000" size="16"></u-icon><i class="text">不支持退换</i>
					</view>
					<view class="used-desc">
						<!-- <i class="iconfont icon-duihao"></i> -->
						<u-icon name="checkmark-circle" color="#a0cfff" size="16"></u-icon><i class="text">可多次使用</i>
					</view>
					<view class="used-desc">
						<u-icon name="checkmark-circle" color="#a0cfff" size="16"></u-icon><i class="text">支持到店核销</i>
					</view>
				</view>
			</view>
			<view class="line-operate"></view>
			<view class="face-value-select flexBetween" @tap="showFaceValList">
				<view class="selet-desc">
					<view class="select-title1">选择:</view>
					<view class="select-title2">选择兑换面值</view>
					<view class="select-face">共 {{specData.length}} 种面值可选</view>
				</view>
				<i class="iconfont icon-jinrujiantou"></i>
			</view>
			<view class="line-operate1"></view>
			<!-- 兑换流程和须知 -->
			<view class="redemption-process">
				<view class="line-operate1"></view>
				<view class="need-notice">
					<view class="title1">兑换须知</view>
					<view class="title1-list">
						<block v-for="(item,index) in productData.exchange_notice" :key="index">
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
						<block v-for="(item,index) in productData.writeoff_notice" :key="index">
							<view class="title2-item">
								<view class="title2-name">{{item.name}} </view>
								<view class="title1-content"> {{item.content}} </view>
								<i class="iconfont icon-dian"></i>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="shareBtn">
				<button size="small" text="" class="u-reset-button">
					<u-icon name="share-fill"></u-icon>
					<view class="share-btn">分享</view>
				</button>
			</view>
			<view class="exchange" @tap="showFaceValList">立即兑换</view>
		</view>
		<!-- 底部向上滑动弹窗 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" :closeable="true" :overlay="true"
				:closeOnClickOverlay="false">
				<view class="popupBox">
					<!-- 内容 -->
					<view class="left-cnt" v-if="show">
						<view class="left-img mr20">
							<u--image :src="modalData.normalImg" mode="widthFix"></u--image>
						</view>
						<view class="product-desc">
							<view class="integral">积分<i
									class="integral-price">{{modalData.specData[currIndex].amount}}</i></view>

							<view class="remained-total">库存：充足</view>
						</view>
					</view>
					<view class="line-operate line-operate1"></view>
					<!-- 面额 -->
					<view class="face-list">
						<view class="face-title">面额</view>
						<view class="face-value-list">
							<block v-for="(item,index) in modalData.specData" :key="index">
								<view class="face-item" :class="[currIndex==index?'actived':'']"
									@tap='currFaceItemClick(index)'>{{item.amount}} 元</view>
							</block>
						</view>
					</view>
					<!-- 购买数量 -->
					<view class="buy-wrap">
						<view class="buy-title">购买数量</view>
						<view class="buy-operate">
							<u-number-box v-model="buyNum" @change="valChange" integer></u-number-box>
						</view>
					</view>
					<!-- 立即兑换 -->
					<view class="exchange-btn" @tap="exchangeSoon">立即兑换</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import {
		getBrandEcardList
	} from "@/config/api.js"
	export default {
		data() {
			return {
				buyNum: 1,
				currIndex: 0,
				show: false,
				productData: {}, // 卡劵的数据
				showModalFlag: false,
				currProcessFlag: false,
				specData: {}, // 商品规格信息
				modalData: {},
				detailImg: "",
				iconImg: "",
				card_type: "",
			};
		},
		onLoad(options) {
			if (options.data) {
				let productData = JSON.parse(decodeURIComponent(options.data));
				uni.setNavigationBarTitle({
					title: productData.brand_name
				})
				this.productData = productData;
				console.log("productData==")
				console.log(productData)
				this.detailImg = productData.square_colour_icon;
				this.iconImg = productData.icon_img;
				this.card_type = productData.card_type;
				// this.setData({productData:productData,detailImg:productData.square_colour_icon,iconImg:productData.icon_img,card_type:productData.card_type,has_charge:productData.has_charge,service_charge:productData.service_charge});
				this.getBrandEcardList();
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			// 面值选择
			currFaceItemClick(index) {
				let modalData = this.modalData;
				this.currIndex = index;
			},
			showFaceValList() {
				let modalData = {
					productFullName: this.productData.brand_name,
					normalImg: this.detailImg ? this.detailImg : this.productData.banner,
					specData: this.specData,
					pid: this.productData.brand_id,
					productType: this.productData.product_type,
					iconImg: this.iconImg,
					card_type: this.card_type,
				};
				this.modalData = modalData;
				this.show = true;
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false;
			},
			getBrandEcardList() {
				getBrandEcardList({}).then((res) => {
					res.forEach(element => {
						element.integral_price = element.amount;
						element.amount = parseFloat(element.amount);
					});
					this.specData = res;
				}).catch((err) => {})
			},
			// 立即兑换点击事件
			exchangeSoon() {
				let specsData = this.modalData.specData;
				let obj = {
					buyNum: this.buyNum,
					productFullName: this.modalData.productFullName,
					normalImg: this.modalData.normalImg,
					currSeletedItem: specsData[this.currIndex],
					pid: this.modalData.pid,
					productType: this.modalData.productType,
					iconImg: this.modalData.iconImg,
					card_type: this.modalData.card_type,
				};
				let data = encodeURIComponent(JSON.stringify(obj))
				console.log("obj == ")
				console.log(obj);
				wx.navigateTo({
					url: "/pages/cardBuyDetail/index?data=" + data
				});
				// wx.navigateTo({url: "/pages/payment/index?data=" + data});
			},
		}
	}
</script>
<style lang="scss">
	.img-wrap /deep/ .u-image {
		width: 100% !important;
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
	}

	.left-cnt /deep/ .u-image__image {
		width: 280rpx !important;
		// height: 180rpx !important;
	}

	.left-cnt /deep/ .u-image {
		height: 160rpx !important;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;
	}

	.u-transition {
		width: 100% !important;
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
	}

	.redemption-process {
		margin-bottom: 160rpx;
	}

	.u-reset-button {
		display: flex !important;
		flex-direction: column;
		justify-content: center !important;
		align-items: center !important;
	}
</style>
<style lang="scss">
	.popupBox {
		padding: 0rpx 20rpx 30rpx 20rpx;
	}

	.mr20 {
		margin-right: 20rpx;
	}

	.select-face {
		color: $u-info;
		font-size: 28rpx;
	}

	.shareBtn {
		margin-right: 20rpx;
	}

	.share-btn {
		font-size: 18rpx;
	}

	.used-desc {
		display: flex;
		justify-content: center;
		align-items: center;

		.text {
			font-size: 30rpx;
		}
	}

	.flexBetween {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-detail-warp {
		display: block;
		height: calc(100vh - 120rpx);
		overflow-y: scroll;
	}

	.header,
	.face-value-select,
	.process-title,
	.redemption-wrap,
	.need-notice {
		margin: 0 24rpx;
	}

	.header .card-title {
		font-size: 36rpx;
		// margin-top: 30rpx;
	}

	.card-desc {
		margin-top: 30rpx;
	}

	// .card-desc .iconfont {
	// 	color: #accff9;
	// 	font-size: 32rpx;
	// }

	.card-desc .text {
		margin-left: 10rpx;
	}

	.card-desc .icon-chacha {
		color: #fe4848;
	}

	.line-operate,
	.line-operate1,
	.line-operate2 {
		background-color: #f5f5f5;
		height: 16rpx;
		margin-top: 30rpx;
	}

	// .line-operate{
	// 	margin-top:0rpx;
	// }

	.line-operate1 {
		margin-top: 0rpx;
	}

	.line-operate2 {
		height: 1rpx;
	}

	.selet-desc {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.face-value-select {
		height: 100rpx;
	}

	.select-title1 {
		color: #999999;
	}

	.select-title2 {
		margin: 0 20rpx;
	}

	.select-face {
		padding: 6px 20rpx;
		background-color: #f6f6f6;
		color: #999999;
	}

	.process-title {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20rpx;
	}

	.process-title .tip {
		position: absolute;
		height: 5rpx;
		background-color: #f97b04;

	}

	.process-title .process,
	.process-title .notice {
		font-size: 34rpx;
	}

	.actived {
		color: #eb8013;
	}

	.redemption-wrap .title-img {
		margin: 30rpx 0;
	}

	.need-notice .title1 {
		margin: 40rpx 0 30rpx 20rpx;
		font-size: 34rpx;
	}

	.img-wrap .title-img {
		border-radius: 30rpx;
		margin-top: 20rpx;
	}

	.title1-item {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 40rpx 0;
	}

	.title2-item {
		margin: 40rpx;
		position: relative;
	}

	.title2-name {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.title2-item .icon-dian {
		position: absolute;
		top: -6rpx;
		left: -50rpx;
		font-size: 50rpx;
		color: #999999;
		/* width:50rpx;
  height:30rpx;
  text-align: center;
  display: block; */
	}

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

	.footer {
		position: fixed;
		bottom: 20rpx;
		width: 90%;
		left: 5%;
		right: 5%;
		height: 80rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.exchange {
		flex: 1;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: linear-gradient(to right, #fdb208, #f97b04);
		border-radius: 40rpx;
		letter-spacing: 5rpx;
		color: #ffffff;
		font-size: 34rpx;
	}

	.share .iconfont {
		font-size: 30rpx;
		color: #999999;
	}

	.footer .share {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-items: center;
		color: #999999;
		position: relative;
		left: -12rpx;
		display: flex;
		background-color: #ffffff;
		font-size: 24rpx;
		width: 100rpx;
		padding: 0rpx;
	}

	.title1-content {
		// color: #727272;
		color: $u-content-color;
		font-size: 24rpx;

	}

	.title2-name {
		margin-bottom: 20rpx;
	}

	// ===弹出层的样式====
	.choosen {
		width: 100%;
		height: 900rpx;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		z-index: 98;
		padding: 30rpx 20rpx;
	}

	.choosen .icon-guanbi {
		position: absolute;
		padding: 30rpx;
		font-size: 40rpx;
		top: 0rpx;
		right: 0rpx;
	}

	/* 内容 */
	.container-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 200rpx;
		position: relative;
	}

	.left-cnt {
		// display: flex;
		// justify-content: flex-start;
		// align-items: center;
	}

	.left-img {
		margin-right: 20rpx;
		flex: 1;
	}

	.title-img {
		width: 240rpx;
		border-radius: 20rpx;
	}


	.right-cnt {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		height: 200rpx;
	}

	.product-desc {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20rpx;
	}

	.placeholderBox {
		width: 80rpx;
		height: 50rpx;
	}

	.integral {
		color: #fe4848;
		font-weight: bold;

	}

	.integral .integral-price {
		font-size: 38rpx;
		margin-left: 5rpx;

	}

	.remained-total {
		color: #999999;
	}

	.line-operate {
		border: 1rpx solid #f5f5f5;
	}

	.face-title {
		font-size: 34rpx;
		margin-top: 14rpx;
		margin-bottom: 20rpx;
	}

	.face-value-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}

	.face-item {
		padding: 10rpx 22rpx;
		text-align: center;
		margin: 20rpx;
		background-color: $u-info-light;
	}

	.actived {
		background-color: #fff6eb;
		color: #eb8013;
	}

	.buy-wrap {
		font-size: 34rpx;
		margin-top: 50rpx;
		margin-bottom: 180rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60rpx;
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

	.exchange-btn {
		/* margin-top:100rpx; */
		position: absolute;
		bottom: 40rpx;
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: linear-gradient(to right, #fdb208, #f97b04);
		border-radius: 40rpx;
		left: 5%;
		right: 5%;
		letter-spacing: 5rpx;
		color: #ffffff;
		font-size: 34rpx;
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
		/* position: absolute;
	  bottom:10rpx;
	  right:24rpx; */
	}

	.no-in-stock {
		background: #dcdcdc;
	}
</style>