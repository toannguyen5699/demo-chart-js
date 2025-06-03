export interface SimpleChartDataset {
    label?: string;
    data: any[] | { x: any; y: any }[]; // Data is core

    // Colors and borders for the dataset
    backgroundColor?: string | string[]; // For bar/pie, this can be an array of colors for each segment, or a single color.
    borderColor?: string ;
    borderWidth?: number;

    // Line dataset specific styling (fill color)
    fill?: boolean | 'start' | 'end' | 'origin'; // Fill area under the line

    // Point specific styling (for line, scatter)
    pointBackgroundColor?: string;
    pointBorderColor?: string;
    pointBorderWidth?: number;
    pointRadius?: number;
}

// --- Chart Data Structure ---
export interface SimpleGenericChartData {
    labels?: string[];
    datasets: SimpleChartDataset[];
}

// --- Simplified Tooltip Options (colors only) ---
export interface SimpleTooltipOptions {
    enabled?: boolean;
    backgroundColor?: string;
    titleColor?: string;
    bodyColor?: string;
    footerColor?: string;
    borderColor?: string;
    borderWidth?: number;
}

// --- Simplified Legend Options (label color only) ---
export interface SimpleLegendLabelOptions {
    color?: string; // Text color of items in the legend
}

export interface SimpleLegendOptions {
    labels?: SimpleLegendLabelOptions;
}

// --- Simplified Plugin Options ---
export interface SimplePluginOptions {
    tooltip?: SimpleTooltipOptions;
    legend?: SimpleLegendOptions;
    title?: { // Main chart title
        display?: boolean;
        text?: string | string[];
        color?: string;
    };
}

// --- Simplified BaseChartOptions ---
export interface SimpleBaseChartOptions {
    responsive?: boolean;
    plugins?: SimplePluginOptions;
}

// --- Branding Profile (keep as is or simplify if needed) ---
export interface BrandingProfile {
    containerBackgroundColor?: string;
    chartTitleColor?: string; // Can be mapped to plugins.title.color
}

// --- ChartConfig using simplified interfaces ---
export interface FinalChartConfig {
    type: 'scatter' | 'bar' | 'pie' | 'line';
    data: SimpleGenericChartData;
    options?: SimpleBaseChartOptions;
    brandingProfile?: BrandingProfile; // Keep for styling the container
}