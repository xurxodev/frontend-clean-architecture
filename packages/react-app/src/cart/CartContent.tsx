import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { List, Divider, Box, Typography, CircularProgress } from "@material-ui/core";
import CartContentItem from "./CartContentItem";
import { CartItemState } from "@frontend-clean-architecture/core";
import { useCartBloc as useCartPloc } from "../app/App";
import { usePlocState } from "../common/usePlocState";

const useStyles = makeStyles((theme: Theme) => ({
    totalPriceContainer: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1, 0),
        justifyContent: "space-around",
    },
    itemsContainer: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1, 0),
        justifyContent: "space-around",
        minHeight: 150,
    },
    itemsList: {
        overflow: "scroll",
    },
    infoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
}));

const CartContent: React.FC = () => {
    const classes = useStyles();
    const ploc = useCartPloc();
    const state = usePlocState(ploc);

    const cartItems = (items: CartItemState[]) => (
        <List className={classes.itemsList}>
            {items.map((item, index) => (
                <CartContentItem key={index} cartItem={item} />
            ))}
        </List>
    );

    const emptyCartItems = () => (
        <React.Fragment>
            <Typography variant="h6" component="h2">
                Empty Cart :(
            </Typography>
        </React.Fragment>
    );

    switch (state.kind) {
        case "LoadingCartState": {
            return (
                <div className={classes.infoContainer}>
                    <CircularProgress />
                </div>
            );
        }
        case "ErrorCartState": {
            return (
                <div className={classes.infoContainer}>
                    <Typography display="inline" variant="h5" component="h2">
                        {state.error}
                    </Typography>
                </div>
            );
        }
        case "UpdatedCartState": {
            return (
                <React.Fragment>
                    <Box flexDirection="column" className={classes.itemsContainer}>
                        {state.items.length > 0 ? cartItems(state.items) : emptyCartItems()}
                    </Box>
                    <Divider />
                    <Box flexDirection="row" className={classes.totalPriceContainer}>
                        <Typography variant="h6" component="h2">
                            Total Price
                        </Typography>
                        <Typography variant="h6" component="h2">
                            {state.totalPrice}
                        </Typography>
                    </Box>
                </React.Fragment>
            );
        }
    }
};

export default CartContent;
