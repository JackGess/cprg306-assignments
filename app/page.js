//npm run dev

import Link from "next/link";

export default function Home(){


  return(
    <main>
      <h1 className="text-5xl font-extrabold text-center text-gray-800 tracking-tight mb-8 font-serif">CPRG306 Assignments</h1>
      <ul className="space-y-3 text-lg text-gray-700 text-center">
        <li>
          <Link href="./week-2" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-3" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-4" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-5" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-6" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-7" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 7 Assignment
          </Link>
        </li>
                <li>
          <Link href="./week-8" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 8 Assignment
          </Link>
        </li>
                <li>
          <Link href="./week-9" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 9 Assignment
          </Link>
        </li>
                <li>
          <Link href="./week-10" className="hover:text-blue-600 hover:underline transition font-serif">
            Week 10 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}