import { StatusCodes } from "http-status-codes";
import { config } from "./config";

type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type Request = {
  payload?: any;
};

type Response<T> = {
  status: StatusCodes;
  ok: boolean;
  data: T;
};

export class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:3001";
  }

  public async get<T>(path: string, req: Request): Promise<Response<T>> {
    return await this.call<T>(path, "GET", req);
  }

  public async post<T>(path: string, req: Request): Promise<Response<T>> {
    return await this.call(path, "POST", req);
  }

  public async put(path: string, req: Request): Promise<any> {
    return await this.call(path, "PUT", req);
  }

  public async patch(path: string, req: Request): Promise<any> {
    return await this.call(path, "PATCH", req);
  }

  public async delete(path: string, req: Request): Promise<any> {
    return await this.call(path, "DELETE", req);
  }

  private async call<T>(
    path: string = "",
    method: ApiMethod,
    req?: Request,
  ): Promise<Response<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        ...config,
        method,
        body: JSON.stringify(req.payload) ?? "",
      });

      const data = await response.json();

      return {
        status: response.status,
        ok: response.ok,
        data,
      };
    } catch (e) {
      console.error(e);
    }
  }
}

export const client = new ApiClient();
