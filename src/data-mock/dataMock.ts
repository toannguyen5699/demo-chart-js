import { FinalChartConfig } from "@/types/chart.types";

const getRandomColorWithOpacity = (opacity: number = 0.5): string => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Bar Group Chart
export const barGroupChartConfig: FinalChartConfig = {
    type: 'bar',
    data: {
        labels: ['Jan 1, 2021', 'Jan 31, 2021'],
        datasets: [
            {
                label: 'BTC Price (USD)',
                data: [3000, 4000],
                // backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'], // Different colors for each bar
                // borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            },
        ]
    },
    options: {
        // responsive: true,
        scales: {
            y: {
                // beginAtZero: false, // Prevents the chart from starting at 0
                title: {
                    display: true,
                    text: 'Price (USD)'
                }
            }
        },
        // plugins: {
        //     title: {
        //         display: true,
        //         text: 'Bitcoin Price Comparison - January 2021',
        //         color: '#333'
        //     },
        //     legend: {
        //         display: false, //  Since we only have one dataset, hiding the legend can make the chart cleaner.
        //         labels: {
        //             color: '#555'
        //         }
        //     }
        // }
    },
    brandingProfile: {
        containerBackgroundColor: '#f9f9f9',
        chartTitleColor: '#2c3e50',
    }
}
// export const barGroupChartConfig: FinalChartConfig = {
//     type: 'bar',
//     data: {
//         labels: ['M1', 'M2', 'M3', 'M4', 'M5'],
//         datasets: [
//             {
//                 label: 'Product A',
//                 data: [65, 59, 80, 81, 56],
//                 backgroundColor: 'rgba(75, 192, 192, 0.7)',
//                 borderColor: 'rgb(75, 192, 192)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Product B', // Label for the second column group
//                 data: [28, 48, 40, 19, 86],
//                 backgroundColor: 'rgba(255, 99, 132, 0.7)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Product C', // Label for the third column group
//                 data: [45, 25, 35, 51, 70],
//                 backgroundColor: 'rgba(54, 162, 235, 0.7)',
//                 borderColor: 'rgb(54, 162, 235)',
//                 borderWidth: 1,
//             }
//         ]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Grouped Bar Chart per Item', // Updated title
//                 color: '#333',
//             },
//             legend: {
//                 // display: true, // Default is true
//                 labels: {
//                     color: '#555', // Legend text color
//                 }
//             }
//         }
//     },
//     brandingProfile: {
//         containerBackgroundColor: '#f9f9f9',
//         chartTitleColor: '#2c3e50',
//     }
// };

// Bar Chart
export const barChartConfig: FinalChartConfig = {
    type: 'bar',
    data: {
        labels: ['M1', 'M2', 'M3', 'M4', 'M5'],
        datasets: [
            {
                label: 'Product A',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Simple Bar Chart', // Updated title
                color: '#333',
            },
            legend: {
                // display: true, // Default is true
                labels: {
                    color: '#555', // Legend text color
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#f9f9f9',
        chartTitleColor: '#2c3e50',
    }
};

// Stacked Bar chart
export const barStackedChartConfig: FinalChartConfig = {
    type: 'bar',
    data: {
        labels: ['M1', 'M2', 'M3', 'M4', 'M5'],
        datasets: [
            {
                label: 'Product A',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
            },
            {
                label: 'Product B',
                data: [28, 48, 40, 19, 86],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
            },
            {
                label: 'Product C',
                data: [45, 25, 35, 51, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Stacked Bar Chart', // Updated title
                color: '#333',
            },
            legend: {
                // display: true, // Default is true
                labels: {
                    color: '#555', // Legend text color
                }
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#f9f9f9',
        chartTitleColor: '#2c3e50',
    }
};

// Line Marker Chart
export const lineMarkerChartConfig: FinalChartConfig = {
    type: 'line',
    data: {
        labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
        datasets: [{
            label: 'Sample Dataset',
            data: [120, 150, 100, 180, 160, 200],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            fill: true,
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointRadius: 4,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Simple Line Chart with Markers',
                color: '#333',
            },
            legend: {
                labels: {
                    color: '#555',
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#fdfdfe',
    }
};

// Line chart
export const lineChartConfig: FinalChartConfig = {
    type: 'line',
    data: {
        labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0
        }]
    },
    options: {
        responsive: true,
    },
    brandingProfile: {
        containerBackgroundColor: '#fdfdfe',
    }
};

// Pie Chart
export const pieChartConfig: FinalChartConfig = {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Market Share',
            data: [300, 150, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: '#fff',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Simple Pie Chart',
                color: '#333',
            },
            legend: {
                labels: {
                    color: '#555',
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#f5f5f5',
    }
};

// Doughnut Chart
export const doughnutChartConfig: FinalChartConfig = {
    type: 'doughnut',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Market Share',
            data: [300, 150, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: '#fff',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Simple Doughnut Chart',
                color: '#333',
            },
            legend: {
                labels: {
                    color: '#555',
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#f5f5f5',
    }
};

// Scatter Chart
export const scatterChartConfig: FinalChartConfig = {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [
                { x: 10, y: 20 }, { x: 15, y: 10 }, { x: 7, y: 8 },
                { x: 12, y: 22 }, { x: 17, y: 12 }, { x: 9, y: 11 }
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderColor: 'rgb(153, 102, 255)',
            borderWidth: 1,
            pointRadius: 6,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Simple Scatter Chart',
                color: '#333',
            },
            legend: {
                labels: {
                    color: '#555',
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#fafafa',
    }
};


// Bubble Chart
export const bubbleChartConfig: FinalChartConfig = {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Dataset A',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 25 },
                { x: 15, y: 25, r: 10 },
                { x: 32, y: 40, r: 8 },
                { x: 25, y: 18, r: 22 },
            ],
            backgroundColor: [
                getRandomColorWithOpacity(0.7),
                getRandomColorWithOpacity(0.7),
                getRandomColorWithOpacity(0.7),
                getRandomColorWithOpacity(0.7),
                getRandomColorWithOpacity(0.7),
            ],
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1,
        }, {
            label: 'Dataset B',
            data: [
                { x: 30, y: 20, r: 12 },
                { x: 10, y: 40, r: 18 },
                { x: 35, y: 30, r: 20 },
                { x: 22, y: 28, r: 16 },
                { x: 18, y: 15, r: 9 },
            ],
            backgroundColor: [
                getRandomColorWithOpacity(0.6),
                getRandomColorWithOpacity(0.6),
                getRandomColorWithOpacity(0.6),
                getRandomColorWithOpacity(0.6),
                getRandomColorWithOpacity(0.6),
            ],
            borderColor: 'rgba(50, 50, 50, 0.8)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Simple Bubble Chart', // Corrected title
                color: '#333',
            },
            legend: {
                labels: {
                    color: '#555',
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#fafafa',
    }
};