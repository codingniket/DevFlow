import ROUTES from "@/constants/routes"
import Link from "next/link"
import Image from "next/image"
import { TagCard } from "../cards/TagCard"

const topQuestions = [
  {
    _id:"1",
    title:"How do I use AI to improve my writing?"
  },
  {
    _id:"2",
    title:"How do I use AI to improve my writing?"
  },
  {
    _id:"3",
    title:"How do I use AI to improve my writing?"
  },
  {
    _id:"4",
    title:"How do I use AI to improve my writing?"
  }
]

const popularTags = [
  {
    _id:"1",
    name:"javascript",
    questions:5
  },
  {
    _id:"2",
    name:"react",
    questions:500
  },
  {
    _id:"3",
    name:"nextjs",
    questions:100
  },
]

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between overflow-y-auto border-l border-light-400 gap-6 p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
        <div className="flex flex-1 flex-col gap-6">
            <div>
                <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {topQuestions.map(({_id, title}) => (
                      <Link href={ROUTES.PROFILE(_id)} key={_id}
                      className="flex items-center justify-between gap-7 cursor-pointer"
                      >
                        <p className="text-dark500_light700 body-medium">{title}</p>
                        <Image src="/icons/chevron-right.svg" alt="chevron" width={20} height={20}  />
          
                      </Link>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex w-full flex-col gap-4">
                {popularTags.map(({_id, name, questions}) => (
                  <TagCard key={_id} _id={_id} name={name} questions={questions} showCount={true} compact={true} />
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default RightSidebar