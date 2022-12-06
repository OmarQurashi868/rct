import create from "zustand";

type errorStoreType = {
  error: string;
  setError: (error: string) => void;
};

export const useErrorStore = create<errorStoreType>((set) => ({
  error: "",
  setError: (error?: string) => set({ error: error || "" }),
}));
