import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, CarouselContext } from 'pure-react-carousel'
import FooterCTA from '../components/FooterCTA'
import Axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'

const MethodText = ({ methods }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselContext = useContext(CarouselContext)

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return (
    <div>
      <div className="px-4">
        <p className="text-xl font-semibold text-white">{methods[currentSlide].name}</p>
        <p className="mt-2 text-white">{methods[currentSlide].description}</p>
      </div>
    </div>
  )
}

const ResponsiveCarousel = ({ data, children }) => {
  return (
    <div className="relative">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={data.slides.length}
        className="block lg:hidden"
      >
        {children}
      </CarouselProvider>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={33}
        totalSlides={data.slides.length}
        className="hidden lg:block"
      >
        {children}
      </CarouselProvider>
    </div>
  )
}

export default function Home({ data, footer }) {
  return (
    <div>
      <Head>
        <title>Rumah Belajar Electrum</title>
        <meta name="description" content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />

        <meta name='twitter:title' content="Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta name='twitter:image' content={data.slides[0].img} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Rumah Belajar Electrum" />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta property='og:image' content={data.slides[0].img} />
      </Head>
      <Nav footer={footer} />
      <div>
        <ResponsiveCarousel data={data}>
          <Slider>
            {
              data.slides.map((slide, idx) => {
                return (
                  <Slide index={idx}>
                    {
                      slide.url ? (
                        <Link href={slide.url}>
                          <img className="cursor-pointer w-full h-full object-cover" src={slide.img} />
                        </Link>
                      ) : (
                          <img className="cursor-pointer w-full h-full object-cover" src={slide.img} />
                        )
                    }
                  </Slide>
                )
              })
            }
          </Slider>
          <div className="absolute h-full left-0 top-0">
            <div className="flex items-center h-full px-2 lg:px-8">
              <ButtonBack>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.2" />
                  <path d="M21 24L26 29L26.7 28.3L22.4 24L26.7 19.7L26 19L21 24Z" fill="white" />
                </svg>
              </ButtonBack>
            </div>
          </div>
          <div className="absolute h-full right-0 top-0">
            <div className="flex items-center h-full px-2 lg:px-8">
              <ButtonNext>
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.2" />
                  <path d="M27 24L22 29L21.3 28.3L25.6 24L21.3 19.7L22 19L27 24Z" fill="white" />
                </svg>
              </ButtonNext>
            </div>
          </div>
        </ResponsiveCarousel>
      </div>
      <div className="max-w-6xl m-auto px-4 py-16">
        <h3 className="text-3xl font-bold">Kenapa Harus Memilih Electrum</h3>
        <div className="flex flex-wrap -mx-3 lg:-mx-12">
          {
            data.why.map(data => {
              return (
                <div className="w-1/2 lg:w-1/3 flex-shrink px-3 lg:px-12 mt-12 lg:mt-20">
                  <div>
                    <div className="relative">
                      <div className="absolute w-full" style={{
                        bottom: `1rem`
                      }}>
                        <img className="m-auto w-12 h-12" src={data.icon} />
                      </div>
                      <svg className="m-auto" width="99" height="50" viewBox="0 0 99 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M99 49.5C99 36.3718 93.7848 23.7813 84.5018 14.4982C75.2187 5.21517 62.6282 9.91153e-07 49.5 0C36.3718 -9.91153e-07 23.7813 5.21516 14.4982 14.4982C5.21517 23.7813 1.98231e-06 36.3718 0 49.5H49.5H99Z" fill="url(#paint0_linear)" fill-opacity="0.2" />
                        <defs>
                          <linearGradient id="paint0_linear" x1="49.5" y1="37.4786" x2="49.5" y2="-4.24286" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FDE9B" />
                            <stop offset="1" stop-color="#2FDE9B" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mt-4">{data.title}</h4>
                    <p className="mt-2">{data.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="bg-primary-navy overflow-hidden relative py-8">
        <div className="max-w-xl m-auto">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={75}
            totalSlides={data.methods.length}
            className="carousel-peek"
          >
            <div className="flex flex-wrap relative">
              <div className="w-full relative z-10 px-4 bg-primary-navy flex flex-col items-center">
                <h4 className="text-3xl text-white font-bold">Program Electrum</h4>
                <div className="flex pt-8">
                  <ButtonBack>
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.2" />
                      <path d="M21 24L26 29L26.7 28.3L22.4 24L26.7 19.7L26 19L21 24Z" fill="white" />
                    </svg>
                  </ButtonBack>
                  <ButtonNext className="ml-4">
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.2" />
                      <path d="M27 24L22 29L21.3 28.3L25.6 24L21.3 19.7L22 19L27 24Z" fill="white" />
                    </svg>
                  </ButtonNext>
                </div>
              </div>
              <div className="w-full pt-8">
                <Slider>
                  {
                    data.methods.map(method => {
                      return (
                        <Slide>
                          <div className="px-4">
                            <div className="relative overflow-hidden" style={{
                              paddingBottom: `75%`
                            }}>
                              <img className="absolute w-full h-full object-cover rounded-md overflow-hidden" src={method.img} />
                              <div className="hidden md:block absolute inset-0 p-4 rounded-md" style={{
                                background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 59.75%)`
                              }}>
                                <div className="flex items-end h-full">
                                  <div>
                                    <p className="text-xl font-semibold text-white">{method.name}</p>
                                    <p className="mt-2 text-white">{method.description}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      )
                    })
                  }
                </Slider>
                <div className="block md:hidden">
                  <MethodText methods={data.methods} />
                </div>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <div className="bg-gray-300 py-16">
        <div className="max-w-4xl m-auto px-4 py-8 lg:p-8 bg-white rounded-md overflow-hidden">
          <h3 className="text-3xl font-bold text-center">Apa Kata Teman-teman</h3>
          <CarouselProvider
            isIntrinsicHeight={true}
            totalSlides={data.testimonials.length}
            className="mt-8 relative"
          >
            <Slider>
              {
                data.testimonials.map(testimony => {
                  return (
                    <Slide>
                      <div className="flex justify-center px-4">
                        <div className="text-center">
                          <img className="w-20 h-20 m-auto object-cover rounded-full overflow-hidden" src={testimony.img} />
                          <h4 className="mt-4 font-semibold text-lg">{testimony.name}</h4>
                          <p className="mt-2 max-w-md m-auto">{testimony.message}</p>
                        </div>
                      </div>
                    </Slide>
                  )
                })
              }
            </Slider>
            <div className="absolute h-full left-0 top-0">
              <div className="flex items-center h-full px-2 lg:px-8">
                <ButtonBack>
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <circle cx="24" cy="24" r="24" fill="#575757" fill-opacity="0.2" />
                      <path d="M21 24L26 29L26.7 28.3L22.4 24L26.7 19.7L26 19L21 24Z" fill="#575757" />
                    </g>
                  </svg>
                </ButtonBack>
              </div>
            </div>
            <div className="absolute h-full right-0 top-0">
              <div className="flex items-center h-full px-2 lg:px-8">
                <ButtonNext>
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <circle cx="24" cy="24" r="24" fill="#575757" fill-opacity="0.2" />
                      <path d="M27 24L22 29L21.3 28.3L25.6 24L21.3 19.7L22 19L27 24Z" fill="#575757" />
                    </g>
                  </svg>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <div className="bg-primary-navy">
        <div className="max-w-6xl m-auto px-4 py-16">
          <h4 className="text-3xl font-bold text-white text-center">Pendaftaran Siswa</h4>
          <FooterCTA />
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const slides = await Axios.get(`${process.env.BASE_URL}/api/collections/slides`)
  const why = await Axios.get(`${process.env.BASE_URL}/api/collections/why`)
  const methods = await Axios.get(`${process.env.BASE_URL}/api/collections/methods`)
  const testimonials = await Axios.get(`${process.env.BASE_URL}/api/collections/testimonials`)

  const data = {
    slides: slides.data.data,
    why: why.data.data,
    methods: methods.data.data,
    testimonials: testimonials.data.data
  }

  return {
    props: {
      data: data
    },
  }
}