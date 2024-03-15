import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MysqlService extends PrismaClient {
  constructor() {
    super();
    console.info('connect prisma');
  }
}
