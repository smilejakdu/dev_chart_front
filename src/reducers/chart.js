import produce from "../util/produce";

export const initialState = {
  chart_data: [],
  user_count: "",
  chartDataLoading: false,
  chartDataDone: false,
  chartDataError: null,
};

export const CHART_DATA_REQUEST = "CHART_DATA_REQUEST";
export const CHART_DATA_SUCCESS = "CHART_DATA_SUCCESS";
export const CHART_DATA_FAILURE = "CHART_DATA_FAILURE";

export const chartRequestAction = () => ({
  type: CHART_DATA_REQUEST,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHART_DATA_REQUEST:
        draft.chartDataLoading = true;
        draft.chartDataDone = null;
        draft.logInDone = false;
        break;
      case CHART_DATA_SUCCESS:
        draft.chartDataLoading = false;
        draft.chartDataDone = true;
        let {
          data: { data },
        } = action;
        console.log(data[0]);
        console.log(data[0].user_count);
        draft.user_count = data[0].user_count;
        delete data[0].user_count;
        console.log(data[0]);
        draft.chart_data = data[0];
        break;
      case CHART_DATA_FAILURE:
        draft.chartDataLoading = false;
        draft.chartDataError = action.error;
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };
      default:
        break;
    }
  });

export default reducer;
