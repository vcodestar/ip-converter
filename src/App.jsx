import Header from "./Header";
import Converter from "./Converter";
import Footer from "./Footer";

function App() {
  return(
    <div>
      <Header/>
      <div id="body">
        <Converter/>
      </div>
        <Footer/>
    </div>
  );
}

export default App