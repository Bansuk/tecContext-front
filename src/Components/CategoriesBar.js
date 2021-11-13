import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../Services/api.services";
import { 
  NavbarComponent, 
  BoxCategory,
  BoxIconCategory,
  ContainerCategory
} from "../Styles/styleCategoriesBar"
import { 
    MdLaptopChromebook,
    MdOutlineDesktopWindows,
    MdLocalPrintshop,
    MdOutlineSmartphone,
    MdOutlineTabletAndroid,
    MdVideogameAsset,
    MdMouse,
} from "react-icons/md";

function CategoriesBar() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    getCategories()
        .then((resp) => {
          setCategories(resp.data);
        })
        .catch((error) => {
            console.log(error);
        })
  }, [])   
 
    return (
      <NavbarComponent>
        <BoxIconCategory>
          <MdLaptopChromebook color="#FFFFFF" size="20" />
          <MdOutlineDesktopWindows color="#FFFFFF" size="20" /> 
          <MdLocalPrintshop color="#FFFFFF" size="20"/>  
          <MdOutlineSmartphone color="#FFFFFF" size="20" />
          <MdOutlineTabletAndroid color="#FFFFFF" size="20"/>
          <MdVideogameAsset color="#FFFFFF" size="20"/>
          <MdMouse color="#FFFFFF" size="20"/>
        </BoxIconCategory>
        <ContainerCategory>
            {categories.map((category) => (
              <Link to={`/categories/${category.id}`}>
              <BoxCategory key={category.id}>
                <span>{category.name}</span>
              </BoxCategory>
              </Link>  
            ))}
        </ContainerCategory>
    </NavbarComponent>
    );
}

export default CategoriesBar;


// return (
//   <NavbarComponent>
    
//       <BoxCategory  onClick={() => {setCategory("Notebooks"); history.push("/categories/laptops");}}>
//         <MdLaptopChromebook color="#FFFFFF" size="20" />
//         <span>Notebooks</span>
//       </BoxCategory>     
//       <BoxCategory onClick={() => { setCategory("Computadores"); history.push("/products/computers");}}>
//         <MdOutlineDesktopWindows color="#FFFFFF" size="20" />              
//         <span>Computadores</span>
//       </BoxCategory> 
//       <BoxCategory onClick={() => { setCategory("Impressoras"); history.push("/products/printers");}}>
//         <MdLocalPrintshop color="#FFFFFF" size="20"/>
//         <span>Impressoras</span>
//       </BoxCategory >
//       <BoxCategory onClick={() => { setCategory("Smartphones"); history.push("/products/smartphones");}}>
//         <MdOutlineSmartphone color="#FFFFFF" size="20" />
//         <span>Smarthphones</span>
//       </BoxCategory> 
//       <BoxCategory onClick={() => { setCategory("Tablets"); history.push("/products/tablets");}}>
//         <MdOutlineTabletAndroid color="#FFFFFF" size="20"/>
//         <span>Tablets</span>
//       </BoxCategory> 
//       <BoxCategory onClick={() => { setCategory("Videogames"); history.push("/products/videogames");}}>
//         <MdVideogameAsset color="#FFFFFF" size="20"/>
//         <span>Games</span>
//       </BoxCategory> 
//       <BoxCategory onClick={() => { setCategory("Acessórios"); history.push("/products/accessories");}}>
//         <MdMouse color="#FFFFFF" size="20"/>
//         <span>Acessórios</span>
//       </BoxCategory>  
// </NavbarComponent>
// );