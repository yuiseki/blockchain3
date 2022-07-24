declare type Block = {
    data: string;
    timestamp: number;
    nonce: number;
    hash?: string;
    previousHash: string;
};
export declare const mineNewBlock: (data: string, difficulty?: number) => Block[];
export {};
