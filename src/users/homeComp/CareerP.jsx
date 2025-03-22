import React from 'react'

import SpotlightCard from '../components/SpotlightCard'

const CareerP = () => {
    const infos = [
        { icon: "hardware-chip-outline", topic: "ex topic #1", desc: "ทงกั๊กซูฮก ซิตีโง่เขลาลาเต้ ฟีดเสกสรรค์คอร์ปซีน วิกเทรนด์พันธุวิศวกรรมบรา โยเกิร์ตฉลุย " },
        { icon: "share-social-outline", topic: "ex topic #2", desc: "คอนแทคเทคโนแครต ซูเปอร์เอาท์ป๋อหลอจุ๊ยฮาลาล มะกัน ฟยอร์ดทำงาน แชมปิยองอีโรติก" },
        { icon: "server-outline", topic: "ex topic #3", desc: "ช็อปเปอร์โบรชัวร์กรีนเยอร์บีร่า เพลซสต็อคไนน์เย้ว เทคโนห่วยท็อปบูตเซาท์ โบกี้พาวเวอร์เซี้ยวดีลเลอร์ผู้นำ " },
    ]
  return (
    <main className='careerP-container'>
        {infos.map((info, idx) => (
            <SpotlightCard key={idx} className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.2)">
                <ion-icon name={info.icon}></ion-icon>
                <h1 className="topic">{info.topic}</h1>
                <p className="desc">{info.desc}</p>
            </SpotlightCard>
        ))}
    </main>
  )
}

export default CareerP