import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import image4 from "../assets/images/image4.jpg"

// ... (import other images as needed)
const images = [image1, image2, image3, image4];

export default function CustomCarousel() {
  return (
    <div className=" justify-center">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-8">
                <Card className="pt-6">
                  <CardContent>
                    <img src={image}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
