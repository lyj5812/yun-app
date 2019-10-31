<template name="basics">
  <view>
    <scroll-view scroll-y class="page">
      <image
        src="/static/BasicsBg.png"
        mode="widthFix"
        class="response"
      />
      <view class="nav-list">
        <navigator
          v-for="(item,index) in elements"
          hover-class="none"
          :key="index"
          :url="'/pages/basics/' + item.name"
          class="nav-li"
          navigate-to
          :class="'bg-'+item.color"
          :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
        >
          <view class="nav-title">{{ item.title }}</view>
          <view class="nav-name">{{ item.name }}</view>
          <text :class="'cuIcon-' + item.cuIcon" />
        </navigator>
      </view>
      <view class="cu-tabbar-height" />
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Basics',
  data() {
    return {
      elements: [{
        title: '布局',
        name: 'layout',
        color: 'cyan',
        cuIcon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        cuIcon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        cuIcon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        cuIcon: 'cuIcon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        cuIcon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        cuIcon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        cuIcon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        cuIcon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        cuIcon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        cuIcon: 'loading2'
      }
      ]
    }
  },
  onShow() {
    console.log('success')
  }
}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
