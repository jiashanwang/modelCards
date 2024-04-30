<template>
	<view class="content">
		<view class="userInfo" @tap="bindGetUserInfo">
			<view class="user_img">
				<u-avatar :src="avatarUrl"></u-avatar>
			</view>
			<view class="loginTip noactive" @tap="login">{{ nickName }}</view>
		</view>
		<view class="u-flex vip-card u-p-l-40 u-p-r-30 u-p-b-30">
			<view class="u-m-r-10 u-flex-1 u-p-t-30">
				<text>商城尊享会员</text>
			</view>
			<view class="u-flex-1 u-p-t-30" style="text-align: right;">
				<text class="u-font-30 u-m-l-20 " v-if="nickName=='立即登录'">普通会员</text>
				<text class="u-font-30 u-m-l-20 " v-else>钻石会员</text>
			</view>
		</view>
		<view class="mid"> </view>
		<view class="user_content">
			<view class="orders_wrap myCenter">
				<view class="card-hader">
					<u-icon name="red-packet" size="26"></u-icon>
					<text class="u-m-l-20 titleItem">我的账户</text>
				</view>
				<u-line></u-line>
				<!-- 订单类型分类 -->
				<view class="orders_content">
					<view class="important-list">
							<!-- <view class="orderIcon">
								<text class="u-font-18">0</text>
								<view class="order_name">余额</view>
							</view> -->
							<view class="orderIcon">
								<text class="u-font-18">0</text>
								<view class="order_name">优惠券</view>
							</view>
							<view class="orderIcon">
								<text class="u-font-18">0</text>
								<view class="order_name">积分</view>
							</view>
					</view>
				</view>
			</view>
			<!--我的订单-->
			<view class="orders_wrap myCenter">
				<!-- <view class="orders_title">我的订单</view> -->
				<view class="card-hader">
					<u-icon name="order" size="26"></u-icon>
					<text class="u-m-l-20 titleItem">我的订单</text>
				</view>
				<u-line></u-line>
				<!-- 订单类型分类 -->
				<view class="orders_content">
					<view class="important-list">
						<u-grid :col="4" :border="false">
							<u-grid-item @tap="itemClick(0)">
								<u-icon name="red-packet" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">待付款</view>
							</u-grid-item>
							<u-grid-item @tap="itemClick(1)">
								<u-icon name="car" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">待发货</view>
							</u-grid-item>
							<u-grid-item @tap="itemClick(2)">
								<u-icon name="bag" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">待收货</view>
							</u-grid-item>
							<u-grid-item @tap="itemClick(1)">
								<u-icon name="trash" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">退款售后</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</view>
			<u-line></u-line>	
			<!--应用信息相关的-->
			<view class="myCenter">
				<view class="card-hader">
					<u-icon name="grid" size="26"></u-icon>
					<text class="u-m-l-20 titleItem">我的服务</text>
				</view>
				<u-line></u-line>
				<view class="orders_content">
					<view class="important-list">
						<u-grid :col="4" :border="false">
							<u-grid-item>
								<u-icon name="star" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">我的收藏</view>
							</u-grid-item>
							<u-grid-item>
								<u-icon name="map" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">地址管理</view>
							</u-grid-item>
							<u-grid-item>
								<u-icon name="share" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">分销中心</view>
							</u-grid-item>
							<u-grid-item>
								<u-icon name="share-square" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">分享</view>
							</u-grid-item>
							<u-grid-item @tap="telClick">
								<u-icon name="kefu-ermai" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">联系我们</view>
							</u-grid-item>
							<u-grid-item @tap="myCardListClick">
								<u-icon name="shopping-cart" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">私人定制</view>
							</u-grid-item>
							<u-grid-item @tap="mySetClick">
								<u-icon name="setting" size="28"></u-icon>
								<view class="grid-text u-font-10 u-m-t-10">设置</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
				<u-line></u-line>
			</view>
			<view class="icpWrap">
				<view class="icp">鄂ICP备2024038373号-1</view>
				<view>商城客服：15570403215</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "个人用户",
				breakTime: false, // true 客服休息时间 false 客服正常营业
				/* =========授权登陆改造======= */
				avatarUrl: "https://cdn.uviewui.com/uview/album/2.jpg", // 用户头像
				nickName: "立即登录",
				userInfo: null, // 用户信息  是否为null 来判断用户是否点击登陆
				// 商品类型1大牌卡劵2手机充值3油卡充值4水费充值5电费充值 后台数据库约定好的，不要随意做改动
				busTypeList: [{
						key: "bigCard",
						name: "待支付",
						productType: 1, //商品类型
						url: "/pages/orderList/index?title=bigCard&name=缤纷卡劵&type=1",
						imgUrl: "../../static/nopay.png",
					},
					{
						key: "bigCard",
						name: "待发货",
						productType: 1, //商品类型
						url: "/pages/orderList/index?title=bigCard&name=缤纷卡劵&type=1",
						imgUrl: "../../static/readySend.png",
					},
					{
						key: "bigCard",
						name: "已完成",
						productType: 1, //商品类型
						url: "/pages/orderList/index?title=bigCard&name=缤纷卡劵&type=1",
						imgUrl: "../../static/complete.png",
					},
				],
				contactFlag: false,
				animationData: {},
				pic: 'https://uviewui.com/common/logo.png',
			}
		},
		onLoad(options) {
			let openid = uni.getStorageSync("openid");
			this.nickName = openid ? openid : "立即登录";
		},
		methods: {
			mySetClick(){
				// 清除本地缓存
				uni.clearStorage({
				    success(res) {
						uni.showToast({
							title: '清除缓存成功',
							//将值设置为 success 或者直接不用写icon这个参数
							icon: 'success',
							//显示持续时间为 2秒
							duration: 2000
						})  

				    },
				    fail(err) {
				    }
				});
			},
			// 我的奖励
			myCurrencyClick() {
				uni.navigateTo({
					url: '/pages/myCurrency/index',
				})
			},
			telClick() {
				uni.showModal({
					title: "提示",
					content: "客服电员：13270117781（微信同号）",
					success: function(res) {
						if (res.confirm) {

						} else {

						}

					}

				})
			},
			login() {
				uni.navigateTo({
					url: "/pages/login/index",
				});
			},
			// 我的劵包点击事件
			myCardListClick() {
				uni.navigateTo({
					url: '/pages/myCard/index',
				})
			},
			itemClick(index) {
				uni.switchTab({
					url: '/pages/orderList/index'
				})
			},
		}
	}
