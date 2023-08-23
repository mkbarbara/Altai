import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Section from "../components/Section";
import CardWithPhoto from "../components/CardWithPhoto";
import * as images from "../images";
import Footer from "../components/Footer";
import { Slide } from "react-awesome-reveal";

const Team = () => {
  const aboutTeam = {
    fontFamily: "TextRegular",
    fontSize: "1rem",
    textAlign: "justify",
    maxWidth: "620px",
  };

  const pContainer = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "4rem",
  };

  const teamContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "3rem",
  };

  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Section
        content={
            <div>
              <div style={pContainer}>
                <p style={aboutTeam}>
                  Чтобы стать частью нашей команды, нужно быть не только
                  профессионалом в области туризма, но ещё и надёжным, добрым и
                  отзывчивым человеком. Горный туризм является опасным настолько
                  же, насколько увлекательным и интересным. Поэтому мы не можем
                  себе позволить большую команду, но зато мы можем поручиться за
                  каждого нашего инструктора. Безопасность, комфорт и море
                  положительных эмоций - всё это Вы легко получите в турах с
                  нашим инструкторам.
                </p>
              </div>
              <div style={teamContainer}>
                <Slide direction="up" cascade damping={1e-1} triggerOnce>
                  <CardWithPhoto
                    photo={images.Alex}
                    title={"Алексей"}
                    text={
                      "Главный инструктор по пешим и горным походам. Кмс по спортивному туризму \n Составляет маршруты пеших и автотуров. В горном туризме работает с 2000 года."
                    }
                  ></CardWithPhoto>
                  <CardWithPhoto
                    photo={images.Sasha}
                    title={"Александра"}
                    text={
                      "Помощник нашего главного инструктора по пешим и горным походам. В горном туризме работает с 2020 года"
                    }
                  ></CardWithPhoto>
                  <CardWithPhoto
                    photo={images.Vasilisa}
                    title={"Василиса"}
                    text={
                      "Ведущий инструктор по пешим походам. КМС по спортивному туризму. В пешем туризме работает с 2010 года."
                    }
                  ></CardWithPhoto>
                  <CardWithPhoto
                    photo={images.Uragan}
                    title={"Ураган"}
                    text={
                      "Добрый, быстрый, сильный, послушный мальчик породы хаски. Очень любит детей. В нашей команде с рождения."
                    }
                  ></CardWithPhoto>
                  <CardWithPhoto
                    photo={images.Brothers}
                    title={"Лея и Рой"}
                    text={
                      "Брат и сестра породы хаски. Очень любят групповые и пешие походы."
                    }
                  ></CardWithPhoto>
                  <CardWithPhoto
                    photo={images.Pulya}
                    title={"Пуля"}
                    text={
                      "Быстрая активная и ласковая девочка хаски. Пешие походы с детьми её самые любимые."
                    }
                  ></CardWithPhoto>
                </Slide>
              </div>
            </div>
        }
      ></Section>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Team;
