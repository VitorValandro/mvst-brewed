import {
  IsNumberString,
  IsString,
  ValidateIf,
  IsEnum,
  MinLength,
} from 'class-validator';
import { CoffeeTag } from '../entities/coffee.entity';

export class FindAllCoffeeDto {
  @ValidateIf((dto) => dto.titleFilter)
  @IsString({ message: 'The title filter must be a valid string' })
  @MinLength(3, {
    message: 'The title filter must have at least 3 characteres',
  })
  titleFilter?: string;

  @ValidateIf((dto) => dto.tagFilter)
  @IsEnum(CoffeeTag, {
    message: "The tag filter must be of value 'ROBUSTA' or 'ARABIC'",
  })
  tagFilter?: CoffeeTag;

  @ValidateIf((dto) => dto.pageNumber)
  @IsNumberString({}, { message: 'The page number must be a integer number' })
  pageNumber?: number;

  @ValidateIf((dto) => dto.pageSize)
  @IsNumberString({}, { message: 'The page size must be a integer number' })
  pageSize?: number;
}
