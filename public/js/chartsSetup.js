const colors = {
  solids: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
  alphas: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
}




axios
  .get('https://multiapi-app.fly.dev/coasters/allCoasters')
  .then(({ data }) => {
    renderFasterChart(data)
    renderLengthChart(data)
    renderCountryChart(data)
    renderInversionsChart(data)
    renderSpeedAndHeightChart(data)
      .catch(err => console.log(err))

  })




const renderFasterChart = coaster => {

  const faster = coaster.sort((a, b) => b.speed - a.speed).slice(0, 5)

  const data = {
    labels: faster.map(elm => elm.name),
    datasets: [{
      data: faster.map(elm => elm.speed),
      backgroundColor: colors.alphas,
      borderColor: colors.solids,
      borderWidth: 2
    }]
  }

  const options = {
    Plugin: {
      legend: {
        display: false
      }
    }
  }

  new Chart('chart1', {
    type: 'bar',
    data,
    options
  })
}



const renderLengthChart = coaster => {


  const data = {
    labels: ['Menos de 1.000 m', 'Entre 1.000 m y 1.500 m', 'Más de 1.500 m'],
    datasets: [{
      data: [
        coaster.filter(elm => elm.length < 1000).length,
        coaster.filter(elm => elm.length > 1000 < 1500).length,
        coaster.filter(elm => elm.length > 1500).length
      ],
      backgroundColor: colors.alphas,
      borderColor: colors.solids,
      borderWidth: 2
    }]
  }

  const options = {
    Plugin: {
      legend: {
        display: true
      }
    }
  }

  new Chart('chart2', {
    type: 'doughnut',
    data,
    options
  })
}







function renderCountryChart(coasters) {
  const data = {
    labels: ['EEUU', 'España', 'Japón', 'China'],
    datasets: [{
      data: [
        coasters.filter(elm => elm.country === 'United States').length,
        coasters.filter(elm => elm.country === 'Spain').length,
        coasters.filter(elm => elm.country === 'Japan').length,
        coasters.filter(elm => elm.country === 'China').length,
      ],
      backgroundColor: colors.alphas,
      borderColor: colors.solids,
      borderWidth: 2
    }]
  }

  const options = {
    plugins: {
      legend: {
        display: true
      }
    }
  }

  new Chart('chart3', {
    type: 'polarArea',
    data,
    options
  })
}








function renderInversionsChart(coasters) {

  const inver = coasters.filter(elm => elm.inversions > 5)

  console.log(inver)

  const data = {
    labels: inver.map(elm => elm.name),
    datasets: [{
      data: [
        inver.map(elm => elm.inversions).length,
      ],
      backgroundColor: colors.alphas,
      borderColor: colors.solids,
      borderWidth: 2
    }]
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  new Chart('chart4', {
    type: 'radar',
    data: data,
    options
  })
}











// function renderSpeedAndHeightChart(coasters) {

//   const prueba = coasters.filter(elm => elm.inversions > 5)

//   const data = {
//     datasets: [{
//       type: 'bar',
//       label: 'Bar Dataset',
//     }, {
//       type: 'line',
//       label: 'Line Dataset',
//       data: [50, 50, 50, 50],
//     }],
//     labels: coasters.filter(elm => elm.speed)

//   }



//   // const data = {
//   //   labels: prueba.map(elm => elm.name),
//   //   datasets: [{
//   //     data: [
//   //       prueba.map(elm => elm.inversions).length,
//   //     ],
//   //     backgroundColor: colors.alphas,
//   //     borderColor: colors.solids,
//   //     borderWidth: 2
//   //   }]
//   // }

//   const options = {
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   }

//   new Chart('chart5', {
//     type: 'bar',
//     data,
//     options
//   })
// }

