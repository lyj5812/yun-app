<template>
  <view class="u-demo">
    <view class="u-demo-wrap" style="background-color: #FFFFFF;">
      <view class="u-demo-title">演示效果</view>
      <view class="u-demo-area">
        <u-field
          v-model="mobile"
          label="手机号"
          :error-message="errorMessage"
          placeholder="请填写手机号"
          :required="required"
          :icon="icon1"
          :type="type"
        />
        <u-field
          v-model="code"
          label="验证码"
          placeholder="请填写验证码"
          :required="required"
          :icon="icon2"
        >
          <u-button v-if="showBtn" slot="right" size="mini" type="success">发送验证码</u-button>
        </u-field>
      </view>
    </view>
    <view class="u-config-wrap">
      <view class="u-config-title u-border-bottom">
        参数配置
      </view>
      <view class="u-config-item">
        <view class="u-item-title">右侧按钮</view>
        <u-subsection vibrate-short current="1" :list="['是', '否']" @change="showBtnChange" />
      </view>
      <view class="u-config-item">
        <view class="u-item-title">显示错误信息</view>
        <u-subsection vibrate-short current="1" :list="['是', '否']" @change="errorMessageChange" />
      </view>
      <view class="u-config-item">
        <view class="u-item-title">是否必填</view>
        <u-subsection vibrate-short current="1" :list="['是', '否']" @change="requiredChange" />
      </view>
      <view class="u-config-item">
        <view class="u-item-title">显示左图标和右箭头</view>
        <u-subsection vibrate-short current="1" :list="['是', '否']" @change="customChange" />
      </view>
      <view class="u-config-item">
        <view class="u-item-title">第一个输入框为textarea类型</view>
        <u-subsection vibrate-short current="1" :list="['是', '否']" @change="textareaChange" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      mobile: '',
      code: '',
      errorMessage: '',
      required: false,
      placeholderColor: this.$u.color['tipsColor'],
      arrow: false,
      showBtn: false,
      icon1: '',
      icon2: '',
      type: 'text'
    }
  },
  methods: {
    showBtnChange(index) {
      this.showBtn = index == 0
    },
    errorMessageChange(index) {
      this.errorMessage = index == 0 ? '手机号有误' : false
    },
    requiredChange(index) {
      this.required = index == 0
    },
    customChange(index) {
      if (index == 0) {
        this.icon1 = 'map'
        this.icon2 = 'photo'
        this.arrow = true
      } else {
        this.icon1 = ''
        this.icon2 = ''
        this.arrow = false
      }
    },
    textareaChange(index) {
      this.type = index == 0 ? 'textarea' : 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
  /* #ifndef APP-NVUE */
  view,
  text {
    box-sizing: border-box;
  }
  /* #endif */

  /* start--演示页面使用的统一样式--start */
  .u-demo {
    padding: 50rpx 40rpx;
  }

  .u-demo-wrap {
    border-width: 1px;
    border-color: #ddd;
    border-style: dashed;
    background-color: rgb(250, 250, 250);
    padding: 40rpx 20rpx;
    border-radius: 6px;
  }

  .u-demo-area {
    text-align: center;
  }

  .u-no-demo-here {
    color: $u-tips-color;
    font-size: 26rpx;
  }

  .u-demo-result-line {
    border-width: 1px;
    border-color: #ddd;
    border-style: dashed;
    padding: 10rpx 40rpx;
    margin-top: 30rpx;
    border-radius: 5px;
    background-color: rgb(240, 240, 240);
    color: $u-content-color;
    font-size: 32rpx;
    /* #ifndef APP-NVUE */
    word-break: break-word;
    display: inline-block;
    /* #endif */
    text-align: left;

  }

  .u-demo-title,
  .u-config-title {
    text-align: center;
    font-size: 32rpx;
    font-weight: bold;
    margin-bottom: 40rpx;
  }

  .u-config-item {
    margin-top: 50rpx;
  }

  .u-config-title {
    margin-top: 40rpx;
    padding-bottom: 10rpx;
  }

  .u-item-title {
    position: relative;
    font-size: 28rpx;
    padding-left: 8px;
    line-height: 1;
    margin-bottom: 22rpx;
  }

  .u-item-title:after {
    position: absolute;
    width: 4px;
    top: -1px;
    height: 16px;
    /* #ifndef APP-NVUE */
    content: '';
    /* #endif */
    left: 0;
    border-radius: 10px;
    background-color: $u-content-color;
  }
  /* end--演示页面使用的统一样式--end */

</style>
