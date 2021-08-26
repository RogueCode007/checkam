<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Total Claims",
            data: [20, 21, 3, 15, 4, 9],
            backgroundColor: "rgb(45,206,137, 0.1)",
            borderColor: "#2dce89",
            pointBackgroundColor: "rgb(45,206,137)"
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