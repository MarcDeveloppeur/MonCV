import{BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Acceuil from './Pages/Acceuil';
import CompetencePage from './Pages/CompetencePage';
import ContactPage from './Pages/ContactPage';
import PorfolioPage from './Pages/PorfolioPage';
import CssProjet from './Pages/CssProjet';
import ReactProjet from './Pages/ReactProjet';
import NodeProjet from './Pages/NodeProjet';
import FullstackProjet from './Pages/FullstackProjet';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
             <Route exact path="/" component={Acceuil}/>
             <Route path="/competence" component={CompetencePage}/>
             <Route path="/contact" component={ContactPage}/>
             <Route path="/porfolio" component={PorfolioPage}/>
             <Route path="/cssProjet" component={CssProjet}/>
             <Route path="/reactProjet" component={ReactProjet}/>
             <Route path="/nodeProjet" component={NodeProjet}/>
             <Route path="/fullstackProjet" component={FullstackProjet}/>
             <Route exact component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
