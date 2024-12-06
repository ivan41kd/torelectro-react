import { Intro } from '../Intro/Intro';
import { Catalog } from '../Catalog/Catalog';
import { Presentation } from '../Presentation/Presentation';
import { Information } from '../Information/Information';
import { Consultation } from '../Consultation/Consultation';
import { Faq } from '../Faq/Faq';
import { Nuances } from '../Nuances/Nuances';
export const Main = () => {
 return (
  <main className='main'>
   <Intro />
   <Catalog />
   <Presentation />
   <Information />
   <Consultation />
   <Faq />
   <Nuances />
  </main>
 );
};
