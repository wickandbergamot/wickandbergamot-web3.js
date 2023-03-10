// TODO: Eventually move this into whatever package implements transactions
declare type Commitment = 'confirmed' | 'finalized' | 'processed';

declare type DataSlice = readonly {
    offset: number;
    length: number;
};

declare type Slot =
    // TODO(Fair-Exchange/solana/issues/30341) Represent as bigint
    number;
