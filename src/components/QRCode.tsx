import Image from 'next/image'

export default function QRCode() {
  return (
    <div className="inline-block">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        {/* QR Code Image */}
        <div className="w-40 h-40 bg-white rounded-lg relative">
          <Image
            src="/images/qr-code/smartrep-qr.png"
            alt="Download SmartRep QR Code"
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Instruction text */}
        <p className="text-center text-sm text-gray-800 mt-2 font-medium">
          Scan to Download
        </p>
      </div>
    </div>
  )
}

