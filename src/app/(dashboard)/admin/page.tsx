import AdminContent from "@/components/AdminContext";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <AdminContent
      isLoggedIn={!!session?.user}
      username={session?.user?.username || session?.user?.name || ""}
    />
  );
};

export default Page;
