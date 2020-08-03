import Nav from '../../components/Nav'
import { useState } from 'react'

const RegisterStudent = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="bg-gray-100">
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
            <div className="mt-2">
              <label className="block">Nama Lengkap</label>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
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
            <div className="mt-2">
              <label className="block">Nama Sekolah</label>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-2">
              <div className="flex">
                <label className="block">Nomor HP Siswa</label>
                <p className="text-gray-600 pl-2">(Opsional)</p>
              </div>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-2">
              <div className="flex">
                <label className="block">Email Siswa</label>
                <p className="text-gray-600 pl-2">(Opsional)</p>
              </div>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Identitas Orang Tua</h4>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/4 mt-2 px-3">
                <label className="block">Gelar</label>
                <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
              </div>
              <div className="w-full lg:w-3/4 mt-2 px-3">
                <label className="block">Nama Lengkap</label>
                <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
              </div>
            </div>
            <div className="mt-2">
              <label className="block">Nomor HP Orang Tua</label>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-2">
              <div className="flex">
                <label className="block">Email Orang Tua</label>
                <p className="text-gray-600 pl-2">(Opsional)</p>
              </div>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Alamat</h4>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/2 mt-2 px-3">
                <label className="block">Provinsi</label>
                <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
              </div>
              <div className="w-full lg:w-1/2 mt-2 px-3">
                <label className="block">Kabupaten/Kota</label>
                <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
              </div>
            </div>
            <div className="mt-2">
              <label className="block">Alamat Lengkap</label>
              <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
            </div>
            <div className="flex mt-8">
            <button onClick={_ => setStep(1)} className="text-lg bg-primary-green text-white px-4 py-2 rounded-md w-full">Selanjutnya</button>
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
              <p className="mt-2">Boleh memilih mata pelajaran lebih dari satu</p>
              <div className="mt-2">
                <div className="flex items-center">
                  <div>
                    <input type="checkbox" value="Bike" />
                  </div>
                  <div className="pl-2">
                    <p>Matematika</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Jadwal Belajar</h4>
              <p className="mt-2">Harus memilih <b>minimal 3 waktu</b> yang diinginkan</p>
              <div className="mt-2">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full lg:w-1/2 mt-2 px-3">
                    <label className="block">Hari</label>
                    <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
                  </div>
                  <div className="w-full lg:w-1/2 mt-2 px-3">
                    <label className="block">Waktu</label>
                    <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold">Preferensi Tutor / Guru</h4>
              <p className="mt-2">Boleh memilih lebih dari satu</p>
              <div className="mt-2">
                <div className="flex items-center">
                  <div>
                    <input type="checkbox" value="Bike" />
                  </div>
                  <div className="pl-2">
                    <p>Laki-laki</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-center">
                  <div>
                    <input type="checkbox" value="Bike" />
                  </div>
                  <div className="pl-2">
                    <p>Perempuan</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <label className="block">Catatan untuk tutor:</label>
                <input type="text" className="w-full mt-2 bg-gray-200 px-3" placeholder="Apakah ada permintaan khusus yang perlu diketahui tutor?" />
              </div>
            </div>
            <div className="flex mt-8 -mx-3">
              <div className="w-1/2 mt-8 mx-3">
                <h4 className="text-xl font-bold">Pilih Paket</h4>
                <input type="text" className="w-full mt-2 bg-gray-200 px-3" placeholder="Pilih Paket" />
              </div>
              <div className="w-1/2 mt-8 mx-3">
                <h4 className="text-xl font-bold">Estimasi</h4>
                <p className="mt-2">Program SMA Kelas XII, Jumlah 3 Orang. Paket 24 Sesi.</p>
                <h4 className="mt-2 text-2xl font-bold">Rp9.720.000,00</h4>
              </div>
            </div>
            <div className="flex mt-8 -mx-3">
              <div className="w-1/2 mx-3">
                <button onClick={_ => setStep(0)} className="text-lg border px-4 py-2 rounded-md w-full">Periksa Kembali</button>
              </div>
              <div className="w-1/2 mx-3">
                <button className="text-lg text-white bg-primary-green px-4 py-2 rounded-md w-full">Kirim Pendaftaran</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default RegisterStudent