import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    if (process.env.TOKEN === '213124') {
      return 'Hello World from FortBrasil! &&&&&&&';
    } else {
      return `Hello World ${process.env.ENVIRONMENT}`;
    }
  }
}
