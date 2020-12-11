import { Reflect } from './Reflect.ts';
import { Type } from './decorator.ts';

export class MyStaticClass {
    static myInjectable(target: Type<any>) {
        console.log(Reflect.getMetadata('design:paramtypes', target))
    }
}