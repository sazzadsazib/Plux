import { navigate } from '@reach/router';

const initialState = {
  isNew: true,
  jsonData: null,
};

export const viewer = {
  state: {
    ...initialState,
  },
  reducers: {
    updateTour(state, payload) {
      return { ...state, isNew: payload };
    },
    clearState() {
      return { ...initialState };
    },
  },
  effects: (dispatch) => ({
    clearData() {
      dispatch.viewer.clearState();
      navigate(`/tour`);
    },
  }),
};
