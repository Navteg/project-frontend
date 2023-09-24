import axios from "axios";
import { BASE_URL } from "../utils/constant";

const getData = async function ({
  titleFilter,
  frontendFilter,
  backendFilter
}) {
  let params = {};
  if (titleFilter) {
    params.titleFilter = titleFilter;
  }
  if (frontendFilter) {
    params.frontendFilter = frontendFilter;
  }
  if (backendFilter) {
    params.backendFilter = backendFilter;
  }
  return await axios.get(`${BASE_URL}/get-data`, {
    params
  });
};

export { getData };
