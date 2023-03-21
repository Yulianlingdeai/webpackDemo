interface ComputedOptions<T> {
    get?(): T;
    set?(value: T): void;
    cache?: boolean;
}

type Accessors<T> = {
    [K in keyof T]: (() => T[K]) | ComputedOptions<T[K]>;
};

type DefaultComputed = { [key: string]: any };

interface ComponentOptions<T = DefaultComputed> {
    computed?: Accessors<T>;
}
function abc(config: ComponentOptions) {
    console.log(config);
}

abc({
    computed: {
        a() {
            return 123;
        }
    }
});
