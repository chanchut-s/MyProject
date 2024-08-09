import Image from 'next/image';
import Link from 'next/link';

export default function Reward({ src, alt, href }) {
  return (
    <Link href={href}>
      <div className="group relative inline-block overflow-hidden">
        <img src={src} alt="" />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
          <p className="text-white font-bold">{href}</p>
        </div>
      </div>
    </Link>
  );
}
