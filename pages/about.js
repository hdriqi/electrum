import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FooterCTA from '../components/FooterCTA'
import Axios from 'axios'
import Head from 'next/head'

export default function Home({ company, teams, footer }) {
  return (
    <div>
      <Head>
        <title>Tentang Kami | Rumah Belajar Electrum</title>
        <meta name="description" content={company.intro} />

        <meta name='twitter:title' content="Tentang Kami | Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content={company.intro} />
        <meta name='twitter:image' content={company.img} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Tentang Kami | Rumah Belajar Electrum" />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content={company.intro} />
        <meta property='og:image' content={company.img} />
      </Head>
      <Nav footer={footer} />
      <div className="relative">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src={company.img} />
        </div>
        <div className="absolute inset-0 bg-primary-green opacity-75"></div>
        <div className="max-w-2xl m-auto px-4 py-40 text-center relative">
          <h3 className="text-3xl text-white font-bold">Halo! Selamat Datang di Bimbel Electrum</h3>
          <p className="text-white mt-4 whitespace-pre-line">{company.intro}</p>
        </div>
        <div className="absolute w-full bottom-0">
          <div className="pb-8">
            <svg className="m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2498 15.8789L12.7499 20.3787V0.820435H11.2499V20.3787L6.75009 15.8789L5.68945 16.9395L12 23.25L18.3105 16.9395L17.2498 15.8789Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-6xl m-auto px-4 pb-8 lg:py-16">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 pt-8 lg:pt-0">
              <h3 className="text-3xl font-bold">Visi</h3>
              <p className="mt-4">{company.vision}</p>
            </div>
            <div className="w-full lg:w-1/2 px-3 pt-8 lg:pt-0">
              <h3 className="text-3xl font-bold">Misi</h3>
              <p className="mt-4">{company.mission}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl m-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center">Tim Kami</h3>
          <div className="flex flex-wrap mt-8 -mx-3">
            {
              teams.map((team, idx) => {
                return (
                  <div className="w-full lg:w-1/3 px-3 pt-8" key={idx}>
                    <div className="flex flex-col items-center -mx-3">
                      <div className="px-3 w-full">
                        <div className="w-full relative overflow-hidden" style={{
                          paddingBottom: `100%`
                        }}>
                          <img className="absolute inset-0 object-cover" src={team.img} />
                        </div>
                      </div>
                      <div className="px-3">
                        <h4 className="text-lg font-semibold mt-2">{team.name}</h4>
                        <h4 className="text-sm font-semibold mt-2">{team.position}</h4>
                        <div className="mt-4" dangerouslySetInnerHTML={{
                          __html: team.quotes
                        }}></div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-primary-navy">
        <div className="max-w-6xl m-auto px-4 py-16">
          <h4 className="text-3xl font-bold text-white">Tertarik untuk belajar di Bimbel Elektrum? Daftar Sekarang!</h4>
          <FooterCTA />
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const company = await Axios.get(`${process.env.BASE_URL}/api/collections/company`)
  const teams = await Axios.get(`${process.env.BASE_URL}/api/collections/team`)

  return {
    props: {
      company: company.data.data[0],
      teams: teams.data.data
    },
  }
}