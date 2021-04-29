import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./Logo.png";
import { useCartBloc } from "../app/App";
import { UpdatedCartState } from "@frontend-clean-architecture/core";
import { usePlocState } from "../common/usePlocState";

const useStyles = makeStyles(() => ({
    toolbar: {
        justifyContent: "space-between",
        maxWidth: "800",
    },
}));

const MyAppBar: React.FC = () => {
    const classes = useStyles();
    const ploc = useCartBloc();
    const state = usePlocState(ploc);

    const totalItems =
        state.kind === "UpdatedCartState" ? (state as UpdatedCartState).totalItems : 0;

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <img src={logo} width={150} alt="logo" />
                <IconButton color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCartIcon onClick={() => ploc.openCart()} />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
