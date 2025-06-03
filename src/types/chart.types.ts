export interface SimplePointElementOptions {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    radius?: number; // Kích thước điểm
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBorderWidth?: number;
    hoverRadius?: number;
}

export interface SimpleLineElementOptions {
    borderColor?: string;
    borderWidth?: number;
    backgroundColor?: string;
    tension?: number;
}

export interface SimpleBarElementOptions {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBorderWidth?: number;
}

export interface SimpleArcElementOptions {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBorderWidth?: number;
}

export interface SimpleChartElementsConfiguration {
    point?: SimplePointElementOptions;
    line?: SimpleLineElementOptions;
    bar?: SimpleBarElementOptions;
    arc?: SimpleArcElementOptions;
}

// --- Cấu trúc Dataset đơn giản hóa ---
export interface SimpleChartDataset {
    label?: string;
    data: any[] | { x: any; y: any }[];

    // Màu sắc và viền cho dataset
    backgroundColor?: string | string[]; // Đối với bar/pie, đây có thể là màu đơn. Chart.js sẽ lặp lại nếu cần.
    borderColor?: string ;
    borderWidth?: number;

    // Line dataset specific styling (fill color)
    fill?: boolean | 'start' | 'end' | 'origin';

    // Point specific styling (cho line, scatter)
    pointBackgroundColor?: string;
    pointBorderColor?: string;
    pointBorderWidth?: number;
    pointRadius?: number;
    pointHoverBackgroundColor?: string;
    pointHoverBorderColor?: string;
    pointHoverBorderWidth?: number;
    pointHoverRadius?: number;

    // Hover chung cho elements trong dataset
    hoverBackgroundColor?: string | string[];
    hoverBorderColor?: string;
    hoverBorderWidth?: number;

    [key: string]: any;
}

// --- Cấu trúc dữ liệu biểu đồ ---
export interface SimpleGenericChartData {
    labels?: string[];
    datasets: SimpleChartDataset[];
}

// --- Tùy chọn Scales đơn giản (chỉ màu sắc) ---
export interface SimpleTickOptions {
    color?: string;
}

export interface SimpleGridLineOptions {
    color?: string;
    borderColor?: string;
    borderWidth?: number;
}

export interface SimpleAngleLineOptions { // For radar chart
    color?: string;
    lineWidth?: number;
}

export interface SimplePointLabelOptions { // For radar chart
    color?: string;
}

export interface SimpleScaleOptions {
    grid?: SimpleGridLineOptions;
    ticks?: SimpleTickOptions;
}

export interface SimpleScalesOptions {
    [key: string]: SimpleScaleOptions; // Cho phép các trục x, y, r...
}

// --- Tùy chọn Tooltip đơn giản (chỉ màu sắc) ---
export interface SimpleTooltipOptions {
    enabled?: boolean;
    backgroundColor?: string;
    titleColor?: string;
    bodyColor?: string;
    footerColor?: string;
    borderColor?: string;
    borderWidth?: number;
}

export interface SimpleLegendLabelOptions {
    color?: string;
}

export interface SimpleLegendOptions {
    labels?: SimpleLegendLabelOptions;
}


// --- Tùy chọn Plugins đơn giản ---
export interface SimplePluginOptions {
    tooltip?: SimpleTooltipOptions;
    legend?: SimpleLegendOptions;
    title?: {
        display?: boolean;
        text?: string | string[];
        color?: string;
    };
}

// --- BaseChartOptions đơn giản hóa ---
export interface SimpleBaseChartOptions {
    responsive?: boolean; // Nên giữ lại
    maintainAspectRatio?: boolean; // Có thể giữ lại (ảnh hưởng layout nhưng quan trọng)
    elements?: SimpleChartElementsConfiguration;
    scales?: SimpleScalesOptions;
    plugins?: SimplePluginOptions;
    [key: string]: any;
}

// --- Hồ sơ Branding (giữ nguyên hoặc đơn giản hóa nếu cần) ---
export interface BrandingProfile {
    containerBackgroundColor?: string;
    chartTitleColor?: string; // Có thể map vào plugins.title.color
    fontFamily?: string; // Khó áp dụng nếu không muốn ảnh hưởng layout từ font size
}

// --- ChartConfig sử dụng các interface đơn giản hóa ---
export interface FinalChartConfig {
    type: 'scatter' | 'bar' | 'pie' | 'line';
    data: SimpleGenericChartData;
    options?: SimpleBaseChartOptions;
    brandingProfile?: BrandingProfile; // Giữ lại để style container
}