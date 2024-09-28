import Image from "next/image";
import { user } from "@/utils/ProfileData";
import UserProfile from "@/components/UserProfile";
import { dummyStamps0 } from "@/utils/StampData0";

export default function ProfilePage() {
  return (
    <>
      <div>
          <UserProfile user={user[0]} collections={dummyStamps0}/>
      </div>
    </>
  );
}
