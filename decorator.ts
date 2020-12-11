export interface Type<T> {
    new(...args: any[]): T;
}

export function Injectable(): (target: Type<any>) => void {
    return (target: Type<any>) => {}
}