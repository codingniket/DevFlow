import { auth } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className="">
     <h1>Hello Nextjs</h1>
    </div>
  );
};

export default Home;
