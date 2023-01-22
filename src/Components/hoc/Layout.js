import SearchInputField from "../SearchInputField/SearchInputField";
import Drawer from "../Drawer/Drawer";
const Layout = ({ children }) => {
  return (
    <div>
      <SearchInputField />
      <div className="flex ">
        <Drawer />
        {children}
      </div>
    </div>
  );
};
export default Layout;
