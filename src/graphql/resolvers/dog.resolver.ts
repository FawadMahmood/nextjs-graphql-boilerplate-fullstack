import { Query, Resolver } from "type-graphql";
import { Dog } from "../schema";

@Resolver(Dog)
export class DogResolver{
  @Query(()=> [Dog])
  dogs():Dog[]{
    return [
      {name:"Bo"},
      {name:"Lessie"}
    ]
  }
}