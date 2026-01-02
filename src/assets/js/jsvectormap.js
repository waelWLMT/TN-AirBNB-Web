// World map by jsVectorMap
new jsVectorMap({
    selector: '#world-map',
    map: 'world'
});

// Sparkline charts
const option_sparkline1 = {
    series: [
        {
            data: [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]
        }
    ],
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC']
}

const sparkline1 = new ApexCharts(
    document.querySelector('#sparkline-1'),
    option_sparkline1
)
sparkline1.render()

const option_sparkline2 = {
    series: [
        {
            data: [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]
        }
    ],
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC']
}

const sparkline2 = new ApexCharts(
    document.querySelector('#sparkline-2'),
    option_sparkline2
)
sparkline2.render()

const option_sparkline3 = {
    series: [
        {
            data: [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]
        }
    ],
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC']
}

const sparkline3 = new ApexCharts(
    document.querySelector('#sparkline-3'),
    option_sparkline3
)
sparkline3.render()