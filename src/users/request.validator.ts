import { IsNotEmpty, IsString, Length } from 'class-validator';

export default class UserRequest {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  lastName: string;
}
