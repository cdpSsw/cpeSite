import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import ev1 from "/public/users/home-assets/exposter/ev1.png";
import ev2 from "/public/users/home-assets/exposter/ev2.png";
import ev3 from "/public/users/home-assets/exposter/130.png";

const Activities = () => {
  const conRef = useRef(null);
  const imgRefs = useRef([]);
  const text1Refs = useRef([]);
  const text2Refs = useRef([]);
  const [selectedImg, setSelectedImg] = useState(null); // เก็บภาพที่ถูกคลิก

  const activities = [
    {
      topic: "ex poster #1",
      description: "ex. first description",
      poster: ev1,
    },
    {
      topic: "ex poster #2",
      description: "ex. second description",
      poster: ev2,
    },
    {
      topic: "ex poster #3",
      description: "ex. third description",
      poster: ev3,
    },
  ];

  useEffect(() => {
    imgRefs.current.forEach((img, idx) => {
      gsap.fromTo(
        img,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: conRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // กำหนดค่าเริ่มต้น
      if (idx === 1) {
        gsap.set(img, { scale: 1.1, filter: "grayscale(0)" });
        gsap.set(text1Refs.current[idx], { opacity: 1 });
        gsap.set(text2Refs.current[idx], { opacity: 1 });
      } else {
        gsap.set(text1Refs.current[idx], { opacity: 0 });
        gsap.set(text2Refs.current[idx], { opacity: 0 });
      }

      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.1, filter: "grayscale(0)", duration: 0.3 });
        gsap.fromTo(text1Refs.current[idx], 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: .3, ease: "power2.inOut" }
        );

        gsap.fromTo(text2Refs.current[idx], 
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: .3, ease: "power2.inOut" }
        );

        // Reset ตัวอื่นให้กลับเป็น opacity 0
        imgRefs.current.forEach((otherImg, otherIdx) => {
          if (otherIdx !== idx) {
            gsap.to(otherImg, {
              scale: 1,
              filter: "grayscale(100%)",
              duration: 0.3,
            });
            gsap.to(text1Refs.current[otherIdx], { opacity: 0, duration: .3, ease: "power2.inOut" });
            gsap.to(text2Refs.current[otherIdx], { opacity: 0, duration: .3, ease: "power2.inOut" });
          }
        });
      });

      img.addEventListener("mouseleave", () => {
        if (idx !== 1) {
          gsap.to(img, { scale: 1, filter: "grayscale(100%)", duration: 0.3 });
          gsap.to(text1Refs.current[idx], { opacity: 0, duration: .3, ease: "power2.inOut" });
          gsap.to(text2Refs.current[idx], { opacity: 0, duration: .3, ease: "power2.inOut" });

          // คืนค่าเริ่มต้นให้ index 1
          gsap.to(imgRefs.current[1], {
            scale: 1.1,
            filter: "grayscale(0)",
            duration: 0.3,
          });
          gsap.to(text1Refs.current[1], { opacity: 1, duration: .3, ease: "power2.inOut" });
          gsap.to(text2Refs.current[1], { opacity: 1, duration: .3, ease: "power2.inOut" });
        }
      });
    });
  }, []);

  return (
    <main ref={conRef} className="activities-container d-flex">
      {activities.map((activity, idx) => (
        <section className="content-box">
          <img
            ref={(el) => (imgRefs.current[idx] = el)}
            key={idx}
            src={activity.poster}
            alt={activity.topic}
            onClick={() => setSelectedImg(activity.poster)} // แสดง Overlay
          />
          <section
            className="text-container"
          > 
            <section className="topic-container">
              <h1
                ref={(el) => (text1Refs.current[idx] = el)} 
                className="topic"
                >{activity.topic}
              </h1>
            </section>
            <section className="desc-container">
              <p 
                ref={(el) => (text2Refs.current[idx] = el)}
                className="desc"
              >{activity.description}
              </p>
            </section>
          </section>
        </section>
      ))}

      {/* Overlay แสดงภาพ Original */}
      {selectedImg && (
        <div className="overlay" onClick={() => setSelectedImg(null)}>
          <div className="overlay-content">
            <img
              src={selectedImg}
              alt="Original Image"
              className="original-img"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Activities;
