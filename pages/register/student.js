import Nav from '../../components/Nav'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import ReactDropdown from 'react-dropdown'
import { province, city } from '../../utils/common'
import InputSchedule from '../../components/InputSchedule'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
      912000,
      1672000,
      2280000,
      2736000,
      3230000,
      3420000,
      3724000
    ]
  },
  {
    level: 'SD',
    class: '1-6',
    session: 24,
    price: [
      2592000,
      4752000,
      6480000,
      7776000,
      9180000,
      9720000,
      1058400
    ]
  },
  {
    level: 'SD',
    class: '1-6',
    session: 48,
    price: [
      4896000,
      8976000,
      12240000,
      14668000,
      17340000,
      18360000,
      19992000
    ]
  },
  {
    level: 'SMP',
    class: '7-8',
    session: 1,
    price: [
      130000,
      240000,
      330000,
      400000,
      450000,
      510000,
      525000,
    ],
  },
  {
    level: 'SMP',
    class: '7-8',
    session: 8,
    price: [
      988000,
      1824000,
      2508000,
      3040000,
      3420000,
      3876000,
      3990000,
    ]
  },
  {
    level: 'SMP',
    class: '7-8',
    session: 24,
    price: [
      2808000,
      5184000,
      7128000,
      8640000,
      9720000,
      11016000,
      11340000,
    ]
  },
  {
    level: 'SMP',
    class: '7-8',
    session: 48,
    price: [
      5304000,
      9792000,
      13464000,
      16320000,
      18360000,
      20808000,
      21420000,
    ]
  },
  {
    level: 'SMP',
    class: '9',
    session: 1,
    price: [
      150000,
      260000,
      360000,
      440000,
      500000,
      540000,
      595000,
    ],
  },
  {
    level: 'SMP',
    class: '9',
    session: 8,
    price: [
      1140000,
      1976000,
      2736000,
      3344000,
      3800000,
      4104000,
      4522000,
    ]
  },
  {
    level: 'SMP',
    class: '9',
    session: 24,
    price: [
      3240000,
      5616000,
      7776000,
      9504000,
      10800000,
      11664000,
      12852000,
    ]
  },
  {
    level: 'SMP',
    class: '9',
    session: 48,
    price: [
      6120000,
      10608000,
      14688000,
      17952000,
      20400000,
      22032000,
      24276000,
    ]
  },
  {
    level: 'SMA',
    class: '10-11',
    session: 1,
    price: [
      160000,
      300000,
      390000,
      480000,
      550000,
      600000,
      630000,
    ],
  },
  {
    level: 'SMA',
    class: '10-11',
    session: 8,
    price: [
      1216000,
      2280000,
      2964000,
      3648000,
      4180000,
      4560000,
      4788000,
    ]
  },
  {
    level: 'SMA',
    class: '10-11',
    session: 24,
    price: [
      3456000,
      6480000,
      8424000,
      10368000,
      11880000,
      12960000,
      13608000,
    ]
  },
  {
    level: 'SMA',
    class: '10-11',
    session: 48,
    price: [
      6528000,
      12240000,
      15912000,
      19584000,
      22440000,
      24480000,
      25704000,
    ]
  },
  {
    level: 'SMA',
    class: '12',
    session: 1,
    price: [
      180000,
      320000,
      450000,
      520000,
      600000,
      660000,
      700000,
    ],
  },
  {
    level: 'SMA',
    class: '12',
    session: 8,
    price: [
      1368000,
      2432000,
      3420000,
      3952000,
      4560000,
      5016000,
      5320000,
    ]
  },
  {
    level: 'SMA',
    class: '12',
    session: 24,
    price: [
      3888000,
      6912000,
      9720000,
      11232000,
      12960000,
      14256000,
      15120000,
    ]
  },
  {
    level: 'SMA',
    class: '12',
    session: 48,
    price: [
      7344000,
      13056000,
      18360000,
      21216000,
      24480000,
      26928000,
      28560000,
    ]
  },
]

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

