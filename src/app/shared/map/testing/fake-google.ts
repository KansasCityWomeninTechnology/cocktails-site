// This is the fake google!
export const googleMock = {
  maps: {
    Map: () => {},
    Marker: () => {
      return {
        setMap: () => {}
      };
    },
    Animation: {},
  }
};
