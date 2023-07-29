const ctx = document.querySelector('#myChart');

const technologies = ['HTML', 'CSS', 'JavaScript', 'SolidWorks', 'Matlab', 'Arduino', 'C++', 'LabView', 'Simulink']
const levels = [90, 95, 60, 75, 50, 65, 85, 85, 30]



const data = {
  labels: technologies,
  datasets: [{
    label: 'Tecnologias',
    data: levels,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1,
    barThickness: 130,
  }]
};



const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        beginAtZero: true
      }
    },

  },

};

const myChart = new Chart(ctx, config, data)
