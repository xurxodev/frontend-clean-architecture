import { Either } from "./Either";

export class EitherAsync<L, R> {
    private constructor(private readonly promiseValue: () => Promise<Either<L, R>>) {}

    map<T>(fn: (r: R) => T): EitherAsync<L, T> {
        return this.flatMap(async r => Either.right(fn(r)));
    }

    flatMap<T>(fn: (right: R) => Promise<Either<L, T>>): EitherAsync<L, T> {
        return new EitherAsync<L, T>(async () => {
            const value = await this.promiseValue();

            return value.fold(
                async rightValue => Either.left<L, T>(rightValue),
                rightValue => fn(rightValue)
            );
        });
    }

    mapLeft<T>(fn: (l: L) => T): EitherAsync<T, R> {
        return this.flatMapLeft(async l => Either.left(fn(l)));
    }

    flatMapLeft<T>(fn: (left: L) => Promise<Either<T, R>>): EitherAsync<T, R> {
        return new EitherAsync<T, R>(async () => {
            const value = await this.promiseValue();

            return value.fold(
                leftValue => fn(leftValue),
                async rightValue => Either.right<T, R>(rightValue)
            );
        });
    }

    run(): Promise<Either<L, R>> {
        return this.promiseValue();
    }

    static fromEither<L, R>(value: Either<L, R>): EitherAsync<L, R> {
        return new EitherAsync<L, R>(() => Promise.resolve(value));
    }

    static fromPromise<L, R>(value: Promise<Either<L, R>>): EitherAsync<L, R> {
        return new EitherAsync<L, R>(() => value);
    }
}
