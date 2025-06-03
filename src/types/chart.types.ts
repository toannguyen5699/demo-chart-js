export interface SimpleChartDataset {
    /** The label for the dataset which appears in the legend and tooltips. */
    label?: string;
    /** The data to plot. For most chart types, this is an array of numbers. For scatter charts, it's an array of objects with x and y properties. */
    data: any[] | { x: any; y: any }[];

    // Colors and borders for the dataset elements (bars, lines, pie slices)
    /**
     * The background color of the dataset elements.
     * For bar/pie charts, this can be an array of colors for each segment, or a single color applied to all.
     * For line charts, this often refers to the fill color under the line if 'fill' is enabled.
     */
    backgroundColor?: string | string[];
    /** The border color of the dataset elements. */
    borderColor?: string ;
    /** The border width of the dataset elements (in pixels). */
    borderWidth?: number;

    // Line dataset specific styling
    /**
     * How to fill the area under the line (if a line chart).
     * `true` or `'origin'` fills to the origin. `'start'` fills to the start of the dataset.
     * `'end'` fills to the end. `false` disables filling.
     */
    fill?: boolean | 'start' | 'end' | 'origin';

    // Point specific styling (for line and scatter charts)
    /** The background color of the points. */
    pointBackgroundColor?: string;
    /** The border color of the points. */
    pointBorderColor?: string;
    /** The border width of the points (in pixels). */
    pointBorderWidth?: number;
    /** The radius of the points (in pixels). */
    pointRadius?: number;
}

// --- Chart Data Structure ---
export interface SimpleGenericChartData {
    /**
     * Labels for the x-axis (or categories for pie/doughnut charts).
     * Each label corresponds to a data point at the same index in the datasets.
     */
    labels?: string[];
    /** An array of dataset objects to be plotted on the chart. */
    datasets: SimpleChartDataset[];
}

// --- Simplified Tooltip Options (colors only) ---
export interface SimpleTooltipOptions {
    /** Are tooltips enabled? */
    enabled?: boolean;
    /** The background color of the tooltip. */
    backgroundColor?: string;
    /** The color of the tooltip's title text. */
    titleColor?: string;
    /** The color of the tooltip's body text. */
    bodyColor?: string;
    /** The color of the tooltip's footer text. */
    footerColor?: string;
    /** The border color of the tooltip. */
    borderColor?: string;
    /** The border width of the tooltip (in pixels). */
    borderWidth?: number;
}

// --- Simplified Legend Options (label color only) ---
export interface SimpleLegendLabelOptions {
    /** The color of the text for legend items. */
    color?: string;
}

export interface SimpleLegendOptions {
    /** Configuration for the legend labels. */
    labels?: SimpleLegendLabelOptions;
    // /** Whether to display the legend. true by default. */
    // display?: boolean; // Removed as it affects layout
    // /** Position of the legend. 'top', 'left', 'bottom', 'right'. */
    // position?: 'top' | 'left' | 'bottom' | 'right'; // Removed as it affects layout
}


// --- Simplified Plugin Options ---
export interface SimplePluginOptions {
    /** Configuration for the tooltips. */
    tooltip?: SimpleTooltipOptions;
    /** Configuration for the chart legend. */
    legend?: SimpleLegendOptions;
    /** Configuration for the main chart title. */
    title?: {
        /** Whether to display the title. */
        display?: boolean;
        /** The text of the title. Can be a string or an array of strings for multi-line titles. */
        text?: string | string[];
        /** The color of the title text. */
        color?: string;
    };
}

// --- Simplified BaseChartOptions ---
export interface SimpleBaseChartOptions {
    /** Whether the chart should be responsive and resize when the canvas container resizes. */
    responsive?: boolean;
    /** Configuration for various plugins like tooltip, legend, and title. */
    plugins?: SimplePluginOptions;
    // /** Configuration for the chart elements (points, lines, bars, arcs). */
    // elements?: SimpleChartElementsConfiguration; // Assuming this was intended to be here from previous versions.
    // /** Configuration for the chart scales (axes). */
    // scales?: SimpleScalesOptions; // Assuming this was intended to be here from previous versions.
}

// --- Branding Profile (keep as is or simplify if needed) ---
export interface BrandingProfile {
    /** Background color for the chart's container div (applied via custom component styling). */
    containerBackgroundColor?: string;
    /** Color for the chart's main title (can be mapped to plugins.title.color). */
    chartTitleColor?: string;
}

// --- ChartConfig using simplified interfaces ---
export interface FinalChartConfig {
    /** The type of chart to render (e.g., 'bar', 'line'). */
    type: 'scatter' | 'bar' | 'pie' | 'line';
    /** The data object for the chart, containing labels and datasets. */
    data: SimpleGenericChartData;
    /** The options object for configuring the chart's appearance and behavior. */
    options?: SimpleBaseChartOptions;
    /** Branding profile for custom styling outside of direct Chart.js options. */
    brandingProfile?: BrandingProfile;
}