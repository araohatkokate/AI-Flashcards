import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
      <Container maxWidth="100vw">
          <Head>
            <title>AI-Flashcards</title>
            <meta name = "description" content = "Create flashcards from your text" />
          </Head>

          <AppBar position="static">
            <Toolbar>
              <Typography variant = "h6" style={{flexGrow: 1}}>AI-Flashcards</Typography>
              <SignedOut>
                <Button color = "inherit">Login</Button>
                <Button color = "inherit">Sign Up</Button>
              </SignedOut>
            </Toolbar>
          </AppBar>
        </Container>
  )
}
