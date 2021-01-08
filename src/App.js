import Layout from './components/Layout/Layout';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Layout>
        <Home/>
        <Portfolio/>
        <Contact/>
      </Layout>
    </div>
  );
}

export default App;
