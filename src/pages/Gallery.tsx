import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryData } from "@/lib/data";
import React, { useState } from "react";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold font-heading mb-8">My Gallery</h1>
          <p className="text-muted-foreground mb-8">
            A collection of my daily activities, projects in progress, and
            creative moments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openImage(index)}
              >
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl">
          {selectedImage !== null && (
            <>
              <DialogHeader>
                <DialogTitle>{galleryData[selectedImage].title}</DialogTitle>
                <DialogDescription>
                  {galleryData[selectedImage].date}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={galleryData[selectedImage].imageUrl}
                  alt={galleryData[selectedImage].title}
                  className="w-full rounded-lg"
                />
                <p className="mt-4">{galleryData[selectedImage].description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
