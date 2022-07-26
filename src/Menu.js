import Button from "./components/Button";
import React from "react";
import { getAllCategories } from "./api";


export default function Menu() {
    
// const  newdata = beerList.map( (beer, idx) =>{
//     return  (
//       console.log(beer)
    
//     )
//   }
// )
// console.log(beerList)

    const allCategories = getAllCategories();
    // console.log(allCategories)
//   const data = props.categories.map(function (categ, idx) {
//     return (
//         <Button name={categ.title} linkName='./beer-list' key={idx}></Button>
//     //   <Link href={"/categories/" + categ.category} key={idx}>
//     //     <a className="link-a">{categ.title}</a>
//     //   </Link>
//     );
//   })
  return (
    // <DefaultLayout title={props.title} description={props.description} page="categories">
    <div className="App">
        {/* <p>hi</p> */}
      <p></p>
      <h1 style={{textAlign: "center"}}>List of all categories:</h1>
      <p></p>
      <ul>
      {allCategories.map((categ, idx) => (
        <Button name={categ.title} linkName='./beer-list' key={idx} data={categ.title}></Button>
      ))}
      </ul>
      {/* <List 
      size="large"
      dataSource={data}
      renderItem={item => <List.Item style={{justifyContent:"center"}}>{item}</List.Item>}
      /> */}
      <Button name='Назад' linkName='../'></Button>
    </div>
    // </DefaultLayout>
  );
}

// export async function getStaticProps() {
// //   const config = await getConfig();
//   const allCategories = await getAllCategories();
//   console.log(allCategories)
//   return {
//     props: {
//       categories: allCategories,
//     //   title: config.title,
//     //   description: config.description,
//     },
//   };
// }


// function Menu(props) {
//     return (
//         <div className="App">
//             <Button name='Назад' linkName='/'/>
//         </div>
//     );
// }
// export default Menu;

// export default function Menu(props) {
//   const data = props.beers.map(function (beer, idx) {
//     return (
//         <Button name={beer.title} linkName={"/" + beer.slug} key={idx}></Button>
//         // <Link href={"/" + beer.slug} key={idx}>
//         //   <a>{beer.title}</a>
//         // </Link>
//     );
//   })
//   return (
//     // <DefaultLayout title={props.title} description={props.description}>
//     <div>
//       <p></p>
//       <h1 style={{textAlign: "center"}}>List of all beers for category &quot;{props.category}&quot;:</h1>
//       <p></p>
//       <List 
//       size="large"
//       dataSource={data}
//       renderItem={item => <List.Item style={{justifyContent:"center"}}>{item}</List.Item>}
//       />
//     </div>
//     // </DefaultLayout>
//   );
// }

// export async function getStaticProps(context) {
//   const config = await getConfigForCategory();
//     return {
//       props: {
//         posts: await getAllPostsForCategory(context.params.category),
//         category: context.params.category,  
//         title: config.title,
//         description: config.description,
//       },
//     };
//   }
  
// export async function getStaticPaths() {
//     let paths = await getAllCategoriesForCategory();
//     paths = paths.map((categ) => ({
//       params: { category: categ.category },
//     }));
//     return {
//       paths: paths,
//       fallback: false,
//     };
//   }
  