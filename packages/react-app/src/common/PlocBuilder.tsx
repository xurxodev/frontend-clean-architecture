import { Ploc } from "@frontend-clean-architecture/core";
import { useState, useEffect } from "react";

interface PlocBuilderProps<B extends Ploc<S>, S> {
    bloc: B;
    builder: (state: S) => JSX.Element;
}

const PlocBuilder = <B extends Ploc<S>, S>({ bloc, builder }: PlocBuilderProps<B, S>) => {
    const [state, setState] = useState(bloc.state);

    useEffect(() => {
        const stateSubscription = (state: S) => {
            setState(state);
        };

        bloc.subscribe(stateSubscription);

        return () => bloc.unsubscribe(stateSubscription);
    }, [bloc]);

    return builder(state);
};

export default PlocBuilder;
