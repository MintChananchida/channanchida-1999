import { ApiProperty } from "@nestjs/swagger";


export class CategoryDto {
  @ApiProperty({ description: 'name', example: 'Mint' })
  name: string;
  @ApiProperty({ description: 'type', example: 'income' })
  type: 'income' | 'expense';
  @ApiProperty({ description: 'userID', example: '1' })
  userID: number;
}