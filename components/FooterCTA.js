import ReactDropdown from 'react-dropdown'
import Link from 'next/link'
import { useState } from 'react'

const FooterCTA = () => {
  const [form, setForm] = useState({
    fullname: '',
    class: ''
  })

  const updateForm = (key, value) => {
    const clone = { ...form }
    clone[key] = value
    setForm(clone)
  }

  return (
    <div className="max-w-sm m-auto">
      <div className="flex flex-col mt-12 -mx-3">
        <div className="w-full px-3 pt-4">
          <label className="block text-lg text-white font-semibold">Nama Lengkap</label>
          <input type="text" value={form.fullname} onChange={e => updateForm('fullname', e.target.value)} placeholder="Nama Siswa" className="w-full mt-2" />
        </div>
        <div className="w-full px-3 pt-4">
          <label className="block text-lg text-white font-semibold">Kelas</label>
          <ReactDropdown options={[
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
          ]} value={form.class} onChange={opt => updateForm('class', opt.value)} placeholder="Kelas" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
        </div>
      </div>
      <div className="w-full mt-8">
        <Link href={{
          pathname: '/register/student',
          query: {
            fullname: form.fullname,
            class: form.class
          }
        }} as={`/register/student`}>
          <button className="text-lg bg-primary-green px-4 py-2 rounded-md w-full font-semibold">Daftar Kelas Privat</button>
        </Link>
        <p className="text-center text-lg text-white py-2">atau</p>
        <Link href={{
          pathname: '/register/online',
          query: {
            fullname: form.fullname
          }
        }} as={`/register/online`}>
          <button className="text-lg bg-primary-green px-4 py-2 rounded-md w-full font-semibold">Daftar Kelas Online</button>
        </Link>
      </div>
    </div>
  )
}

export default FooterCTA