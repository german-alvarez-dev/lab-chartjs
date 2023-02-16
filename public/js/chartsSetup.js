const colors = {
  solids: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
  alphas: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
}

axios
  .get('https://multiapi-app.fly.dev/coasters/allCoasters')
  .then(({ data }) => printCoastersCharts(data))
  .catch(err => console.log(err))

function printCoastersCharts(coasters) {
  console.log('PARTY!', coasters)
}