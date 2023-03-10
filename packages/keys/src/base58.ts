import bs58 from 'bs58';

export type Base58EncodedAddress = string & { readonly __base58EncodedAddress: unique symbol };

export function assertIsBase58EncodedAddress(
    putativeBase58EncodedAddress: string
): asserts putativeBase58EncodedAddress is Base58EncodedAddress {
    try {
        // Fast-path; see if the input string is of an acceptable length.
        if (
            // Lowest address (32 bytes of zeroes)
            putativeBase58EncodedAddress.length < 32 ||
            // Highest address (32 bytes of 255)
            putativeBase58EncodedAddress.length > 44
        ) {
            throw new Error('Expected input string to decode to a byte array of length 32.');
        }
        // Slow-path; actually attempt to decode the input string.
        const bytes = bs58.decode(putativeBase58EncodedAddress);
        const numBytes = bytes.byteLength;
        if (numBytes !== 32) {
            throw new Error(`Expected input string to decode to a byte array of length 32. Actual length: ${numBytes}`);
        }
    } catch (e) {
        throw new Error(`\`${putativeBase58EncodedAddress}\` is not a base-58 encoded address`, {
            cause: e,
        });
    }
}
