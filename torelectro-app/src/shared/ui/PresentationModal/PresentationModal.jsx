import { useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { PoliticalModal } from '../PoliticalModal/PoliticalModal';
import { Modal, ModalContent, ModalTrigger } from '../modal';
export const PresentationModal = () => {
 const ref = useRef(null);
 const inputRef = useRef(null);

 window.scrollTo(0, 0);
 return (
  <div class='popup__body'>
   <form class='popup__form'>
    <div class='popup__form-wrapper'>
     <h1 class='popup__form-title hide-mobile'>
      <span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы отправили вам
      презентацию
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
       unmask={true}
       ref={ref}
       inputRef={inputRef}
       class='popup__input'
       lazy={false}
       placeholderChar=' '
      />
     </div>
     <div class='popup__button-wrapper'>
      <button class='popup__form-button'>Подробная презентация</button>
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
       <span>с условиями политики конфиденциальности</span>
      </p>
     </div>
    </div>
   </form>
   <img class='popup__img' src={'/presentation/laptop_3.png'} />
  </div>
 );
};
