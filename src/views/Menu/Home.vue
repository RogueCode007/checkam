<template>
  <div class="py-4 lg:py-6 px-3 lg:px-6">
    <div class="cardbg px-2 py-3 rounded">
      <p class="text-sm">Fradulent Claims</p>
      <p class="mt-2 text-white text-2xl lg:text-4xl">Performance</p>
      <LineChart1 :styles="myStyles" />
    </div>
    <div class="mt-6 lg:flex lg:justify-between lg:items-center box">
      <div class="cardbg px-2 py-3 rounded boxer">
        <p class="text-sm">Total Claims</p>
        <p class="mt-2 text-white text-2xl lg:text-4xl">2,350</p>
        <LineChart2 :styles="myStyles" />
      </div>
      <div class="mt-6 lg:mt-0 cardbg px-2 py-3 rounded boxer">
        <p class="text-sm">Daily Claims</p>
        <p class="mt-2 text-white text-2xl lg:text-4xl">Performance</p>
        <BarChart :styles="myStyles" />
      </div>
      <div class="mt-6 lg:mt-0 cardbg px-2 py-3 rounded boxer">
        <p class="text-sm">Settled Claims</p>
        <p class="mt-2 text-white text-2xl lg:text-4xl">203</p>
        <LineChart3 :styles="myStyles" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart1 from "@/components/FraudulentClaims/LineChart"
import LineChart2 from "@/components/TotalClaims/LineChart"
import LineChart3 from "@/components/SettledClaims/LineChart"
import BarChart from "@/components/DailyClaims/BarChart"
export default {
  components: {
    LineChart1, LineChart2, LineChart3, BarChart
  },
  data(){
    return {
      myStyles:{
        height: `${200}px`,
        position: 'relative'
      }
    }
  }
}
</script>

<style scoped>
.cardbg{
  background-color: #27293d;
  color:  #9a9a9a
}
@media only screen and (min-width: 1024px){
  .boxer{
    width: 30%;
    margin: 1.67%
  }
}
</style>