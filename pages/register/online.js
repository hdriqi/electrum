import Nav from '../../components/Nav'
import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import InputSchedule from '../../components/InputSchedule'
import ReactDropdown from 'react-dropdown'
import { province, capitalize } from '../../utils/common'
import Link from 'next/link'
import Axios from 'axios'
import Head from 'next/head'

const gpaRegex = /^([0-4]\.\d\d)$/

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

const RegisterOnline = ({ footer }) => {
  console.log(footer)
  const msg = encodeURI(`Saya ingin tanya mengenai bimbel Electrum`)

  const [form, setForm] = useState({
    fullname: '',
    schoolName: '',
    phoneNumber: '',
    email: '',
  })
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [chosenSubject, setChosenSubject] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [termCondition, setTermCondition] = useState(false)

  const formValidation = () => {
    if (
      form.fullname.length > 0 &&
      form.schoolName.length > 0 &&
      form.phoneNumber.length > 0 &&
      form.email.length > 0 &&
      chosenSubject.length > 0 &&
      termCondition
    ) {
      return true
    }
    return false
  }

  const updateForm = (key, value) => {
    const clone = { ...form }
    clone[key] = value
    const prevValue = form[key]
    setForm(clone)
  }

  const _submit = async () => {
    setIsSubmitting(true)
    const data = {
      ...form,
      ...{ subjects: chosenSubject }
    }
    const tutorPost = await Axios.post(`${process.env.BASE_URL}/api/collections/online`, data, {
      headers: {
        'x-api-key': process.env.CLIENT_WRITE_KEY
      }
    })
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

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Pendaftaran Kelas Online | Rumah Belajar Electrum</title>
        <meta name="description" content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />

        <meta name='twitter:title' content="Pendaftaran Kelas Online | Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta name='twitter:image' content="/favicon.ico" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Pendaftaran Kelas Online | Rumah Belajar Electrum" />
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
                <h3 className="mt-8 text-2xl text-center">Terima kasih telah mendaftar sebagai peserta kelas online pada Rumah Belajar Electrum.</h3>
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
          <h2 className="text-lg lg:text-3xl text-black text-center font-bold">Halo, Selamat Datang! Isi form dibawah untuk mendaftar sebagai Peserta Kelas Online</h2>
        </div>
      </div>
      <div className="max-w-3xl m-auto bg-primary-navy text-white rounded-md py-16 px-4">
        <div className="border-b border-gray-300 pb-2">
          <h4 className="text-2xl font-bold">Data Diri</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-xl font-bold">Identitas Diri</h4>
        </div>
        <div className="mt-3">
          <label className="block">Nama Lengkap</label>
          <input type="text" value={form.fullname} onInput={e => updateForm('fullname', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-3">
          <label className="block">Nama Sekolah</label>
          <input type="text" value={form.schoolName} onInput={e => updateForm('schoolName', e.target.value)} className="w-full mt-2 bg-gray-200 px-3" />
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
        <div className="border-b border-gray-300 pb-2 mt-8">
          <h4 className="text-2xl font-bold">Kelas</h4>
        </div>
        <div className="mt-3">
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
        <div className="mt-6">
          <h4 className="text-xl font-bold">Jadwal Kelas Online</h4>
          <p className="mt-3">Lihat jadwal kelas online <a target="_blank" href={footer.onlineClassTermsAndConditionsFile} className="underline cursor-pointer font-bold">disini</a></p>
        </div>
        <div className="mt-8">
          <div>
            <div className="flex items-center">
              <div>
                <input checked={termCondition} onChange={_ => setTermCondition(!termCondition)} type="checkbox" />
              </div>
              <div className="pl-2">
                <p>Saya menyetujui Syarat & Ketentuan yang berlaku di Rumah Belajar Electrum.</p>
                <p>Syarat dan ketentuan dapat diunduh <a target="_blank" href={footer.onlineClassTermsAndConditionsFile} className="underline cursor-pointer font-bold">disini</a></p>
              </div>
            </div>
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

export default RegisterOnline