</script>
<style>
	.iconimg .u-icon__icon {
		color: #f6e5a3 !important;
	}
</style>

<style lang="scss">
	.order_name {
		margin-top: 10rpx;
	}

	.orderIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.userInfo {
		height: 260rpx;
		padding-top: 30rpx;
		position: relative;
		// background-image: url("http://aaa.itgy.com.cn/images/changhebgimg.jpeg");
		background-image: linear-gradient(90deg, rgb(42, 132, 255), rgb(234, 175, 200));
		background-size: 100% 100%;
		/*按比例缩放*/
		background-repeat: no-repeat;
		/*还有repeat-x,y等*/
		width: 100%;
	}

	.getUserInfoBtn {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
	}

	.user_img {
		margin-top: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
		// top:-10rpx;
	}

	.noactive {
		color: #ffffff;
		text-align: center;
		margin-top: 10rpx;
		font-size: 28rpx;
	}

	.user_img .btn {
		position: absolute;
		width: 100rx;
		height: 100rpx;
		border-radius: 50%;
		opacity: 0;
	}

	.user_img .img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.mid {
		background-color: var(--backgroundColor);
		height: 10rpx;
	}

	.mid1 {
		background-color: var(--backgroundColor);
		height: 10rpx;
	}

	.user_content {
		// padding-bottom: 100rpx;
		margin: 30rpx;
		position: relative;
		top:-60rpx;
	}

	.orders_wrap {
		background-color: #ffffff;
	}

	.orders_title {
		padding: 20rpx;
		border-bottom: 1rpx solid var(--lineColor);
	}

	.orders_content {
		display: flex;
		padding-top: 36rpx;
		padding-bottom:36rpx;
	}

	.important-list {
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;

	}

	.more-order-types {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.more-wrap {
		width: 180rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		border-left: 1rpx solid #eeeeee;
		color: #A3A3A3;
	}

	.orders_content navigator {
		flex: 1;
		text-align: center;
		padding: 15rpx 0;
		position: relative;
	}

	.orders_content .img {
		width: 70rpx;
		height: 60rpx;
		margin-top: 10rpx;
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
		color: var(--commentColor);
		padding: 10rpx;
	}

	.maskContent .peisongyuan,
	.maskContent .zhanzhang {
		margin: 10rpx 0;
		background-color: rgba(204, 204, 204, 0.3);
		border-radius: 10rpx;
		padding: 10rpx 18rpx;
	}

	.maskContent .active {
		background-color: rgba(235, 68, 80, 0.5);
		color: #ffffff;
	}

	.maskContent .title {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 20rpx;
		font-size: 32rpx;

	}

	.maskContent .desc {
		margin: 20rpx 0 30rpx 0;
		font-size: 28rpx;
		color: var(--commentColor);
		display: flex;
		font-size: 30rpx;
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
		letter-spacing: 2rpx;
	}

	.makePhoneOperate {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 30rpx;
		border-top: 1rpx dashed var(--lineColor);
	}

	.makePhoneOperate .btn {
		color: #ffffff;
		background-color: #67c23a;
		opacity: 0.8;
		border-radius: 10rpx;
		padding: 10rpx 15rpx;
		color: #ffffff;
		letter-spacing: 2rpx;
	}

	.maskContent .stepDesc {
		border-top: 1rpx dashed var(--lineColor);
		margin-top: 10rpx;
	}

	.makePhoneOperate .btn1 {
		color: #ffffff;
		background-color: #66b1ff;
		opacity: 0.8;
	}

	.closeStepImg {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: -160rpx;
		right: 0rpx;
		left: 0rpx;
	}

	.closeStepImg .close1 {
		width: 80rpx;
		height: 80rpx;
		font-size: 80rpx;
		color: #ffffff;
		padding: 30rpx;
	}

	.titleCode {
		border-bottom: 1rpx dashed var(--lineColor);
	}

	.qrCode {
		margin: 30rpx 20rpx;
	}

	.myCenter {
		background-color: #ffffff;
		margin: 0 auto;
		margin-top: 30rpx;
	}

	.kefuitem button {
		text-align: left;
		padding: 0;
		margin: 0;
		padding: 20rpx;
		margin: 0rpx;
		width: 100%;
	}

	.kefu {
		flex: auto;
	}

	.myCenter .img {
		width: 40rpx;
		height: 40rpx;
	}

	.myCenter .item {
		margin: 0rpx 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;

	}

	.myCenter .item .img {
		width: 60rpx;
		height: 60rpx;
		margin-left: 20rpx;
	}

	.img_cnt .title {
		margin-left: 20rpx;
		font-size: 32rpx;
	}

	.img_cnt {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.item button {
		border: none !important;
		font-size: 32rpx;
		font-weight: normal;
	}

	.contact-me {
		background-color: #ffffff;
		margin: 0 !important;
		flex: auto;
		padding-left: 21rpx !important;
	}

	.contact {
		width: 50rpx;
		text-align: right;
	}

	/* 设置背景遮罩层样式 */
	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 80;
		background: rgba(0, 0, 0, 0.4);
	}

	.contact-box {
		width: 80%;
		height: 760rpx;
		position: fixed;
		left: 0;
		top: 250rpx;
		right: 0;
		background-color: #fff;
		margin: 0 auto;
		z-index: 98;
		border-radius: 25rpx;
	}

	.contact-box .img {
		border-radius: 25rpx !important;
	}

	.contact-operate {
		padding-bottom: 60rpx;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.contact-operate .btn {
		width: 40%;
		height: 76rpx;
		line-height: 76rpx;
		border-radius: 38rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #b5b5b5;
		border: 1rpx solid #b5b5b5;
	}

	.contact-operate .make-phone {
		border: none;
		color: #ffffff;
		background: linear-gradient(to right, #fdb208, #f97b04);
	}

	.kefu-phone {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40rpx;
	}

	.kefu-phone .img {
		width: 50rpx;
		height: 50rpx;
		margin-right: 15rpx;
	}

	.kefu-phone .phone-no {
		font-weight: bold;
		font-size: 34rpx;
	}

	.work-desc {
		width: 70%;
		text-align: center;
		margin: 0 auto;
		color: #b5b5b5;
		margin-bottom: 60rpx;
	}

	.content {
		background-color: #F8F8F8;
	}

	.logoIcon {
		width: 148rpx;
		height: 148rpx;
		background-color: transparent;
		border-radius: 500rpx;
		;
		position: relative;
		left: 80rpx;
		top: 20rpx;
	}

	.vip-card {
		background-image: url(../../static/vip-card.png);
		background-size: cover;
		color: #f6e5a3;
		width: 86vw;
		position: relative;
		top: -48upx;
		margin: 0 auto;
		
	}

	.u-flex {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.u-flex-1 {
		flex: 1;
	}

	.u-p-l-40 {
		padding-left: 40rpx !important;
	}

	.u-p-r-30 {
		padding-right: 30rpx !important;
	}

	.u-p-b-30 {
		padding-bottom: 20rpx !important;
	}

	.u-m-r-10 {
		margin-right: 10rpx !important;
	}

	.u-p-t-30 {
		padding-top: 20rpx !important;
	}

	.u-m-r-20 {
		margin-right: 20rpx !important;
	}

	.u-font-30 {
		font-size: 20rpx !important;
	}

	.u-m-l-20 {
		margin-left: 20rpx !important;
	}

	.card-hader {
		display: flex;
		justify-content:flex-start;
		// text-align: left;
		// width: 92vw;
		// margin: 0 500upx;
		padding: 15upx 20upx;
		background-color: #FFFFFF;
		// border: 1upx solid #FDF6EC;
	}

	.card-body {
		width: 92vw;
		margin: 0 500upx;
		padding: 15upx 20upx;
		background-color: #FFFFFF;
		border: 1upx solid #FDF6EC;
		border-top: none;
	}
	.u-font-18{
		font-size:34rpx;
	}
	.titleItem{
		position: relative;
		top:4rpx;
		left:-10rpx;
	}
	.u-grid{
		width: 100%;
		    display: flex;
		    flex-direction: row;
		    flex-wrap: wrap;
		    align-items: center;
			justify-content: space-around;
	}
	.grid-text{
		margin-bottom:30rpx;
	}
	.icpWrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top:30rpx;
		align-items: center;
		font-size:24rpx;
		color:#999999;
	}
	.icp{
		margin-bottom:20rpx;
	}
	
</style>