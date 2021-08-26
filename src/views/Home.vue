<template>
  <div class="">
    <div class="relative graybox" style="background-color: #F7FAFC;">
      <svg class="rightpanel" width="314" height="107" viewBox="0 0 314 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 107V67.5L314.5 0V40L0 107Z" fill="#0C00FA" fill-opacity="0.5"/>
      </svg>
      <svg class="leftpanel2" width="159" height="74" viewBox="0 0 159 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 73.5V33.5L159 0V40L0 73.5Z" fill="#81E9FF"/>
      </svg>
      <svg class="leftpanel" width="315" height="107" viewBox="0 0 315 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 107V67.5L314.5 0V40L0 107Z" fill="#0C00FA" fill-opacity="0.5"/>
      </svg>
      <div class="absolute w-4/5 card-white" style="top:50px; right:0; left: 0; margin: 0 auto">
        <!-- <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M57.6 12.384C57.6 12.768 57.568 13.6 57.568 13.808H49.744C49.92 15.696 51.296 16.24 52.848 16.24C54.432 16.24 55.68 15.904 56.768 15.36V18.56C55.68 19.168 54.24 19.6 52.336 19.6C48.432 19.6 45.712 17.168 45.712 12.352C45.712 8.288 48.016 5.056 51.824 5.056C55.616 5.056 57.6 8.288 57.6 12.384ZM49.696 10.864H53.824C53.824 9.056 52.784 8.304 51.808 8.304C50.8 8.304 49.696 9.056 49.696 10.864ZM39.536 5.056C42.336 5.056 44.976 7.584 44.992 12.224C44.992 17.296 42.384 19.6 39.52 19.6C38.112 19.6 37.264 19.008 36.688 18.592L36.672 23.12L32.672 23.968V5.312H36.192L36.4 6.304C36.96 5.792 37.968 5.056 39.536 5.056ZM38.576 16.08C40.048 16.08 41.04 14.48 41.04 12.336C41.04 10.24 40.032 8.608 38.576 8.608C37.664 8.608 37.088 8.928 36.672 9.392L36.688 15.328C37.072 15.744 37.632 16.08 38.576 16.08ZM27.168 4.112V0.848L31.184 0V3.248L27.168 4.112ZM27.168 5.328H31.184V19.328H27.168V5.328ZM22.864 6.512C23.808 4.784 25.68 5.136 26.192 5.328V9.008C25.696 8.832 24.096 8.608 23.152 9.84V19.328H19.152V5.328H22.608L22.864 6.512ZM14.864 1.856L14.848 5.328H17.888V8.736H14.848V14.416C14.848 16.784 17.376 16.048 17.888 15.84V19.088C17.36 19.376 16.4 19.616 15.088 19.616C12.72 19.616 10.944 17.872 10.944 15.504L10.96 2.688L14.864 1.856ZM4.048 9.392C4.048 11.184 10.144 10.336 10.16 15.104C10.16 17.968 7.872 19.616 4.544 19.616C3.168 19.616 1.664 19.344 0.176 18.704V14.896C1.52 15.632 3.216 16.176 4.544 16.176C5.44 16.176 6.08 15.936 6.08 15.2C6.08 13.296 0 14 0 9.584C0 6.752 2.16 5.056 5.408 5.056C6.736 5.056 8.048 5.264 9.376 5.792V9.552C8.16 8.896 6.624 8.528 5.408 8.528C4.56 8.528 4.048 8.768 4.048 9.392Z" fill="black"/>
        </svg> -->
        <p class="text-2xl font-bold">Check Am</p>
        <div class="mt-4 rounded bg-white px-5 py-5 lg:p-10" style="box-shadow:0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);">
          <h1 class="text-2xl font-semibold" style="color:#3C4257">Sign into your account</h1>
          <form style="color:#3C4257" @submit.prevent="submit">
            <div class="mt-4">
              <label class="text-sm">Email</label>
              <div class="border rounded border-solid border-gray-200 mt-2 px-1">
                <input type="text" placeholder="janedoe@placehlder.com" class="p-2 focus:outline-none border-0 w-full">
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <label class="text-sm">Password</label>
                <a class="block cursor-pointer text-xs" style="color: #635CFF;">Forgot your password ?</a>
              </div>
              <div class="border rounded border-solid border-gray-200 mt-2 px-1">
                <input type="password" class="p-2 focus:outline-none border-0 w-full">
              </div>
            </div>
            <div class="mt-6 flex gap-2 items-center">
              <input type="checkbox">
              <p class="text-xs">
                Stay signed in for a week
              </p>
            </div>
            <button style="background-color: #635CFF;padding: 13.5px 10px;" class="focus:outline-none w-full rounded mt-4 text-white text-center">
              Continue
            </button>
          </form>
        </div>
        <p style="color: #4F566B" class="mt-6">Don't have an account ? <span style="color: #635CFF">Sign up</span></p>
        <div class="mt-2 flex gap-2" style="color: #4F566B">
          <p class="text-sm">PaddyCover .</p>
          <p class="text-sm">Contact .</p>
          <p class="text-sm">Privacy & terms</p>
        </div>
      </div>
    </div>
    <div class="white-box bg-white" style="min-height: 50vh"></div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  methods:{
    submit(){
      this.$router.push('/app')
    }
  }
}
</script>
<style scoped>
.graybox{
  height: 50vh
}
@media only screen and (min-width: 768px){
  .graybox{
    height: 80vh
  }
  .graybox:after{
    content: "";
    position: absolute;
    /* border: 1px solid red; */
    height: 350px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -250px;
    background-color: #fff;
    transform: skewY(-11deg);
    z-index: 10
  }
  .card-white{
    max-width: 500px;
    z-index: 100
  }
  .rightpanel{
    position: absolute;
    right: 0;
    bottom: 150px;
    z-index: 100
  }
  .leftpanel{
    position: absolute;
    left: 0;
    bottom: -60px;
    z-index: 100
  }
  .leftpanel2{
    position: absolute;
    left: 0;
    bottom: -40px;
    z-index: 100
  }
}
</style>
