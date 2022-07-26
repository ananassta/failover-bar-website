import ButtonMenu from "./components/ButtonMenu";
import { getAllBeersForCategory } from "./api";
import { useLocation } from 'react-router-dom';
import BeerListItem from "./components/BeerListItem";

export default function BeerList(props) {
    const location = useLocation();
    const allBeers = getAllBeersForCategory(location.state.data);
    // allBeers.map((beer,idx) => (console.log(beer.name)))
//   const data = props.beers.map(function (beer, idx) {
//     return (
//         <Button name={beer.title} linkName={"/" + beer.slug} key={idx}></Button>
//         // <Link href={"/" + beer.slug} key={idx}>
//         //   <a>{beer.title}</a>
//         // </Link>
//     );
//   })
  return (
    // <DefaultLayout title={props.title} description={props.description}>
    <div>
      <p></p>
      <h1 style={{textAlign: "center"}}>List of all beers for category &quot;{location.state.data}&quot;:</h1>
      <p></p>
      <div>
      {/* {props.beers.map((beer, idx) => ( */}
      {allBeers.map((beer,idx) => (
        <BeerListItem beer={beer} key={idx}></BeerListItem>
        // <p>{beer.name}</p>
        // <div key={idx}>
        // <Button name={beer.name} linkName={"./beer"} data={beer.slug}></Button>
        // <p>{beer.alco} | {beer.strength}</p>
        // </div>
        // <Button name={beer.name} linkName={"/" + beer.slug} key={idx} data={beer.slug}></Button>
      ))}
      </div>
      {/* <List 
      size="large"
      dataSource={data}
      renderItem={item => <List.Item style={{justifyContent:"center"}}>{item}</List.Item>}
      /> */}
      <ButtonMenu name='Назад' linkName='../menu'></ButtonMenu>
    </div>
    // </DefaultLayout>
  );
}

// export async function getStaticProps(context) {
// //   const config = await getConfigForCategory();
//     return {
//       props: {
//         posts: await getAllBeersForCategory(context.params.category),
//         category: context.params.category,  
//         // title: config.title,
//         // description: config.description,
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
  