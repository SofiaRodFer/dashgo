import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>

                <NavSection title='geral'>
                    <NavLink icon={RiContactsLine}>dashboard</NavLink>
                    <NavLink icon={RiDashboardLine}>usuários</NavLink>
                </NavSection>

                <NavSection title='automação'>
                    <NavLink icon={RiInputMethodLine}>formulários</NavLink>
                    <NavLink icon={RiGitMergeLine}>automação</NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}