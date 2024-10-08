/**
 * A helper class for working with URI string.
 */
export class Uri {
    /**
     * Get the portion of a URI after the first occurance of '#' or the last occurance of '/'.
     * @param uri A URI.
     * @returns The label portion of the URI.
     */
    static getUriLabel(uri: string): string | undefined {
        let u = uri;
        let n = u.indexOf('?');

        if (n > -1) {
            u = uri.substring(0, n);
        }

        // If we have namespace URI, return the label of the document or folder.
        if (u.endsWith('/') || u.endsWith('#')) {
            u = u.substring(0, u.length - 1);
        }

        let ns = Uri.getNamespaceUri(u);

        return ns.length < u.length ? u.replace(ns, "") : undefined;
    }

    /**
     * Get the portion of a URI after the first occurance of '#' or the last occurance of '/'.
     * @param uri A URI.
     * @returns The namespace portion of the URI.
     */
    static getNamespaceUri(uri: string): string {
        // Remove any query strings from the URI.
        let u = uri;
        let n = u.indexOf('?');

        if (n > -1) {
            u = uri.substring(0, n);
        }

        // Find the first occurance of '#' and return the substring up to that point.
        n = u.indexOf('#');

        if (n > -1) {
            return u.substring(0, n + 1);
        }

        // Find the last occurance of '/' and return the substring up to that point.
        n = u.lastIndexOf('/');

        // Only return the substring if it is not the 'http://' or 'https://' protocol.
        if (n > 8) {
            return u.substring(0, n + 1);
        } else {
            return u + "/";
        }
    }

    /**
     * Get a transformed version of the URI that can be used as a JSON identifier which only contains letters, numbers and dots.
     * @param uri A URI.
     * @returns A transformed version which only contains letters, numbers and dots.
     */
    static toJsonId(uri: string): string | undefined {
        let u = uri.split('//')[1];

        if (u) {
            u = u.replace(/[^a-zA-Z0-9]/g, '.');

            return u.endsWith('.') ? u.slice(0, -1) : u;
        } else {
            return undefined;
        }
    }

    /**
     * Get a normalized version of the URI which removes any trailing slashes or hashes.
     * @param uri A URI.
     * @returns A normalized URI.
     */
    static getNormalizedUri(uri: string): string {
        let u = uri.split('?')[0];

        if (u.endsWith('/') || u.endsWith('#')) {
            return u.substring(0, u.length - 1);
        } else {
            return u;
        }
    }
}