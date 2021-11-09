import { Link } from "react-router-dom";
import { 
  NavbarComponent, 
  BoxCategory
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
    return (
      <NavbarComponent>
        <Link to="/notebooks" >
          <BoxCategory>
            <MdLaptopChromebook color="#FFFFFF" size="20" />
            <span>Notebooks</span>
          </BoxCategory> 
        </Link>
        <Link to="/computadores"> 
          <BoxCategory>
            <MdOutlineDesktopWindows color="#FFFFFF" size="20" />              
            <span>Computadores</span>
          </BoxCategory> 
        </Link>
        <Link to="/impressoras">  
          <BoxCategory>
            <MdLocalPrintshop color="#FFFFFF" size="20"/>
            <span>Impressoras</span>
          </BoxCategory> 
        </Link> 
        <Link to="/smarthphones">
          <BoxCategory>
            <MdOutlineSmartphone color="#FFFFFF" size="20" />
            <span>Smarthphones</span>
          </BoxCategory> 
        </Link>
        <Link to="/tablets">
          <BoxCategory>
            <MdOutlineTabletAndroid color="#FFFFFF" size="20"/>
            <span>Tablets</span>
          </BoxCategory> 
        </Link> 
        <Link to="/videogames">
          <BoxCategory>
            <MdVideogameAsset color="#FFFFFF" size="20"/>
            <span>Games</span>
          </BoxCategory> 
        </Link>
        <Link to="/acessorios">
          <BoxCategory>
            <MdMouse color="#FFFFFF" size="20"/>
            <span>Acessórios</span>
          </BoxCategory>  
        </Link>       
    </NavbarComponent>
    );
}

export default CategoriesBar;