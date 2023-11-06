import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Business from './pages/Business';
import DefaultLayout from './components/Layouts/DefaultLayout';
import HeaderOnly from './components/Layouts/HeaderOnly';
import config from './config';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Routes>
                    <Route
                        path={config.routes.home}
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />

                    <Route
                        path={config.routes.business}
                        element={
                            <DefaultLayout>
                                <Business />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
