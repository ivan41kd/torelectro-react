import { DotsThree, Phone } from '@phosphor-icons/react/dist/ssr';
import { DocumentationModal } from '../../shared/ui/DocumentationModal/DocumentationModal';

import { Modal, ModalContent, ModalTrigger } from '../../shared/ui/modal';
import { ContactModal } from '../../shared/ui/ContactModal/ContactModal';

export const Header = () => {
 return (
  <header className='header'>
   <div className='header__wrapper'>
    <div className='header__logo-wrapper'>
     <picture>
      <source srcSet={'/header/logo-390.png'} media='(max-width:820px)' />

      <img src={'/header/logo.png'} alt='' className='header__logo' />
     </picture>
    </div>
    <div className='header__info'>
     <a href='tel:+7 916 083 39 30'>
      <button className='header__phone'>
       <div className='header__phone-icon-wrapper'>
        <Phone
         size={50}
         className='header__phone-icon'
         weight='fill'
         color='#fff'
        />
       </div>
       +7 916 083 39 30
      </button>
     </a>
     <div className='header__more-nav-wrapper'>
      <button className='header__more'>
       <DotsThree size={70} className='header__more-icon' color='#fff' />
      </button>
      <nav className='header__nav'>
       <div className='header__nav-wrapper'>
        <ul className='header__nav-items-list'>
         <li className='header__nav-item'>
          <a href='#catalog'> Каталог всего ассортимента компании </a>
         </li>
         <li className='header__nav-item'>
          <a href='#presentation'> Презентация для сотрудничества </a>
         </li>
         <li className='header__nav-item'>
          <a href='#information'>Информация о компании</a>
         </li>
        </ul>
        <ul className='header__nav-items-list'>
         <Modal>
          <ModalTrigger asChild>
           <li className='header__nav-item header-doc'>Документация</li>
          </ModalTrigger>
          <ModalContent name='documentation'>
           <DocumentationModal />
          </ModalContent>
         </Modal>
         <Modal>
          <ModalTrigger asChild>
           <li className='header__nav-item header-contact'>
            Контактная информация
           </li>
          </ModalTrigger>
          <ModalContent name='contacts'>
           <ContactModal />
          </ModalContent>
         </Modal>
        </ul>
       </div>
      </nav>
     </div>
    </div>
   </div>
  </header>
 );
};
