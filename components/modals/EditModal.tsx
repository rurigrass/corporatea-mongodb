'use client'

import useEditModal from "@/hooks/useEditModal";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const EditModal = () => {
  const { data: session } = useSession();
  const editModal = useEditModal()

  console.log(session);
  

  const [profileImage, setProfileImage] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [bio, setBio] = useState('')

  useEffect(()=> {

    // setProfileImage()
    // setCoverImage()
    // setName()
    // setUserName()
    // setBio()
  }, [])

  


  return <div></div>;
};

export default EditModal;
