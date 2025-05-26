import { auth } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div>
      <h1 className="font-space-grotesk text-3xl h1-bold">
        Hello from next js
      </h1>
    </div>
  );
};

export default Home;
