import React from 'react';
import AppRouter from '../src/Components/Routers/AppRouter'
import AuthProvider from '../src/Components/Auth/AuthProvider'
 
const App = () => {
  return (
    <div>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </div>
  );
}

export default App;
