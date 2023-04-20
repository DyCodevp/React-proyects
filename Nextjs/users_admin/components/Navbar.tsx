import Link from "next/link";

function Navbar() {
  return (
    <nav className="container">
      <div className="content-start">
        <ol className="flex justify-start content-between bg-teal-400 p-2 m-0">
          <li className="p-1 ">
            <Link href={"/"}> Home </Link>
          </li>
          <li className="p-1 ">
            <Link href={"/services"}>Services </Link>
          </li>
          <li className="p-1 ">
            <Link href={"/about"}> About</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;
