import React from "react";
import DesktopLogoCarousel from "./DesktopLogoCarousel";
import MobileLogoCarousel from "./MobileLogoCarousel";
import { useMediaQuery } from "react-responsive";

import tesla from '../../assets/brandLogos/tesla.png'
import bmw from '../../assets/brandLogos/bmw.png'
import mercedes from '../../assets/brandLogos/mercedes.png'
import audi from '../../assets/brandLogos/audi.png'
import porsche from '../../assets/brandLogos/porsche.png'
import rivian from '../../assets/brandLogos/rivian.png'
import lucid from '../../assets/brandLogos/lucid.png'
import ford from '../../assets/brandLogos/ford.png'
import nissan from '../../assets/brandLogos/nissan.png'
import hyundai from '../../assets/brandLogos/hyundai.png'
import kia from '../../assets/brandLogos/kia.png'
import toyota from '../../assets/brandLogos/toyota.png'

const logos = [
  { src: tesla, alt: "Tesla", bnAlt: "টেসলা", link: 'tesla' },
  { src: bmw, alt: "BMW", bnAlt: "বিএমডব্লিউ", link: 'bmw' },
  { src: mercedes, alt: "Mercedes", bnAlt: "মার্সিডিজ", link: 'marcedes' },
  { src: audi, alt: "Audi", bnAlt: "আউডি", link: 'audi' },
  { src: porsche, alt: "Porsche", bnAlt: "পোর্শে", link: 'porsche' },
  { src: rivian, alt: "Rivian", bnAlt: "রিভিয়ান", link: 'rivian' },
  { src: lucid, alt: "Lucid", bnAlt: "লুসিড", link: 'lucid '},
  { src: ford, alt: "Ford", bnAlt: "ফোর্ড", link: 'ford' },
  { src: nissan, alt: "Nissan", bnAlt: "নিসান", link: 'nissan' },
  { src: hyundai, alt: "Hyundai", bnAlt: "হুন্দাই", link: 'hyundai' },
  { src: kia, alt: "Kia", bnAlt: "কিয়া", link: 'kia' },
  { src: toyota, alt: "Toyota", bnAlt: "টোয়োটা", link: 'toyota' },
];


const LogoCarouselParent = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return isDesktop ? (
    <DesktopLogoCarousel logos={logos} />
  ) : (
    <MobileLogoCarousel logos={logos} />
  );
};

export default LogoCarouselParent;
