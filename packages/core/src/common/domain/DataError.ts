export interface UnexpectedError {
    kind: "UnexpectedError";
    message: Error;
}

export type DataError = UnexpectedError;
