export const Post = ({item}) =>{
    const deletePost= async (id) =>{
        await fetch(`http://localhost:3000/getitems/${id}`, {
          method: "DELETE",
        }).then((res) => res.json());
      }

    return(
        <div key={item._id}>
        <button onClick={()=>deletePost(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
           <h1 className="text-center text-6xl text-white mb-8">{item.clientData ? item.clientData.name : item.name}</h1>
           <div className="wrapper w-5/6 mx-auto">
           <img
          className="w-full"
          src={`data:image/png;base64,${item.clientData ? item.clientData.image : item.image}`}
          alt={item.clientData ? item.clientData.name : item.name}
        />
           </div>
         </div>
    )
}