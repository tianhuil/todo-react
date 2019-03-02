export type ArgumentType<F extends Function> = F extends (...args: infer A) => any ? A : never;
