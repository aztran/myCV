import React from 'react';
import { Element } from 'react-scroll';
import './index.scss';
const Projects = () => {
  return (
    <Element name='projects' className='projects'>
      <section className='projects'>
        <h5 className='introduction__about'>
          <i class='fas fa-briefcase' /> Projects
        </h5>
        <p>This is my projects and if you want to see more you can check to my github</p>

        <div className='timeline'>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>SIMSI</span>{' '}
                Sistem informasi Komisi Informasi
              </span>
              <span className='timeline__time'>Mar - May 2019</span>
            </div>
            <div className='timeline__description'>
              <p>
                this is Web made with Codeigniter
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>E-Tax Dashboard</span> PT. Prasimax Inovasi Teknologi
              </span>
              <span className='timeline__time'>Sep 2017 - Apr 2018</span>
            </div>
            <div className='timeline__description'>
              <p>
                This Web App made with PHP Framework (Codeigniter).
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>Dashboard user</span> ReactJs
              </span>
              <span className='timeline__time'>Jan 2019</span>
            </div>
            <div className='timeline__description'>
              <p>
                Web App using react + fake api (jsonplaceholder)
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>
                  Maintenance Core System
                </span>{' '}
                PT. KSEI
              </span>
              <span className='timeline__time'>Apr 2018 - Sep 2018</span>
            </div>
            <div className='timeline__description'>
              <p>
                Responsibilities to create a new Module such as management License & Automatic Email
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>
                  Registration form & Dashboard IPANI
                </span>{' '}
                Ikatan Perawat Indonesia
              </span>
              <span className='timeline__time'>Dec 2018</span>
            </div>
            <div className='timeline__description'>
              <p>
                This is a web based system which provides Registration form for member IPANI and dashboard for display member joined and report.
                also this made with PHP Native
              </p>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>
                  Digius Survey
                </span>{' '}
                PT. Conexus Solusi
              </span>
              <span className='timeline__time'>Mei 2019 - Sep 2019</span>
            </div>
            <div className='timeline__description'>
              <p>
                Tools :
	             <i> AngularJS, slim Framework, mysql</i>

              </p>
              <p>This is a web based system, provides digital platform with following features:</p>
              <ol>
                <li>Master data survey (item, company, type, domain, etc</li>
                <li>Master Survey (create survey, view survey)</li>
                <li>Survey schedule</li>
                <li>Respondents</li>
                <li>Analytic reports</li>
              </ol>
            </div>
          </div>
          <div className='timeline__item'>
            <div className='timeline__meta'>
              <span className='timeline__job'>
                <span className='timeline__job--bold'>Medical Record</span>{' '}
                (Hospital)
              </span>
              <span className='timeline__time'>2016</span>
            </div>
            <div className='timeline__description'>
              <p>
                This Desktop App made with .net (C#) + SQL Server
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
