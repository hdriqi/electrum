import Nav from '../components/Nav'

const pricing = [
  {
    list: [
      {
        name: 'Normal (Per Sesi)',
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
        name: 'Normal (Per 8 Sesi)',
        price: [
          1200000,
          2200000,
          3000000,
          3600000,
          4250000,
          4500000,
          4900000
        ]
      }
    ]
  }
]

const Pricing = () => {
  return (
    <div>
      <Nav />
      <div className="relative">
        <div className="absolute inset-0 w-full bg-primary-green z-10"></div>
        <div className="max-w-3xl m-auto px-3 py-16 relative z-10">
          <h2 className="text-lg lg:text-3xl text-white text-center font-bold">Kualitas terbaik dengan harga terjangkau.</h2>
        </div>
      </div>
      <div className="max-w-5xl m-auto rounded-md py-16 px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">Jenjang</label>
            <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
          </div>
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">Kelas</label>
            <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
          </div>
        </div>
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full">
            <tr>
              <th rowSpan="2" className="p-2">Paket</th>
              <th className="bg-green-100 p-2" colSpan={pricing[0].list[0].price.length}>Jumlah Anak</th>
            </tr>
            <tr>
              {
                pricing[0].list[0].price.map((price, idx) => {
                  return (
                    <th className="p-2">{idx + 1}</th>
                  )
                })
              }
            </tr>
            {
              pricing[0].list.map((pkg, idx) => {
                return (
                  <tr>
                    <td className="text-center p-2">{pkg.name}</td>
                    {
                      pkg.price.map(price => {
                        return (
                          <td className="text-center p-2">{price}</td>
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
    </div>
  )
}

export default Pricing