import { Footer } from "./footer";
import { FloatingToolbar } from "./floating-toolbar";
import { Header } from "./header";
import { Hero } from "./hero";
import { CaseSection } from "./case-section";
import { NewsSection } from "./news-section";
import { SolutionsSection } from "./solutions-section";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <CaseSection />
        <SolutionsSection />
      </main>
      <Footer />
      <FloatingToolbar />
    </>
  );
}
