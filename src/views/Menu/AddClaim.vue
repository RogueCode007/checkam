<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <h1 class="text-white mb-2 font-bold text-2xl lg:text-3xl">Add a new claim</h1>
    <div class="px-4 py-6 rounded cardbg relative" style="min-height: 100vh">
      <div class="lg:flex lg:gap-10">
        <div class="lg:w-full">
          <label>Customer Name</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Insurance Type</label>
          <div class="rounded inputbox py-2 px-1">
            <select class="block rounded w-full focus:outline-none">
              <option selected disabled>Select insurance type</option>
              <option>Auto (3rd Party)</option>
              <option>Auto (Comprehensive)</option>
              <option>Property</option>
              <option>Life</option>
              <option>Personal Accident</option>
              <option>Marine</option>
            </select>
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Insurance Company</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:gap-10">
        <div class="lg:w-full">
          <label>Date of Claim</label>
          <div class="rounded inputbox px-1">
            <input type="date" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Location of claim</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Policy Number</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:gap-10">
        <div class="lg:w-full">
          <label>Upload Pictures</label>
          <div class="rounded inputbox px-1">
            <input type="image" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Policy Number</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Claim Status</label>
          <div class="rounded inputbox py-2 px-1">
            <select class="block rounded w-full focus:outline-none">
              <option selected disabled>Select status</option>
              <option>Paid</option>
              <option>Not Paid</option>
              <option>Fraudulent</option>
              <option>Contested</option>
            </select>
          </div>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:gap-10 lg:items-start">
        
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Witness Name</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Witness Phone</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
        <div class="mt-4 lg:mt-0 lg:w-full">
          <label>Witness Email address</label>
          <div class="rounded inputbox px-1">
            <input type="text" class="block w-full focus:outline-none py-1 px-1">
          </div>
        </div>
      </div>
      <div class="lg:mt-4 lg:flex lg:items-start">
        <div class="mt-4 lg:mt-0 ">
          <label>Summary/description of claim</label>
          <div class="rounded inputbox px-1">
            <textarea cols="35" rows="5" class="block w-full focus:outline-none py-1 px-1"></textarea>
          </div>
        </div>
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