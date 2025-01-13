import Hero from "./components/00.Home/Home";
import Works from "./components/02.Heros/Heros";
import GeometricShapes from "./components/01.GeometricShapes/GeometricShapes";

const Home = () => {
  return (
    <main className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto text-white bg-purple-background">
      <Hero />
      <GeometricShapes />
      <Works />
    </main>
  );
};

export default Home;