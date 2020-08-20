import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ReactDropdown from 'react-dropdown'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Head from 'next/head'
import FooterCTA from '../components/FooterCTA'

// const pricing = [
//   {
//     level: 'SD',
//     class: '1-6',
//     session: 1,
//     price: [
//       120000,
//       220000,
//       300000,
//       360000,
//       425000,
//       450000,
//       490000
//     ],
//   },
//   {
//     level: 'SD',
//     class: '1-6',
//     session: 8,
//     price: [
//       912000,
//       1672000,
//       2280000,
//       2736000,
//       3230000,
//       3420000,
//       3724000
//     ]
//   },
//   {
//     level: 'SD',
//     class: '1-6',
//     session: 24,
//     price: [
//       2592000,
//       4752000,
//       6480000,
//       7776000,
//       9180000,
//       9720000,
//       1058400
//     ]
//   },
//   {
//     level: 'SD',
//     class: '1-6',
//     session: 48,
//     price: [
//       4896000,
//       8976000,
//       12240000,
//       14668000,
//       17340000,
//       18360000,
//       19992000
//     ]
//   },
//   {
//     level: 'SMP',
//     class: '7-8',
//     session: 1,
//     price: [
//       130000,
//       240000,
//       330000,
//       400000,
//       450000,
//       510000,
//       525000,
//     ],
//   },
//   {
//     level: 'SMP',
//     class: '7-8',
//     session: 8,
//     price: [
//       988000,
//       1824000,
//       2508000,
//       3040000,
//       3420000,
//       3876000,
//       3990000,
//     ]
//   },
//   {
//     level: 'SMP',
//     class: '7-8',
//     session: 24,
//     price: [
//       2808000,
//       5184000,
//       7128000,
//       8640000,
//       9720000,
//       11016000,
//       11340000,
//     ]
//   },
//   {
//     level: 'SMP',
//     class: '7-8',
//     session: 48,
//     price: [
//       5304000,
//       9792000,
//       13464000,
//       16320000,
//       18360000,
//       20808000,
//       21420000,
//     ]
//   },
//   {
//     level: 'SMP',
//     class: '9',
//     session: 1,
//     price: [
//       150000,
//       260000,
//       360000,
//       440000,
//       500000,
//       540000,
//       595000,
//     ],
//   },
//   {
//     level: 'SMP',
//     class: '9',
//     session: 8,
//     price: [
//       1140000,
//       1976000,
//       2736000,
//       3344000,
//       3800000,
//       4104000,
//       4522000,
//     ]
//   },
//   {
//     level: 'SMP',
//     class: '9',
//     session: 24,
//     price: [
//       3240000,
//       5616000,
//       7776000,
//       9504000,
//       10800000,
//       11664000,
//       12852000,
//     ]
//   },
//   {
//     level: 'SMP',
//     class: '9',
//     session: 48,
//     price: [
//       6120000,
//       10608000,
//       14688000,
//       17952000,
//       20400000,
//       22032000,
//       24276000,
//     ]
//   },
//   {
//     level: 'SMA',
//     class: '10-11',
//     session: 1,
//     price: [
//       160000,
//       300000,
//       390000,
//       480000,
//       550000,
//       600000,
//       630000,
//     ],
//   },
//   {
//     level: 'SMA',
//     class: '10-11',
//     session: 8,
//     price: [
//       1216000,
//       2280000,
//       2964000,
//       3648000,
//       4180000,
//       4560000,
//       4788000,
//     ]
//   },
//   {
//     level: 'SMA',
//     class: '10-11',
//     session: 24,
//     price: [
//       3456000,
//       6480000,
//       8424000,
//       10368000,
//       11880000,
//       12960000,
//       13608000,
//     ]
//   },
//   {
//     level: 'SMA',
//     class: '10-11',
//     session: 48,
//     price: [
//       6528000,
//       12240000,
//       15912000,
//       19584000,
//       22440000,
//       24480000,
//       25704000,
//     ]
//   },
//   {
//     level: 'SMA',
//     class: '12',
//     session: 1,
//     price: [
//       180000,
//       320000,
//       450000,
//       520000,
//       600000,
//       660000,
//       700000,
//     ],
//   },
//   {
//     level: 'SMA',
//     class: '12',
//     session: 8,
//     price: [
//       1368000,
//       2432000,
//       3420000,
//       3952000,
//       4560000,
//       5016000,
//       5320000,
//     ]
//   },
//   {
//     level: 'SMA',
//     class: '12',
//     session: 24,
//     price: [
//       3888000,
//       6912000,
//       9720000,
//       11232000,
//       12960000,
//       14256000,
//       15120000,
//     ]
//   },
//   {
//     level: 'SMA',
//     class: '12',
//     session: 48,
//     price: [
//       7344000,
//       13056000,
//       18360000,
//       21216000,
//       24480000,
//       26928000,
//       28560000,
//     ]
//   },
// ]

