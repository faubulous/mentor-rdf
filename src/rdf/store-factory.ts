import { MemoryLevel } from "memory-level";
import { Quadstore } from "quadstore";
import { RdfDataFactory } from "./rdf-data-factory";

export class StoreFactory {
    static createStore() {
        const backend = new MemoryLevel();
        const store = new Quadstore({ backend, dataFactory: RdfDataFactory });

        return store;
    }
}