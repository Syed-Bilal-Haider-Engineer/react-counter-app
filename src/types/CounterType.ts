export interface CounterState {
  count: number;
}

export interface CounterContextType {
  state: CounterState;
  increment: () => void;
}

export type MsgProps = {
  count: number;
};