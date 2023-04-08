import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route) => {
              const Component = route.component
              let Layout = route.layout
              if (Layout) {
                Layout = route.layout
              }
              else if (Layout === null) {
                Layout = Fragment
              }
              else {
                Layout = DefaultLayout
              }
              return (
                <Route key={route.id} path={route.path} element={
                  <Layout>
                    <Component />
                  </Layout>
                } />
              )
            })

          }
        </Routes>


      </div>
    </Router>
  );
}

export default App;
