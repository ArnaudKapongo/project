const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

const bar = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 6, 16, 7, 11, 9, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 198, 255, 0.2)',
                'rgba(195,47,39, 0.2)',
                'rgba(208, 184, 172, 0.2)',
                'rgba(166, 196, 138, 0.2)',
                'rgba(0, 27, 46, 0.2)',
                'rgba(201, 124, 93, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 198, 255, 0.2)',
                'rgba(195,47,39, 0.2)',
                'rgba(208, 184, 172, 0.2)',
                'rgba(166, 196, 138, 0.2)',
                'rgba(0, 27, 46, 0.2)',
                'rgba(201, 124, 93, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});