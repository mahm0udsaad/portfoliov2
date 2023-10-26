export const Post = ({item}) =>{
  const parts = item.image.split("/"); // Split by forward slash
const filenameWithBackslash = parts[parts.length - 1]; // Get the last part, which includes the backslash

// To remove the backslash, you can split it by backslash and get the last part:
const filenameParts = filenameWithBackslash.split("\\");
const img = filenameParts[filenameParts.length - 1];
    return(
        <div key={item._id}>
           <h1 className="text-center text-6xl text-white mb-8">{item.clientData ? item.clientData.name : item.name}</h1>
           <div className="wrapper w-5/6 mx-auto">
           <img
          className="w-full"
          src={`/${img}`}
          alt={item.name}
        />
           </div>
         </div>
    )
}