import './App.css'
// import CardsList from './components/CardsList'

// function App() {

//   return (
//     <>
//       <CardsList />
//     </>
//   )
// }

// export default App

// App.tsx
// import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store/store';
import CardsList from './components/CardsList'

// Create a query client
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <CardsList />
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
