<template>
	<view>
		<view class="myCurrency">
		  <view class="total">
		    <view class="remain">账户余额</view>
		    <view class="num">{{ total }} 元</view>
		  </view>
		  <view class="currencyDesc">
		    <view class="howGet common">如何赚取佣金？</view>
			<view class="getDesc common"
			  >购买任意卡劵类商品，即可获得下单金额的<text class="nums"> 1%-10%</text>返佣
			  </view
			>
		   <!-- <view class="getDesc common"
		      >1.分享好友，首次下单，获得下单金额的<text class="nums"> 15% </text>返佣
		      </view
		    > -->
		<!--    <view class="getDesc common"
		      >2.分享好友，非首次下单，获得下单金额的<text class="nums"> 3% </text>返佣</view
		    >
		    <view class="getDesc common"
		    >3.自己累积推广<text class="nums"> 5 </text>个新用户首次下单，即可享受平台所有商品的<text class="nums"> 3% </text>返佣</view
		  >
		  <view class="getDesc common"
		    >4.每推荐一个楼长，可享受推荐楼长一学期销售额的<text class="nums"> 2% </text>提成（不局限于本校，可以是其他学校）</view
		  > -->
		  <view class="howUse common">如何使用佣金?</view>
		    <view class="userDesc1 common">
		    1.佣金累计达到<text class="nums"> 50 </text>元 即可提现</view>
		    <view class="userDesc common"
		      >2.点击下方提现按钮，自动提现到微信零钱</view
		    >
		  </view>
		  <view class="operate">
		    <view class="freeGet" @click="pickMoneyClick">提现</view>
		    <!-- <button open-type="share" class="shareFriend">邀请好友</button> -->
		  </view>
		</view>
		<!--提现打款 -->	
		<view class="mask" v-if="flag">
		  <view class="maskContent">
		    <view class="title">联系管理员</view>
		    <view class="adminDesc">自动提现功能暂未开通</view>
		    <view class="adminDesc1">请添加管理员微信进行手动打款</view>
		    <view class="desc">
		      <view class="descTitle">微信 :</view>
		      <view class="descCnt">{{platAdminPhone}}</view>
		    </view>
		    <view class="makePhoneOperate">
		      <button size="mini" type="primary" @click="closeModel">关闭</button>
		      <!-- <i class="iconfont icon-chacha close" @click="closeModel"></i> -->
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total:0,
				flag:false,
				platAdminPhone:"yutingwen1215"
			};
		},
		methods:{
			pickMoneyClick(){
				this.flag = true;
			},
			closeModel(){
				this.flag = false;
			},
		},
		
	}
</script>

<style lang="scss">
.total {
  margin: 30rpx 30rpx 0 30rpx;
  height: 220rpx;
  text-align: center;
  border-radius: 10rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 36rpx;
  background-image: linear-gradient(to right, #e93b3d, #ff9831);
}
.remain {
  margin-bottom: 10rpx;
}
.currencyDesc,.operate {
  width: 100%;
  margin: 56rpx 30rpx 30rpx 30rpx;
}
.currencyDesc .nums {
  font-weight:bold;
  color:#D81E06;
}
.currencyDesc .common {
  text-align: left;
}
.currencyDesc{
  margin-right:30rpx;
}
.howUse,.howGet {
  font-size: 36rpx;
  margin-bottom: 30rpx;
  font-weight: 500;
}
.howUse{
  margin-top:50rpx;
}
.userDesc {
  font-size: 28rpx;
  margin-bottom: 60rpx;
}
.userDesc1 {
  margin-bottom: 20rpx;
}
.getDesc {
  font-size: 28rpx;
  margin-bottom: 26rpx;
}
.freeGet {
  width: 240rpx;
  width:90%;
  margin:0 auto;
  margin-right: 29rpx;
  
  height: 92rpx;
  font-size: 32rpx;
  color:#D81E06;
  border: 1px solid rgba(216, 30, 6, 1);
  text-align: center;
  line-height: 92rpx;
  border-radius: 15rpx;
  float: left;
}
.shareFriend {
  width: 420rpx;
  height: 92rpx;
  color: #ffffff;
  font-size: 32rpx;
  background-color: #D81E06;
  text-align: center;
  line-height: 92rpx;
  border-radius: 15rpx;
  float: left;
  padding: 0;
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
  color:#D81E06;
  padding: 10rpx;
}

.maskContent .title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rpx;
}

.maskContent .desc {
  margin: 10rpx 0rpx;
  font-size: 28rpx;
   color:#D81E06;
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
  letter-spacing: 2rpx;
}

.makePhoneOperate {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30rpx;
  border-top: 1rpx dashed #F0F0F0;
}
.makePhoneOperate button{
  color:#ffffff;
  background-color: #D81E06;;
  opacity: 0.8;
}
.adminDesc {
  text-align: center;
  padding-bottom: 15rpx;
  color: #D81E06;;
  font-size:24rpx;
}
.adminDesc1{
  text-align: center;
  border-bottom: 1rpx dashed #F0F0F0;
  padding-bottom: 20rpx;
}
</style>
