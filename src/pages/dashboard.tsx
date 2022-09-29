import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
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
const series = [
    {
        name: 'series1',
        data: [31, 120, 10, 40, 180, 20]
    }
]

export default function Dashboard() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>inscritos da semana</Text>
                        <Chart  options={options} series={series} type='area' height={160} />
                    </Box>

                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>taxa de abertura</Text>
                        <Chart  options={options} series={series} type='area' height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}