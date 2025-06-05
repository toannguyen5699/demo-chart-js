import MyChart from '@/components/MyChart';
import {FinalChartConfig} from "@/types/chart.types";
import {
    barChartConfig, barGroupChartConfig, barStackedChartConfig, bubbleChartConfig,
    doughnutChartConfig,
    lineChartConfig, lineMarkerChartConfig,
    pieChartConfig,
    scatterChartConfig
} from "@/data-mock/dataMock";


export default function ChartsDemoPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
                Demo Biểu Đồ (Giao Diện Tinh Gọn)
            </h1>

            <MyChart config={barChartConfig} />
            <MyChart config={barGroupChartConfig} />
            <MyChart config={barStackedChartConfig} />
            <MyChart config={lineChartConfig} />
            <MyChart config={lineMarkerChartConfig} />
            <MyChart config={pieChartConfig} />
            <MyChart config={doughnutChartConfig} />
            <MyChart config={scatterChartConfig} />
            <MyChart config={bubbleChartConfig} />

            <footer style={{ textAlign: 'center', marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', color: '#777' }}>
                <p>Ví dụ sử dụng Chart.js và Next.js 15 (Giao diện tinh gọn)</p>
            </footer>
        </div>
    );
}