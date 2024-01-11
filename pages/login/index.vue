<template>
	<view>
		<view class="item">
			<u--input placeholder="请输入您的登录账户" prefixIcon="account" prefixIconStyle="font-size: 22px;color: #909399"
				v-model="username" @change="change"></u--input>
		</view>
		<view class="item pwd">
			<u--input placeholder="请输入您的登录密码" border="surround" type="password" prefixIcon="lock"
				prefixIconStyle="font-size: 22px;color: #909399" v-model="password" @change="changePwd"></u--input>
		</view>
		<view class="item pwd" v-if="operateType == 2">
			<u--input placeholder="请输入您的确认密码" border="surround" type="password" prefixIcon="lock"
				prefixIconStyle="font-size: 22px;color: #909399" v-model="okPwd" @change="changePwd"></u--input>
		</view>
		<view class="item btn">
			<u-button type="primary" v-if="operateType==1" @tap="registerBtn(1)">立即登录</u-button>
			<u-button type="primary" v-if="operateType == 2" @tap="registerBtn(2)">立即注册</u-button>

		</view>
		<view class="item operateWrap">
			<text class="operate" @tap="findPwd">找回密码</text>
			<text class="operate" v-if="operateType == 1" @tap="registerOperate(1)">立即注册</text>
			<text class="operate" v-if="operateType == 2" @tap="registerOperate(2)">立即登录</text>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		register
	} from '@/config/api.js';
	export default {
		data() {
			return {
				operateType: 1, // 操作类型，1 登录，2注册
				username: "",
				password: "",
				okPwd: "", // 确认密码
			};
		},
		methods: {
			changePwd(){
				// if (this.password.length < 6 || this.okPwd.length < 6){
				// 	this.$refs.uToast.show({
				// 		type: "error",
				// 		message: "密码长度不能小于6位!"
				// 	});
				// }
			},
			findPwd() {
				uni.showModal({
					title: "提示",
					content: "重置密码请联系管理员：19355011215",
					success: function(res) {
						if (res.confirm) {

						} else {

						}

					}

				})
			},
			registerOperate(type) {
				let title = type == 1 ? "注册账号" : "登录账号";
				uni.setNavigationBarTitle({
					title: title
				})
				let newType = type == 1 ? 2 : 1;
				this.operateType = newType;
				if (type == 2){
					this.username = "";
					this.password = "";
				}
			},
			registerAjax(type) {
				register({
					type,
					username: this.username,
					password: this.password,
					okPwd: this.okPwd,
				}).then((result) => {
					let res = result.data;
					if (res.code == 0) {
						let tips = type == 1 ? "登录成功!" : "注册成功!";
						this.$refs.uToast.show({
							type: "success",
							message: tips
						});
						if (type == 2) {
							setTimeout(() => {
								uni.setNavigationBarTitle({
									title: "登录账号"
								});
								this.operateType = 1;
							}, 2000)
						} else {
							debugger;
							uni.setStorageSync("openid", res.data);
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/index/index',
								})
							}, 2000)
						}
					} else {
						let tips = type == 1 ? "登录失败" : "注册失败";
						this.$refs.uToast.show({
							type: "error",
							message: tips
						});
					}

				}).catch((err) => {})
			},
			registerBtn(type) {
				if (type == 2) {
					
					// 注册
					if (!this.username) {
						this.$refs.uToast.show({
							type: "error",
							message: "请输入登录用户名!"
						});
						return;
					};
					if (!this.password || !this.okPwd) {
						this.$refs.uToast.show({
							type: "error",
							message: "密码不能为空！"
						});
						return;
					};
					if (this.password.length < 6 || this.okPwd.length < 6){
						this.$refs.uToast.show({
							type: "error",
							message: "密码长度不能小于6位!"
						});
					};
					if (this.password != this.okPwd) {;
						this.$refs.uToast.show({
							type: "error",
							message: "两次密码输入不一致!"
						});
						return;
					};
					this.registerAjax(type);
				} else {
					// 登录
					if (!this.username || !this.password) {
						this.$refs.uToast.show({
							type: "error",
							message: "用户名/密码不能为空!"
						});
						return;
					}
					this.registerAjax(type);
				};

			},
		}
	}
</script>

<style lang="scss">
	.item {
		width: 85%;
		margin: 0 auto;
		margin-top: 20rpx;
	}

	.pwd {
		margin-top: 40rpx;
	}

	.btn {
		margin-top: 60rpx;
	}

	.operateWrap {
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.operate {
		font-size: 26rpx;
		color: #cccccc;

	}
</style>