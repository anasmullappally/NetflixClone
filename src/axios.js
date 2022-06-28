import axios from "axios";
import {baseUrl} from './constants/constans'

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance