import Header from "../components/Header";
import Section from "../components/Section";
import ImageWithBackground from "../components/ImageWithBackground";
import general_styles from "../styles/styles";
import * as images from "../images";
import Container from "../components/Container";
import Slider from "../components/Slider";
import BlocksWithLines from "../components/BlocksWithLines";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";

const cardsData = [
  {
    title: "Вода Алтая",
    imageSrc: images.Tour1,
    link: "voda",
  },
  {
    title: "Горы Алтая",
    imageSrc: images.Tour2,
    link: "voda",
  },
  {
    title: "Животный мир Алтая",
    imageSrc: images.Tour3,
    link: "voda",
  },
];

const texts = [
  "Специальная подготовка не требуется",
  "Опытные инструкторы с многолетним стажем",
  "Групповые или индивидуальные туры",
  "Всё включено",
];

const Home = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Fade triggerOnce>
      <Section
        content={
          <div style={general_styles.mainDescription}>
            <ImageWithBackground
              text="Алтай"
              imageURL={images.Background}
            ></ImageWithBackground>
          </div>
        }
      ></Section></Fade>
        <Fade triggerOnce direction="up">
        <Section
          title="Ближайшие туры"
          content={<Slider cards={cardsData} />}
        ></Section>
        </Fade>
      <Section
        title="Немного о наших турах"
        content={
          <div>
            <BlocksWithLines texts={texts} />
            <div style={general_styles.commentBlocksStyles}>
              Отправиться в путешествие Вашей мечты легко, потому что мы всё
              сделаем сами:
            </div>
            <EmailForm styleSet="big" />
          </div>
        }
      ></Section>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
