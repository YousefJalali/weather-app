import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
// import styles from '@/styles/Details.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <header className="mb-4 flex items-center justify-between text-2xl">
        <Link href="/" prefetch className="py-2">
          <FiArrowLeft />
        </Link>
      </header>

      {children}
    </div>
  );
}
