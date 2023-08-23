import Header from "../components/Header";
import Section from "../components/Section";
import ImageWithBackground from "../components/ImageWithBackground";
import Slide from "react-reveal/Slide";
import general_styles from "../styles/styles";
import * as images from "../images";
import Container from "../components/Container";
import Slider from "../components/Slider";
import BlocksWithLines from "../components/BlocksWithLines";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";

const cardsData = [
  {
    title: "Вода Алтая",
    imageSrc: images.Tour1,
  },
  {
    title: "Горы Алтая",
    imageSrc: images.Tour2,
  },
  {
    title: "Животный мир Алтая",
    imageSrc: images.Tour3,
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
      <Slide bottom>
        <Section
          content={
            <div style={general_styles.mainDescription}>
              <ImageWithBackground
                text="Алтай"
                imageURL={images.Background}
              ></ImageWithBackground>
            </div>
          }
        ></Section>
        <Section
          title="Ближайшие туры"
          content={<Slider cards={cardsData} />}
        ></Section>
      </Slide>
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
