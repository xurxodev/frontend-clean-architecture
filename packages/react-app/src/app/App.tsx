import React from "react";
import MyAppBar from "../appbar/MyAppBar";
import { CartPloc, dependenciesLocator } from "@frontend-clean-architecture/core";
import { createContext } from "../common/Context";
import ProductList from "../products/ProductList";
import CartDrawer from "../cart/CartDrawer";

const [blocContext, useBloc] = createContext<CartPloc>();

export const useCartBloc = useBloc;

const App: React.FC = () => {
    return (
        <blocContext.Provider value={dependenciesLocator.provideCartPloc()}>
            <MyAppBar />
            <ProductList />
            <CartDrawer />
        </blocContext.Provider>
    );
};

export default App;
