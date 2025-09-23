import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { Helmet } from "react-helmet";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // IMPORTANT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../constants";
const Work = () => {
  const [conent, setContent] = useState([
    "Dirt Track Academy Logo Design",
    "This is a description of Project 1… The bold typography and tagline “Simply Winning” emphasize confidence. This is a description of Project 1… The bold typography and tagline “Simply Winning” emphasize confidence. This is a description of Project 1… The bold typography and tagline “Simply Winning” emphasize confidence. This is a description of Project 1… The bold typography and tagline “Simply Winning” emphasize confidence. This is a description of Project 1… The bold typography and tagline “Simply Winning” emphasize confidence.",
  ]);
  // eslint-disable-next-line no-unused-vars
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [selected, setSelected] = useState("01");

  const options = [
    { id: "01", icon: faPen, label: "Logo Design" },
    { id: "02", icon: faPenRuler, label: "UI/UX Design" },
    { id: "03", icon: faPen, label: "Web Design" },
  ];

 const imagesSlide = [
  {
    originalTitle: "Dirt Track Academy Logo Design",
    original: images.logo01,
    description:
      "This logo was created for an Australian motorcycle training school focused on taking racing skills to the next level. The concept captures the thrill of speed and safety through a rider illustration, while the bold orange gradient type reflects energy, motion, and a competitive spirit.",
  },
  {
    originalTitle: "Jai’s Healthy Vending Logo Design",
    original: images.logo02,
    description:
      "This logo was created for a vending business that promotes nutritious food choices. The vibrant green and yellow circle represents freshness, energy, and vitality, while the handwritten script style of Healthy adds a natural, friendly touch. The tagline “Eat to live, don’t live to eat” reinforces the brand’s mission to inspire mindful eating and a healthier lifestyle.",
  },
  {
    originalTitle: "Reign Gaming Logo Design",
    original: images.logo03,
    description:
      "This logo was created for an eSports and online gaming community with the vision of building a strong and fearless identity. The shield represents protection and unity, while the character in tactical gear highlights focus, strategy, and dominance in competitive play. The bold typography and tagline “Simply Winning” emphasize confidence and the team’s winning mindset.",
  },
  {
    originalTitle: "Mama Nature’s Organics Logo Design",
    original: images.logo04,
    description:
      "This logo was designed for an organic products brand, symbolizing purity, wellness, and sustainability. The central illustration of a woman surrounded by flowers represents “Mother Nature” herself, reflecting care, nurturing, and natural beauty. The green tones highlight freshness and eco-friendliness, while the bold, rounded typography ensures approachability and trust.",
  },
  {
    originalTitle: "RcasinoR Logo Design",
    original: images.logo05,
    description:
      "This logo was designed for a premium online casino brand, combining elegance with entertainment. The golden color palette and ornamental flourishes symbolize luxury, wealth, and exclusivity, while the circular emblem with a stylized “R” creates a strong centerpiece for brand recognition.",
  },
  {
    originalTitle: "Hair Junkeez Logo Design",
    original: images.logo06,
    description:
      "This logo was created for a modern hair and beauty brand, celebrating style and self-expression. The flowing illustration of a woman with colorful hair reflects creativity, fashion, and confidence, while the elegant script for Hair adds a touch of sophistication. The tagline “For the love of hair” captures the brand’s passion and dedication to beauty care.",
  },
  {
    originalTitle: "Alpha Designers & Builders Logo Design",
    original: images.logo07,
    description:
      "This logo was created for an architecture and construction company, symbolizing precision and excellence in building. The circular badge conveys trust and reliability, while the prominent Alpha (α) letter highlights leadership. The integration of modern building silhouettes reinforces expertise, with the tagline “Plan Better, Build Better” positioning the brand as a forward-thinking partner.",
  },
  {
    originalTitle: "Think of Puppy Logo Design",
    original: images.logo08,
    description:
      "This logo was designed for a pet-focused brand, bringing joy and friendliness into its identity. The smiling puppy illustration captures warmth and happiness, while the thought bubble suggests imagination and love for pets. The playful script of Puppy contrasts with the clean uppercase of Think Of, creating balance and approachability.",
  },
  {
    originalTitle: "Omobio HR Team Logo Design",
    original: images.logo09,
    description:
      "This logo was designed for the HR team of Omobio (Pvt) Ltd, a technology company. The bold “HR” lettering emphasizes the team’s central role in people management, while the rising human figures and star symbolize growth, achievement, and recognition. The metallic gradient reflects innovation and professionalism.",
  },
  {
    originalTitle: "Wonder Serum Logo Design",
    original: images.logo10,
    description:
      "This logo was created for a skincare and beauty brand, symbolizing elegance and rejuvenation. The silhouette of a woman’s profile within a glowing crescent represents radiance and transformation, while the gradient silver-to-aqua tones convey freshness and purity.",
  },
  {
    originalTitle: "Rank Investments LLC Logo Design",
    original: images.logo11,
    description:
      "This logo was created for an American investment and real estate company, representing trust, growth, and stability. The design integrates the letter R with a rooftop and window, symbolizing property and security. The golden color conveys prosperity and reliability, while bold typography reinforces professionalism.",
  },
  {
    originalTitle: "Naresh Kathak Entertainments Logo Design",
    original: images.logo12,
    description:
      "This logo was created for an entertainment brand inspired by the classical Kathak dance form. The graceful dancer figure captures movement, rhythm, and artistry, while the golden gradient conveys prestige. The crescent-like base symbolizes harmony and grounding for the dynamic form above.",
  },
  {
    originalTitle: "Caribbean Crowdfunding Logo Design",
    original: images.logo13,
    description:
      "This logo was designed for a financial initiative supporting community-driven projects in the Caribbean. The letter C is shaped with helping hands, symbolizing generosity and collaboration. The subtle outline of the Caribbean map roots the brand in its region, while gold tones reflect prosperity and trust.",
  },
  {
    originalTitle: "Sawtaz Logo Design",
    original: images.logo14,
    description:
      "This logo was designed for a clothing and fashion brand, symbolizing creativity and craftsmanship. The custom script lettering reflects individuality, while the letter T transforms into a needle with thread — representing tailoring and attention to detail. The metallic silver finish gives it a premium touch.",
  },
  {
    originalTitle: "Omobio Employee Excellency Awards Logo Design",
    original: images.logo15,
    description:
      "This logo was created for a corporate awards ceremony, symbolizing recognition and achievement. The golden shield with a rising figure represents excellence, while the star highlights top performance. Gatsby-inspired typography and decoration add elegance and luxury for the prestigious event.",
  },
  {
    originalTitle: "Florida Property Assist Logo Design",
    original: images.logo16,
    description:
      "This logo was designed for a real estate assistance company in Florida. The design integrates the map outline of Florida with a home icon, instantly connecting the brand to its region and industry. Green tones symbolize prosperity and growth, while smooth curves convey guidance and support.",
  },
  {
    originalTitle: "BlueClay Studios Logo Design",
    original: images.logo17,
    description:
      "This logo was designed for a creative media and production studio, blending professionalism with a retro feel. The circular badge symbolizes unity, while the vintage microphone highlights the brand’s connection to music, voice, and broadcasting. Script and bold typography balance personality and credibility.",
  },
  {
    originalTitle: "SellerON Logo Design",
    original: images.logo18,
    description:
      "This logo was designed for an e-commerce solutions brand, symbolizing energy and growth in the digital marketplace. The flowing “S” mark creates a sense of innovation, while gradient colors reflect technology and creativity. The emphasis on “ON” reinforces powering up and driving business forward.",
  },
  {
    originalTitle: "Origins Ceylon Spices Logo Design",
    original: images.logo19,
    description:
      "This logo was created for a traditional spice brand from Sri Lanka. The mortar and pestle with fresh leaves symbolize purity and authenticity, while the silhouette of Sri Lanka roots the brand in its heritage. Golden tones convey richness and value, making it ideal for international spice markets.",
  },
  {
    originalTitle: "Spiritual & Motivational Logo Design",
    original: images.logo20,
    description:
      "This logo was created for a personal growth and wellness brand. The profile silhouette represents mindfulness, while the flowing shapes and leaf symbolize renewal and inner balance. Purple conveys wisdom and spirituality, complemented by green for healing and growth.",
  },
  {
    originalTitle: "RealVR TV Logo Design",
    original: images.logo21,
    description:
      "This logo was designed for a virtual reality entertainment brand, showcasing innovation and immersion. The bold “VR” in bright blue highlights technology, while dynamic orange tiles forming an arc suggest motion and a digital gateway into virtual worlds.",
  },
  {
    originalTitle: "International Mission for Refugees Logo Design",
    original: images.logo22,
    description:
      "This logo was created for a global humanitarian initiative, symbolizing care and support for refugees. The design integrates a human figure and helping hand within a globe, highlighting compassion and international reach. Warm red and orange tones represent hope, resilience, and unity.",
  },
];


  const handleSlide = (index) => {
    setContent([imagesSlide[index].originalTitle, imagesSlide[index].description]);
  };
  return (
    <>
      <Helmet>
        <title>My Creative Portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Maduranga Kodithuwakku. A Lead UI/UX Engineer based in Colombo, Sri Lanka. 5+ years of UX Industrial Experience, Crafting Digital Products, Web/Mobile Applications. I have worked with a couple of Enterprises, and UX Companies in Sri Lanka and also worldwide. I design for a user-centered focus. I'm a simple, yet efficient person, a hard worker, and really interested in art. Here is my dribble portfolio: https://dribbble.com/MadurangaDesign "
        />
      </Helmet>
      <h2 className="head-text text_color">
        My Creative <span>Portfolio</span>
      </h2>

      <motion.div
        className="chip-container"
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        {options.map((option) => (
          <chip
            key={option.id}
            className={`chip ${selected === option.id ? "selected" : ""}`}
            onClick={() => setSelected(option.id)}
          >
            <FontAwesomeIcon
              icon={option.icon}
              style={{ marginRight: "10px" }}
            />
            {option.label}
          </chip>
        ))}
      </motion.div>

      <div className="app__work-container">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <ImageGallery
            items={imagesSlide}
            showThumbnails={false}
            onSlide={handleSlide}
            lazyLoad={true}
            autoPlay={true}
            slideInterval={10000} 
            showPlayButton={true} 
            showBullets={true}
            showFullscreenButton={false}
            renderItem={(item) => (
              <div className="image-gallery-image">
                <img
                  src={item.original}
                  alt={item.originalTitle || ""}
                  title={item.originalTitle}
                />
              </div>
            )}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__work-description"
        >
          <h2 className="bold-text text_color" style={{ marginTop: 20 }}>
            {conent[0]}
          </h2>
          <p className="p-text text_color" style={{ marginTop: 10 }}>
            {conent[1]}
          </p>
        </motion.div>
      </div>

      {/* <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex background" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
                onClick={() => window.open(work.projectLink, "_blank")}
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text text_color">{work.title}</h4>
            </div>
          </div>
        ))}
      </motion.div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
