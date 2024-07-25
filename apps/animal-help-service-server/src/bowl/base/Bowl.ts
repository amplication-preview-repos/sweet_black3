/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsInt,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumBowlStatus } from "./EnumBowlStatus";
import { Location } from "../../location/base/Location";
import { StatusUpdate } from "../../statusUpdate/base/StatusUpdate";

@ObjectType()
class Bowl {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumBowlStatus,
  })
  @IsEnum(EnumBowlStatus)
  @IsOptional()
  @Field(() => EnumBowlStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Location,
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Location | null;

  @ApiProperty({
    required: false,
    type: () => [StatusUpdate],
  })
  @ValidateNested()
  @Type(() => StatusUpdate)
  @IsOptional()
  statusUpdates?: Array<StatusUpdate>;
}

export { Bowl as Bowl };
