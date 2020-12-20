import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer, IconButton, Divider, Typography, Box } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartContent from "./CartContent";
import { useCartBloc } from "../app/App";
import BlocBuilder from "../common/PlocBuilder";
import { CartState } from "@frontend-clean-architecture/core";

const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1, 0),
        justifyContent: "flex-start",
    },
    drawerTitleContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    drawerTitleIcon: {
        marginRight: theme.spacing(1),
    },
}));

const CartDrawer: React.FC = () => {
    const classes = useStyles();
    const bloc = useCartBloc();

    return (
        <BlocBuilder
            bloc={bloc}
            builder={(state: CartState) => {
                return (
                    <Drawer
                        anchor="right"
                        open={state.open}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <Box className={classes.drawerHeader}>
                            <IconButton onClick={() => bloc.closeCart()}>
                                <ChevronLeftIcon />
                            </IconButton>
                            <Box className={classes.drawerTitleContainer}>
                                <ShoppingCartIcon className={classes.drawerTitleIcon} />
                                <Typography variant="h6" component="h2">
                                    Cart
                                </Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <CartContent />
                    </Drawer>
                );
            }}
        />
    );
};

export default CartDrawer;
