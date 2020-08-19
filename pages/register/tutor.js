import Nav from '../../components/Nav'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import InputSchedule from '../../components/InputSchedule'
import ReactDropdown from 'react-dropdown'
import { province, city, capitalize } from '../../utils/common'
import Link from 'next/link'
import Axios from 'axios'
import Head from 'next/head'

const default_subjects = [
  'Calistung',
  'Matematika SD',
  'IPA SD',
  'IPS SD',
  'Matematika SMP',
  'IPA SMP',
  'Matematika SMA',
  'Fisika SMA',
  'Kimia SMA',
  'Biologi SMA',
]

const default_area = [
  {
    title: `Jakarta Utara`,
    desc: `Cilincing, Kelapa Gading, Koja, Pademangan, Penjaringan, Tanjung Priuk`
  },
  {
    title: `Jakarta Selatan`,
    desc: `Cilandak, Jagakarsa, Kebayoran baru, Kebayoran Lama, Mampang Prapatan, Pancoran, Pasar Minggu, Pesanggrahan, Setiabudi, Tebet`
  },
  {
    title: `Jakarta Barat`,
    desc: `Cengkareng, Grogol Petamburan, Taman Sari, Tambora, Kebon Jeruk, Kalideres, Palmerah, Kembangan`
  },
  {
    title: `Jakarta Pusat`,
    desc: `Cempaka Putih, Gambir, Johar Baru, Kemayoran, Menteng, Sawah Besar, Senen, Tanah Abang`
  },
  {
    title: `Jakarta Timur`,
    desc: `Cakung, Cipayung, Ciracas, Duren Sawit, Kramat Jati, Makasar, Matraman, Pasar Rebo, Pulo Gadung`
  },
  {
    title: `Depok`,
    desc: `Beji, Bojongsari, Cilodong, CImanggis, Cinere, Cipayung Limo, Pancoran Mas, Sawangan, Sukmajaya, Tapos`
  },
  {
    title: `Bekasi`,
    desc: `Bantargebang, Bekasi Utara, Selatan, Barat, TImur, Jati Asih, Jatisampurna, Medan Satria, Mustika Jaya, Pondok Gede, Pondok Melati, Rawalumbu`
  },
  {
    title: `Bogor`,
    desc: `Bogor Barat, Selatan, Tengah, Utara, Timur, Tanah Sereal`
  },
  {
    title: `Tangerang Selatan`,
    desc: `Ciputat, Ciputat Timur, Pamulang, Pondok Aren, Serpong, Serpong Utara, Setu`
  },
  {
    title: `Tangerang`,
    desc: `Batu Ceper, Benda, Cibodas, Ciledug, Cipondoh, Jatiuwung, Karangtengah, Karawaci, Larangan, Neglasari, Periuk, Pinang, Tangerang`
  }
]

