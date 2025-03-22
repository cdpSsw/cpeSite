import React from 'react'

import SpotlightCard from '../components/SpotlightCard'

const CareerP = () => {
    const career_info = [{ topic: 'Career Path.', description: 'พุทโธแซมบ้า พาสต้า ฮาโลวีนฟลุค กีวีความหมายสันทนา การทัวร์นาเมนท์ ราชบัณฑิตยสถาน' }]
    const career_detail = [
        { icon: "hardware-chip-outline", topic: "ex topic #1", desc: "ทงกั๊กซูฮก ซิตีโง่เขลาลาเต้ ฟีดเสกสรรค์คอร์ปซีน วิกเทรนด์พันธุวิศวกรรมบรา โยเกิร์ตฉลุย " },
        { icon: "share-social-outline", topic: "ex topic #2", desc: "คอนแทคเทคโนแครต ซูเปอร์เอาท์ป๋อหลอจุ๊ยฮาลาล มะกัน ฟยอร์ดทำงาน แชมปิยองอีโรติก" },
        { icon: "server-outline", topic: "ex topic #3", desc: "ช็อปเปอร์โบรชัวร์กรีนเยอร์บีร่า เพลซสต็อคไนน์เย้ว เทคโนห่วยท็อปบูตเซาท์ โบกี้พาวเวอร์เซี้ยวดีลเลอร์ผู้นำ " },
    ]
  return (
    <main className='careerP-container'>
        {career_info.map((info, idx) => (
            <section key={idx} className='text-container'>
                <h1 className="topic">{info.topic}</h1>
                <p className="desc">{info.description}</p>
            </section>
        ))}

        <article className="content-container row">
            {career_detail.map((detail, idx) => (
                <section className='col-md-4'>
                    <SpotlightCard 
                        key={idx} 
                        className="custom-spotlight-card" 
                        spotlightColor="rgba(255, 255, 255, 0.2)"
                    >
                        <ion-icon name={detail.icon}></ion-icon>
                        <h1 className="topic">{detail.topic}</h1>
                        <p className="desc">{detail.desc}</p>
                    </SpotlightCard>
                </section>
            ))}
        </article>
    </main>
  )
}

export default CareerP