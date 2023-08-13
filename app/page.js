import 'bootstrap/dist/css/bootstrap.css';

import Image from "next/image";
import Checklist from "../components/Checklist";
export default function Home() {
  return (
    <main className=" w-full bg-teal-700 min-h-screen  items-center justify-between p-24">
      
    <div className='bg-light px-2'>
      <Checklist /></div>
    
    </main>
  );
}
