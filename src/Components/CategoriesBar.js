import { 
  NavbarComponent, 
  BoxCategory} 
from "../Styles/styleCategoriesBar"
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
    return (
      <NavbarComponent>
        <BoxCategory>
          <MdLaptopChromebook color="#FFFFFF" size="20" />
          <span>Notebooks</span>
        </BoxCategory>  
        <BoxCategory>
          <MdOutlineDesktopWindows color="#FFFFFF" size="20" />              
          <span>Computadores</span>
        </BoxCategory>   
        <BoxCategory>
          <MdLocalPrintshop color="#FFFFFF" size="20"/>
          <span>Impressoras</span>
        </BoxCategory>  
        <BoxCategory>
          <MdOutlineSmartphone color="#FFFFFF" size="20" />
          <span>Smarthphones</span>
        </BoxCategory> 
        <BoxCategory>
          <MdOutlineTabletAndroid color="#FFFFFF" size="20"/>
          <span>Tablets</span>
        </BoxCategory>  
        <BoxCategory>
          <MdVideogameAsset color="#FFFFFF" size="20"/>
          <span>Games</span>
        </BoxCategory> 
        <BoxCategory>
          <MdMouse color="#FFFFFF" size="20"/>
          <span>Acessórios</span>
      </BoxCategory>         
    </NavbarComponent>
    );
}

export default CategoriesBar;