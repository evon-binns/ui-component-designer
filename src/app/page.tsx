import { auth } from "@clerk/nextjs/server";
import { UserButton, SignInButton } from "@clerk/nextjs";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">UI Component Designer</h1>
      {userId ? (
        <div>
          <UserButton />
          <Button>Test Button</Button>
          <Badge>Test Badge</Badge>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <p className=''>
            Lorem ipsum dolor sit amet consectetur. Viverra semper consequat vel nec tristique adipiscing molestie netus accumsan. Velit massa ullamcorper posuere convallis nec. Praesent consectetur arcu commodo morbi massa lobortis. Augue faucibus convallis natoque turpis nibh eget dignissim.
          </p>
        </div>
      ) : (
        <div>
          <p>Please sign in to use the UI Component Designer.</p>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
          <Link href="/sign-up" className="ml-4 text-blue-500 hover:text-blue-700">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </main>
  )
}
