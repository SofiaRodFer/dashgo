import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>usuários</Heading>
                        <Button
                          as='a'
                          size='sm'
                          fontSize='sm'
                          colorScheme='pink'
                          leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>usuário</Th>
                                <Th>data de cadastro</Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Sofia Rodrigues Ferreira</Text>
                                        <Text fontSize='sm' color='gray.300'>sofiarodrigues45@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    28 de Setembro, 2022
                                </Td>
                                <Td>
                                <Button
                                  as='a'
                                  size='sm'
                                  fontSize='sm'
                                  colorScheme='purple'
                                  leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                >
                                    editar
                                </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Sofia Rodrigues Ferreira</Text>
                                        <Text fontSize='sm' color='gray.300'>sofiarodrigues45@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    28 de Setembro, 2022
                                </Td>
                                <Td>
                                <Button
                                  as='a'
                                  size='sm'
                                  fontSize='sm'
                                  colorScheme='purple'
                                  leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                >
                                    editar
                                </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Sofia Rodrigues Ferreira</Text>
                                        <Text fontSize='sm' color='gray.300'>sofiarodrigues45@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    28 de Setembro, 2022
                                </Td>
                                <Td>
                                <Button
                                  as='a'
                                  size='sm'
                                  fontSize='sm'
                                  colorScheme='purple'
                                  leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                >
                                    editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}