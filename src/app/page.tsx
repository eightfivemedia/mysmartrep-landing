import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen flex flex-col bg-[#1A1A1A] overflow-y-auto lg:overflow-hidden scroll-smooth">
      <div className="flex-1 min-h-0">
        <Hero />
      </div>
      <Footer />
    </main>
  )
}

