import { create } from 'zustand'

interface previewUrlState {
	previewUrl: string
	saveUrl: (newUrl: string) => void
}

export const usePreviewUrl = create<previewUrlState>()((set) => ({
	previewUrl: '/home',
	saveUrl: (newUrl) => set((state) => ({ previewUrl: newUrl })),
}))
