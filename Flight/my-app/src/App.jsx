import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav, AppFooter } from './feature';
import {Landing, Flights, Error, AddFlight, UpdateFlight, DeleteFlight} from './pages'
import ThemeContext, { themes } from './contexts/ThemeContext';
import { MiddleOfPage } from './components/Styles';

const App = () => {
    return (
        <>    
            <ThemeContext.Provider value={themes.dark}>

                <BrowserRouter>
                   
                <MiddleOfPage>  <AppNav /> </MiddleOfPage>
                    <Routes>
                        <Route path="/" element={<Landing/>} />
                        <Route path="/flights" element={<Flights/>} />
                        {/*<Route path="/flights/:id" element={<h1></h1>} />*/}
                        <Route path="/addflight" element={<AddFlight/>} />
                        <Route path="/updateflight" element={<UpdateFlight/>} />
                        <Route path="/deleteflight" element={<DeleteFlight/>} />
                        <Route path="*" element={<Error/>} />
                        
                    </Routes>
                    <AppFooter/>
                </BrowserRouter>    
            </ThemeContext.Provider>
        </>
    );
}

export default App;