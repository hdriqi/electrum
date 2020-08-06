import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ReactDropdown from 'react-dropdown'
import { useState, useEffect } from 'react'

const pricing = [
  {
    level: 'SD',
    class: '1-6',
    session: 1,
    price: [
      120000,
      220000,
      300000,
      360000,
      425000,
      450000,
      490000
    ],
  },
  {
    level: 'SD',
    class: '1-6',
    session: 8,
    price: [
      1200000,
      2200000,
      3000000,
      3600000,
      4250000,
      4500000,
      4900000
    ]
  },
  {
    level: 'SMP',
    class: '7-8',
    session: 1,
    price: [
      120000,
      220000,
      300000,
      360000,
      425000,
      450000,
      490000
    ]
  },
  {
    level: 'SMP',
    class: '7-8',
    session: 8,
    price: [
      1200000,
      2200000,
      3000000,
      3600000,
      4250000,
      4500000,
      4900000
    ]
  },
  {
    level: 'SMP',
    class: '9',
    session: 1,
    price: [
      120000,
      220000,
      300000,
      360000,
      425000,
      450000,
      490000
    ]
  }
]

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

const Pricing = () => {
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
      <Nav />
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
                    <td className="text-center p-2">{pkg.session}</td>
                    {
                      pkg.price.map(price => {
                        return (
                          <td className="text-center text-sm p-2">{price.toLocaleString('ID', {
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
      </div>
      <Footer />
    </div>
  )
}

export default Pricing