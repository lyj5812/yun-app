<template>
  <view>
    <scroll-view scroll-y class="page">
      <view class="bg-gradual-purple pt-1 text-center bar">
        <view class="cu-avatar-group padding-bottom-lg">
          <image class="cu-avatar avatar round lg mt-5" :src="avatar" />
        </view>
        <view class="text-lg mt-n1">{{ name }}</view>
      </view>
      <view class="radius shadow shadow-lg bg-white margin mt-n4">
        <view class="cu-card case">
          <view class="cu-item shadow">
            <view class="image">
              <image
                src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
                mode="widthFix"
              />
              <view class="cu-tag bg-blue">史诗</view>
              <view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view>
            </view>
            <view class="cu-list menu-avatar">
              <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);" />
                <view class="content flex-sub">
                  <view class="text-grey">正义天使 凯尔</view>
                  <view class="text-gray text-sm flex justify-between">
                    十天前
                    <view class="text-gray text-sm">
                      <text class="cuIcon-attentionfill margin-lr-xs" /> 10
                      <text class="cuIcon-appreciatefill margin-lr-xs" /> 20
                      <text class="cuIcon-messagefill margin-lr-xs" /> 30
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="nav-list" />
      <view class="cu-tabbar-height" />
    </scroll-view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      avatar: 'user/avatar',
      name: 'user/name'
    })
  }
}
</script>

<style>
    .bar {
        height: 400upx;
    }

    .avatar{
        width: 120upx !important;
    }

</style>
