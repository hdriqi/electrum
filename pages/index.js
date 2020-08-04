import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { useState } from 'react'
import FooterCTA from '../components/FooterCTA'

const slides = [
  {
    img: `https://evius-dev.s3-ap-southeast-1.amazonaws.com/slide.png`,
    url: `/blog/123`
  },
  {
    img: `https://evius-dev.s3-ap-southeast-1.amazonaws.com/slide.png`,
    url: `/blog/123`
  }
]

const methods = [
  {
    name: 'Metode 1',
    img: `https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-giftpunditscom-1326947.jpg&fm=jpg`,
    desc: ``
  },
  {
    name: 'Metode 2',
    img: `https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-giftpunditscom-1326947.jpg&fm=jpg`
  }
]

const testimonials = [
  {
    name: 'John Doe',
    img: `https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-giftpunditscom-1326947.jpg&fm=jpg`,
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in mattis justo.`
  },
  {
    name: 'Bambang Suparno',
    img: `https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-giftpunditscom-1326947.jpg&fm=jpg`,
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in mattis justo.`
  }
]

const whyElectrum = [
  {
    icon: 'https://evius-dev.s3-ap-southeast-1.amazonaws.com/why-us-electrum-icon.svg',
    title: 'Laporan Progress',
    desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
  },
  {
    icon: 'https://evius-dev.s3-ap-southeast-1.amazonaws.com/why-us-electrum-icon.svg',
    title: 'Laporan Progress',
    desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
  },
  {
    icon: 'https://evius-dev.s3-ap-southeast-1.amazonaws.com/why-us-electrum-icon.svg',
    title: 'Laporan Progress',
    desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
  },
  {
    icon: 'https://evius-dev.s3-ap-southeast-1.amazonaws.com/why-us-electrum-icon.svg',
    title: 'Laporan Progress',
    desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
  }
]

const ResponsiveCarousel = ({ children }) => {
  return (
    <div className="relative">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={slides.length}
        className="block lg:hidden"
      >
        {children}
      </CarouselProvider>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={33}
        totalSlides={slides.length}
        className="hidden lg:block"
      >
        {children}
      </CarouselProvider>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Nav />
      <div>
        <ResponsiveCarousel>
          <Slider>
            {
              slides.map((slide, idx) => {
                return (
                  <Slide index={idx}>
                    <img className="w-full h-full object-cover" src={slide.img} />
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
        <div className="flex flex-wrap -mx-3">
          {
            whyElectrum.map(data => {
              return (
                <div className="w-1/2 lg:w-1/4 px-3 mt-12 lg:mt-20">
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
                    <p className="mt-2">{data.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="bg-primary-navy overflow-hidden relative">
        <div className="hidden lg:block absolute h-full w-1/2 z-10 bg-primary-navy"></div>
        <div className="max-w-6xl m-auto">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={75}
            totalSlides={slides.length}
            className="carousel-peek"
          >
            <div className="flex flex-wrap relative">
              <div className="w-full lg:w-1/2 relative z-10 px-4 pt-8">
                <h4 className="text-2xl text-white font-bold">Menggunakan Metode Pembelajaran</h4>
                <h3 className="text-3xl text-white font-bold pt-4">Minischool</h3>
                <div className="flex pt-16">
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
              <div className="w-full lg:w-1/2 pt-8">
                <Slider>
                  {
                    methods.map(method => {
                      return (
                        <Slide>
                          <div className="px-4">
                            <img className="w-full h-full object-cover rounded-md overflow-hidden" src={method.img} />
                          </div>
                        </Slide>
                      )
                    })
                  }
                </Slider>
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
            totalSlides={slides.length}
            className="mt-8 relative"
          >
            <Slider>
              {
                testimonials.map(testimony => {
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
          <h4 className="text-3xl font-bold text-white">Pendaftaran Siswa</h4>
          <FooterCTA />
        </div>
      </div>
      <Footer />
    </div>
  )
}
