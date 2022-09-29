import { Box, Checkbox, Td, Tr, Text, Button, Icon } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface UserTableItemProps {
    user: {
        name: string;
        email: string;
        createdAt: string;
    }
}

export function UserTableItem({ user }: UserTableItemProps) {
    return (
        <Tr>
            <Td px='6'>
                <Checkbox colorScheme='pink' />
            </Td>
            <Td>
                <Box>
                    <Text fontWeight='bold'>{user.name}</Text>
                    <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                </Box>
            </Td>
            <Td>
                {user.createdAt}
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
    )
}