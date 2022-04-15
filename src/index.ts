import { Ability, AbilityBuilder } from "@casl/ability";
import { users } from "./data";
import { User } from "./interface/user.interface";
import { Post } from "./Post";
import { Role } from "./role/user.role";

const defineAbility = (user: User) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  // actions --> create, read, update, delete

  if (user.role === Role.admin) {
    can("manage", "all");
  } else {
    can("read", "Post");
    can("update", "Post", ["content"], { authorId: user.id });
    // only if they own it, specifically only content
    cannot("delete", "Post").because("Only admins can delete posts");
  }

  return build();
};
const newPost = new Post(2); // this post is owned by user 2
const ability = defineAbility(users[1]); // user 2

const canPublish = ability.can("update", newPost, "isPublished");
console.log(canPublish); // false, user can only update his content

// try {
//   const canDelete = ability.can("delete", newPost);
//   if (!canDelete) {
//     throw new Error("User cannot delete post");
//   }
// } catch (err) {
//   console.error(err.message);
// }
