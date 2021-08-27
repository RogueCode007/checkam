<template>
<div>
  <div class="flex gap-4" style="color: #fff">
    <p @click="picked = 'all'" class="cursor-pointer" :class="[picked === 'all' ? 'border-b border-solid border-blue-500 text-blue-500': '']">All</p>
    <p @click="picked = 'succeeded'" class="cursor-pointer" :class="[picked === 'succeeded' ? 'border-b border-solid border-blue-500 text-blue-500': '']">Succeeded</p>
    <p @click="picked = 'refunded'" class="cursor-pointer" :class="[picked === 'refunded' ? 'border-b border-solid border-blue-500 text-blue-500': '']">Refunded</p>
    <p @click="picked = 'uncaptured'" class="cursor-pointer" :class="[picked === 'uncaptured' ? 'border-b border-solid border-blue-500 text-blue-500': '']">Uncaptured</p>
  </div>
  <div class="overflow-x-auto text-white">
    <table>
      <tr>
        <th><input type="checkbox"></th>
        <th>Amount</th>
        <th>Name</th>
        <th>Email</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
      <tr v-for="payment in payments" :key="payment.id">
        <td><input type="checkbox"></td>
        <td>
          <div class="flex items-center">
            <p class="font-bold mr-2">{{payment.amount}}</p>
            <div v-if="payment.status === 'success'" class="flex items-center rounded px-1 bg-green-100" style="">
              <p class="text-sm mr-2" style="color: #0E6245">Succeeded</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97274 11.9097L2.21974 8.19125C1.92724 7.89575 1.92724 7.4165 2.21974 7.12175C2.51224 6.827 2.98774 6.82625 3.28024 7.12175L6.50074 10.2897L12.7167 4.09625C13.0092 3.8015 13.4847 3.8015 13.7772 4.09625C14.0697 4.391 14.0697 4.871 13.7772 5.16575L7.02499 11.906C6.88579 12.0455 6.69705 12.1241 6.50001 12.1248C6.30298 12.1255 6.11368 12.0482 5.97349 11.9097H5.97274Z" fill="#0E6245"/>
              </svg>
            </div>
            <div v-else-if="payment.status === 'failed'" class="flex items-center rounded px-1 bg-red-100" >
              <p class="text-sm mr-2"  style="color: red">Uncaptured</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97274 11.9097L2.21974 8.19125C1.92724 7.89575 1.92724 7.4165 2.21974 7.12175C2.51224 6.827 2.98774 6.82625 3.28024 7.12175L6.50074 10.2897L12.7167 4.09625C13.0092 3.8015 13.4847 3.8015 13.7772 4.09625C14.0697 4.391 14.0697 4.871 13.7772 5.16575L7.02499 11.906C6.88579 12.0455 6.69705 12.1241 6.50001 12.1248C6.30298 12.1255 6.11368 12.0482 5.97349 11.9097H5.97274Z" fill="red"/>
              </svg>
            </div>
            <div v-else class="flex items-center rounded px-1 bg-yellow-100" style="">
              <p  class="text-sm mr-2 text-yellow-300">Refunded</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97274 11.9097L2.21974 8.19125C1.92724 7.89575 1.92724 7.4165 2.21974 7.12175C2.51224 6.827 2.98774 6.82625 3.28024 7.12175L6.50074 10.2897L12.7167 4.09625C13.0092 3.8015 13.4847 3.8015 13.7772 4.09625C14.0697 4.391 14.0697 4.871 13.7772 5.16575L7.02499 11.906C6.88579 12.0455 6.69705 12.1241 6.50001 12.1248C6.30298 12.1255 6.11368 12.0482 5.97349 11.9097H5.97274Z" fill="yellow"/>
              </svg>
            </div>
          </div>
        </td>
        <td class="text-sm text-blue-500" style="width: 10%">
          <router-link :to="`/app/dashboard/claim/${payment.id}`">{{payment.name}}</router-link>
        </td>
        <td class="text-sm" style="color: #fff;">
          {{payment.email}}
        </td>
        <td class="text-sm" style="color: #fff; width: 45%">
          {{payment.description}}
        </td>
        <td class="text-sm">
          {{payment.date}}
        </td>
      </tr>
    </table>
    <div class="mt-4 flex justify-between items-center pr-3 pb-6">
      <p><span class="font-semibold">14 </span>results</p>
      <div class="flex gap-4">
        <button class="rounded text-xs px-2 py-1" style="box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);">
          Previous
        </button>
        <button class="rounded text-xs px-2 py-1" style="box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);">
          Next
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      picked: 'all',
      payments: [
        {id: 1, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 2, amount: 'US$500', status: 'refund', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 3, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 4, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 5, amount: 'US$500', status: 'failed', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 6, amount: 'US$500', status: 'refund', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 7, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 8, amount: 'US$500', status: 'failed', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 9, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 10, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 11, amount: 'US$500', status: 'failed', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 12, amount: 'US$500', status: 'success', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 13, amount: 'US$500', status: 'refund', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
        {id: 14, amount: 'US$500', status: 'failed', description: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', email: 'xyz@gmail.com', name: 'John Doe', date: '7 Jul, 14:04'},
      ]
    }
  },
  created(){
    this.picked == 'all'
  }

}
</script>

<style scoped>
table{
  width: 100%
}
th{
  text-align: left;
  border-top: 1px solid #ddd;
  padding: 10px;
}
td{
  padding: 8px
}
th, td{
  border-bottom: 1px solid #ddd;
}
</style>