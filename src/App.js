import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'; 
import Main from './Layout/Main';
import Home from './Page/Home/Home';
import List from './Page/List/List';
import UserList from './Page/UserList/UserList';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: async() => {
          //   return await axios.get('localhost:5000')
          // },
          element: <Home></Home>
        },
        {
          path: 'userlist/',
          element: <UserList></UserList>
        },
        {
          path: 'details/',
          element: <List></List>
        }
      ]
    },

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );

}

export default App;
