import Posts from "@/components/adminPosts";
import Upload from "@/components/upload";
import { MongoClient } from "mongodb";

const adminPanel = async () => {


  return (
    <>
      <Upload />
      <Posts />
    </>
  );
};

export default adminPanel;
