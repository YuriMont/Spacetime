import Link from 'next/link'
import nlwLogo from '../../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5 ">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-3xl font-bold leading-tight text-gray-50 sm:text-5xl">
          Sua cápsula do tempo
        </h1>
        <p className="leading-relaxed sm:text-lg">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black transition-colors hover:bg-green-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
