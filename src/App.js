
import { Col, Row, ThemeProvider } from 'react-bootstrap';
import './App.scss';
import Destinies from './components/Destinies';
import Offers from './components/Offers';
import Promo from './components/Promo';
import Footer from './ui/Footer';
import Header from './ui/Header';
import Menu from './ui/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './ui/Section';
import './parallax.scss'
function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <main>
        <Row>
          <Col>
            <Header />
            <Menu />
          </Col>
        </Row>
        <Section body={<Offers />} />
        <Section parallax body={<Promo />} styleName='promo' />
        <Section body={<Destinies />} />
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </main>
    </ThemeProvider >

  );
}

export default App;
