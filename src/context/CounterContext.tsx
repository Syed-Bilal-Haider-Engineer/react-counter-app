import { createContext } from "react";
import { CounterContextType } from '../types/CounterType';

export const CounterContext = createContext<CounterContextType | null>(null);