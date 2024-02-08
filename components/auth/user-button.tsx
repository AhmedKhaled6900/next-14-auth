"use client"

import { FaUser } from "react-icons/fa"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "./logout-button"
import { ExitIcon } from "@radix-ui/react-icons"
import { LoginButton } from "./login-button"

export const UserButton = () => {
    const user = useCurrentUser()
    return (    
        <>
                {!user && (
                        <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={ ""} />
                                <AvatarFallback className="bg-violet-600">
                                    <FaUser className="text-white" />
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                     
                        <DropdownMenuContent className="w-40" align="end">
                        <LoginButton asChild>
                        <DropdownMenuItem>
                            <ExitIcon className="mr-2 h-4 w-4"/>
                            Sign in
                        </DropdownMenuItem>
                    </LoginButton>
                    </DropdownMenuContent>
                    </DropdownMenu>
                           )
                        }

{user && (
                        <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user?.image || ""} />
                                <AvatarFallback className="bg-violet-600">
                                    <FaUser className="text-white" />
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                     
                        <DropdownMenuContent className="w-40" align="end">
                        <LogoutButton >
                        <DropdownMenuItem>
                            <ExitIcon className="mr-2 h-4 w-4"/>
                         sign out
                        </DropdownMenuItem>
                    </LogoutButton>
                    </DropdownMenuContent>
                    </DropdownMenu>
                           )
                        }

        </>
        

                        )
                    
                    }
