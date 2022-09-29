import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from "../../components/Pagination/index.tsx";
import { UserTableItem } from "../../components/UserTableItem";

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
                            <UserTableItem user={{
                                name: 'Sofia Rodrigues Ferreira',
                                email: 'sofiarodrigues45@gmail.com',
                                createdAt: '28 de Setembro, 2022'
                            }} />

                            <UserTableItem user={{
                                name: 'Sofia Rodrigues Ferreira',
                                email: 'sofiarodrigues45@gmail.com',
                                createdAt: '28 de Setembro, 2022'
                            }} />

                            <UserTableItem user={{
                                name: 'Sofia Rodrigues Ferreira',
                                email: 'sofiarodrigues45@gmail.com',
                                createdAt: '28 de Setembro, 2022'
                            }} />
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}