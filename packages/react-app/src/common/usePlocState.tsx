import { Ploc } from "@frontend-clean-architecture/core";
import { useEffect, useState } from "react";

export function usePlocState<S>(ploc: Ploc<S>) {
    const [state, setState] = useState(ploc.state);

    useEffect(() => {
        const stateSubscription = (state: S) => {
            setState(state);
            ploc.unsubscribe(stateSubscription)
        };

        ploc.subscribe(stateSubscription);

        return () => ploc.unsubscribe(stateSubscription);
    }, []);

    return state;
}
