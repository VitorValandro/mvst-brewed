import {
  IsOptional,
  IsString,
  IsEnum,
  MinLength,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CoffeeTag } from '../entities/coffee.entity';

export class FindAllCoffeeQueryParamsDto {
  @IsOptional()
  @IsString({ message: 'The title filter must be a valid string' })
  @MinLength(3, {
    message: 'The title filter must have at least 3 characteres',
  })
  titleFilter?: string;

  @IsOptional()
  @IsEnum(CoffeeTag, {
    message: "The tag filter must be of value 'ROBUSTA' or 'ARABIC'",
  })
  tagFilter?: CoffeeTag;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'The page number must be a integer number' })
  @Min(0, { message: 'The page number must be 0 or a positive integer' })
  pageNumber?: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'The page size must be a integer number' })
  @Min(1, { message: 'The page size must be greater than 0' })
  pageSize?: number = 10;
}
