<template>
  <div class="home">
    <div class="wrapper w-full">
      <div class="l-modal block lg:hidden" v-if="$store.state.showMobileNav">
        <MobileNav />
      </div>
      <div class="aside hidden lg:block w-full border-r border-solid border-gray-200" style="box-shadow: inset -1px 0px 0px #E3E8EE">
        <TheSidebar />
      </div>
      <div class="p-3 flex justify-between lg:hidden" style="background-color: #1e1e2f">
        <font-awesome-icon icon="bars" class="text-3xl text-gray-500" @click="$store.commit('showMobileNav', true)"/>
        <svg width="30" height="30" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55382 14H9.45382C9.33907 14.5651 9.03246 15.0732 8.58595 15.4382C8.13945 15.8031 7.5805 16.0025 7.00382 16.0025C6.42715 16.0025 5.8682 15.8031 5.42169 15.4382C4.97519 15.0732 4.66858 14.5651 4.55382 14ZM12.0038 9.066L13.2198 10.298C13.3582 10.4384 13.452 10.6166 13.4895 10.8102C13.5269 11.0037 13.5063 11.204 13.4302 11.3859C13.3541 11.5678 13.2259 11.7231 13.0618 11.8324C12.8977 11.9417 12.705 12 12.5078 12H1.49982C1.30267 12 1.10993 11.9417 0.945817 11.8324C0.781707 11.7231 0.653556 11.5678 0.57747 11.3859C0.501384 11.204 0.480758 11.0037 0.518185 10.8102C0.555612 10.6166 0.649422 10.4384 0.787824 10.298L2.00382 9.066V5C2.00382 3.67392 2.53061 2.40215 3.46829 1.46447C4.40597 0.526784 5.67774 0 7.00382 0C8.32991 0 9.60168 0.526784 10.5394 1.46447C11.477 2.40215 12.0038 3.67392 12.0038 5V9.066Z" fill="#A3ACB9"/>
        </svg>
      </div>
      <div class="w-full overflow-x-hidden" style="background-color: #1e1e2f">
        <div class="">
          <main class="">
            <router-view :key="$route.path"></router-view>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSidebar from '@/components/TheSidebar.vue'
import MobileNav from '@/components/MobileNav.vue'

export default {
  components:{
    TheSidebar, MobileNav
  }

}
</script>
<style scoped>
.home{
  height: 100%
}

@media only screen and (min-width: 1024px){
  .wrapper{
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: auto;
    min-height: 100vh;
    width: 100%;
  }
 
}

</style>