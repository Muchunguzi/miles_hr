import React from "react";
import heroVid from "../assets/videos/heroVid.mp4"

const HeroImage = () => {
    return (
        <div className="heroImage relative mx-auto w-full h-[75vh] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="heroVid absolute m-auto w-full h-full object-cover z-0"
              >
                <source src={heroVid} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <div className="relative z-10 flex flex-col justify-center items-center text-white h-full">
               <h1>Welcome to Miles Human Resource Ltd</h1>
               <p className="mt-4 text-xl">We are here for you !</p>
              </div>
        </div>
    )
}

export default HeroImage;