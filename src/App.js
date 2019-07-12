import React from 'react';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';
import Introduction from './pages/intrdouction/Introduction';
import 'materialize-css/dist/css/materialize.min.css';

import Experience from './pages/experience/Experience';
import Sticky from 'react-stickynode';
import './assets/style/global.scss';
import Projects from './pages/projects/projects';

const App = () => {
  return (

    <div className="my-wrapper">
      <Sidebar />
      <Layout>

        <Introduction />

        <Experience />
        <Projects/>

      </Layout>
    </div>

  );
};

export default App;
