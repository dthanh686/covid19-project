import styled from "@emotion/styled"
import { Chart, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"
import { Country } from "../types"
Chart.register(...registerables)

interface Props {
  countries: Country[]
}

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
const ChartCovid: React.FC<Props> = ({ countries }) => {
  const generateChartData = () => {
    const data: number[] = []
    const labels: string[] = []

    countries.forEach((country) => {
      data.push(country.NewConfirmed)
      labels.push(country.Country)
    })
    return {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "New Confirmed",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    }
  }
  return (
    <ChartWrapper>
      <Bar data={generateChartData()} options={options} />
    </ChartWrapper>
  )
}

export default ChartCovid
