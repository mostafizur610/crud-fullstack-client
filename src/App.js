import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
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
          element: <Home></Home>
        },
        {
          loader: async () => {
            return await axios.get('https://crud-server-opal.vercel.app');
          },
          path: '/userlist',
          element: <UserList></UserList>
        },
        {
          path: '/details/:id',
          loader: async ({ params }) => {
            console.log(params);
            return await axios.get(`https://crud-server-opal.vercel.app/details/${params.id}`);
          },
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
