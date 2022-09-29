import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { options, series } from '../utils/chartOptions'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

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
                        <Chart options={options} series={series} type='area' height={160} />
                    </Box>

                    <Box
                        p='8'
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>taxa de abertura</Text>
                        <Chart options={options} series={series} type='area' height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}