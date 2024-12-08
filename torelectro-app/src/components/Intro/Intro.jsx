import { ConsultationModal } from '../../shared/ui/ConsultationModal/ConsultationModal';
import * as Dialog from '@radix-ui/react-dialog';
import { Modal, ModalContent, ModalTrigger } from '../../shared/ui/modal';
import { PoliticalModal } from '../../shared/ui/PoliticalModal/PoliticalModal';

export const Intro = () => {
 const closeDisclaimer = () => {
  const disclaimerWrapper = document.querySelector('.intro__disclaimer');
  disclaimerWrapper.remove();
 };
 return (
  <section className='intro'>
   <div className='container'>
    <div className='intro__wrapper'>
     <div className='intro__texts'>
      <h1 className='intro__title'>
       Российские удлинители собственного производства
       <br />
       по международным стандартам
      </h1>
      <h1 className='intro__title mobile'>
       Российские удлинители собственного производства
       <br />
       по всем стандартам
      </h1>
      <p className='intro__subtitle'>
       Производство свыше 20+ видов современных электрических удлинителей, с
       отличительными силовыми и иными характеристиками и преимуществами
      </p>
      <div className='intro__bottom'>
       <Dialog.Root>
        <Dialog.Trigger asChild>
         <button className='intro__button'>Бесплатная консультация</button>
        </Dialog.Trigger>
        <Dialog.Portal>
         <Dialog.Overlay className='popup'>
          <Dialog.Content className='popup__wrapper'>
           <Dialog.Close className='popup__close' asChild>
            <button aria-label='закрыть'>
             <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='popup__close'
             >
              <g opacity='0.25'>
               <path
                d='M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM19.4133 18.0867C19.5004 18.1738 19.5695 18.2772 19.6166 18.391C19.6638 18.5048 19.688 18.6268 19.688 18.75C19.688 18.8732 19.6638 18.9952 19.6166 19.109C19.5695 19.2228 19.5004 19.3262 19.4133 19.4133C19.3262 19.5004 19.2228 19.5695 19.109 19.6166C18.9952 19.6638 18.8732 19.688 18.75 19.688C18.6268 19.688 18.5048 19.6638 18.391 19.6166C18.2772 19.5695 18.1738 19.5004 18.0867 19.4133L15 16.3254L11.9133 19.4133C11.8262 19.5004 11.7228 19.5695 11.609 19.6166C11.4952 19.6638 11.3732 19.688 11.25 19.688C11.1268 19.688 11.0048 19.6638 10.891 19.6166C10.7772 19.5695 10.6738 19.5004 10.5867 19.4133C10.4996 19.3262 10.4305 19.2228 10.3834 19.109C10.3362 18.9952 10.312 18.8732 10.312 18.75C10.312 18.6268 10.3362 18.5048 10.3834 18.391C10.4305 18.2772 10.4996 18.1738 10.5867 18.0867L13.6746 15L10.5867 11.9133C10.4108 11.7374 10.312 11.4988 10.312 11.25C10.312 11.0012 10.4108 10.7626 10.5867 10.5867C10.7626 10.4108 11.0012 10.312 11.25 10.312C11.4988 10.312 11.7374 10.4108 11.9133 10.5867L15 13.6746L18.0867 10.5867C18.1738 10.4996 18.2772 10.4305 18.391 10.3834C18.5048 10.3362 18.6268 10.312 18.75 10.312C18.8732 10.312 18.9952 10.3362 19.109 10.3834C19.2228 10.4305 19.3262 10.4996 19.4133 10.5867C19.5004 10.6738 19.5695 10.7772 19.6166 10.891C19.6638 11.0048 19.688 11.1268 19.688 11.25C19.688 11.3732 19.6638 11.4952 19.6166 11.609C19.5695 11.7228 19.5004 11.8262 19.4133 11.9133L16.3254 15L19.4133 18.0867Z'
                fill='white'
               />
              </g>
             </svg>
            </button>
           </Dialog.Close>
           <ConsultationModal />
          </Dialog.Content>
         </Dialog.Overlay>
        </Dialog.Portal>
       </Dialog.Root>
       <p className='intro__description'>
        бесплатная доставка от 50000 рублей <br />
        во все населённые пункты нашей страны
       </p>
      </div>
     </div>
     <div className='intro__img-wrapper'>
      <picture>
       <source srcSet={'/intro/main-390.png'} media='(max-width:820px)' />
       <img src={'/intro/main2.png'} alt='' className='intro__img' />
      </picture>
     </div>
    </div>
    <div className='intro__disclaimer'>
     <div className='intro__disclaimer-wrapper'>
      <p className='intro__disclaimer-text'>
       Если вы продолжаете использовать наш интернет-сайт,
       <br />
       <Modal>
        <ModalTrigger asChild>
         <span className='intro__disclaimer-political'>
          вы соглашаетесь с условиями политики конфиденциальности
         </span>
        </ModalTrigger>
        <ModalContent name='political transparent'>
         <PoliticalModal />
        </ModalContent>
       </Modal>
       , тем самым,
       <br />
       помогаете нам сделать наш интернет-сайт комфортнее и полезнее для каждого
       человека
      </p>
      <p className='intro__disclaimer-text mobile'>
       Если вы продолжаете использовать
       <br />
       наш интернет-сайт,
       <span className='intro__disclaimer-political'>
        вы соглашаетесь
        <br />с условиями политики конфиденциальности
       </span>
       , тем самым, помогаете нам сделать
       <br />
       наш интернет-сайт комфортнее и полезнее для каждого человека и бизнеса
      </p>
      <div className='intro__disclaimer-button-wrapper'>
       <button
        className='intro__disclaimer-button'
        onClick={() => closeDisclaimer()}
       >
        Подтвердить
       </button>
       <div className='intro__disclaimer-close'>
        <svg
         width='14'
         height='14'
         viewBox='0 0 14 14'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         className='intro__disclaimer-close-icon'
         onClick={() => closeDisclaimer()}
        >
         <path
          d='M12.9563 12.2938C13.0023 12.3367 13.0393 12.3884 13.0649 12.4459C13.0905 12.5034 13.1043 12.5655 13.1054 12.6285C13.1065 12.6914 13.0949 12.7539 13.0714 12.8123C13.0478 12.8706 13.0127 12.9237 12.9682 12.9682C12.9237 13.0127 12.8706 13.0478 12.8123 13.0714C12.7539 13.0949 12.6914 13.1065 12.6285 13.1054C12.5655 13.1043 12.5034 13.0905 12.4459 13.0649C12.3884 13.0393 12.3367 13.0023 12.2938 12.9563L7.00003 7.66331L1.70628 12.9563C1.61742 13.0391 1.49989 13.0842 1.37845 13.082C1.25701 13.0799 1.14115 13.0307 1.05526 12.9448C0.969379 12.8589 0.920184 12.743 0.918042 12.6216C0.915899 12.5002 0.960976 12.3826 1.04378 12.2938L6.33675 7.00003L1.04378 1.70628C0.960976 1.61742 0.915899 1.49989 0.918042 1.37845C0.920184 1.25701 0.969379 1.14115 1.05526 1.05526C1.14115 0.969379 1.25701 0.920184 1.37845 0.918042C1.49989 0.915899 1.61742 0.960976 1.70628 1.04378L7.00003 6.33675L12.2938 1.04378C12.3826 0.960976 12.5002 0.915899 12.6216 0.918042C12.743 0.920184 12.8589 0.969379 12.9448 1.05526C13.0307 1.14115 13.0799 1.25701 13.082 1.37845C13.0842 1.49989 13.0391 1.61742 12.9563 1.70628L7.66331 7.00003L12.9563 12.2938Z'
          fill='#101010'
         />
        </svg>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};
