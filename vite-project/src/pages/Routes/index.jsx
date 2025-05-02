import React from 'react';
import Layout from '../../components/Layout';
import Home from '../Home';
import Books from '../Books';
import BookDetail from '../BookDetail';
import Basket from '../Basket';
import Favorites from '../Favorites';




const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "books",
                element: <Books />
            },
            {
                path: "bookdetail/:id",
                element: <BookDetail />
            },
            {
                path: "basket",
                element: <Basket />
            },
            {
                path: "favorites",
                element: <Favorites />
            },
            {
                path: "adddata",
                element: <Add-book />
            }
        ]
    }
];

export default ROUTES;