const days = []
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

const updateSettings = (data) => {
  const priceArray = Object.values(data.bpi)
  const config = {
    labels: days,
    datasets: [
      {
        label: 'Bitcoin Price (USD) Over Last 31 Days',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: priceArray
      }
    ]
  };
  return config
}

module.exports = {
  updateSettings,
}