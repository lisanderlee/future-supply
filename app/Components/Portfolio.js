// import React from "react";
// import Carousel from "react-elastic-carousel";
// import { motion } from "framer-motion";



// export default function Portfolio() {
//   const objectVariations = {
//     offscreen: {
//       y: 100,
//     },
//     onscreen: {
//       y: 0,
//       transition: {
//         ease: "easeOut",
//         duration: 0.3,
//         damping: 4,
//       },
//     },
//   };
//   return (
//     <div className="lg:px-28 md:px-11 bg-slate-100 px-10 pt-20 pb-20 sm:px-5  lg:pb-32 lg:pt-32">
//       <div className="flex flex-col  lg:flex-row  ">
//         <div className=" flex-1 font-bold text-3xl flex-col text-slate-800	">
//           <p>TAKE A LOOK AT </p>
//           <p>SOME OF OUR WORK </p>
//         </div>
//         <div className="flex-1 ">
//           <p className="text-xl mt-10 font-md lg:mt-0 text-slate-800  mb-16">
//             At RockinDev, we believe in the power of collaboration to create
//             exceptional and scalable experiences. We work closely with our
//             clients, whether they are brands, businesses, or beyond, to bring
//             their visions to life in the most beautiful and immersive ways.
//           </p>
//         </div>
//       </div>
//       <motion.div
//         variants={objectVariations}
//         initial="offscreen"
//         whileInView="onscreen"
//       >
//       <div className="w-100 px-0 lg:mt-24">
//         <Carousel itemsToShow={1} pagination={false}>
//           <img
//             src="images/images/rockin_video.png"
//             alt="logo"
//             className="herovideo"
//           />
//           <img
//             src="images/images/rockin_video.png"
//             alt="logo"
//             className="herovideo"
//           />
//           <img
//             src="images/images/rockin_video.png"
//             alt="logo"
        
//           />
//           <img
//             src="images/images/rockin_video.png"
//             alt="logo"
         
//           />
//           <img
//             src="images/images/rockin_video.png"
//             alt="logo"
           
//           />
//           <img
//             src="images/images/rockin_video.png"
//             alt="logo"
          
//           />
//         </Carousel>
       
//       </div>
//       </motion.div>
//     </div>
//   );
// }
