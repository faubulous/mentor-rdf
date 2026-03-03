import { MemoryLevel } from "memory-level";
import { Quadstore } from "quadstore";
import { dataFactory } from "./data-factory";

export class StoreFactory {
    static createStore() {
        const backend = new MemoryLevel();
        const store = new Quadstore({ backend, dataFactory });

        return store;
    }
}