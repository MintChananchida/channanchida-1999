import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/create.dto';

@Controller('Category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() body: CategoryDto) {
    return this.service.create(body);
  }
}