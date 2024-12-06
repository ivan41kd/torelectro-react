import telegaicon from '../../assets/footer/telegram-logo.svg';
export const Footer = () => {
 return (
  <footer className='footer'>
   <div className='footer__wrapper'>
    <div className='footer__logo-wrapper'>
     <img
      src='src/assets/footer/footer-logo.png'
      className='footer__logo'
      alt=''
     />
    </div>
    <div className='footer__info'>
     <nav className='footer__nav'>
      <ul className='footer__info-items'>
       <li className='footer__info-item'>
        <a href='#catalog'> Каталог всего ассортимента компании </a>
       </li>
       <li className='footer__info-item'>
        <a href='#presentation'> Презентация для сотрудничества </a>
       </li>
       <li className='footer__info-item'>
        <a href='#faq'> Популярные вопросы </a>
       </li>
      </ul>
      <ul className='footer__info-items'>
       <li className='footer__info-item footer-vacancy'>Вакансия</li>
       <li className='footer__info-item footer-document'>Документация</li>
       <li className='footer__info-item footer-contact'>
        Контактная информация
       </li>
      </ul>
     </nav>
     <div className='footer__socials'>
      <div className='footer__contacts'>
       <p className='footer__contact-item'>
        <a href='tel:+7 916 083 39 30'> +7 916 083 39 30 </a>
       </p>
       <p className='footer__contact-item'>
        <a href='mailto:tor@torelektro.ru'> tor@torelektro.ru </a>
       </p>
      </div>
      <div className='footer__telegram'>
       <a href='https://t.me/+79160833930'>
        <img src={telegaicon} alt='' className='footer__telegram-icon' />
       </a>
      </div>
     </div>
    </div>
    <p className='footer__disclaimer'>
     Настоящий интернет-сайт, а также вся информация о товарах и об услугах,
     предоставленная на нём, носит исключительно
     <br />
     информационный характер и ни при каких условиях не является офертой,
     определяемой действующим российским законодательством
    </p>
    <div className='footer__docs'>
     <p className='footer__docs-item footer-political'>
      Политика конфиденциальности
     </p>
     <p className='footer__docs-item'>ООО «ТОРЭЛЕКТРО» · 1245000026600</p>
    </div>
    <div className='footer__map'>
     <div>
      <iframe
       src='https://yandex.com/map-widget/v1/?um=constructor%3A4208a45148ad864e53373df2efc7c84c6db1ba357b67f8adcb3971c81760af9a&amp;source=constructor'
       width='100%'
       height='150'
       frameborder='0'
      ></iframe>
     </div>
    </div>
   </div>
  </footer>
 );
};
