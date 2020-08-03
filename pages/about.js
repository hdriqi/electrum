import Nav from '../components/Nav'
import Footer from '../components/Footer'

const about = {
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ridiculus sed fermentum vulputate lacinia dictumst in dapibus. Duis turpis ac facilisis pellentesque porttitor a, amet. In cursus velit quisque vivamus placerat malesuada.',
  vision: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ridiculus sed fermentum vulputate lacinia dictumst in dapibus. Duis turpis ac facilisis pellentesque porttitor a, amet. In cursus velit quisque vivamus placerat malesuada.',
  mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ridiculus sed fermentum vulputate lacinia dictumst in dapibus. Duis turpis ac facilisis pellentesque porttitor a, amet. In cursus velit quisque vivamus placerat malesuada.',
  teams: [
    {
      img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
    },
    {
      img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
    },
    {
      img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
    },
    {
      img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      desc: 'Perkembanganmu akan kami catat oleh tutor agar kamu bisa mengetahui strategi belajar yang terbaik untukmu!'
    }
  ]
}

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="relative">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        <div className="absolute inset-0 bg-primary-green opacity-75"></div>
        <div className="max-w-2xl m-auto px-4 py-40 text-center relative">
          <h3 className="text-3xl text-white font-bold">Halo! Selamat Datang di Bimbel Electrum</h3>
          <p className="text-white mt-4">{about.intro}</p>
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
              <p className="mt-4">{about.vision}</p>
            </div>
            <div className="w-full lg:w-1/2 px-3 pt-8 lg:pt-0">
              <h3 className="text-3xl font-bold">Misi</h3>
              <p className="mt-4">{about.mission}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl m-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center">Tim Kami</h3>
          <div className="flex flex-wrap mt-8 -mx-3">
            {
              about.teams.map((team, idx) => {
                return (
                  <div className="w-full lg:w-1/4 px-3 pt-8" key={idx}>
                    <div className="flex items-center lg:flex-col -mx-3">
                      <div className="px-3 w-full">
                        <div className="w-full relative overflow-hidden" style={{
                          paddingBottom: `100%`
                        }}>
                          <img className="absolute inset-0 object-cover" src={team.img} />
                        </div>
                      </div>
                      <div className="px-3">
                        <h4 className="text-lg font-semibold">{team.name}</h4>
                        <h4 className="text-sm font-semibold mt-2">{team.position}</h4>
                        <p className="mt-4">{team.desc}</p>
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
          <div className="flex flex-wrap mt-12 -mx-3">
            <div className="w-full lg:w-1/3 px-3 pt-4">
              <label className="block text-lg text-white font-semibold">Nama Lengkap</label>
              <input type="text" className="w-full mt-2" />
            </div>
            <div className="w-full lg:w-1/3 px-3 pt-4">
              <label className="block text-lg text-white font-semibold">Kelas</label>
              <input type="text" className="w-full mt-2" />
            </div>
            <div className="w-full lg:w-1/3 px-3 pt-8 flex items-end">
              <button className="text-lg bg-primary-green px-4 py-2 rounded-md w-full">Selanjutnya</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}