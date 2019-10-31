<template>
  <view>
    <cu-custom bg-color="bg-gradual-pink" :is-back="true"><block slot="backText">返回</block><block slot="content">步骤条</block></cu-custom>
    <view class="cu-bar bg-white solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 基本用法
      </view>
      <view class="action">
        <button class="cu-btn bg-green shadow" @tap="BasicsSteps">下一步</button>
      </view>
    </view>
    <view class="bg-white padding">
      <view class="cu-steps">
        <view v-for="(item,index) in basicsList" :key="index" class="cu-item" :class="index>basics?'':'text-red'">
          <text :class="'cuIcon-' + item.cuIcon" /> {{ item.name }}
        </view>
      </view>
    </view>

    <view class="bg-white padding margin-top-xs">
      <view class="cu-steps">
        <view v-for="(item,index) in basicsList" :key="index" class="cu-item" :class="index>basics?'':'text-orange'">
          <text :class="index>basics?'cuIcon-title':'cuIcon-' + item.cuIcon" /> {{ item.name }}
        </view>
      </view>
    </view>

    <view class="bg-white padding  margin-top-xs">
      <view class="cu-steps steps-arrow">
        <view v-for="(item,index) in basicsList" :key="index" class="cu-item" :class="index>basics?'':'text-blue'">
          <text :class="'cuIcon-' + item.cuIcon" /> {{ item.name }}
        </view>
      </view>
    </view>
    <view class="cu-bar bg-white solid-bottom margin-top">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 数字完成
      </view>
      <view class="action">
        <button class="cu-btn bg-green shadow" @tap="NumSteps">下一步</button>
      </view>
    </view>
    <view class="bg-white padding">
      <view class="cu-steps">
        <view v-for="(item,index) in numList" :key="index" class="cu-item" :class="index>num?'':'text-blue'">
          <text class="num" :class="index==2?'err':''" :data-index="index + 1" /> {{ item.name }}
        </view>
      </view>
    </view>
    <view class="cu-bar bg-white solid-bottom margin-top">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 多级显示
      </view>
      <view class="action">
        <button class="cu-btn bg-green shadow" @tap="ScrollSteps">下一步</button>
      </view>
    </view>
    <scroll-view
      scroll-x
      class="bg-white padding response cu-steps steps-bottom"
      :scroll-into-view="'scroll-' + scroll"
      scroll-with-animation
    >
      <view v-for="(item,index) in 10" :id="'scroll-' + index" :key="index" class="cu-item padding-lr-xl" :class="index>scroll?'':'text-blue'">
        Level {{ index + 1 }} <text class="num" :data-index="index + 1" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      basicsList: [{
        cuIcon: 'usefullfill',
        name: '开始'
      }, {
        cuIcon: 'radioboxfill',
        name: '等待'
      }, {
        cuIcon: 'roundclosefill',
        name: '错误'
      }, {
        cuIcon: 'roundcheckfill',
        name: '完成'
      }],
      basics: 0,
      numList: [{
        name: '开始'
      }, {
        name: '等待'
      }, {
        name: '错误'
      }, {
        name: '完成'
      }],
      num: 0,
      scroll: 0
    }
  },
  methods: {
    BasicsSteps() {
      this.basics = this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1
    },
    NumSteps() {
      this.num = this.num == this.numList.length - 1 ? 0 : this.num + 1
    },
    ScrollSteps() {
      this.scroll = this.scroll == 9 ? 0 : this.scroll + 1
    }
  }
}
</script>

<style>

</style>
