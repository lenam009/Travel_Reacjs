import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Following from './pages/Following';
import DefaultLayout from './components/Layouts/DefaultLayout';
import HeaderOnly from './components/Layouts/HeaderOnly';
import config from './config';

function App() {
    return (
        <Router>
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
                        path={config.routes.following}
                        element={
                            <DefaultLayout>
                                <Following />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
