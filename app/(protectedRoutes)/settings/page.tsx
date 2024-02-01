"use client"
import { useTransition } from 'react'
import { signOut } from 'next-auth/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { settings } from '@/actions/settings'
// import { useCurrentUser } from '@/hooks/use-current-user'
const  SettingsPage = ()=> {
  const [isPending,startTransition] = useTransition()

const onClick = ()=>{

startTransition(() => {
  settings({name:"vvv name"})

})

}
  return (
   <Card>
    <CardHeader>
      <p>
        Settings
      </p>
    </CardHeader>
<CardContent>
  <Button disabled={isPending}   onClick={onClick}>
    update name
  </Button>
</CardContent>
   </Card>

  )
}

export default SettingsPage