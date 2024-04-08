'use client'

import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalacticas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick={()=>{}}
          />
        ))}
      </section>
    </div>
  );
}

export default Page;