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
    <div className="flex flex-wrap mt-12 -mx-3">
      <div className="w-full lg:w-1/3 px-3 pt-4">
        <label className="block text-lg text-white font-semibold">Nama Lengkap</label>
        <input type="text" value={form.fullname} onInput={e => updateForm('fullname', e.target.value)} className="w-full mt-2" />
      </div>
      <div className="w-full lg:w-1/3 px-3 pt-4">
        <label className="block text-lg text-white font-semibold">Kelas</label>
        <ReactDropdown options={[
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ]} value={form.class} onChange={opt => updateForm('class', opt.value)} placeholder="Kelas" controlClassName="w-full mt-2 rounded-md overflow-hidden bg-gray-200 border-none" />
      </div>
      <div className="w-full lg:w-1/3 px-3 pt-8 flex items-end">
        <Link href={{
          pathname: '/register/student',
          query: {
            fullname: form.fullname,
            class: form.class
          }
        }} as={`/register/student`}>
          <button className="text-lg bg-primary-green px-4 py-2 rounded-md w-full">Selanjutnya</button>
        </Link>
      </div>
    </div>
  )
}

export default FooterCTA