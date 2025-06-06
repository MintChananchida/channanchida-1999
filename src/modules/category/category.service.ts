import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/create.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  findAll() {
    return this.repo.find();
  }

  create(data: Partial<CategoryDto>) {
    const { userID, ...rest } = data;
    const entity = this.repo.create({
      ...rest,
      user: { id: userID },
    });
    return this.repo.save(entity);
  }
}
    