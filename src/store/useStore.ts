import { create } from "zustand";

interface AppState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  isSoundEnabled: true, // Default to true, listener will handle user intent
  toggleSound: () =>
    set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
}));
