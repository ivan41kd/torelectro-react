import { ConsultationModal } from '../../shared/ui/ConsultationModal/ConsultationModal';
import { Modal, ModalContent, ModalTrigger } from '../../shared/ui/modal';

export const Consultation = () => {
 return (
  <section className='consultation'>
   <div className='consultation__wrapper'>
    <div className='consultation__texts'>
     <p className='consultation__text'>
      Если вы <span>заинтересованы</span>, нашим производством,
      <br />
      но остались важные вопросы — <br />
      <span>просто оставляйте контакты для связи</span>
     </p>
     <p className='consultation__text mobile'>
      Если вы <span>заинтересованы</span>,<br />
      нашим производством,
      <br />
      но остались важные вопросы — <br />
      <span>
       просто оставляйте контакты <br />и получайте ответы на запросы
      </span>
     </p>
     <Modal>
      <ModalTrigger asChild>
       <button className='consultation__button'>Бесплатная консультация</button>
      </ModalTrigger>
      <ModalContent name='popup'>
       <ConsultationModal />
      </ModalContent>
     </Modal>
     <p className='consultation__disclaimer'>
      бесплатная консультация предоставляется исключительно на основании запроса
     </p>
    </div>
    <img src='/consultation/tele_2.png' alt='' className='consultation__img' />
   </div>
  </section>
 );
};
