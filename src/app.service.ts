import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  status(): Record<string, boolean> {
    return { status: true };
  }
}
