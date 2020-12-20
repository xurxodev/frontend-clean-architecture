import React from "react";

export function createContext<T>() {
    const context = React.createContext<T | undefined>(undefined);

    function useContext() {
        const ctx = React.useContext(context);
        if (!ctx) throw new Error("context must be inside a Provider with a value");
        return ctx;
    }
    return [context, useContext] as const;
}
