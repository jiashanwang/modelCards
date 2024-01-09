<template>
	<view>
		<view class="item">
			<u--input
			  placeholder="请输入您的登录账户"
			  prefixIcon="account"
			  prefixIconStyle="font-size: 22px;color: #909399"
			  v-model="value"
			  @change="change"
			></u--input>
		</view>
		<view class="item pwd">
			<u--input
			  placeholder="请输入您的登录密码"
			  border="surround"
			  prefixIcon="lock"
			  prefixIconStyle="font-size: 22px;color: #909399"
			  v-model="value"
			  @change="change"
			></u--input>
		</view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.item{
		width:85%;
		margin:0 auto;
		margin-top:20rpx;
	}
	.pwd{
		margin-top:40rpx;
	}
</style>
