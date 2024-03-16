import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export function attempts_Number(result) {
  return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
  return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50 / 100) < earnPoints; // Earn 50% marks
}

/** Check user authentication */
export function CheckUserExist({ children }) {
  const auth = useSelector(state => state.result.userId);
  return auth ? children : <Navigate to={'/'} replace={true} />;
}

/** Get server data */
export async function getServerData(url, callback) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return callback ? callback(data) : data;
  } catch (error) {
    // Handle network error
    console.error("Network Error in getServerData:", error.message);
    throw error; // Re-throw the error to be handled by the caller
  }
}

/** Post server data */
export async function postServerData(url, result, callback) {
  try {
    const response = await axios.post(url, result);
    const data = response.data;
    return callback ? callback(data) : data;
  } catch (error) {
    // Handle network error
    console.error("Network Error in postServerData:", error.message);
    throw error; // Re-throw the error to be handled by the caller
  }
}
