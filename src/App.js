import Layout from './containers/Layout/Layout';
import {Route} from 'react-router-dom';

import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio';



function App() {
  return (
    <>
      <Layout>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        {/* <Home/>
        <About/>
        <Portfolio/>
        <Contact/> */}
      </Layout>
    </>
  );
}

export default App;
