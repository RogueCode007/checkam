<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Settled Claims",
            data: [2, 10, 5, 9, 0, 6, 20, 21, 3, 15, 4, 9],
            // backgroundColor: "transparent",
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: "rgb(75, 192, 192)",
            pointBackgroundColor: "rgb(75, 192, 192)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales : {
          yAxes: [{
            gridLines: {
                color: "#27293d",
                suggestedMin: 0,
                suggestedMax: 20
            }
          }],
          xAxes: [{
            gridLines: {
              color: "#32325d"
            }
          }]
        }
      }
    );
  }
};
</script>