const RegisterTutor = ({ footer }) => {
  const msg = encodeURI(`Saya ingin tanya mengenai bimbel Elektrum`)

  const [form, setForm] = useState({
    fullname: '',
    dateOfBirth: '',
    addressProvince: '',
    addressCity: '',
    addressDistrict: '',
    addressDetail: '',
    transport: '',
    phoneNumber: '',
    email: '',
    eduUniversity: '',
    eduMajor: '',
    eduGradYear: '',
    eduGPA: '',
    eduExp: '',
    eduAchievement: '',
    attachment: null
  })
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [chosenSubject, setChosenSubject] = useState([])
  const [schedules, setSchedules] = useState([{}, {}])
  const [chosenAreas, setChosenArea] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formValidation = () => {
    if (
      form.fullname.length > 0 &&
      form.dateOfBirth.length > 0 &&
      form.addressProvince.length > 0 &&
      form.addressCity.length > 0 &&
      form.addressDetail.length > 0 &&
      form.transport.length > 0 &&
      form.phoneNumber.length > 0 &&
      form.email.length > 0 &&
      form.eduUniversity.length > 0 &&
      form.eduMajor.length > 0 &&
      form.eduGradYear.length > 0 &&
      form.eduGPA.length > 0 &&
      form.attachment &&
      chosenSubject.length > 0 &&
      schedules.length > 1 &&
      chosenAreas.length > 0
    ) {
      return true
    }
    return false
  }

  const updateForm = (key, value) => {
    const clone = { ...form }
    clone[key] = value
    if (key === 'addressProvince') {
      clone.addressCity = ''
      clone.addressDistrict = ''
    }
    if (key === 'addressCity') {
      clone.addressDistrict = ''
    }
    setForm(clone)
  }

  const _submit = async () => {
    setIsSubmitting(true)
    const data = {
      ...form,
      ...{ schedules: schedules },
      ...{ subjects: chosenSubject },
      ...{ areas: chosenAreas }
    }
    data.schedules = data.schedules.map(sch => (`${sch.day} ${sch.hour}`))
    let mediaFile = new FormData()
    mediaFile.append('file', form.attachment)
    const fileUpload = await Axios.post(`${process.env.BASE_URL}/api/upload`, mediaFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    const attachment = fileUpload.data.url
    data.attachment = attachment
    const tutorPost = await Axios.post(`${process.env.BASE_URL}/api/collections/tutor`, data)
    setIsSubmitting(false)
    setShowConfirmModal(true)
  }

  const checkChosenSubject = (data) => {
    const findIdx = chosenSubject.findIndex(area => area === data)
    if (findIdx > -1) {
      return true
    }
    return false
  }

  const toggleChosenSubject = (data) => {
    const clone = [...chosenSubject]
    const findIdx = chosenSubject.findIndex(area => area === data)
    if (findIdx > -1) {
      clone.splice(findIdx, 1)
    }
    else {
      clone.push(data)
    }
    setChosenSubject(clone)
  }

  const toggleChosenArea = (data) => {
    const clone = [...chosenAreas]
    const findIdx = chosenAreas.findIndex(area => area === data)
    if (findIdx > -1) {
      clone.splice(findIdx, 1)
    }
    else {
      clone.push(data)
    }
    setChosenArea(clone)
  }

  const updateSchedule = (idx, data) => {
    const cloneSchedules = [...schedules]
    cloneSchedules[idx] = data
    setSchedules(cloneSchedules)
  }

  const removeSchedule = (idx) => {
    const cloneSchedules = [...schedules]
    cloneSchedules.splice(idx, 1)
    setSchedules(cloneSchedules)
  }

  const addSchedule = () => {
    const cloneSchedules = [...schedules]
    cloneSchedules.push({})
    setSchedules(cloneSchedules)
  }

  const [provinceFilter, setProvinceFilter] = useState([])
  const [cityFilter, setCityFilter] = useState([])
  const [districtFilter, setDistrictFilter] = useState([])

  useEffect(() => {
    const newProvince = province.map(p => p.province)
    setProvinceFilter(newProvince)
  }, [])

  useEffect(() => {
    if (form.addressProvince && form.addressProvince.length > 0) {
      const newCity = province.find(p => p.province === form.addressProvince).city.map(c => c.city)
      setCityFilter(newCity)

      if (form.addressCity && form.addressCity.length > 0) {
        const newDistrict = province.find(p => p.province === form.addressProvince)?.city.find(c => c.city === form.addressCity)?.district.map(d => capitalize(d.district)) || []
        setDistrictFilter(newDistrict)
      }
    }
  }, [form])

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Pendaftaran Tutor | Rumah Belajar Electrum</title>
        <meta name="description" content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />

        <meta name='twitter:title' content="Pendaftaran Tutor | Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta name='twitter:image' content="/favicon.ico" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Pendaftaran Tutor | Rumah Belajar Electrum" />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta property='og:image' content="/favicon.ico" />
      </Head>
      {
        showConfirmModal && (
          <div className="fixed pt-24 px-4 inset-0" style={{
            backgroundColor: `rgba(0, 0, 0, 0.8)`,
            zIndex: 60
          }}>
            <div className="max-w-md m-auto bg-white p-4 rounded-md">
              <div className="flex flex-col items-center relative">
                <div className="absolute top-0 right-0">
                  <svg onClick={_ => setShowConfirmModal(!showConfirmModal)} className="cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4158 16.0041L21.7158 11.7141C21.9041 11.5258 22.0099 11.2704 22.0099 11.0041C22.0099 10.7378 21.9041 10.4824 21.7158 10.2941C21.5275 10.1058 21.2721 10 21.0058 10C20.7395 10 20.4841 10.1058 20.2958 10.2941L16.0058 14.5941L11.7158 10.2941C11.5275 10.1058 11.2721 10 11.0058 10C10.7395 10 10.4841 10.1058 10.2958 10.2941C10.1075 10.4824 10.0017 10.7378 10.0017 11.0041C10.0017 11.2704 10.1075 11.5258 10.2958 11.7141L14.5958 16.0041L10.2958 20.2941C10.2021 20.3871 10.1277 20.4977 10.0769 20.6195C10.0261 20.7414 10 20.8721 10 21.0041C10 21.1361 10.0261 21.2668 10.0769 21.3887C10.1277 21.5105 10.2021 21.6211 10.2958 21.7141C10.3888 21.8078 10.4994 21.8822 10.6212 21.933C10.7431 21.9838 10.8738 22.0099 11.0058 22.0099C11.1378 22.0099 11.2685 21.9838 11.3904 21.933C11.5122 21.8822 11.6228 21.8078 11.7158 21.7141L16.0058 17.4141L20.2958 21.7141C20.3888 21.8078 20.4994 21.8822 20.6212 21.933C20.7431 21.9838 20.8738 22.0099 21.0058 22.0099C21.1378 22.0099 21.2685 21.9838 21.3904 21.933C21.5122 21.8822 21.6228 21.8078 21.7158 21.7141C21.8095 21.6211 21.8839 21.5105 21.9347 21.3887C21.9855 21.2668 22.0116 21.1361 22.0116 21.0041C22.0116 20.8721 21.9855 20.7414 21.9347 20.6195C21.8839 20.4977 21.8095 20.3871 21.7158 20.2941L17.4158 16.0041Z" fill="black" />
                  </svg>
                </div>
                <h3 className="mt-8 text-2xl text-center">Terima kasih telah mendaftar sebagai tutor pada Rumah Belajar Electrum.</h3>
                <a className="block mt-8 px-4" target="_blank" href={`https://api.whatsapp.com/send?phone=${footer.phoneNumber}&text=${msg}`}>
                  <button className="rounded-md overflow-hidden cursor-pointer mt-4 bg-primary-green text-white px-3 py-2">
                    Hubungi Kami
                  </button>
                </a>
                <Link href="/">
                  <a className="block mt-4 text-primary-green font-semibold">Kembali ke beranda</a>
                </Link>
              </div>
            </div>
          </div>
        )
      }
      <Nav footer={footer} />
      <div className="relative">
        <div className="absolute top-0 h-32 w-full z-10" style={{
          background: `linear-gradient(180deg, #2FDE9B 0%, rgba(47, 222, 155, 0) 100%)`
        }}></div>
        <div className="max-w-3xl m-auto px-3 py-16 z-20 relative">
          <h2 className="text-lg lg:text-3xl text-black text-center font-bold">Halo, Selamat Datang! Isi form dibawah untuk mendaftar sebagai Tutor</h2>
        </div>
      </div>
      <div className="max-w-3xl m-auto bg-primary-navy text-white rounded-md py-16 px-4">
        <div className="border-b border-gray-300 pb-2">
          <h4 className="text-2xl font-bold">Data Diri</h4>
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Identitas Diri</h4>
        </div>
        <div className="mt-3">
          <label className="block">Nama Lengkap</label>
          <input type="text" value={form.fullname} onInput={e => updateForm('fullname', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-3">
          <label className="block">Tempat Tanggal Lahir</label>
          <input type="text" value={form.dateOfBirth} onInput={e => updateForm('dateOfBirth', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" placeholder="Contoh: Jakarta, 17 08 1996" />
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 mt-3 px-3">
            <label className="block">Provinsi</label>
            <ReactDropdown value={form.addressProvince} onChange={opt => updateForm('addressProvince', opt.value)} options={provinceFilter} placeholder="Pilih Provinsi" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
          </div>
          <div className="w-full lg:w-1/2 mt-3 px-3">
            <label className="block">Kabupaten/Kota</label>
            <ReactDropdown value={form.addressCity} onChange={opt => updateForm('addressCity', opt.value)} options={cityFilter} placeholder="Pilih Kabupaten/Kota" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
          </div>
          <div className="w-full lg:w-1/2 mt-3 px-3">
            <label className="block">Kecamatan</label>
            <ReactDropdown value={form.addressDistrict} onChange={opt => updateForm('addressDistrict', opt.value)} options={districtFilter} placeholder="Pilih Kabupaten/Kota" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
          </div>
        </div>
        <div className="mt-3">
          <label className="block">Alamat Lengkap</label>
          <input type="text" value={form.addressDetail} onInput={e => updateForm('addressDetail', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" placeholder="Tulis alamat lengkap: Jalan, Kelurahan, Kecamatan, dsb" />
        </div>
        <div className="mt-3">
          <label className="block">Kendaraan Pribadi</label>
          <ReactDropdown options={[
            'Mobil', 'Motor', 'Sepeda', 'Tidak ada'
          ]} value={form.transport} onChange={opt => updateForm('transport', opt.value)} placeholder="Pilih Kendaraan" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
        </div>
        <div className="mt-3">
          <div className="flex">
            <label className="block">Nomor HP</label>
          </div>
          <input type="text" value={form.phoneNumber} onInput={e => updateForm('phoneNumber', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" placeholder="081234567890" />
        </div>
        <div className="mt-3">
          <div className="flex">
            <label className="block">Email</label>
          </div>
          <input type="text" value={form.email} onInput={e => updateForm('email', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Pendidikan</h4>
        </div>
        <div className="mt-3">
          <label className="block">Universitas</label>
          <input type="text" value={form.eduUniversity} onInput={e => updateForm('eduUniversity', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-3">
          <label className="block">Jurusan</label>
          <input type="text" value={form.eduMajor} onInput={e => updateForm('eduMajor', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">Tahun Lulus</label>
            <input type="text" value={form.eduGradYear} onInput={e => updateForm('eduGradYear', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
          </div>
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">IPK</label>
            <input type="text" value={form.eduGPA} onInput={e => updateForm('eduGPA', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex">
            <label className="block">Pengalaman Mengajar</label>
            <p className="text-gray-600 pl-2">(Opsional)</p>
          </div>
          <input type="text" value={form.eduExp} onInput={e => updateForm('eduExp', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-3">
          <div className="flex">
            <label className="block">Prestasi Akademik</label>
            <p className="text-gray-600 pl-2">(Opsional)</p>
          </div>
          <input type="text" value={form.eduAchievement} onInput={e => updateForm('eduAchievement', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Berkas</h4>
          <p className="mt-2">Lampirkan Ijazah, Transkrip Nilai, dan CV yang sudah disatukan dalam sebuah file *.zip, *.rar, dsb.</p>
          <input type="file" onChange={e => updateForm('attachment', e.target.files[0])} />
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Bersedia Mengajar Mata Pelajaran</h4>
          {
            default_subjects.map(subject => {
              return (
                <div className="mt-3">
                  <div className="flex items-center">
                    <div>
                      <input checked={checkChosenSubject(subject)} onChange={_ => toggleChosenSubject(subject)} type="checkbox" />
                    </div>
                    <div className="pl-2">
                      <p>{subject}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Waktu Mengajar</h4>
          <p className="mt-2">Harus memilih <b>minimal 2 waktu</b> yang diinginkan</p>
          <div className="mt-3">
            {
              schedules.map((sch, idx) => {
                return (
                  <div className="flex items-top" key={idx}>
                    <InputSchedule value={sch} className="w-10/12" chosenSchedule={schedules} cb={sch => updateSchedule(idx, sch)} />
                    {
                      idx > 1 && (
                        <div className="w-2/12 px-1">
                          <svg className="m-auto cursor-pointer mt-12" onClick={_ => removeSchedule(idx)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#EB5757" fill-opacity="0.1" />
                            <path d="M13.5 14.5C13.6326 14.5 13.7598 14.5527 13.8536 14.6464C13.9473 14.7402 14 14.8674 14 15V21C14 21.1326 13.9473 21.2598 13.8536 21.3536C13.7598 21.4473 13.6326 21.5 13.5 21.5C13.3674 21.5 13.2402 21.4473 13.1464 21.3536C13.0527 21.2598 13 21.1326 13 21V15C13 14.8674 13.0527 14.7402 13.1464 14.6464C13.2402 14.5527 13.3674 14.5 13.5 14.5ZM16 14.5C16.1326 14.5 16.2598 14.5527 16.3536 14.6464C16.4473 14.7402 16.5 14.8674 16.5 15V21C16.5 21.1326 16.4473 21.2598 16.3536 21.3536C16.2598 21.4473 16.1326 21.5 16 21.5C15.8674 21.5 15.7402 21.4473 15.6464 21.3536C15.5527 21.2598 15.5 21.1326 15.5 21V15C15.5 14.8674 15.5527 14.7402 15.6464 14.6464C15.7402 14.5527 15.8674 14.5 16 14.5ZM19 15C19 14.8674 18.9473 14.7402 18.8536 14.6464C18.7598 14.5527 18.6326 14.5 18.5 14.5C18.3674 14.5 18.2402 14.5527 18.1464 14.6464C18.0527 14.7402 18 14.8674 18 15V21C18 21.1326 18.0527 21.2598 18.1464 21.3536C18.2402 21.4473 18.3674 21.5 18.5 21.5C18.6326 21.5 18.7598 21.4473 18.8536 21.3536C18.9473 21.2598 19 21.1326 19 21V15Z" fill="#EB5757" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 12C22.5 12.2652 22.3946 12.5196 22.2071 12.7071C22.0196 12.8946 21.7652 13 21.5 13H21V22C21 22.5304 20.7893 23.0391 20.4142 23.4142C20.0391 23.7893 19.5304 24 19 24H13C12.4696 24 11.9609 23.7893 11.5858 23.4142C11.2107 23.0391 11 22.5304 11 22V13H10.5C10.2348 13 9.98043 12.8946 9.79289 12.7071C9.60536 12.5196 9.5 12.2652 9.5 12V11C9.5 10.7348 9.60536 10.4804 9.79289 10.2929C9.98043 10.1054 10.2348 10 10.5 10H14C14 9.73478 14.1054 9.48043 14.2929 9.29289C14.4804 9.10536 14.7348 9 15 9H17C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10H21.5C21.7652 10 22.0196 10.1054 22.2071 10.2929C22.3946 10.4804 22.5 10.7348 22.5 11V12ZM12.118 13L12 13.059V22C12 22.2652 12.1054 22.5196 12.2929 22.7071C12.4804 22.8946 12.7348 23 13 23H19C19.2652 23 19.5196 22.8946 19.7071 22.7071C19.8946 22.5196 20 22.2652 20 22V13.059L19.882 13H12.118ZM10.5 12V11H21.5V12H10.5Z" fill="#EB5757" />
                          </svg>
                        </div>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
          {
            schedules.length < 8 && (
              <button onClick={_ => addSchedule()} className="rounded-md overflow-hidden cursor-pointer mt-4 bg-primary-green text-white px-3 py-2">
                + Tambahkan Jadwal (Maks. 8)
              </button>
            )
          }
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Jangkauan Mengajar</h4>
          <p className="mt-2">Bisa memilih lebih dari satu</p>
          <div className="flex flex-wrap -mx-3">
            {
              default_area.map((data, idx) => {
                return (
                  <div className="cursor-pointer w-full lg:w-1/2 mt-2 px-3" key={idx}>
                    <div onClick={_ => toggleChosenArea(data.title)} className={`transition duration-150 ease-in-out h-40 border rounded-md p-4 ${chosenAreas.findIndex(area => area === data.title) > -1 ? 'bg-green-200' : 'bg-gray-200 '}`}>
                      <h4 className="text-lg font-semibold">{data.title}</h4>
                      <p className="text-sm mt-2">{data.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex mt-8">
          <button disabled={!(formValidation() && !isSubmitting)} onClick={_ => _submit()} className="text-lg bg-primary-green text-white px-4 py-2 rounded-md w-full">{
            isSubmitting ? `Mengirim Pendaftaran...` : `Kirim Pendaftaran`
          }</button>
        </div>
      </div >
      <div className="pt-16">
        <Footer footer={footer} />
      </div>
    </div >
  )
}

export default RegisterTutor