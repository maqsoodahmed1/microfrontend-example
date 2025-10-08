import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export interface LoginResponse {
    code: number | null;
    message: string | null;
    return_to: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
    return_to?: string;
    trustDevice?: boolean;
  }

  interface SessionResponse {
    data: {
      id: string;
      accountID: string;
      email: string;
      firstName: string;
      lastName: string;
      permissions: any;
      sessionExpires: string;
      trustedDevice: boolean;
    };
    code: string | null;
    message: string;
  }
  

const API_ENDPOINT = `${import.meta.env.VITE_AUTH_API}`;

export const refresh = async () => {
    const token = Cookies.get("sid");
    const response: AxiosResponse = await axios.get(
        `${API_ENDPOINT}/auth/refresh`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }
    );
    return response.data;
}

export const loginUser = async(credentials: LoginCredentials) => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(
        `${import.meta.env.VITE_AUTH_API}/auth/login?return_to=${credentials.return_to || ''}`,
        credentials,
        {
          withCredentials: true,
        }
      );
      return response.data
    } catch (error) {
      throw error;
    }
  }
  
  export const sessionData = async () => {
    const token = Cookies.get("sid");
    const response: AxiosResponse<SessionResponse> = await axios.get(
      `${API_ENDPOINT}/auth/session-data`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

  export const logoutUser = async () => {
    const token = Cookies.get("sid");
    const response = await axios.get(
      `${API_ENDPOINT}/auth/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

export const api = async <D = any>(config: AxiosRequestConfig<D>) => {
  const token = Cookies.get("sid");
  const accountId = sessionStorage.getItem("account_id"); 
  const response = await axios.request<D>({
    ...config,
    params: {
      ...config.params,
      account_id: accountId, 
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return response.data;
};

api.get = <D = any>(url: string, params?: any): Promise<D> => {
  return api<D>({ url, method: "GET", params });
};

api.post = <D = any>(url: string, data?: any): Promise<D> => {
  return api<D>({ url, method: "POST", data });
};

api.put = <D = any>(url: string, data?: any): Promise<D> => {
  return api<D>({ url, method: "PUT", data });
};

api.patch = <D = any>(url: string, data?: any): Promise<D> => {
  return api<D>({ url, method: "PATCH", data });
};

api.delete = <D = any>(url: string, data?: any): Promise<D> => {
  return api<D>({ url, method: "DELETE", data });
};