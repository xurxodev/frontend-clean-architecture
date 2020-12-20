import React from "react";
import * as DependenciesProvider from "../di/DependenciesProvider";
import MyAppBar from "../appbar/MyAppBar";
import { CartPloc } from "@frontend-clean-architecture/core";
import { createContext } from "../common/Context";
import ProductList from "../products/ProductList";
import CartDrawer from "../cart/CartDrawer";

const [blocContext, useBloc] = createContext<CartPloc>();

export const useCartBloc = useBloc;

const App: React.FC = () => {
    return (
        <blocContext.Provider value={DependenciesProvider.provideCartBloc()}>
            <MyAppBar />
            <ProductList />
            <CartDrawer />
        </blocContext.Provider>
    );
};

export default App;
