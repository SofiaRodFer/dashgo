import { Box, Checkbox, Td, Tr, Text, Button, Icon, useBreakpointValue, Link } from "@chakra-ui/react";

import { RiPencilLine } from "react-icons/ri";
import { api } from "../services/api";
import { queryClient } from "../services/queryClient";

interface UserTableItemProps {
    user: {
        id: string;
        name: string;
        email: string;
        createdAt: string;
    }
}

export function UserTableItem({ user }: UserTableItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['users', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data
        }, {
            staleTime: 1000 * 60 * 10 // 10 minutos
        })
    }
    
    return (
        <Tr>
            <Td px={['4', '4', '6']}>
                <Checkbox colorScheme='pink' />
            </Td>
            <Td>
                <Box>
                    <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                        <Text fontWeight='bold'>{user.name}</Text>
                    </Link>
                    <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                </Box>
            </Td>
            { isWideVersion && <Td>{user.createdAt}</Td> }
            <Td>
            { isWideVersion && <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='purple'
              leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
            >
                editar
            </Button> }
            </Td>
        </Tr>
    )
}