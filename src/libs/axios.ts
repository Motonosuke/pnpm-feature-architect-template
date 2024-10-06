import Axios from "axios";

import { ENV } from "@/constants/env";

export const axios = Axios.create({
  // biome-ignore lint/style/useNamingConvention: <explanation>
  baseURL: ENV.API_URL,
  timeout: 5000,
});
