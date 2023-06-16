"use client";

import useEditModal from "@/hooks/useEditModal";
import { UserProps } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../Input";
import useUser from "@/hooks/useUser";
import ImageUpload from "../ImageUpload";

const EditModal = () => {
  const { data: session } = useSession();
  const editModal = useEditModal();

  const {data: user, refetch: refetchUser} = useUser(session?.user.id as string)
  // const [user, setUser] = useState<UserProps>();
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/users/${session?.user.id}`);
  //       const data = response.data;
  //       setUser(data);
  //     } catch (error) {
  //       console.log("Error fetching users:", error);
  //     }
  //   };
  //   if (session !== undefined) {
  //     fetchData();
  //   }
  // }, [session]);

  // console.log(profileImage);
  // console.log(name);

  useEffect(() => {
    setProfileImage(user?.profileImage as string);
    setCoverImage(user?.coverImage as string);
    setName(user?.name as string);
    setUserName(user?.userName as string);
    setBio(user?.bio as string);
  }, [
    user?.profileImage,
    user?.userName,
    user?.bio,
    user?.profileImage,
    user?.coverImage,
  ]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch(`/api/users/${session?.user.id}`, {
        name,
        userName,
        bio,
        profileImage,
        coverImage,
      });
      //mutate user
      refetchUser()
      toast.success("Updated User");
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      editModal.onClose();
      setIsLoading(false);
    }
  }, [name, userName, bio, profileImage, coverImage]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        value={profileImage}
        disabled={isLoading}
        onChange={(image)=> setProfileImage(image)}
        label="Upload profile image"
      />
      <ImageUpload
        value={coverImage}
        disabled={isLoading}
        onChange={(image)=> setCoverImage(image)}
        label="Upload cover image"
      />
      <Input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        disabled={isLoading}
      />
      <Input
        placeholder="bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      title="Edit your profile"
      actionLabel="Save"
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default EditModal;
