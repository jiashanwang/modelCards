<template>
	<view>
		<view class="userInfo" @tap="bindGetUserInfo">
			<view class="user_img">
				<u-avatar :src="avatarUrl"></u-avatar>
			</view>
			<view class="loginTip noactive" @tap="login">{{ nickName }}</view>
		</view>
		<view class="mid"> </view>
		<view class="user_content">
			<!--我的订单-->
			<view class="orders_wrap">
				<view class="orders_title">我的订单</view>
				<u-line></u-line>
				<!-- 订单类型分类 -->
				<view class="orders_content">
					<view class="important-list">
						<block v-for="(item,index) in busTypeList" :key="index">
							<view class="orderIcon" @tap="buyTypeClick(index)">
								<u--image :showLoading="true" :src="item.imgUrl" width="35px" height="40px"></u--image>
								<view class="order_name">{{item.name}}</view>
							</view>
						</block>
					</view>
					<view class="more-order-types">
						<view class="more-wrap">
							<view class="more-order" @tap="buyTypeClick">全部订单</view>
							<i class="iconfont icon-jinrujiantou"></i>
						</view>
					</view>
				</view>
			</view>
			<!-- <u-line></u-line> -->
			<!--应用信息相关的-->
			<view class="myCenter">
				<view class="orders_title">个人中心</view>
				<!-- 我的卷包 -->
				<view class="item myCard" @tap="myCardListClick">
					<view class="img_cnt" >
						<!-- <image class="img" src="/static/wodekabao.png"></image> -->
						<u-icon name="order" size="36" color="#00a9f1"></u-icon>
						<view class="title">我的卡劵</view>
					</view>
				</view>
				<u-line></u-line>
				<view class="item myCard" @tap="telClick">
					<view class="img_cnt">
						<u-icon name="phone" size="36" color="#00a9f1"></u-icon>
						<view class="title">售后电话</view>
					</view>
				</view>
			<!-- 	<u-line></u-line>
				<view class="item myCard" @tap="myCardListClick">
					<view class="img_cnt">
						<u-icon name="question" size="34" color="#ff9900"></u-icon>
						<view class="title">常见问题</view>
					</view>
				</view> -->
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
			}
		},
		onLoad(options) {
			let openid = uni.getStorageSync("openid");
			this.nickName = openid?openid:"立即登录";
		},
		methods: {
			telClick(){
				uni.showModal({
					title: "提示",
					content: "请拨打人工客服电员：19355011215",
					success: function(res) {
						if (res.confirm) {
				
						} else {
				
						}
				
					}
				
				})
			},
			login(){
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
			buyTypeClick(index) {
				uni.switchTab({
					url: '/pages/orderList/index'
				})
			},
		}
	}
</script>

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
		height: 220rpx;
		padding-top: 30rpx;
		position: relative;
		background-image: url("https://www.atwillpay.cn/images/changhebgimg.jpeg");
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
		padding-bottom: 100rpx;
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
		padding-top: 20px;
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
</style>