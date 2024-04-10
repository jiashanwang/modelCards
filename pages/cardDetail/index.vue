<template>
	<view>
		<view class="card-detail-warp">
			<view class="header">
			<!-- 	<view class="img-wrap">
					<u--image mode="widthFix" :src="detailImg"></u--image>
				</view> -->
				<view id="index_swiper">
					<u-swiper :list="swiperList" @change="change" @click="click"></u-swiper>
				</view>
				<view class="card-title">{{productData.send_name}}</view>
				<view class="card-desc mt20 flexBetween">
					<view class="used-desc">
						<view class="kucun">
							库存:充足
						</view>
					</view>
					<view class="used-desc">
						<view class="kucun">
							销量:{{productData.mock_sales}}件
						</view>
					</view>
					<!-- <view class="used-desc">
						<u-icon name="checkmark-circle" color="#a0cfff" size="16"></u-icon><i class="text">可多次使用</i>
					</view> -->
				<!-- 	<view class="used-desc">
						<u-icon name="checkmark-circle" color="#a0cfff" size="16"></u-icon><i class="text">支持</i>
					</view> -->
				</view>
			</view>
			<view class="line-operate"></view>
			<view class="face-value-select flexBetween">
				<view class="selet-desc">
					<view class="select-title1 baozhang">用户评价:</view>
					<view class="select-title2 baozhang haoping">好评率 {{haoping}}%</view>
				</view>
				<i class="iconfont icon-jinrujiantou"></i>
			</view>
			<!-- <view class="face-value-select flexBetween" @tap="showFaceValList">
				<view class="selet-desc">
					<view class="select-title1">选择:</view>
					<view class="select-title2">选择版本类型</view>
					<view class="select-face">共 {{specData.length}} 种版本可选</view>
				</view>
				<i class="iconfont icon-jinrujiantou"></i>
				
			</view> -->
			<view class="line-operate"></view>
			<view class="face-value-select flexBetween">
				<view class="selet-desc">
					<view class="select-title1 baozhang">售后保障:</view>
					<view class="select-title2 baozhang">支持7天无理由</view>
				</view>
				<i class="iconfont icon-jinrujiantou"></i>
			</view>
			<view class="line-operate1"></view>
			<!-- 兑换流程和须知 -->
			<view class="redemption-process" v-if="productData.exchange_notice.length">
				<view class="line-operate1"></view>
				<view class="need-notice">
					<view class="title1">商品详情</view>
					<view class="title1-list">
						<block v-for="(item,index) in productData.exchange_notice" :key="index">
							<view class="title1-item">
								<view class="title1-name">{{item.name}}</view>
								<view class="title1-content youshi">{{item.content}}</view>
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="">
				<block v-for="(item,index) in productData.detail_imgs" :key="index">
					<view class="detailimgwrap">
						<image style="width:100%;position: relative;top:8rpx;" mode='widthFix' :src="item"></image>
					</view>
				</block>
			</view>
			<view class="redemption-process servicecnt" v-if="productData.writeoff_notice.length">
				<view class="line-operate1"></view>
				<view class="need-notice">
					<view class="title1">服务内容</view>
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
			<view class="exchange" @tap="showFaceValList">加入购物车</view>
		</view>
		<!-- 底部向上滑动弹窗 -->
		<view>
			<u-popup :show="show" @close="close" @open="open" :closeable="true" :overlay="true"
				:closeOnClickOverlay="false">
				<view class="popupBox">
					<!-- 内容 -->
					<view class="left-cnt" v-if="show">
						<view class="left-img mr20">
							<!-- <u--image style="width:auto;" :src="modalData.normalImg" mode="widthFix"></u--image> -->
							<!-- <view class="goodsWrap">
								
								<view class="item-menu-name">￥{{modalData.amount}}</view>
								<view class="item-menu-name">已售：{{modalData.mock_sales}}件</view>
								<view>已选择：默认 {{buyNum}}件</view>
							</view> -->
						</view>
						<!-- <view class="product-desc">
							<view class="integral">{{modalData.specData[currIndex].version}}<i
									class="integral-price" v-if="isCustom">协商定价</i><i
									class="integral-price" v-if="!isCustom">{{modalData.specData[currIndex].amount}}</i></view>

							<view class="remained-total">支持定制开发</view>
						</view> -->
					</view>
					<view class="line-operate line-operate1"></view>
					<!-- 面额 -->
				<!-- 	<view class="face-list">
						<view class="face-title">面额</view>
						<view class="face-value-list">
							<block v-for="(item,index) in modalData.specData" :key="index">
								<view class="face-item" :class="[currIndex==index?'actived':'']"
									@tap='currFaceItemClick(index)'>{{item.amount}} {{item.amount=="定制版"?"":"元"}}</view>
							</block>
						</view>
					</view> -->
					<view class="buy-wrap guige">
						<view class="buy-title">规则</view>
						<view class="buy-operate">
							默认<span class="bukexuan">(不可选)</span>
						</view>
					</view>
					<!-- 购买数量 -->
					<view class="buy-wrap">
						<view class="buy-title">购买数量</view>
						<view class="buy-operate">
							<u-number-box v-model="buyNum" v-if="isCustom" disabled="" @change="valChange" integer></u-number-box>
							<u-number-box v-model="buyNum" v-else @change="valChange" integer></u-number-box>
						</view>
					</view>
					<!-- 立即兑换 -->
					<view class="exchange-btn" @tap="exchangeSoon">加入购物车</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import {
		getSoftEcardList
	} from "@/config/api.js"
	export default {
		data() {
			return {
				zhekou:1,
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
				isCustom:false,
				
				haoping:99,
			};
		},
		onLoad(options) {
			if (options.data) {
				let randomValue = Math.random() * 4 + 95;
				this.haoping = Math.round(randomValue);
				let productData = JSON.parse(decodeURIComponent(options.data));
				uni.setNavigationBarTitle({
					title: productData.brand_name
				})
				this.productData = productData;
				this.detailImg = productData.circular_colour_icon;
				this.iconImg = productData.circular_colour_icon;
				this.card_type = productData.card_type;
				this.swiperList = productData.images;
				// this.setData({productData:productData,detailImg:productData.square_colour_icon,iconImg:productData.icon_img,card_type:productData.card_type,has_charge:productData.has_charge,service_charge:productData.service_charge});
				this.getBrandEcardList(productData.brand_name);
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
				if (this.modalData.specData[index].amount == "定制版"){
					this.isCustom = true;
					this.buyNum = 1;
				}else{
					this.isCustom = false;
				}
			},
			showFaceValList() {
				debugger;
				let modalData = {
					productFullName: this.productData.brand_name,
					normalImg: this.detailImg ? this.detailImg : this.productData.banner,
					mock_sales:this.productData.mock_sales,
					amount:this.productData.amount,
					// specData: this.specData,
					// pid: this.productData.brand_id,
					// productType: this.productData.product_type,
					iconImg: this.iconImg,
					// card_type: this.card_type,
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
			// getBrandEcardList() {
			// 	getBrandEcardList({}).then((result) => {
			// 		let res = result.data.data;
			// 		res.forEach(element => {
			// 			element.integral_price = element.amount;
			// 			element.amount = parseFloat(element.amount);
			// 		});
			// 		this.specData = res;
			// 	}).catch((err) => {})
			// },
			getBrandEcardList(name) {
				getSoftEcardList({name}).then((result) => {
					let res = result.data.data.amount_list;
					this.zhekou = result.data.data.zhekou;
					res.forEach(element => {
						element.integral_price = element.amount;
						element.amount =element.amount;
					});
					
					this.specData = res;
				}).catch((err) => {})
			},
			// 立即兑换点击事件
			exchangeSoon() {
				debugger;
				// let specsData = this.modalData.specData;
				let obj = {
					buyNum: this.buyNum,
					productFullName: this.modalData.productFullName,
					normalImg: this.detailImg,
					// currSeletedItem: specsData[this.currIndex],
					// pid: this.modalData.pid,
					// productType: this.modalData.productType,
					iconImg: this.detailImg,
					// card_type: this.modalData.card_type,
					zhekou:this.zhekou,
					sendName:this.productData.send_name,
					amount:this.modalData.amount,
					
				};
				debugger;
				let data = encodeURIComponent(JSON.stringify(obj))
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
		// width: 100% !important;
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
	}

	.redemption-process {
		// margin-bottom: 160rpx;
	}

	.u-reset-button {
		display: flex !important;
		flex-direction: column;
		justify-content: center !important;
		align-items: center !important;
	}
	.detailimgwrap .uni-image{
		position: relative!important;
		top:8rpx!important;
	}
	.left-img .u-image{
		width:auto!important;
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

	// .card-detail-warp {
	// 	display: block;
	// 	height: calc(100vh - 120rpx);
	// 	overflow-y: scroll;
	// }

	.header,
	.face-value-select,
	.process-title,
	.redemption-wrap,
	.need-notice {
		margin: 0 24rpx;
	}

	.header .card-title {
		font-size: 30rpx;
		padding-top:30rpx;
	}

	.card-desc {
		margin-top: 30rpx;
		margin-bottom:20rpx;
		color:#666;
		font-size:28rpx;
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
		// margin-top: 30rpx;
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
		margin: 20rpx 0;
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
		display: flex;
		justify-content: flex-start;
		align-items: center;
		
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
		color: green;
		margin-right:40rpx;
		font-size:24rpx;
		
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
	#index_swiper {
		position: relative;
		// height: 300rpx;
		margin-top: 20rpx;
	}
	.youshi{
		// position: relative;
		// top:8rpx;
	}
	.detailimgwrap img{
		position: relative;
		top:8rpx;
	}
	.servicecnt{
		margin-bottom:220rpx;
	}
	.baozhang{
		font-size:26rpx;
	}
	.haoping{
		color:#ff0000;
	}
	.goodsWrap{
		height:100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content:center; 
		margin-left:20rpx;
	}
	.guige{
		margin-bottom:50rpx;
	}
	.bukexuan{
		font-size:23rpx;
		color:#cccccc;
	}
</style>