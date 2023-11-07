import './styles.css';
import CircleIcon from '../../../Components/CircleIcon';
import IconSeo from './Images/seo.png';
import IconNotion from './Images/notion.png';
import IconSwift from './Images/swift.png';
import IconWordPress from './Images/wp.png';
import IconFigma from './Images/figma.png';
import IconSwiftData from './Images/swiftData.png';
import IconSwiftUI from './Images/swiftUI.png';
import Btn from '../../../Components/Btn';

function DescriptionSection() {
  return (
    <div className="section-container">
      <div className="text-container">
        <h5>Plus de 200 heures de cours</h5>
        <h2>Former vous à tous vos outils sur une seule plateforme</h2>
        <p>Chez The Pixel Family, nous vous propulsons vers l'autonomie numérique en vous formant aux outils de référence du secteur. Que vous soyez débutant ou avancé, notre plateforme est le tremplin vers la maîtrise de solutions incontournables comme WordPress pour la gestion de contenu, Notion pour l'organisation et la collaboration, Figma pour la conception UI/UX, Webflow pour le design web responsive, et les meilleures pratiques SEO pour optimiser votre présence en ligne. Avec nos cours interactifs, apprenez à construire, à innover et à optimiser avec les technologies qui façonnent le web de demain.</p>
      </div>
      <div className="icons-container">
        <div>
          <CircleIcon imageUrl={IconSeo} altText="SEO logo" label={"SEO"} />
          <CircleIcon imageUrl={IconNotion} altText="Notion logo" label={"Notion"} />
          <CircleIcon imageUrl={IconSwift} altText="Swift logo" label={"Swift"} />
          <CircleIcon imageUrl={IconSwiftUI} altText="SwiftUI logo" label={"Swift UI"} />
          <CircleIcon imageUrl={IconSwiftData} altText="SwiftData logo" label={"SwiftData"} />
          <CircleIcon imageUrl={IconWordPress} altText="WordPress logo" label={"WordPress"} />
          <CircleIcon imageUrl={IconFigma} altText="Figma logo" label={"Figma"} />
        </div>
        <Btn to="/tuto">Découvrez nos tutoriels</Btn>
      </div>
    </div>
  );
}

export default DescriptionSection;
