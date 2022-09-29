import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title='geral'>
                <NavLink icon={RiContactsLine} href='/dashboard'>dashboard</NavLink>
                <NavLink icon={RiDashboardLine} href='/users'>usuários</NavLink>
            </NavSection>

            <NavSection title='automação'>
                <NavLink icon={RiInputMethodLine} href='/forms'>formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href='/automation'>automação</NavLink>
            </NavSection>
        </Stack>
    )
}