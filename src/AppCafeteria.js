import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'



import { DashboardView } from './Views/DashboardView'
import { DetailsView } from './Views/DetailsView'
import { HomeView } from './Views/HomeView'
import { LoginView } from './Views/auth/LoginView'
import { NotFoundView } from './Views/NotFoundView'
import { RegisterView } from './Views/auth/RegisterView'
import { ShopView } from './Views/ShopView'


import './Styles/styles.scss'
import { store } from './store/store'
export const AppCafeteria = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/register" element={<RegisterView />} />
                    <Route path="/shop" element={<ShopView />} />
                    <Route path="/shop/details" element={<DetailsView />} />
                    <Route path="/dashboard" element={<DashboardView />} />
                    <Route path='*' element={<NotFoundView />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
