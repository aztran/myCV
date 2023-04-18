import React, { Fragment, useEffect, useState } from 'react';
import './sidebar.scss';
import avatar from '../../assets/image/ava.png';
import { Link } from 'react-scroll';
// import Sticky from 'react-stickynode';

const Sidebar = () => {


  return (
    <aside className='sidebar'>
      <div className=' center-align'>
        <div className='ava-wrapper'>
          <img src={avatar} alt='' className='ava-img circle' />
          <h3>Andra Riztyan</h3>
          <h5>Frontend Engineer</h5>
        </div>

        {/* <Sticky enabled={true} top={0}> */}

        <div className='nav-wrapper'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to='introduction' spy={true} smooth={true} duration={500}>
                <span className='nav__name'> About</span>
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='experience' spy={true} smooth={true} duration={500}>
                <span className='nav__name'> Education & Experience</span>
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='projects' spy={true} smooth={true} duration={500}>
                <span className='nav__name'> projects</span>
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='skills' spy={true} smooth={true} duration={500}>
                <span className='nav__name'> Timeline</span>
              </Link>
            </li>

            {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
          </ul>
        </div>
        {/* </Sticky> */}


        <div className='medsos-wrapper'>
          <h5 className='sidebar__title'>Contacts</h5>
          <ul className='medsos__list'>
            <li className='medsos__item'>
              <i className='far fa-envelope medsos__icon ' />
              <a href='mailto:andra.riztyan@gmail.com'>
                andra.riztyan@gmail.com
                </a>
            </li>
            <li className='medsos__item'>
              <i className='fab fa-github medsos__icon' />
              <a href='https://github.com/aztran'>github.com/aztran</a>
            </li>
            <li className='medsos__item'>
              <i className='fab fa-instagram medsos__icon' />
              <a href='https://www.instagram.com/aztran/'>aztran</a>
            </li>
          </ul>
        </div>

      </div>
    </aside >


  );
};

export default Sidebar;
