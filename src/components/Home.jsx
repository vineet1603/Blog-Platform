import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PopularBlogs from "./PopularBlogs";
import FeaturedBlogs from "./FeaturedBlogs";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularBlogs />
      <FeaturedBlogs />
    </>
  );
}

export default Home;