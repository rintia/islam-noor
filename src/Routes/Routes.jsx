import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Sadqa from "../Pages/Sadqa/Sadqa";
import Courses from "../Pages/Courses/Courses";
import ZakatCalculator from "../Pages/ZakatCalculator/ZakatCalculator";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/sadaqa',
          element: <Sadqa></Sadqa>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/zakat',
          element: <ZakatCalculator></ZakatCalculator>
        }
      ]
    },
  ]);
  