export interface ScrollState {
  activeSectionId: string | null;
  progress: number;
}

export const initialScrollState: ScrollState = {
  activeSectionId: null,
  progress: 0
};
