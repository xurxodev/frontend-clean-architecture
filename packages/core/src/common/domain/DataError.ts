export interface UnexpectedError {
    kind: "UnexpectedError";
    error: Error;
}

export type DataError = UnexpectedError;
