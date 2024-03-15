import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Book } from '@prisma/client';
import { MysqlService } from 'src/prisma/mysql/mysql.service';

@Controller('book')
export class BookController {
  constructor(private prismaService: MysqlService) {}

  @Get()
  async getAllBooks(@Query('title') title: string): Promise<Book[]> {
    return this.prismaService.book.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }

  @Post()
  async insertBook(
    @Body('title') title: string,
    @Body('desc') desc: string,
    @Body('totalPages') totalPages: number,
  ): Promise<Book> {
    return this.prismaService.book.create({
      data: {
        title,
        desc,
        totalPages: Number(totalPages),
      },
    });
  }
}
