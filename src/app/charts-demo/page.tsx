import MyChart from '@/components/MyChart';
import {FinalChartConfig} from "@/types/chart.types";

const barChartConfig: FinalChartConfig = {
    type: 'bar',
    data: {
        labels: ['M1', 'M2', 'M3', 'M4', 'M5'],
        datasets: [
            {
                label: 'Sản phẩm A',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                hoverBorderColor: 'rgb(50, 150, 150)',
            },
            {
                label: 'Sản phẩm B', // Nhãn cho nhóm cột thứ hai
                data: [28, 48, 40, 19, 86],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 1)',
                hoverBorderColor: 'rgb(200, 70, 100)',
            },
            {
                label: 'Sản phẩm C', // Nhãn cho nhóm cột thứ ba
                data: [45, 25, 35, 51, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
                hoverBorderColor: 'rgb(30, 120, 190)',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            bar: {
                // borderWidth: 2, // Ví dụ global element option
            }
        },
        scales: {
            y: { // Chỉ định rõ trục y
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)', // Màu lưới trục y
                },
                ticks: {
                    color: '#666', // Màu chữ tick trục y
                }
            },
            x: { // Chỉ định rõ trục x
                grid: {
                    color: 'rgba(0, 0, 0, 0.02)', // Màu lưới trục x
                },
                ticks: {
                    color: '#888', // Màu chữ tick trục x
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Biểu đồ nhiều cột cho mỗi mục', // Cập nhật tiêu đề
                color: '#333',
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(0,0,0,0.9)',
                borderWidth: 1,
            },
            legend: {
                // display: true, // Mặc định là true
                labels: {
                    color: '#555', // Màu chữ legend
                }
            }
        }
    },
    brandingProfile: {
        containerBackgroundColor: '#f9f9f9',
        chartTitleColor: '#2c3e50',
    }
};

const lineChartConfig: FinalChartConfig = {
    type: 'line',
    data: {
        labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
        datasets: [{
            label: 'Lượt truy cập',
            data: [120, 150, 100, 180, 160, 200],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            backgroundColor: 'rgba(255, 99, 132, 0.1)', // Màu fill dưới đường
            fill: true,
            tension: 0.1, // Giữ lại tension để đường cong mềm mại
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBorderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                // tension: 0 // Global tension
            },
            point: {
                // radius: 3 // Global point radius
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
                ticks: {
                    color: '#666',
                }
            },
            x: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
                ticks: {
                    color: '#888',
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Biểu đồ Đường Đơn Giản',
                color: '#333',
            },
            tooltip: {
                backgroundColor: '#333',
                bodyColor: '#eee',
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

const pieChartConfig: FinalChartConfig = {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Thị phần',
            data: [300, 150, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: '#fff',
            borderWidth: 2,
            hoverBackgroundColor: [
                'rgb(230, 74, 107)',
                'rgb(29, 137, 210)',
                'rgb(230, 180, 61)'
            ],
            hoverBorderColor: '#eee',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            arc: {
                borderWidth: 1,
                borderColor: '#ccc'
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Biểu đồ Tròn Đơn Giản',
                color: '#333',
            },
            tooltip: {
                bodyColor: '#222',
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderColor: '#aaa',
                borderWidth: 1,
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

const scatterChartConfig: FinalChartConfig = {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Dữ liệu Phân Tán',
            data: [
                { x: 10, y: 20 }, { x: 15, y: 10 }, { x: 7, y: 8 },
                { x: 12, y: 22 }, { x: 17, y: 12 }, { x: 9, y: 11 }
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderColor: 'rgb(153, 102, 255)',
            borderWidth: 1,
            pointRadius: 6,
            hoverRadius: 8,
            hoverBorderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                // radius: 5, // Global point size
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
                ticks: {
                    color: '#666',
                }
            },
            x: {
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
                ticks: {
                    color: '#888',
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Biểu đồ Tán Xạ Đơn Giản',
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


export default function ChartsDemoPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
                Demo Biểu Đồ (Giao Diện Tinh Gọn)
            </h1>

            <MyChart config={barChartConfig} />
            <MyChart config={lineChartConfig} />
            <MyChart config={pieChartConfig} />
            <MyChart config={scatterChartConfig} />

            <footer style={{ textAlign: 'center', marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', color: '#777' }}>
                <p>Ví dụ sử dụng Chart.js và Next.js 15 (Giao diện tinh gọn)</p>
            </footer>
        </div>
    );
}