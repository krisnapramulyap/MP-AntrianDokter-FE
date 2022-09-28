import { HomeNavbar } from "./components/navbar/navbar"
import { FooterHome } from "./components/footer/footer"
import { Carousel } from "./components/carousel/carousel"
import { Content } from "./components/content/content"
import "../css/style.css"
import "../css/style.css"

function Home() {
  return (
    <div>
      <HomeNavbar />
      <Carousel />
      <Content />
      <FooterHome />
    </div>
  );
}

export default Home;