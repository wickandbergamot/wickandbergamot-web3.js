import { IJsonRpcTransport } from '@safecoin/rpc-transport';

type GetBlockHeightApiResponse =
    // TODO(Fair-Exchange/solana/issues/30341) Represent as bigint
    number;

declare interface GetBlockHeightApi {
    /**
     * Returns the current block height of the node
     */
    getBlockHeight(
        transport: IJsonRpcTransport,
        config?: readonly {
            // Defaults to `finalized`
            commitment?: Commitment;
            // The minimum slot that the request can be evaluated at
            minContextSlot?: Slot;
        }
    ): Promise<GetBlockHeightApiResponse>;
}