const RegisterStudent = () => {
  const router = useRouter()
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    fullname: router.query.fullname || '',
    class: router.query.class || '',
    schoolName: '',
    stuPhoneNumber: '',
    stuEmail: '',
    parentTitle: '',
    parentFullname: '',
    parentPhoneNumber: '',
    parentEmail: '',
    addressProvince: '',
    addressCity: '',
    addressDetail: '',
    tutorNote: '',
    package: null
  })
  const [priceEst, setPriceEst] = useState(null)
  const [chosenSubject, setChosenSubject] = useState([])
  const [additionalStudents, setAdditionalStudents] = useState([])
  const [tutorPreference, setTutorPreference] = useState([])
  const [schedules, setSchedules] = useState([{}, {}, {}])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  useEffect(() => {
    if (form.package) {
      console.log('update package')
      const nOfStud = 1 + additionalStudents.length
      let priceClass = null
      switch (form.class) {
        case `1`:
        case `2`:
        case `3`:
        case `4`:
        case `5`:
        case `6`:
          priceClass = `1-6`
          break
        case `7`:
        case `8`:
          priceClass = `7-8`
          break
        case `9`:
          priceClass = `9`
          break
        case `10`:
        case `11`:
          priceClass = `10-11`
          break
        case `12`:
          priceClass = `12`
          break
      }
      const price = pricing.filter(price => {
        return (price.class.includes(priceClass) && price.session == form.package)
      })
      const selectedPackage = price[0]
      if (selectedPackage) {
        setPriceEst({
          msg: `Program Kelas ${form.class}, Jumlah ${nOfStud} Orang. Paket ${form.package} Sesi.`,
          price: selectedPackage.price[nOfStud - 1]
        })
      }
      else {
        setPriceEst(null)
      }
    }
  }, [form, additionalStudents])

  const _submit = () => {
    const data = {
      ...form,
      ...{ additionalStudents: additionalStudents },
      ...{ subjects: chosenSubject },
      ...{ schedules: schedules }
    }
    console.log(data)
    setShowConfirmModal(true)
    // console.log(form)
    // console.log(additionalStudents)
    // console.log(chosenSubject)
    // console.log(schedules)
  }

  const step1FormValidation = () => {
    if (
      form.fullname.length > 0 &&
      form.class.length > 0 &&
      form.schoolName.length > 0 &&
      form.parentTitle.length > 0 &&
      form.parentFullname.length > 0 &&
      form.parentPhoneNumber.length > 0 &&
      form.addressProvince.length > 0 &&
      form.addressCity.length > 0 &&
      form.addressDetail.length > 0 &&
      additionalStudents.every((fullName) => fullName.length > 0)
    ) {
      return true
    }
    return false
  }

  const step2FormValidation = () => {
    if (
      chosenSubject.length > 0 &&
      schedules.length > 2 &&
      schedules.every(schedule => schedule.day && schedule.hour) &&
      tutorPreference.length > 0 &&
      form.package.toString().length > 0
    ) {
      return true
    }
    return false
  }

  const updateForm = (key, value) => {
    const clone = { ...form }
    clone[key] = value
    setForm(clone)
  }

  const checkTutorPref = (data) => {
    const findIdx = tutorPreference.findIndex(area => area === data)
    if (findIdx > -1) {
      return true
    }
    return false
  }

  const toggleTutorPref = (data) => {
    const clone = [...tutorPreference]
    const findIdx = tutorPreference.findIndex(area => area === data)
    if (findIdx > -1) {
      clone.splice(findIdx, 1)
    }
    else {
      clone.push(data)
    }
    setTutorPreference(clone)
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

  const updateAdditionalStudents = (idx, data) => {
    const clone = [...additionalStudents]
    clone[idx] = data
    setAdditionalStudents(clone)
  }

  const removeAdditionalStudents = (idx) => {
    const clone = [...additionalStudents]
    clone.splice(idx, 1)
    setAdditionalStudents(clone)
  }

  const addAdditionalStudents = () => {
    const clone = [...additionalStudents]
    clone.push('')
    setAdditionalStudents(clone)
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

  const phoneNumber = `082134567890`
  const msg = encodeURI(`Saya ingin tanya mengenai bimbel Elektrum`)

  return (
    <div className="bg-gray-100">
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
                <h3 className="mt-8 text-2xl text-center">Terima kasih telah melakukan pendaftaran pada Rumah Belajar Electrum.</h3>
                <a className="block mt-8 px-4" target="_blank" href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${msg}`}>
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
      <Nav />
      <div className="relative">
        <div className="absolute top-0 h-32 w-full z-10" style={{
          background: `linear-gradient(180deg, #2FDE9B 0%, rgba(47, 222, 155, 0) 100%)`
        }}></div>
        <div className="max-w-3xl m-auto px-3 py-16 z-20 relative">
          {
            step === 0 && (
              <h2 className="text-lg lg:text-3xl text-black text-center font-bold">Halo, Selamat Datang! Isi form dibawah untuk mendaftar sebagai siswa</h2>
            )
          }
          {
            step === 1 && (
              <h2 className="text-lg lg:text-3xl text-black text-center font-bold">Satu langkah lagi untuk
              menyelesaikan pendaftaran...</h2>
            )
          }
        </div>
      </div>
      {
        step === 0 && (
          <div className="max-w-3xl m-auto bg-white rounded-md py-16 px-4">
            <div className="border-b border-gray-300 pb-2">
              <h4 className="text-2xl font-bold">Data Diri</h4>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Identitas Siswa</h4>
            </div>
            <div className="mt-3">
              <label className="block">Nama Lengkap</label>
              <input type="text" value={form.fullname} onInput={e => updateForm('fullname', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            {
              additionalStudents.map((student, idx) => {
                return (
                  <div className="flex">
                    <div className="w-10/12 mt-3" key={idx}>
                      <label className="block">Nama Lengkap Siswa {idx + 2}</label>
                      <input value={student} onInput={e => updateAdditionalStudents(idx, e.target.value)} type="text" className="w-full mt-2 bg-gray-200 px-3" />
                    </div>
                    <div className="w-2/12 px-1">
                      <svg className="m-auto cursor-pointer mt-12" onClick={_ => removeAdditionalStudents(idx)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#EB5757" fill-opacity="0.1" />
                        <path d="M13.5 14.5C13.6326 14.5 13.7598 14.5527 13.8536 14.6464C13.9473 14.7402 14 14.8674 14 15V21C14 21.1326 13.9473 21.2598 13.8536 21.3536C13.7598 21.4473 13.6326 21.5 13.5 21.5C13.3674 21.5 13.2402 21.4473 13.1464 21.3536C13.0527 21.2598 13 21.1326 13 21V15C13 14.8674 13.0527 14.7402 13.1464 14.6464C13.2402 14.5527 13.3674 14.5 13.5 14.5ZM16 14.5C16.1326 14.5 16.2598 14.5527 16.3536 14.6464C16.4473 14.7402 16.5 14.8674 16.5 15V21C16.5 21.1326 16.4473 21.2598 16.3536 21.3536C16.2598 21.4473 16.1326 21.5 16 21.5C15.8674 21.5 15.7402 21.4473 15.6464 21.3536C15.5527 21.2598 15.5 21.1326 15.5 21V15C15.5 14.8674 15.5527 14.7402 15.6464 14.6464C15.7402 14.5527 15.8674 14.5 16 14.5ZM19 15C19 14.8674 18.9473 14.7402 18.8536 14.6464C18.7598 14.5527 18.6326 14.5 18.5 14.5C18.3674 14.5 18.2402 14.5527 18.1464 14.6464C18.0527 14.7402 18 14.8674 18 15V21C18 21.1326 18.0527 21.2598 18.1464 21.3536C18.2402 21.4473 18.3674 21.5 18.5 21.5C18.6326 21.5 18.7598 21.4473 18.8536 21.3536C18.9473 21.2598 19 21.1326 19 21V15Z" fill="#EB5757" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 12C22.5 12.2652 22.3946 12.5196 22.2071 12.7071C22.0196 12.8946 21.7652 13 21.5 13H21V22C21 22.5304 20.7893 23.0391 20.4142 23.4142C20.0391 23.7893 19.5304 24 19 24H13C12.4696 24 11.9609 23.7893 11.5858 23.4142C11.2107 23.0391 11 22.5304 11 22V13H10.5C10.2348 13 9.98043 12.8946 9.79289 12.7071C9.60536 12.5196 9.5 12.2652 9.5 12V11C9.5 10.7348 9.60536 10.4804 9.79289 10.2929C9.98043 10.1054 10.2348 10 10.5 10H14C14 9.73478 14.1054 9.48043 14.2929 9.29289C14.4804 9.10536 14.7348 9 15 9H17C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10H21.5C21.7652 10 22.0196 10.1054 22.2071 10.2929C22.3946 10.4804 22.5 10.7348 22.5 11V12ZM12.118 13L12 13.059V22C12 22.2652 12.1054 22.5196 12.2929 22.7071C12.4804 22.8946 12.7348 23 13 23H19C19.2652 23 19.5196 22.8946 19.7071 22.7071C19.8946 22.5196 20 22.2652 20 22V13.059L19.882 13H12.118ZM10.5 12V11H21.5V12H10.5Z" fill="#EB5757" />
                      </svg>
                    </div>
                  </div>
                )
              })
            }
            {
              additionalStudents.length < 6 && (
                <button onClick={_ => addAdditionalStudents()} className="rounded-md overflow-hidden cursor-pointer mt-4 bg-primary-green text-white px-3 py-2">
                  + Tambahkan Siswa (Maksimal 7 Siswa)
                </button>
              )
            }
            <div className="flex flex-wrap -mx-3">
              <div className="w-full mt-3 px-3">
                <label className="block">Kelas</label>
                <ReactDropdown options={[
                  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
                ]} value={form.class} onChange={opt => updateForm('class', opt.value)} placeholder="Kelas" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
              </div>
            </div>
            <div className="mt-3">
              <label className="block">Nama Sekolah</label>
              <input type="text" value={form.schoolName} onInput={e => updateForm('schoolName', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-3">
              <div className="flex">
                <label className="block">Nomor HP Siswa</label>
                <p className="text-gray-600 pl-2">(Opsional)</p>
              </div>
              <input type="text" value={form.stuPhoneNumber} onInput={e => updateForm('stuPhoneNumber', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" placeholder="081234567890" />
            </div>
            <div className="mt-3">
              <div className="flex">
                <label className="block">Email Siswa</label>
                <p className="text-gray-600 pl-2">(Opsional)</p>
              </div>
              <input type="text" value={form.stuEmail} onInput={e => updateForm('stuEmail', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Identitas Orang Tua</h4>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/4 mt-3 px-3">
                <label className="block">Gelar</label>
                <ReactDropdown options={[
                  'Ny.', 'Tn.', 'Ibu', 'Bpk.'
                ]} value={form.parentTitle} onChange={opt => updateForm('parentTitle', opt.value)} placeholder="Pilih Gelar" controlClassName="truncate w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
              </div>
              <div className="w-3/4 mt-3 px-3">
                <label className="block">Nama Lengkap</label>
                <input type="text" value={form.parentFullname} onInput={e => updateForm('parentFullname', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
              </div>
            </div>
            <div className="mt-3">
              <label className="block">Nomor HP Orang Tua</label>
              <input type="text" value={form.parentPhoneNumber} onInput={e => updateForm('parentPhoneNumber', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-3">
              <div className="flex">
                <label className="block">Email Orang Tua</label>
                <p className="text-gray-600 pl-2">(Opsional)</p>
              </div>
              <input type="text" value={form.parentEmail} onInput={e => updateForm('parentEmail', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Alamat</h4>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/2 mt-3 px-3">
                <label className="block">Provinsi</label>
                <ReactDropdown value={form.addressProvince} onChange={opt => updateForm('addressProvince', opt.value)} options={province} placeholder="Pilih Provinsi" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
              </div>
              <div className="w-full lg:w-1/2 mt-3 px-3">
                <label className="block">Kabupaten/Kota</label>
                <ReactDropdown value={form.addressCity} onChange={opt => updateForm('addressCity', opt.value)} options={city} placeholder="Pilih Kabupaten/Kota" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
              </div>
            </div>
            <div className="mt-3">
              <label className="block">Alamat Lengkap</label>
              <input type="text" value={form.addressDetail} onInput={e => updateForm('addressDetail', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" placeholder="Tulis alamat lengkap: Jalan, Kelurahan, Kecamatan, dsb" />
            </div>
            <div className="flex mt-8">
              <button disabled={!step1FormValidation()} onClick={_ => setStep(1)} className="text-lg bg-primary-green text-white px-4 py-2 rounded-md w-full">Selanjutnya</button>
            </div>
          </div>
        )
      }
      {
        step === 1 && (
          <div className="max-w-3xl m-auto bg-white rounded-md py-16 px-4">
            <div className="border-b border-gray-300 pb-2">
              <h4 className="text-2xl font-bold">Data Program</h4>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Pilih Mata Pelajaran</h4>
              <p className="mt-3">Boleh memilih mata pelajaran lebih dari satu</p>
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
              <h4 className="text-xl font-bold">Jadwal Belajar</h4>
              <p className="mt-3">Harus memilih <b>minimal 3 waktu</b> yang diinginkan</p>
              <div className="mt-3">
                {
                  schedules.map((sch, idx) => {
                    return (
                      <div className="flex items-top" key={idx}>
                        <InputSchedule currentSchedules={schedules} value={sch} className="w-10/12" chosenSchedule={schedules} cb={sch => updateSchedule(idx, sch)} />
                        {
                          idx > 2 && (
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
              <h4 className="text-xl font-bold">Preferensi Tutor / Guru</h4>
              <p className="mt-3">Boleh memilih lebih dari satu</p>
              <div className="mt-3">
                <div className="flex items-center">
                  <div>
                    <input checked={checkTutorPref('Laki-laki')} onChange={_ => toggleTutorPref('Laki-laki')} type="checkbox" />
                  </div>
                  <div className="pl-2">
                    <p>Laki-laki</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center">
                  <div>
                    <input checked={checkTutorPref('Perempuan')} onChange={_ => toggleTutorPref('Perempuan')} type="checkbox" />
                  </div>
                  <div className="pl-2">
                    <p>Perempuan</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label className="block">Catatan untuk tutor:</label>
                <input type="text" value={form.tutorNote} onInput={e => updateForm('tutorNote', e.target.value)} className="w-full mt-3 bg-gray-200 px-3" placeholder="Apakah ada permintaan khusus yang perlu diketahui tutor?" />
              </div>
            </div>
            <div className="flex flex-wrap mt-8 -mx-3">
              <div className="w-full lg:w-1/2 mt-8 px-3">
                <h4 className="text-xl font-bold">Pilih Paket</h4>
                <ReactDropdown options={[
                  { label: `1 Sesi`, value: 1 },
                  { label: `8 Sesi`, value: 8 },
                  { label: `24 Sesi`, value: 24 },
                  { label: `48 Sesi`, value: 48 },
                ]} value={form.package ? {
                  label: `${form.package} Sesi`,
                  value: form.package
                } : ''} onChange={opt => updateForm('package', opt.value)} placeholder="Pilih Paket" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
              </div>
              {
                priceEst && (
                  <div className="w-full lg:w-1/2 mt-8 px-3">
                    <h4 className="text-xl font-bold">Estimasi</h4>
                    <p className="mt-3">{priceEst.msg}</p>
                    <h4 className="mt-3 text-4xl font-bold">{priceEst.price}</h4>
                    <a href="/pricing" target="_blank" className="text-primary-green font-semibold block mt-4">Lihat rincian biaya lainnya</a>
                  </div>
                )
              }
            </div>
            <div className="flex flex-wrap mt-6 -mx-3">
              <div className="w-full lg:w-1/2 px-3 mt-4">
                <button onClick={_ => setStep(0)} className="text-lg border px-4 py-2 rounded-md w-full">Periksa Kembali</button>
              </div>
              <div className="w-full lg:w-1/2 px-3 mt-4">
                <button disabled={!step2FormValidation()} onClick={_submit} className="text-lg text-white bg-primary-green px-4 py-2 rounded-md w-full">Kirim Pendaftaran</button>
              </div>
            </div>
          </div>
        )
      }
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  )
}

export default RegisterStudent  