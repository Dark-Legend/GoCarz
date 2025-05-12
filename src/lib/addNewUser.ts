import User from "@/models/User";
import { currentUser, User as clerkUser } from "@clerk/nextjs/server";
import dbConnect from "./mongoose";

export const addNewUser = async () => {
  await dbConnect();
  const user: clerkUser | null = await currentUser();
  const { id, imageUrl, lastName, firstName, emailAddresses } = user || {};

  if (!user) return null;

  try {
    const isUserExist = await User.findOne({
      clerkId: id,
    });

    if (isUserExist) return isUserExist;

    const newUserData = {
      clerkId: id,
      email: emailAddresses?.[0]?.emailAddress,
      firstName,
      lastName,
      imageUrl,
      role:
        emailAddresses?.[0]?.emailAddress === "iamxguy352@gmail.com"
          ? "admin"
          : "user",
    };
    const newUser = await User.create(newUserData);

    return newUser;
  } catch (err) {
    console.log(err, "USER");
  }
};
