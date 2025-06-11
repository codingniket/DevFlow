// import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";

const Home = async () => {
  // const session = await auth();
  // console.log(session);
  return (
    <>
    <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
     <h1 className="h1-bold text-dark100_light900">All Questions</h1>
     <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
      <Link href={ROUTES.ASK_QUESTION}>
        Ask a Question
      </Link>
      </Button>
    </section>

    <section className="mt-10 flex flex-col gap-6">
      Local Search Bar
    </section>
    {/* <HomeFilters /> */}

    <div className="mt-10 flex w-full flex-col gap-6">
      <p>Question Card 1</p>
      <p>Question Card 1</p>
      <p>Question Card 1</p>
      <p>Question Card 1</p>
    </div>
    </>
  );
};

export default Home;
