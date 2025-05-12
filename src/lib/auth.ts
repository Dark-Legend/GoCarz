import { auth } from "@clerk/nextjs/server";

export const getUserId = () => {
  const { userId } = auth(); // Comes from Clerk's JWT/session
  if (!userId) throw new Error("Unauthorized");
  return userId;
};
