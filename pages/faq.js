import Nav from '../components/Nav'
import { useState } from 'react'
import Footer from '../components/Footer'
import Axios from 'axios'
import Head from 'next/head'


const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden">
      <div className="py-2 border-b border-gray-100 flex items-center hover:text-gray-700 justify-between cursor-pointer" onClick={_ => setIsOpen(!isOpen)}>
        <h4 className="font-semibold text-lg">{faq.question}</h4>
        {
          isOpen ? (
            <div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64663 4.64689C7.69308 4.60033 7.74825 4.56339 7.809 4.53818C7.86974 4.51297 7.93486 4.5 8.00063 4.5C8.0664 4.5 8.13152 4.51297 8.19226 4.53818C8.25301 4.56339 8.30819 4.60033 8.35463 4.64689L14.3546 10.6469C14.4485 10.7408 14.5013 10.8681 14.5013 11.0009C14.5013 11.1337 14.4485 11.261 14.3546 11.3549C14.2607 11.4488 14.1334 11.5015 14.0006 11.5015C13.8679 11.5015 13.7405 11.4488 13.6466 11.3549L8.00063 5.70789L2.35463 11.3549C2.26075 11.4488 2.13341 11.5015 2.00063 11.5015C1.86786 11.5015 1.74052 11.4488 1.64663 11.3549C1.55274 11.261 1.5 11.1337 1.5 11.0009C1.5 10.8681 1.55274 10.7408 1.64663 10.6469L7.64663 4.64689Z" fill="black" />
              </svg>
            </div>
          ) : (
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64689 4.64689C1.69334 4.60033 1.74852 4.56339 1.80926 4.53818C1.87001 4.51297 1.93513 4.5 2.00089 4.5C2.06666 4.5 2.13178 4.51297 2.19253 4.53818C2.25327 4.56339 2.30845 4.60033 2.35489 4.64689L8.00089 10.2939L13.6469 4.64689C13.6934 4.60041 13.7486 4.56353 13.8093 4.53837C13.87 4.51321 13.9352 4.50026 14.0009 4.50026C14.0666 4.50026 14.1317 4.51321 14.1925 4.53837C14.2532 4.56353 14.3084 4.60041 14.3549 4.64689C14.4014 4.69338 14.4383 4.74857 14.4634 4.80931C14.4886 4.87005 14.5015 4.93515 14.5015 5.00089C14.5015 5.06664 14.4886 5.13174 14.4634 5.19248C14.4383 5.25322 14.4014 5.30841 14.3549 5.35489L8.35489 11.3549C8.30845 11.4015 8.25327 11.4384 8.19253 11.4636C8.13178 11.4888 8.06666 11.5018 8.00089 11.5018C7.93513 11.5018 7.87001 11.4888 7.80926 11.4636C7.74852 11.4384 7.69334 11.4015 7.64689 11.3549L1.64689 5.35489C1.60033 5.30845 1.56339 5.25327 1.53818 5.19253C1.51297 5.13178 1.5 5.06666 1.5 5.00089C1.5 4.93513 1.51297 4.87001 1.53818 4.80926C1.56339 4.74851 1.60033 4.69334 1.64689 4.64689Z" fill="black" />
                </svg>
              </div>
            )
        }
      </div>
      {
        isOpen && (
          <div className="py-2">
            <p>{faq.answer}</p>
          </div>
        )
      }
    </div>
  )
}

const FAQ = ({ faqs, footer }) => {
  const phoneNumber = `082134567890`
  const msg = encodeURI(`Saya ingin tanya mengenai bimbel Elektrum`)

  return (
    <div>
      <Head>
        <title>FAQ | Rumah Belajar Electrum</title>
        <meta name="description" content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />

        <meta name='twitter:title' content="FAQ | Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta name='twitter:image' content="/favicon.ico" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="FAQ | Rumah Belajar Electrum" />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta property='og:image' content="/favicon.ico" />
      </Head>
      <Nav footer={footer} />
      <div className="relative">
        <div className="absolute inset-0 w-full bg-primary-green z-10"></div>
        <div className="max-w-3xl m-auto px-3 py-16 relative z-10">
          <h2 className="text-3xl text-white text-center font-bold">Frequently Asked Question</h2>
        </div>
      </div>
      <div className="max-w-3xl m-auto rounded-md px-4 overflow-hidden py-16">
        {
          faqs.map(faq => {
            return (
              <FAQItem faq={faq} />
            )
          })
        }
      </div>
      <div className="bg-primary-navy py-16">
        <div className="max-w-6xl m-auto text-center">
          <h2 className="text-3xl text-white font-bold">Masih bingung atau ada pertanyaan lain?</h2>
          <a className="block mt-12 px-4" target="_blank" href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${msg}`}>
            <button className="bg-primary-green font-semibold text-lg text-black px-4 py-4 rounded-md w-full max-w-sm">Hubungi via WhatsApp</button>
          </a>
        </div>
      </div >
      <Footer footer={footer} />
    </div >
  )
}

export async function getServerSideProps(context) {
  const faq = await Axios.get(`${process.env.BASE_URL}/api/collections/faq`)

  return {
    props: {
      faqs: faq.data.data
    },
  }
}

export default FAQ