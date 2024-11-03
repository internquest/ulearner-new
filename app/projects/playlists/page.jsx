import Link from 'next/link';
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import Button from '@/app/components/Button';
import { SchibstedGroteskmed, SchibstedGroteskmreg, } from '@/app/fonts/fonts';
import Individualvideo from '@/app/components/Individualvideo';
import Videos from '@/app/components/Videos';




// import TopBar from "@/app/ui/Topbar/TopBar";
// import Card from "@/app/ui/Cards/PlaylistCard";
// import { RiSearchLine } from "react-icons/ri";
// import cardData from "@/app/ui/Cards/playlistCards.json";

const Playlists = () => {
  const projectsplaylists = [
    {
      "URL": "https://youtube.com/playlist?list=PLdLUE-L26MMbXYkddCi6Cb1jy5dKczosk",
      "Title": "React Chat App"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLRAV69dS1uWRJcxXk1omgcMI07ygMxSRl",
      "Title": "Stackoverflow clone | Appwrite + NextJS"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLh9snHvfAj6JvhV8QnOad1DTKKPa-6v7-",
      "Title": "Podcaster MERN Stack"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLh9snHvfAj6IwguqPwSJx8zFTxBwRSwTT",
      "Title": "Book Store with Admin panel"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLXQpH_kZIxTUCvlEKuXCSn45fMKqAswlW",
      "Title": "Modern Cv using Html, Css and Javascript"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLNn5_vJ1tp1EbKNlVzhcaJKP6Q9-W9cff&",
      "Title": "Become Web developer by Building 50+ Projects in HTML, CSS, JS"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLxVP80QwEJLAtP-mERzx3MYia5R2jvjTz",
      "Title": "React Inventory Management System"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLj-4DlPRT48nCEYVkuvJAGYY5LCQJl3q0",
      "Title": "Next.js School Management App Project"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLj-4DlPRT48njIa8I19ftTjUxyys9ebcf",
      "Title": "React Node.js Real Estate App"
    }
  ]
  return (
    <Videos videos={projectsplaylists} videolink={"/projects/videos"} playlistlink={"/projects/playlists"} />

  )

  // return (
  //   <div>
  //     <TopBar />
  //     <section className="w-full bg-[#fafafa] px-0 py-4 sm:px-4 lg:px-0">
  //       <div className="mx-auto w-full max-w-screen-lg pb-4">
  //         <div className="relative">
  //           <input
  //             type="search"
  //             className="text-md w-full rounded-md border bg-white p-3 pl-10 font-normal text-gray-800 focus:border-gray-800 focus:outline-none active:border-gray-800"
  //             placeholder="Search Jobs"
  //           />
  //           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lg">
  //             <RiSearchLine className="text-gray-400" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mx-auto max-w-screen-lg rounded-md border bg-white text-gray-600">
  //         <div className="px-4 pt-4">
  //           <p className="text-[.8125rem] font-medium leading-5 text-[#666]">
  //             YOUR TOP JOB MATCHES ON UNTAPPED
  //           </p>
  //         </div>
  //         <div className="p-4">
  //           <div className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-[#f0e6ff] p-4 md:gap-x-4">
  //             <p className="text-md text-gray-800 selection:bg-lime">
  //               <span className="font-bold">A better way of searching.</span> We
  //               improved how we sort jobs so you see the jobs that are the best
  //               fit for you first.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="p-4 pt-0">
  //           <div className="grid grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
  //             {cardData.map((card, index) => (
  //               <Card
  //                 key={index}
  //                 title={card.title}
  //                 url={card.url}
  //                 techStack={card.techStack}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};

export default Playlists;
