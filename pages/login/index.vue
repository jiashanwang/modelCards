<template>
	<view>
		<view class="item">
			<u--input :placeholder="placeholder" prefixIcon="account" prefixIconStyle="font-size: 22px;color: #909399"
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
			<!-- <u-button type="primary" v-if="operateType == 2" @tap="registerBtn(2)">立即注册</u-button> -->
			<u-button type="primary" v-if="operateType == 2" @tap="registerBtnNew(2)">立即注册</u-button>

		</view>
		<view class="item operateWrap">
			<text class="operate" @tap="findPwd">找回密码</text>
			<text class="operate" v-if="operateType == 1" @tap="registerOperate(1)">立即注册</text>
			<text class="operate" v-if="operateType == 2" @tap="registerOperate(2)">立即登录</text>
		</view>
		<u-toast ref="uToast"></u-toast>
		<u-modal :show="show"  :title="title" confirm-text="同意" @confirm="onConfirm">
					<!-- <view class="slot-content">
						<rich-text :nodes="content"></rich-text>
					</view> -->
					 <view style="height: 1000rpx; overflow-y: auto;">
					        <!-- 这里是很长的内容... -->
							{{content}}
					      </view>
				</u-modal>
	</view>
</template>

<script>
	import {
		register
	} from '@/config/api.js';
	export default {
		data() {
			return {
				placeholder:"请输入您的登录账户",
				operateType: 1, // 操作类型，1 登录，2注册
				username: "",
				password: "",
				okPwd: "", // 确认密码
				show:false,
				title:'用户隐私协议',
				content:`			我们致力于保护您在使用我们网站时所提供的私隐、私人资料以及个人的资料(统称“个人资料”)，使我们在收集、使用、储存和传送个人资料方面符合(与个人资料私隐有关的法律法规)及消费者保护方面的最高标准。为确保您对我们在处理个人资料上有充分信心，您切要详细阅读及理解隐私政策的条文。
			特别是您一旦使用我们的网站，将被视为接受、同意、承诺和确认;您在自愿下连同所需的同意向我们披露个人资料;您会遵守本隐私政策的全部条款和限制:您在我们的网站上作登记、资料会被收集;您同意日后我们对隐私政策的任何修改;您同意我们的分公司、附属公司、雇员、就您可能会感兴趣的产品和服务与您联络(除非您已经表示不想收到该等讯息)。被收集的个人资料的种类经您的同意，我们会收集、管理和监控个人资料。
<br>为了向您提供我们的各项服务，您需要提供个人资料信息，其中包括个人资料和不具名的资料，包括但不限于:个人资料(您的姓名、性别、年龄、出生日期、电话号码、传真号码、住址或通讯地址、电子邮箱地址)。
			收集个人资料及不具名的资料的目的及用途如下:通过我们的网站向您提供我们的各项服务;当您使用我们的网站时，能辨认以及确认您的身份;让您使用我们的网站时得到为您而设的服务;我们的顾客服务人员有需要时可以与您联系:统计我们网站使用量的数据;让您在使用我们网站时更方便;为改进我们的产品、服务及网站内容而进行市场研究调查;为我们搞的活动、市场销售和推广计划收集资料;遵守法律、政府和监管机关的规定，包括但不限于对个人资料披露及通知的规定;就我们提供的各项服务、分析、核对或审查您的信用、付款或地位:处理在您要求下的任何付款指示，直接扣帐或信用安排;使您能运作您的账户以及使我们能从账户支取尚欠的服务费;您提供给我们的个人资料及不具名资料只保留到搜集的目的已达到的时候，除非应适用的法律法规之规定而继续保留。个人资料的拥有权及披露在我们网站上所搜集的一切资料都由我们所拥有，不会出租或出售给任何无关的第三方。您有权:查询我们是否持有您的任何个人资料;接达我们所持有的您的个人资料;要求我们更正任何不正确的个人资料;不时地征询有关我们所持有的个人资料的性质，政策和执行方法;然而在法律允许的极端有限的情况下，我们可以不允许您接达您的个人资料,例如:如您接达及得到您个人资料可能会对您有危险:当您的个人资料可能会影响一项正在进行的调查;当您的个人资料涉及到法庭程序,并且可能受到发现的限制;当您的个人资料涉及一项商业上敏感的决策过程;当另外一個人的个人资料也包含在同一份记录中;若您欲接达或更正个人资料或索取有关个人资料的政策、执行方法和被持有的个人资料的种类，应致函到我们的下列的地址;要求接达或更正资料可能要付合理的处理费用;安全保管您的密码，除了我们致力确保您的个人资料存放和处理的安全外，您不应向任何人披露您的登录密码或帐户资料，以保护您的个人资料。<br>每当您登录我们网站时,尤其是当您使用他人的电脑或者是公共的互联网终端机时，请记着操作完毕后一定要点击退出。
			您的努力和协助对于我们保护您的个人资料绝对有帮助
`
			};
		},
		methods: {
			registerBtnNew(){
				this.show = true;
			},
			changePwd(){
				// if (this.password.length < 6 || this.okPwd.length < 6){
				// 	this.$refs.uToast.show({
				// 		type: "error",
				// 		message: "密码长度不能小于6位!"
				// 	});
				// }
			},
			onConfirm(){
				this.show = false;
				this.registerBtn(2);
			},
			findPwd() {
				uni.showModal({
					title: "提示",
					content: "重置密码请联系管理员：19814793205",
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
				if (newType == 1){
					this.placeholder="请输入您的登录账户";
				}else{
					this.placeholder = "请输入您的手机号码";
				};
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
				debugger;
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
						return;
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