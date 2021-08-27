<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <h1 class="text-white mb-2 font-bold text-2xl lg:text-3xl">Claim</h1>
    <div class="px-4 py-6 rounded cardbg relative" style="min-height: 100vh">
      <div class="lg:flex lg:gap-10">
        <div class="lg:w-full">
          <label>Customer Name</label>
          <p class="text-white font-bold mt-4">John Doe</p>
        </div>
        <div class="lg:w-full">
          <label>Customer Email</label>
          <p class="text-white font-bold mt-4">jd@gmail.com</p>
        </div>
        <div class="lg:w-full">
          <label>Customer Address</label>
          <p class="text-white font-bold mt-4">1, Olewa Crescent</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Insurance Type</label>
          <p class="text-white font-bold mt-4">Auto (3rd Party)</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Insurance Company</label>
          <p class="text-white font-bold mt-4">AIICO</p>
        </div>
        <div class="lg:w-full">
          <label>Date of Claim</label>
          <p class="text-white font-bold mt-4">7th Jul, 2021</p>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:gap-10">
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Location of claim</label>
          <p class="text-white font-bold mt-4">12, Allen Avenue, Ikeja, Lagos</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Policy Number</label>
          <p class="text-white font-bold mt-4">FF20292001#</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Claim Status</label>
          <p class="text-white font-bold mt-4">Paid</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Witness Name</label>
          <p class="text-white font-bold mt-4">Jane Doe</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Witness Phone</label>
          <p class="text-white font-bold mt-4">0820293920</p>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Witness Email</label>
          <p class="text-white font-bold mt-4">janedoe@gmail.com</p>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:gap-10 lg:items-start">
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Summary/Description</label>
          <p class="text-white font-bold mt-4">lorem ipsum dnjhwdihhd hdjhd dhudhqwuih h hdhjdhdhudhwi h hfwhuiwdh</p>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:items-start">
      </div>
      <button class="absolute focus:outline-none px-4 py-2 rounded">Submit</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cardbg{
  background-color: #27293d;
  color:  #9a9a9a
}
.inputbox{
  background-color: #27293d;
  border-color: #2b3553;
  border-width: 1px
}
input, select, textarea{
  background-color: #27293d;
}
input::placeholder{
  color: #344675;
}
input:focus{
  background-color: #1d253b;
  color: white
}
button{
  background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca);
  background-color: #e14eca;
  color: white;
  bottom: 20px;
  right: 20px
}
</style>