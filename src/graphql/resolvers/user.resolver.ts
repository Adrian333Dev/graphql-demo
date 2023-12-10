import {
  Args,
  Int,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User, UserSettings } from '@graphql/models';
import { mockUsers, mockUserSettings } from '@__mocks__';

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User], { name: 'users' })
  async list(): Promise<User[]> {
    return mockUsers;
  }

  @Query(() => User, { name: 'user' })
  async get(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return mockUsers.find((user) => user.id === id);
  }

  @ResolveField(() => UserSettings, { nullable: true })
  async settings(@Parent() user: User): Promise<UserSettings> {
    return mockUserSettings.find((settings) => settings.userId === user.id);
  }
}
