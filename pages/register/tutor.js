import Nav from '../../components/Nav'
import { useState } from 'react'
import Footer from '../../components/Footer'

const RegisterTutor = () => {
  return (
    <div className="bg-gray-100">
      <Nav />
      <div className="relative">
        <div className="absolute top-0 h-32 w-full z-10" style={{
          background: `linear-gradient(180deg, #2FDE9B 0%, rgba(47, 222, 155, 0) 100%)`
        }}></div>
        <div className="max-w-3xl m-auto px-3 py-16 z-20 relative">
          <h2 className="text-lg lg:text-3xl text-black text-center font-bold">Halo, Selamat Datang! Isi form dibawah untuk mendaftar sebagai Tutor</h2>
        </div>
      </div>
      <div className="max-w-3xl m-auto bg-white rounded-md py-16 px-4">
        <div className="border-b border-gray-300 pb-2">
          <h4 className="text-2xl font-bold">Data Diri</h4>
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Identitas Diri</h4>
        </div>
        <div className="mt-2">
          <label className="block">Nama Lengkap</label>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-2">
          <label className="block">Tempat Tanggal Lahir</label>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" placeholder="Contoh: Jakarta, 17 08 1996" />
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
        <div className="mt-2">
          <label className="block">Kendaraan Pribadi</label>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-2">
          <label className="block">Kendaraan Pribadi</label>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-2">
          <div className="flex">
            <label className="block">Nomor HP</label>
            <p className="text-gray-600 pl-2">(Opsional)</p>
          </div>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-2">
          <div className="flex">
            <label className="block">Email</label>
            <p className="text-gray-600 pl-2">(Opsional)</p>
          </div>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Pendidikan</h4>
        </div>
        <div className="mt-2">
          <label className="block">Universitas</label>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-2">
          <label className="block">Jurusan</label>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">Tahun Lulus</label>
            <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
          </div>
          <div className="w-full lg:w-1/2 mt-2 px-3">
            <label className="block">IPK</label>
            <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
          </div>
        </div>
        <div className="mt-2">
          <div className="flex">
            <label className="block">Pengalaman Mengajar</label>
            <p className="text-gray-600 pl-2">(Opsional)</p>
          </div>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-2">
          <div className="flex">
            <label className="block">Prestasi Akademik</label>
            <p className="text-gray-600 pl-2">(Opsional)</p>
          </div>
          <input type="text" className="w-full mt-2 bg-gray-200 px-3" />
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Berkas</h4>
          <p className="mt-2">Lampirkan Ijazah, Transkrip Nilai, dan CV yang sudah disatukan dalam sebuah file *.zip, *.rar, dsb.</p>
          <input type="file" />
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Bersedia Mengajar Mata Pelajaran</h4>
          <div className="flex flex-wrap -mx-3">
            <div className="w-1/3 px-3">
              <h4 className="text-xl font-bold mt-2">SD</h4>
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
            <div className="w-1/3 px-3">
              <h4 className="text-xl font-bold mt-2">SMP</h4>
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
            <div className="w-1/3 px-3">
              <h4 className="text-xl font-bold mt-2">SMA</h4>
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
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Waktu Mengajar</h4>
          <p className="mt-2">Harus memilih <b>minimal 3 waktu</b> yang diinginkan</p>
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
        <div className="mt-8">
          <h4 className="text-xl font-bold">Jangkauan Mengajar</h4>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 mt-2 px-3">
              <div className="h-40 bg-gray-200 border rounded-md p-4">
                <h4 className="text-lg font-semibold">Jakarta Utara</h4>
                <p className="text-sm mt-2">Cilincing, Kelapa Gading, Koja, Pademangan, Penjaringan, Tanjung Priuk</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-2 px-3">
              <div className="h-40 bg-green-200 border border-primary-green rounded-md p-4">
                <h4 className="text-lg font-semibold">Jakarta Utara</h4>
                <p className="text-sm mt-2">Cilincing, Kelapa Gading, Koja, Pademangan, Penjaringan, Tanjung Priuk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-8">
          <button onClick={_ => setStep(1)} className="text-lg bg-primary-green text-white px-4 py-2 rounded-md w-full">Kirim Pendaftaran</button>
        </div>
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  )
}

export default RegisterTutor