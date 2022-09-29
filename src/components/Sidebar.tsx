import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <Box>
                    <Text fontWeight='bold' color='gray.400' fontSize='small'>geral</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' alignItems='center'>
                            <Icon as={RiDashboardLine} fontSize='20' />
                            <Text ml='4' fontWeight='medium'>dashboard</Text>
                        </Link>
                        <Link display='flex' alignItems='center'>
                            <Icon as={RiContactsLine} fontSize='20' />
                            <Text ml='4' fontWeight='medium'>usuários</Text>
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight='bold' color='gray.400' fontSize='small'>automação</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' alignItems='center'>
                            <Icon as={RiInputMethodLine} fontSize='20' />
                            <Text ml='4' fontWeight='medium'>formulários</Text>
                        </Link>
                        <Link display='flex' alignItems='center'>
                            <Icon as={RiGitMergeLine} fontSize='20' />
                            <Text ml='4' fontWeight='medium'>automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}