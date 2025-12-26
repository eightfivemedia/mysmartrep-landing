import Image from 'next/image'

export default function QRCode() {
  return (
    <div className="inline-block">
      <div className=" p-4 rounded-2xl shadow-lg">
        {/* QR Code Image */}
        <div className="w-80 h-80 rounded-lg relative">
          <Image
            src="/images/qr-code/smartrep-qr.png"
            alt="Download SmartRep QR Code"
            fill
            className="object-contain p-2"
          />
        </div>
      </div>
    </div>
  )
}

