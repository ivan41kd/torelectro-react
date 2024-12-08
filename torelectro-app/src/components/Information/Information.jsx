export const Information = () => {
 return (
  <section className='information' id='information'>
   <div className='information__wrapper'>
    <h1 className='information__title'>
     Информация о преимуществах компании в трех словах
    </h1>
    <div className='information__items'>
     <div className='information__item'>
      <div className='information__texts'>
       <h2 className='information__item-title'>Рациональность</h2>
       <p className='information__item-subtitle'>
        использования нашего производства определена
        <br />
        нашими высокими стандартами качества,
        <br />
        квалифицированными специалистами,
        <br />
        многолетним опытом на <span>настоящем</span> рынке
       </p>
       <p className='information__item-subtitle mobile'>
        использования нашего производства определена нашими высокими стандартами
        качества, квалифицированными специалистами, многолетним опытом на рынке
       </p>
      </div>
      <picture>
       <source srcSet={'/information/rac-390.png'} media='(max-width:820px)' />

       <img src={'/information/rac.png'} alt='' className='information__img' />
      </picture>
     </div>
     <div className='information__item'>
      <div className='information__texts'>
       <h2 className='information__item-title'>Надёжность</h2>
       <p className='information__item-subtitle'>
        всех наших электрических удлинителей,
        <br />
        подтверждается, как отзывами наших партнеров,
        <br />
        так и документами сертификации,
        <br />
        выданные и заверенные специализированными
        <br />
        государственными учреждениями
       </p>
       <p className='information__item-subtitle mobile'>
        всех наших электрических удлинителей, подтверждается, документами
        сертификации, заверенные специализированными государственными
        учреждениями
       </p>
      </div>
      <picture>
       <source srcSet={'/information/nad-390.png'} media='(max-width:820px)' />
       <img src={'/information/nad.png'} alt='' className='information__img' />
      </picture>
     </div>
     <div className='information__item'>
      <div className='information__texts'>
       <h2 className='information__item-title'>Производительность</h2>
       <p className='information__item-subtitle'>
        всех наших электрических удлинителей,
        <br />
        определена силовыми характеристиками,
        <br />
        способными «выдерживать»
        <br />
        большинство видов инструментов
       </p>
       <p className='information__item-subtitle mobile'>
        всех наших электрических удлинителей, определена силовыми
        характеристиками,
        <br />
        способными «выдерживать» большинство видов инструментов
       </p>
      </div>
      <picture>
       <source srcSet={'/information/pro-390.png'} media='(max-width:820px)' />

       <img src={'/information/pro.png'} alt='' className='information__img' />
      </picture>
     </div>
    </div>
   </div>
  </section>
 );
};
