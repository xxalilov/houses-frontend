import { useState } from "react";
import axios from "axios";

export default ({ url, method, body, headers, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);

      const response = await axios({
        method: method,
        url: `http://206.189.200.152/api/v1${url}`,
        data: body,
        headers,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return { doRequest, errors };
};
