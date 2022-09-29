import { theme } from "@chakra-ui/react";

export const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-09-18T00:00:00.000Z',
            '2022-09-19T00:00:00.000Z',
            '2022-09-20T00:00:00.000Z',
            '2022-09-21T00:00:00.000Z',
            '2022-09-22T00:00:00.000Z',
            '2022-09-23T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        },
        colors: [theme.colors.pink[600], theme.colors.pink[500], theme.colors.pink[400]]
    },
    colors: [
        theme.colors.pink[500]
    ]

}

export const series = [
    {
        name: 'series1',
        data: [31, 120, 10, 40, 180, 20]
    }
]