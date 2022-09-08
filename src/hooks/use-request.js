import { useState } from "react";
import axios from "axios";

export default ({ url, method, body, headers, onSuccess }) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const doRequest = async () => {
    try {
      setErrors(null);

      setLoading(true);
      const response = await axios({
        method: method,
        url: `https://xalilov-project.online/api/v1${url}`,
        data: body,
        headers,
      });

      setLoading(false);
      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setLoading(false);
      setErrors(err.response.data.errors);
    }
  };

  return { doRequest, errors, loading };
};
