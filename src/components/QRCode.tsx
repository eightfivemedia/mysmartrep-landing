import Image from 'next/image'

export default function QRCode() {
  return (
    <div className="inline-block">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        {/* QR Code Image - placeholder */}
        <div className="w-40 h-40 bg-white rounded-lg relative border-2 border-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-400 text-xs">
            <p>QR Code</p>
            <p className="mt-2">Placeholder</p>
          </div>
          {/* Uncomment when you have the QR code image:
          <Image
            src="/qr-code.png"
            alt="Download SmartRep QR Code"
            fill
            className="object-contain p-2"
          />
          */}
        </div>

        {/* Instruction text */}
        <p className="text-center text-sm text-gray-800 mt-2 font-medium">
          Scan to Download
        </p>
      </div>
    </div>
  )
}

