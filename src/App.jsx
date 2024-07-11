import { nanoid } from "nanoid";

import "./App.css";
import { useState } from "react";


const zomatoRestaurants = [
  {
    imgLink:"https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    id: nanoid(),
    title: "Title1",
    desc: "desc - 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 3,
    distance: 2.8,
    // offer: true,
  },

  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/4/19630684/dce72e134b6365dc8b998a544dce0636_featured_v2.jpg?output-format=webp",
    title: "Title2",
    desc: "desc - 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
    // offer: true,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title3",
    desc: "desc - 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title4",
    desc: "desc - 4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 3.5,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title5",
    desc: "desc - 5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title6",
    desc: "desc - 6 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title7",
    desc: "desc - 7 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 3.9,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title8",
    desc: "desc - 8 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/chains/2/93562/9a497922ecd9279d20aa81fdda2ccb41_featured_v2.jpg?output-format=webp",
    title: "Title9",
    desc: "desc - 9 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
  },
  {
    id: nanoid(),
    imgLink:
      "https://b.zmtcdn.com/data/pictures/5/18538735/e6dc9714e153a5c5ae9a1a93876ca609_featured_v2.jpg?output-format=webp",
    title: "Title10",
    desc: "desc - 10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta vitae adipisci voluptatibus a molestiae reprehenderit laboriosam, voluptates iusto amet fugit ut consequatur doloremque, nemo officiis dignissimos eligendi quas quidem ducimus?",
    rating: 4.9,
    distance: 2.8,
  },
];

function App(){

  const[classNameSelect,setClassNameSelect] = useState(false);

  const [filteredData,setFilteredData] = useState(zomatoRestaurants);

  function filterData(){

    setFilteredData(zomatoRestaurants.filter((eachData) => eachData.rating < 4));

    console.log(setFilteredData(zomatoRestaurants.filter((eachData) => eachData.rating < 4)));
  }

  function filterData1(){
    setFilteredData(zomatoRestaurants.splice(0,4));
  }

  return(

    <>
    <div className="buttons">

    <button  className={classNameSelect ? 'active' : 'null'}
    // className="button1 btn" 
    onClick={() =>{
      filterData();
      setClassNameSelect(!classNameSelect);
    }}>
      rating less Than 4
      </button>

    <button className={classNameSelect ? 'active' : 'null'}
      // className="button2 btn"
    onClick={() =>{
      filterData1();
      setClassNameSelect(!classNameSelect);
    }}>
      slice Data
    </button>

    </div>

    
    
    <div className="mainClass">
    {
      filteredData.map((eachRestData) =>{

        const {imgLink,id,title,desc,rating,distance} = eachRestData;
        return(
          <div key={id} className="oneCard">

            <img className="cardImg" src={imgLink} alt={title} />

            <h3>{title}</h3>

            <p>{desc}</p>

            <span><b>rating -{rating}</b></span>

            <span style={{marginLeft:"50px"}}>distance -{distance}</span>
          </div>
        );
      })
    }

    </div>

    </>

    

  );
}

export default App;