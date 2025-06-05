import * as rdfjs from "@rdfjs/types";
import { DataFactory } from "n3";
import { MemoryLevel } from "memory-level";
import { Quadstore } from "quadstore";

export class StoreFactory {
    static createStore() {
        const backend = new MemoryLevel();
        const store = new Quadstore({ backend, dataFactory: DataFactory });

        return store;
    }
}