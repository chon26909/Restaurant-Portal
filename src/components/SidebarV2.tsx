import { FC, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Menu {
  name: string;
  submenu?: Menu[];
  collapsed?: boolean;
}

const MENU_DATA = [
  {
    name: "สินค้า",
    submenu: [
      {
        name: "ใหม่",
      },
    ],
  },
  {
    name: "จัดการลูกค้า",
    submenu: [
      {
        name: "ลูกค้าใหม่",
      },
      //   {
      //     name: "ลูกค้าปัจจุบัน",
      //   },
    ],
  },
].map((menu) => {
  return {
    ...menu,
    collapsed: false,
  };
});

const SidebarV2 = () => {
  const Menu: FC = () => {
    const [menus, setMenus] = useState(MENU_DATA);

    const onCollapse = (index: number) => {
      setMenus((menus) => {
        return menus.map((menu, i) =>
          i === index ? { ...menu, collapsed: !menu.collapsed } : menu
        );
      });
    };

    return (
      <>
        {menus.map((item: Menu, index) => {
          return (
            <div key={index}>
              <div
                className="p-5 active:bg-white active:opacity-10 select-none flex justify-between cursor-pointer"
                onClick={() => onCollapse(index)}
              >
                <div>{item.name}</div>
                <div>
                  <FiChevronDown size={25} />
                </div>
              </div>
              <SubMenu submenu={item.submenu} collapsed={item.collapsed} />
            </div>
          );
        })}
      </>
    );
  };

  const SubMenu: FC<{ submenu?: Menu[]; collapsed?: boolean }> = (props) => {
    const isCollapsed = (collapsed?: boolean) =>
      collapsed
        ? "opacity-0 max-h-0 overflow-y-hidden"
        : "opacity-1 max-h-[1000px] overflow-y-auto";

    return (
      <div
        className={[
          "transition-all ease-linear duration-200",
          isCollapsed(props.collapsed),
        ].join(" ")}
      >
        {props.submenu?.map((item: any, index) => {
          return (
            <div
              key={index}
              className="p-3 pl-7 active:bg-white active:opacity-10"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-primary w-[250px] overflow-scroll">
      <Menu />
    </div>
  );
};

export default SidebarV2;
