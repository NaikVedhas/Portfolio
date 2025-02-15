import ProjectCard from "./ProjectCard"

const Projects = () => {
  
    const data = [
        {
            name:"LinkedIn Clone",
            desc:"Built a scalable LinkedIn clone from scratch with features like posts, comments, likes, profile viewers and advanced features like search, connect, follow, and messaging",
            tech:["TanStack Query","Socket.io","React.js","Node.js","Express.js","MongoDB","JWT","DaisyUI","Tailwind CSS","HTML"],
            features:["1","2"],
            github:"https://github.com/NaikVedhas/l",
            color:"blue-500",
            img:"/vite.svg"
        },
        {
            name:"Tune Trax",
            desc:"Led a team of 4 at the Bit n Build International hackathon, developing a decentralized music distribution platform with 3 distinct roles—Users, Artists, and Streaming Platforms.",
            tech:["Solidity","Wagmi","IPFS","Pinata","ConnectKit","React.js","Metamask","Tailwind CSS","HTML"],
            features:["1","2"],
            github:"https://github.com/NaikVedhas/Tune-Trax",
            color:"pink-400",
            img:"/vite.svg"


        },
        {
            name:"FaikBLock",
            desc:"Directed a team of 4 during the Inheritance ’23 Mentorship Program to create a decentralized solution for authenticating real-world products, resulting in successful authentications via QR code technology.",
            tech:["Solidity","Wagmi","ConnectKit","React.js","Metamask","Tailwind CSS","HTML"],
            features:["1","2"],
            github:"https://github.com/NaikVedhas/Faik-Block",
            color:"purple-500",
            img:"/vite.svg" 

        },
    ]
  
  
  
  return (
    <div>
        {data.map((p,i)=> (
            <ProjectCard p={p} key={i}/>
        ))}

    </div>
  )
}
export default Projects