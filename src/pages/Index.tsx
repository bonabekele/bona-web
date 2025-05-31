import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SubscriptionRating from "@/components/SubscriptionRating";
import { projects, skills } from "@/lib/data"; // Import projects and skills

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">
              Rate My Web
            </h2>
            <div className="max-w-md mx-auto">
              <SubscriptionRating />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
