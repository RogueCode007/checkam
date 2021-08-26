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
            label: "Fraudulent Claims",
            data: [2, 10, 5, 9, 0, 6, 20, 21, 3, 15, 4, 9],
            // backgroundColor: "transparent",
            backgroundColor: 'rgb(45,206,137, 0.1)',
            borderColor: "#2dce89",
            pointBackgroundColor: "#2dce89"
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