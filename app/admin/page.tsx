import Admin from "@/components/admin";
import dbConnect from "@/server";
import User, { IUser } from "@/server/userSchema";
import React from "react";

export default async function page() {
  await dbConnect();
  const rawData = await User.find({});
  const data: IUser[] = JSON.parse(JSON.stringify(rawData));

  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-950">
      {" "}
      <Admin initialData={data} />
    </div>
  );
}
