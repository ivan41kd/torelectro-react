import { ConsultationModal } from '../ConsultationModal/ConsultationModal';
import { Modal, ModalContent, ModalTrigger } from '../modal';
import { PoliticalModal } from '../PoliticalModal/PoliticalModal';

export const VacancyModal = () => {
 return (
  <div class='vacancy__wrapper'>
   <h2 class='vacancy__title'>
    Вакансия для амбициозных, сильных и коммуникабельных
   </h2>
   <h2 class='vacancy__title mobile'>Вакансия</h2>
   <div class='vacancy__info'>
    <img class='vacancy__img' src={'/vacancy/kubok.png'} />
    <div class='vacancy__info-wrapper'>
     <div class='vacancy__info-items'>
      <div class='vacancy__info-item'>
       <p class='vacancy__info-text'>
        <span>Профессиональная команда</span>, обеспечивающая цикл производства,
        сначала и до конца
       </p>
      </div>
      <div class='vacancy__info-item'>
       <p class='vacancy__info-text'>
        <span>Грамотная подготовка</span>, предоставляющая понятное введение в
        должность
       </p>
      </div>
      <div class='vacancy__info-item'>
       <p class='vacancy__info-text'>
        <span>Понятная работа</span>, с официальным трудоустройством и важными
        социальными гарантиями
       </p>
      </div>
      <div class='vacancy__info-item'>
       <p class='vacancy__info-text hide-mobile'>
        <span>Карьерная лестница</span>, c понятным ростом и необходимыми
        производственными обязанностями
       </p>
       <p class='vacancy__info-text mobile'>
        <span>Карьерная лестница</span>, c понятным ростом и производственными
        обязанностями
       </p>
      </div>
     </div>
     <div class='vacancy__bottom'>
      <Modal>
       <ModalTrigger asChild>
        <button class='vacancy__button'>Анкета для заполнения</button>
       </ModalTrigger>
       <ModalContent name='popup'>
        <ConsultationModal />
       </ModalContent>
      </Modal>
      <p class='vacancy__disclaimer'>
       нажимая, вы соглашаетесь
       <br />
       <Modal>
        <ModalTrigger asChild>
         <span>с условиями политики конфиденциальности</span>
        </ModalTrigger>
        <ModalContent name='political transparent'>
         <PoliticalModal />
        </ModalContent>
       </Modal>
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};
