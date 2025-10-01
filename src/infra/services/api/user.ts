import { HttpClient } from '@/infra/adapters/http';
import { httpClientFactory } from '@/infra/factory/http-client-factory';

class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  public changePassword = async (payload: {
    old_password: string;
    new_password: string;
  }) => {
    return await this.httpClient.request({
      endpoint: '/user/password/reset',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  };
}

export const userService = new UserService(httpClientFactory());
