'use client'

import { useUser } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
    const {user} = useUser();
  return (
    <div className="flex items-center justify-between p-5">
      {user && <>
      <h1 className="text-2xl">{user?.firstName}{`'s`} <span className="text-blue-600">Space</span></h1>
      </>}

{/* BreadCrumps */}

<SignedOut>
    <SignInButton/>
</SignedOut>
<SignedIn> 

    <UserButton/>
</SignedIn>
    



    </div>
  )
}

export default Header
