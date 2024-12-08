import { useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { PoliticalModal } from '../PoliticalModal/PoliticalModal';
import { Modal, ModalContent, ModalTrigger } from '../modal';
export const ConsultationModal = () => {
 window.scrollTo(0, 0);
 const ref = useRef(null);
 const inputRef = useRef(null);
 return (
  <div class='popup__body'>
   <form class='popup__form'>
    <div class='popup__form-wrapper'>
     <h1 class='popup__form-title hide-mobile'>
      <span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы перезвонили вам
     </h1>
     <h1 class='popup__form-title mobile'>
      <span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы перезвонили и
      ответили
      <br />
      на все необходимые вопросы
     </h1>
     <div class='popup__form-input'>
      <p class='popup__input-name'>номер сотового телефона</p>
      <IMaskInput
       mask='+{7} 000 000 00 00'
       value='+7'
       ref={ref}
       inputRef={inputRef}
       class='popup__input'
       lazy={false}
       placeholderChar=' '
      />
     </div>
     <div class='popup__button-wrapper'>
      <button class='popup__form-button'>Бесплатная консультация</button>
      <p class='popup__disclamer'>
       нажимая, вы соглашаетесь <br />
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
   </form>
   <img class='popup__img' src={'/consultation/tele_3.png'} />
  </div>
 );
};
