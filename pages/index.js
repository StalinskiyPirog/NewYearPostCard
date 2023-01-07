import Image from 'next/image';
// import CozyHoliday from 'cozy-holi
import dynamic from 'next/dynamic'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {useState } from "react";
import Countdown from "react-countdown";
const Snowfall = dynamic(
  () => import('react-snowfall'),
  { ssr: false }
)
import Typewriter from 'typewriter-effect';
export default function Home() {
  const [ny, setny] = useState(true);
 
  return (
    <>
     <main className=" text-white -pt-20 pb-10 content-center justify-center h-screen text-xl">
     <Snowfall
  color="white"
  snowflakeCount={200}
/>
        <div className=" w-full  flex-row h-full  flex-wrap content-center  flex  justify-center"> 
        <div className="z-[2] top-[15%]">
        <Typewriter
  options={{
    strings: ['⭐С Рождеством!⭐' ,"⭐Merry Christmas!⭐", "⭐メリークリスマス！⭐"],
    autoStart: true,
    delay: 100,
    loop: true,
  }}
/></div>

<Image src="/tree.gif" alt="tree" className={'fixed  bottom-[15%] z-[1] '} width={130} height={130}/>
</div>
     </main>
    </>
  )
}
