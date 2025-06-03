'use client';

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
    Filler,
} from 'chart.js';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';
import {FinalChartConfig, SimpleBaseChartOptions} from "@/types/chart.types";

ChartJS.register(
    CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement,
    Title, Tooltip, Legend, Filler
);

interface MyChartProps {
    config: FinalChartConfig; // Sử dụng FinalChartConfig
}

const MyChart: React.FC<MyChartProps> = ({ config }) => {
    // Xử lý branding profile để tùy chỉnh options
    const customizedOptions: SimpleBaseChartOptions = { ...(config.options || {}) };

    if (config.brandingProfile) {
        if (config.brandingProfile.chartTitleColor && customizedOptions.plugins?.title) {
            customizedOptions.plugins = { ...(customizedOptions.plugins || {}) };
            customizedOptions.plugins.title = {
                ...(customizedOptions.plugins.title || { display: config.brandingProfile.chartTitleColor ? true : undefined }),
            };
            customizedOptions.plugins.title.color = config.brandingProfile.chartTitleColor;
        }
    }

    const chartContainerStyle: React.CSSProperties = {
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: config.brandingProfile?.containerBackgroundColor || 'transparent',
        maxWidth: '700px',
        margin: '20px auto',
    };

    return (
        <div style={chartContainerStyle}>
            {config.type === 'bar' && <Bar data={config.data} options={customizedOptions} />}
            {config.type === 'line' && <Line data={config.data} options={customizedOptions} />}
            {config.type === 'pie' && <Pie data={config.data} options={customizedOptions} />}
            {config.type === 'scatter' && <Scatter data={config.data} options={customizedOptions} />}
        </div>
    );
};

export default MyChart;