import Header from "../components/Header";
import Container from "../components/Container";
import Section from "../components/Section";
import ImageWithInfo from "../components/ImageWithInfo";
import BigDropdown from "../components//BigDropdown";
import Footer from "../components/Footer";
import {Slide} from "react-awesome-reveal";
import * as images from "../images";

const Altai = () => {
  const Climate =
    "Климат резко-континентальный, с коротким жарким летом и длинной морозной зимой. \n\n Среднегодовая температура воздуха в долинах составляет 0...+5 °С (теплее всего в Чемале), что является самой высокой температурой для Сибири. \n\n В горах среднегодовая температура воздуха спускается до -6 °С (село Кош-Агач). \n\n Кош-Агачский и Улаганский районы приравнены к районам Крайнего Севера.";
  const Tourism =
    "Ежегодно на Алтай приезжает до одного миллиона туристов. Среди активных видов отдыха наибольший объем занимают летние экологические и культурно-познавательные путешествия и экскурсии по автомобильным пешим, конным, водным, альпинистским, разным иным маршрутам с посещением природных и культурно-исторических объектов и территорий. На территории республики находится большое число примечательных природных объектов.";
  const Nature =
    "Природа Горного Алтай очень красивая, многообразная, как и его рельеф. \n\n Равниины находятся в западной и центральной его части. А север, восток и юг - горы. Равнинная часть занята лесостепью и степью. В горных долинах и на плоскогорье растут леса - в основном хвойные и лиственные. \n\n На Алтае огромное количество рек, водопадов. Самые крупные реки - Катунь и Бия. Также на территории края около 20 тысяч озёр.";
  const People =
    "В Республике Алтай живут русские (56,6%), алтайцы (33,9%) и казахи (6,2%). Другие национальности тоже есть: всего - 3,3;. \n\n Алтай - один из самых малонаселенных регионов России. На территории 93. тыс. кв. км здесь проживает 211 тыс. человек. Меньше жителей, чем в Алтае, лишьш в Еврейской автономной области, Республике Чукотка и Магаданской области. При этом 71% населения - жители сельской местности. Еще одна особенность региона с точки зрения населения - просто огромная рождаемость 22,4 чел. на 1000 жителей, что в два раза выше, чем смертность.";
  const Culture =
    "В Горно-Алтайске работают Национальный музей Республики Алтай, Национальная библиотека Республики Алтай, Национальный театр Республики Алтай (открыт 17 августа 1971 года), городской дом культуры. \n\n Приводятся национальные праздници Масленица, Наурыз, Чага-Байрам, получивший с февраля 2013 года официальный статус республиканского праздника. \n\n В городе действует пять библиотек (три городских и две республиканские).";
  const Transport =
    "Автомобильный транспорт играет в жизни республики важнейшую роль, хотя сеть автомобильных дорог развита недостаточно. Столица республики связана автобусным сообщением со всеми районными центрами. Работает аэропорт Горно-Алтайск. \n\n На территории республики действует несколько коммерческих вертолетных площадок.\n\n Железных дорого в Республике Алтай на данный момент нет. Ближайшая железнодорожная станция - Бийск Западно-Сибирской железной дороги.";

  const leftTextBlocks = ["Климат", "Туризм", "Природа"];
  const imageUrl = images.Main;
  const rightTextBlocks = ["Транспорт", "Культура", "Население"];
  const cardImages = [
    images.Climate,
    images.Tourism,
    images.Nature,
    images.Transport,
    images.Culture,
    images.People,
  ];
  const cardTexts = [Climate, Tourism, Nature, Transport, Culture, People];

  const dropdownItems = [
    {
      title: "Как правильно в Алтай или на Алтай?",
      content: "Разница в том, что если речь идёт говорить о не строго ограниченном городе, регионе, то нужно писать 'на' - на Алтае, а вот если значение в ограниченном пространстве, тогда пишем 'в', правильно в Алтайском крае.",
    },
    {
      title: "На каком языке говорят на Алтае?",
      content:
        "Алтайский / Южно-алтайский язык (алт. Алтай тил) - один из горно-алтайских языков, родной, общенациональный и литературный язык алтайцев. Государственный язык Республики Алтай. До 1948 года назывался Ойротским.",
    },
    {
      title: "Что означает слово Алтай?",
      content: "«Алтай» от монгольского Алттай – «золотоносный». Золото на Алтае действительно добывали с глубокой древности. В китайских источниках горы часто называли «Цзиньшань» - «Золотые горы».",
    },
    {
      title: "Как правильно Алтайский край или Республика Алтай?",
      content: "На территории российского Алтая расположены два субъекта. Российской Федерации: Алтайский край и Республика Алтай. В Алтайском крае проживают преимущественно русские и, условно говоря, название этого региона РФ «замыкается» исключительно на географическом названии «Алтай». Республика Алтай - регион компактного проживания алтайцев (самоназвание - алтай-кижи). Географическое положение. Республика находится на юге Западной Сибири, в самом центре.",
    },
    {
      title: "Где начинается Алтайский край?",
      content: "Алтайский край расположен на юго-востоке Западной Сибири между 50 и 55 градусами северной широты и 77 и 87 градусами восточной долготы. Протяжённость территории с запада на восток около 600 км, с севера на юг около 400 км. Расстояние от Барнаула до Москвы по прямой около 2940 км, по автомобильным дорогам около 3600 км.",
    },
    {
      title: "Что входит в состав алтайских гор?",
      content: "Специалисты рассматривают Алтай как составную часть Алтае-Саянской горной страны, в состав которой входят горные системы и межгорные котловины – Алтай, Салаирский кряж, Кузнецкий Алатау, Западный и Восточный Саяны, Восточно-Тувинское нагорье, а также котловины – Кузнецкая, Минусинская, Тувинская.",
    },
  ];

  const sideImageContainer = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "8rem",
  };

  const imageContainer = {
    flex: 1,
    height: "600px",
  };

  const interestingImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "6px",
  };

  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Slide direction="up" triggerOnce>
        <Section
          title="Что же такое Алтай?"
          content={
            <div>
              <ImageWithInfo
                leftTextBlocks={leftTextBlocks}
                imageUrl={imageUrl}
                rightTextBlocks={rightTextBlocks}
                cardImages={cardImages}
                cardTexts={cardTexts}
              />
            </div>
          }
        ></Section>
        <Section
          content={
            <div style={sideImageContainer}>
              <BigDropdown title="Немного интересного" items={dropdownItems} />
              <Slide direction="up" triggerOnce>
                <div style={imageContainer}>
                  <img
                    src={images.Interesting}
                    alt="Interesting"
                    style={interestingImage}
                  />
                </div>
              </Slide>
            </div>
          }
        ></Section>
      </Slide>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Altai;
