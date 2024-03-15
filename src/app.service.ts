import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const fruits = [
      'apple',
      'apple',
      'apple',
      'apple',
      'apple',
      'apple',
      'apple',
    ];
    return 'Hello World!' + fruits.join();
  }
}
