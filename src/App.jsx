import React from "react"

function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-20 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-wide">
          <span className="text-rose-500">Ai</span>Roma
        </div>
        <nav className="space-x-4 text-sm text-gray-700">
          <a className="hover:text-black" href="#home">Home</a>
          <a className="hover:text-black" href="#collections">Koleksi</a>
          <a className="hover:text-black" href="#contact">Kontak</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="min-h-[60vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Custom parfum, diracik khusus buat kamu.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          AiRoma adalah parfum bar kecil di Loa Janan Ilir, Samarinda.
          Cerita karakter dan gaya kamu, kami racik EDP 30ml yang wangi,
          tahan lama, dan beda dari parfum pasaran.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            className="inline-block bg-rose-500 text-white px-6 py-2 rounded-md shadow hover:bg-rose-600 text-sm"
            href="#collections"
          >
            Lihat contoh racikan
          </a>
          <a
            className="inline-block border border-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-50 text-sm"
            href="#contact"
          >
            Booking sesi racik
          </a>
        </div>
      </div>
    </section>
  )
}

function Collections() {
  return (
    <section id="collections" className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Koleksi Sample AiRoma</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold mb-1">Morning Bloom</h3>
            <p className="text-sm text-gray-600 mb-2">
              Floral fresh untuk dipakai kerja / kuliah.
            </p>
            <p className="text-xs text-gray-500">
              Top: Lemon, Green Tea<br />
              Heart: Jasmine, Peony<br />
              Base: White Musk, Cedarwood
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold mb-1">Geranium Tea</h3>
            <p className="text-sm text-gray-600 mb-2">
              Tea-based yang soft dan clean, nggak nyegrak.
            </p>
            <p className="text-xs text-gray-500">
              Top: Bergamot<br />
              Heart: Geranium, Rose<br />
              Base: Sandalwood, Iso E Super, White Musk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Kontak & Lokasi</h2>
        <p className="text-sm text-gray-600 mb-2">
          AiRoma Custom Parfum — Loa Janan Ilir, Samarinda (depan Mixue).
        </p>
        <p className="text-sm text-gray-600">
          WhatsApp: <span className="font-semibold">+62 xxx-xxxx-xxxx</span><br />
          Instagram: @airoma.id (contoh)<br />
          Jam buka: 10.00 – 21.00
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} AiRoma. All rights reserved.
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Collections />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
