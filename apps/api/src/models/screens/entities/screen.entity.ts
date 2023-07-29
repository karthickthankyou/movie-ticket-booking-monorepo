import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  ProjectionType,
  Screen as ScreenType,
  SoundSystemType,
} from '@prisma/client'

registerEnumType(ProjectionType, {
  name: 'ProjectionType',
  description: 'Enum for screen projection types',
})
registerEnumType(SoundSystemType, {
  name: 'SoundSystemType',
  description: 'Enum for sound system types',
})

@ObjectType()
export class Screen implements ScreenType {
  @Field(() => Float)
  price: number
  @Field(() => ProjectionType)
  projectionType: ProjectionType
  @Field(() => SoundSystemType)
  soundSystemType: SoundSystemType
  id: number
  createdAt: Date
  updatedAt: Date
  number: number
  cinemaId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
