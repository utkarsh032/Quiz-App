import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

/** insert user data */
export const usePublishResult = async (resultData) => {
  const { result, username } = resultData;

  if (result.length === 0 || !username) {
    console.error("Couldn't get Result");
    return; // Exit early if result is empty or username is not provided
  }

  try {
    await postServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      resultData,
      (data) => data
    );
  } catch (error) {
    console.log(error);
    // Handle error, e.g., dispatch an action to update Redux store with error message
  }
};
