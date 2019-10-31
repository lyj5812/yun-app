<template>
  <view>
    <cu-custom bg-color="bg-gradual-pink" :is-back="true"><block slot="backText">返回</block><block slot="content">导航栏</block></cu-custom>
    <view v-for="(item,index) in 10" v-if="index==TabCur" :key="index" class="bg-grey padding margin text-center">
      Tab{{ index }}
    </view>
    <view class="cu-bar bg-white solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 默认
      </view>
    </view>
    <scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
      <view v-for="(item,index) in 10" :key="index" class="cu-item" :class="index==TabCur?'text-green cur':''" :data-id="index" @tap="tabSelect">
        Tab{{ index }}
      </view>
    </scroll-view>

    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 居中
      </view>
    </view>
    <scroll-view scroll-x class="bg-white nav text-center">
      <view v-for="(item,index) in 3" :key="index" class="cu-item" :class="index==TabCur?'text-blue cur':''" :data-id="index" @tap="tabSelect">
        Tab{{ index }}
      </view>
    </scroll-view>

    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 平分
      </view>
    </view>
    <scroll-view scroll-x class="bg-white nav">
      <view class="flex text-center">
        <view v-for="(item,index) in 4" :key="index" class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" :data-id="index" @tap="tabSelect">
          Tab{{ index }}
        </view>
      </view>
    </scroll-view>
    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 背景
      </view>
    </view>
    <scroll-view scroll-x class="bg-red nav text-center">
      <view v-for="(item,index) in 3" :key="index" class="cu-item" :class="index==TabCur?'text-white cur':''" :data-id="index" @tap="tabSelect">
        Tab{{ index }}
      </view>
    </scroll-view>
    <view class="cu-bar bg-white margin-top solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange" /> 图标
      </view>
    </view>
    <scroll-view scroll-x class="bg-green nav text-center">
      <view class="cu-item" :class="0==TabCur?'text-white cur':''" data-id="0" @tap="tabSelect">
        <text class="cuIcon-camerafill" /> 数码
      </view>
      <view class="cu-item" :class="1==TabCur?'text-white cur':''" data-id="1" @tap="tabSelect">
        <text class="cuIcon-upstagefill" /> 排行榜
      </view>
      <view class="cu-item" :class="2==TabCur?'text-white cur':''" data-id="2" @tap="tabSelect">
        <text class="cuIcon-clothesfill" /> 皮肤
      </view>
    </scroll-view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      TabCur: 0,
      scrollLeft: 0
    }
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
    }
  }
}
</script>

<style>

</style>
