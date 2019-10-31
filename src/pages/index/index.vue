<template>
  <view>
    <basics v-if="PageCur=='basics'" />
    <components v-if="PageCur=='component'" />
    <plugin v-if="PageCur=='plugin'" />
    <personal v-if="PageCur=='personal'" />
    <view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" data-cur="basics" @click="NavChange">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
      </view>
      <view class="action" data-cur="component" @click="NavChange">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
      </view>
      <view class="action" data-cur="plugin" @click="NavChange">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
      </view>

      <view class="action" data-cur="personal" @click="NavChange">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/persion' + [PageCur=='personal'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='personal'?'text-green':'text-gray'">个人中心</view>
      </view>
    </view>
  </view>
</template>

<script>
import basics from '@/pages/basics/home'
import components from '@/pages/component/home'
import plugin from '@/pages/plugin/home'
import personal from '@/pages/personal'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      PageCur: 'basics'
    }
  },
  computed: {
    ...mapGetters({
      token: 'user/token',
      name: 'user/name'
    })
  },
  methods: {
    NavChange(e) {
      this.PageCur = e.currentTarget.dataset.cur
      if (this.PageCur == 'personal' && !this.token) {
        this.$store.dispatch('user/login').then(res => {
          this.$store.dispatch('user/getInfo')
        }).catch(err => {
          console.log(err)
        })
      } else if (this.PageCur == 'personal' && this.token && !this.name) {
        this.$store.dispatch('user/getInfo')
      }
    }
  },
  components: {
    basics,
    components,
    plugin,
    personal
  }
}
</script>

<style>

</style>
