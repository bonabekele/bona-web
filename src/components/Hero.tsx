import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { ChevronRight, Download } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Hello, I'm{" "}
                <span className="text-primary">
                  {profile.firstName} {profile.lastName}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                {profile.title}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">{profile.bio}</p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects <ChevronRight className="ml-1" size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
