import Link from 'next/link'

const footer = {
  address: `Jl Boulevard Artha Gading Rukan Artha Gading Niaga Bl D/21. Kelapa Gading Barat, Jakarta Utara,
  DKI Jakarta 11223.`,
  email: `info@bimbelelektrum.com`,
  phoneNumber: `(021) 8285 6764`
}

const Footer = () => {
  return (
    <div className=" border-t border-gray-300 bg-white">
      <div className="max-w-6xl px-4 m-auto py-16">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/12 px-3 pt-8 lg:pt-0">
            Logo
        </div>
          <div className="w-full lg:w-4/12 px-3 pt-8 lg:pt-0">
            <h4 className="text-lg font-semibold">Kantor Kami</h4>
            <div className="mt-2">
              <p>{footer.address}</p>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-3 pt-8 lg:pt-0">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="mt-2">
              <p>Email: {footer.email}</p>
              <p className="mt-1">Phone: {footer.phoneNumber}</p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 px-3 pt-8 lg:pt-0">
            <h4 className="text-lg font-semibold">Informasi</h4>
            <div className="mt-2 flex flex-col">
              <Link href="/blog">
                <a>Berita dan Event</a>
              </Link>
              <Link href="/about-us">
                <a className="mt-1">Tentang Kami</a>
              </Link>
              <Link href="/about-us">
                <a className="mt-1">Pendaftaran Siswa</a>
              </Link>
              <Link href="/about-us">
                <a className="mt-1">Pendaftaran Tutor</a>
              </Link>
              <Link href="/about-us">
                <a className="mt-1">FAQ</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer