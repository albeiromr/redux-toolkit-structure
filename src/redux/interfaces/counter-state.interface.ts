export interface CounterStateInterface {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}