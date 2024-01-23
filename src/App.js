import Header from './components/Header';
import Youtube from './components/Youtube';
import Mainswiper from './components/Mainswiper';
import Bestmenu from './components/Bestmenu';
import Storepic from './components/Storepic';
import Storeposition from './components/Storeposition';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header></Header>
      <Youtube></Youtube>
      <Mainswiper keyid={"content1"}></Mainswiper>
      <Bestmenu keyid={"content2"}></Bestmenu>
      <Storepic></Storepic>
      <Storeposition keyid={"content3"}></Storeposition>
      <Instagram></Instagram>
      <Footer></Footer>
      <Form></Form>
    </>
  );
}

export default App;