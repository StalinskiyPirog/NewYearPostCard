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
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setny(true);
      return <div> Иди встречай Новый год, хватит зырить сюда
      </div>;
    } else {
      return (
        <div className=" place-self-center fixed top-[14%]">
          <h2 className="xl:text-sm text-xs">Till New Year:</h2>
          <span className=" flex  justify-center gap-1 font-bold text-xs flex-row">
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{days}</div>
              <div>days</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{hours}</div>
              <div>hours</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{minutes}</div>
              <div>minutes</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{seconds}</div>
              <div>seconds</div>
            </div>
          </span>
        </div>
      );
    }
  };
  return (
    <>
     <main className=" text-white -pt-20 pb-10 content-center justify-center h-screen text-xl">
     <Snowfall
  color="white"
  snowflakeCount={200}
/>
        <div className=" w-full  flex-row h-full  flex-wrap content-center  flex  justify-center"> 
        <div className="z-[2]">
        <Typewriter
  options={{
    strings: ['⭐С Новым годом!⭐', '⭐Жаңа Жылыңызбен!⭐' ,"⭐Happy New Year!⭐", "⭐新年おめでとうございます！⭐"],
    autoStart: true,
    delay: 100,
    loop: true,
  }}
/></div>
<Countdown date={"2023-01-01T00:00:00"}
                renderer={renderer} />
<Image src="/tree.gif" alt="tree" className={'fixed  bottom-[15%] z-[1] '} width={130} height={130}/>
</div>
     </main>
    </>
  )
}
