import Layout from './components/Layout/Layout';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Layout>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </Layout>
    </div>
  );
}

export default App;
