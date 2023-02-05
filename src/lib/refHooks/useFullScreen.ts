export const useFullScreen = (
  element: HTMLDivElement,
  _isFullScreen: boolean
): SvelteActionReturnType => {
  return {
    update: (_newMode: boolean) => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        element.requestFullscreen();
      }
    }
  };
};
