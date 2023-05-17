import { seriesLoadScripts, loadLinks, $$ } from "../../utils/util";
import { luckysheetPrint } from "./print";
import Store from "../../store";

// Dynamically load dependent scripts and styles
const dependScripts = [
    // 'expendPlugins/chart/chartmix.umd.min.js',
    "http://localhost:8080/luckysheetPluginPrint.umd.js",
];

const dependLinks = [
    // 'expendPlugins/chart/chartmix.css',
    "http://localhost:8080/luckysheetPluginPrint.css",
];

// Initialize the chart component
function print(options, config, isDemo) {
    const data = options.data;
    loadLinks(dependLinks);

    seriesLoadScripts(dependScripts, null, function() {});

    Store.luckysheetPrint = luckysheetPrint;
}

export { print };
