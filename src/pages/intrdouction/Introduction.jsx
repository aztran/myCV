import React from 'react';
import { Element } from 'react-scroll';
import './introduction.scss';

const Introduction = () => {
  return (
    <Element name='introduction' className='introduction'>
      <section className='introduction'>
        <h5 className='introduction__about'>
          <i class='fas fa-robot' /> About Me
        </h5>
        <div className='summary'>
          <p>Hello, I'm Andra Riztyan<br />
            I'm frontend developer, actually I love and prefer working only with frontend Development, but sometimes in another "world" I usually can be a fullstack developer if need it.
          Wanna get in touch or talk about a project ? feel free to contact me via email or you can text me via whatsapp number or call it.</p>
        </div>
      </section>
    </Element>
  );
};

export default Introduction;