const filter = [
  {
    level: 'SD',
    classes: [
      '1-6'
    ]
  },
  {
    level: 'SMP',
    classes: [
      '7-8',
      '9'
    ]
  },
  {
    level: 'SMA',
    classes: [
      '10-11',
      '12'
    ]
  },
]

const levelOpts = filter.map(x => x.level)

const Pricing = ({ pricing, footer }) => {
  const [level, setLevel] = useState('SD')
  const [chosenClass, setChosenClass] = useState('1-6')
  const [classOpts, setClassOpts] = useState(['1-6'])

  const tableHead = pricing.find(price => {
    return price.level === level && price.class === chosenClass
  })?.price || []

  const tableBody = pricing.filter(price => {
    return price.level === level && price.class === chosenClass
  }) || []

  useEffect(() => {
    if (level) {
      const opts = filter.find(x => x.level === level).classes
      setClassOpts(opts)
      setChosenClass(opts[0])
    }
  }, [level])

  return (
    <div>
      <Head>
        <title>Biaya | Rumah Belajar Electrum</title>
        <meta name="description" content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />

        <meta name='twitter:title' content="Biaya | Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta name='twitter:image' content="/favicon.ico" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Biaya | Rumah Belajar Electrum" />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta property='og:image' content="/favicon.ico" />
      </Head>
      <Nav footer={footer} />
      <div className="relative">
        <div className="absolute inset-0 w-full bg-primary-green z-10"></div>
        <div className="max-w-3xl m-auto px-3 py-16 relative z-10">
          <h2 className="text-3xl text-white text-center font-bold">Kualitas terbaik dengan harga terjangkau.</h2>
        </div>
      </div>
      <div className="max-w-5xl m-auto rounded-md py-16 overflow-hidden">
        <div className="flex flex-wrap -mx-3 px-4">
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">Jenjang</label>
            <ReactDropdown value={level} onChange={opt => setLevel(opt.value)} options={levelOpts} placeholder="Pilih Provinsi" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
          </div>
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">Kelas</label>
            <ReactDropdown value={chosenClass} onChange={opt => setChosenClass(opt.value)} options={classOpts} placeholder="Pilih Provinsi" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
          </div>
        </div>
        <div className="overflow-x-auto mt-8 pl-4 lg:px-4">
          <table>
            <tr>
              <th rowSpan="2" className="p-2">Paket</th>
              <th className="bg-green-100 p-2" colSpan={pricing[0].price.length}>Jumlah Anak</th>
            </tr>
            <tr>
              {
                tableHead.map((price, idx) => {
                  return (
                    <th className="p-2">{idx + 1}</th>
                  )
                })
              }
            </tr>
            {
              tableBody.map((pkg, idx) => {
                return (
                  <tr>
                    <td className="text-center p-2">{pkg.session} sesi</td>
                    {
                      pkg.price.map(price => {
                        return (
                          <td className="text-center text-sm p-2">{Number(price).toLocaleString('ID', {
                            style: 'currency',
                            currency: 'IDR',
                          })}</td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </table>
        </div>
        {
          footer.pricingNotes && (
            <div className="px-4 mt-12">
              <p className="font-bold">Catatan:</p>
              <div className="mt-2" dangerouslySetInnerHTML={{
                __html: footer.pricingNotes
              }}></div>
            </div>
          )
        }
      </div>
      <div className="bg-primary-navy">
        <div className="max-w-6xl m-auto px-4 py-16">
          <h4 className="text-3xl font-bold text-white">Pendaftaran Siswa</h4>
          <FooterCTA />
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const pricing = await Axios.get(`${process.env.BASE_URL}/api/collections/pricing`)

  return {
    props: {
      pricing: pricing.data.data
    },
  }
}

export default Pricing