import * as fs from "fs";
import * as n3 from "n3";

export class StoreFactory {
    public static async createFromFile(path: string): Promise<n3.Store> {
        return new Promise((resolve, reject) => {
            const store = new n3.Store();
            const stream = fs.createReadStream(path);

            new n3.Parser().parse(stream, (error, quad, done) => {
                if (quad) {
                    store.add(quad);
                } else if (error) {
                    reject(error);
                } else if (done) {
                    resolve(store);
                }
            });
        });
    }
}