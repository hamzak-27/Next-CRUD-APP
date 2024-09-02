"use client";

import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Removebtn({ id }) {
  const router = useRouter();
  const removeTopic = async() => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok){

        router.refresh();

      }

      

      
    }
  };

  return (
    <button onClick={removeTopic}>
      <MdDelete size={25}/>
    </button>
      

    
  )
}

