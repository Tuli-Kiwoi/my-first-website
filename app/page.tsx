import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: '700', textAlign: 'center', color: 'red', marginBottom: '2rem' }}>hello Tuli</h1>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <Image src="/pic 1.jpg" alt="Pic 1" width={300} height={200} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/pic2.jpg" alt="Pic 2" width={300} height={200} />
          </CarouselItem>
          <CarouselItem>
            <Image src="/pic3.jpg" alt="Pic 3" width={300} height={200} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
