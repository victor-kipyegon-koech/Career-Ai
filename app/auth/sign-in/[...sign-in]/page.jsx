//  import { SignIn } from '@clerk/nextjs'
 
 
//  const page = () => {
//    return (
//      <SignIn/>
//    )
//  }
 
//  export default page
 
import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <SignIn 
      fallbackRedirectUrl="/onboarding" 
      signUpFallbackRedirectUrl="/onboarding"
    />
  )
}

export default Page
 