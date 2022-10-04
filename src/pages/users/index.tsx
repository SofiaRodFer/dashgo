import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from 'react-icons/ri'
import { Pagination } from "../../components/Pagination";
import { UserTableItem } from "../../components/UserTableItem";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";


export default function UserList() {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            usuários
                            { !isLoading && isFetching && <Spinner size='sm' color="gray.500" ml='4' /> }
                        </Heading>
                        <Link href='/users/create' passHref>
                            <Button
                              as='a'
                              size='sm'
                              fontSize='sm'
                              colorScheme='pink'
                              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                            >
                                criar novo
                            </Button>
                        </Link>
                    </Flex>

                    { isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>dalha ao obter dados dos usuários.</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme='whiteAlpha'>
                            <Thead>
                                <Tr>
                                    <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                        <Checkbox colorScheme='pink' />
                                    </Th>
                                    <Th>usuário</Th>
                                    { isWideVersion && <Th>data de cadastro</Th> }
                                    <Th width='8'></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { data.users.map(user => {
                                    return (
                                        <UserTableItem key={user.id} user={{
                                            id: user.id,
                                            name: user.name,
                                            email: user.email,
                                            createdAt: user.createdAt
                                        }} />
                                    )
                                }) }
                            </Tbody>
                        </Table>

                        <Pagination
                            totalCountOfRegisters={data.totalCount}
                            currentPage={page}
                            onPageChange={setPage}
                        />
                    </>
                    ) }
                </Box>
            </Flex>
        </Box>
    )
}