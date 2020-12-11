import { Injectable } from './decorator.ts';
import { Service2 } from './service2.ts';

@Injectable()
export class Service {
    constructor(private s2: Service2) {}
}