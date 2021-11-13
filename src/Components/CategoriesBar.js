import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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