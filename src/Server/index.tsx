import axios from "axios";

import { Environment } from "../Environment";
import { errorInterceptor, responseInterceptor } from "./axios-configs";

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (response) => errorInterceptor(response),
)
export { Api }