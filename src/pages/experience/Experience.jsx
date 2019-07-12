import React from 'react';
import { Element } from 'react-scroll';
import './Experience.scss';
const Experience = () => {
  return (
    <Element name='experience' className='experience'>
      <section className='experience'>
        <h5 className='introduction__about'>
          <i class='fas fa-laptop' /> Experience
        </h5>

        <div className='timeline'>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>ATI Business Group</span>{' '}
                Frontend Engineer
              </span>
              <span className='timeline__time'>Apr 2019 - Present</span>
            </div>
            <div className='timeline__description'>
              <p>
                Developing Fair Management System using React JS as frontend &
                maintenance OPA application using Angular 4
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>Futuready</span> (Frontend
                Engineer)
              </span>
              <span className='timeline__time'>Sept 2018 - Apr 2019</span>
            </div>
            <div className='timeline__description'>
              <p>
                Position as Frontend Engineer - Collaborate with User Experience
                Designers to build Vue Js Product - Building reusable code and
                libraries for future use.
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>PT. Conexus Solusi</span>{' '}
                (FullStack)
              </span>
              <span className='timeline__time'>Apr 2018 - Sep 2018</span>
            </div>
            <div className='timeline__description'>
              <p>
                Front End Using AngularJS and backend Using Slim Framework,
                developing Digius Survey
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>
                  PT. Prasimax Inovasi Teknologi
                </span>{' '}
                (NOC Engineer)
              </span>
              <span className='timeline__time'>Apr 2016 - Apr 2018</span>
            </div>
            <div className='timeline__description'>
              <p>
                responsibilities to monitoring server,installation server linux
                based and developing e-tax dashboard using PHP Framework
                Codeigniter
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
