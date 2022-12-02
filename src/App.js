import React, { useState } from "react";
import { useMemo } from "react";
import PostFilter from "./Components/PostFilter";
import PostList from "./Components/PostList";
import "./css/style.css"
import Cap from "./images/Cap.jpg"
import Iron from "./images/Iron.jpg"
import Tan from "./images/Tanos.jpg"
import Asg from "./images/Asg.jpg"
import Sac from "./images/Sacaar.jpg"
import Mol from "./images/Molot.jpg"
import Inf from "./images/Infinity.jpg"
import Iot from "./images/Iotun.jpg"




function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "Имя: Железный человек", gen: 'Пол: male', status: 'Character', img: Iron },
      { id: 2, title: "Имя: Капитан Америка", gen: 'Пол: male', status: 'Character', img: Cap },
      { id: 3, title: "Имя: Танос", gen: 'Пол: male', status: 'Character', img: Tan },
      { id: 1, title: " Имя: Асгард", status: "planet", img: Asg },
      { id: 2, title: " Имя: Молот Тора", status: "artefacts", img: Mol },
      { id: 3, title: " Имя: Сакаар", status: "planet", img: Sac },
      { id: 3, title: " Имя: Перчатка бесконечности", status: "artefacts", img: Inf },
      { id: 3, title: " Имя: Йотунхейм", status: "planet", img: Iot },
   ])
   const [filter, setFilter] = useState({ sort: "", query: "" })




   const sortedPosts = useMemo(() => {
      if (filter.sort) {
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
   }, [filter.sort, posts])

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
   }, [filter.query, sortedPosts])




   return (
      <div className="App">
         <PostFilter filter={filter} setFilter={setFilter} />
         <PostList posts={sortedAndSearchedPosts} title="Marvel" />
      </div >
   );

}


export default App;
