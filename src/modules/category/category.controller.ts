import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
    @Get()
    findAll() {
        return 'category list';
    }
}