import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesData } from "@/lib/data";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold font-heading mb-4">My Services</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            I offer a range of professional services to help businesses and
            individuals achieve their goals. Here are the key areas where I can
            provide expertise and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-sm mb-2">
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-muted text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
