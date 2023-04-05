import { Chart as ChartJS, LineElement, TimeScale, LinearScale, PointElement } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement, TimeScale, LinearScale, PointElement
)

const SessionChart = ({ chartData }) => {

  const colors = [
    "green",
    "blue",
    "yellow",
    "red",
    "orange",
    "white",
    "black",
    "pink",
    "purple",
    "cyan",
    "grey",
    "brown"
  ];

  const getDatasets = () => {
    const accounts = [...new Set(chartData.map(obj => obj.account))]
    return accounts.map((id) => ({
      data: chartData.filter(item => item.account === id).map(item => ({x: item.end, y: item.hands}))
    }))
  }

  const data = {
    datasets: getDatasets()
  }

  data.datasets.forEach((dataset, index) => {
    dataset.borderColor = colors[index];
  });

  const options = {
    maintainAspectRatio: true,
    aspectRatio: 5,
    scales: {
      x: {
        type: 'time',
        offset: true,
        time: {
          unit: 'day'
        }
      }
    },
    plugins: {
      colors: {
        enabled: false
      }
    }
  }

  return (
    <div className='chart'>
      <Line data={data} options={options} />
    </div>
  )
}

export default SessionChart