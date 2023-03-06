import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Dog{
  @Field(()=> ID)
  name:string;
}
