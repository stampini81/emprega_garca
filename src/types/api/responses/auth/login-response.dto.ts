import { User } from '../user/user';

export interface LoginResponseDto {
  accessToken: string;
  user: User;
  expiresIn: number;
}
