import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./Logo.png";
import { useCartBloc } from "../app/App";
import PlocBuilder from "../common/PlocBuilder";
import { CartState, UpdatedCartState } from "@frontend-clean-architecture/core";

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        justifyContent: "space-between",
        maxWidth: "800",
    },
}));

const MyAppBar: React.FC = () => {
    const classes = useStyles();
    const bloc = useCartBloc();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <img src={logo} width={150} alt="logo" />
                <IconButton color="inherit">
                    <PlocBuilder
                        bloc={bloc}
                        builder={(state: CartState) => {
                            const totalItems =
                                bloc.state.kind === "UpdatedCartState"
                                    ? (bloc.state as UpdatedCartState).totalItems
                                    : 0;

                            return (
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartIcon onClick={() => bloc.openCart()} />
                                </Badge>
                            );
                        }}
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
