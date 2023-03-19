import { FC, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface Menu {
    name: string
    submenu?: Menu[]
}

const SidebarV2 = () => {

    const menus = [
        {
            name: "จัดการลูกค้า",
            submenu: [
                {
                    name: "ลูกค้าใหม่"
                },
                {
                    name: "ลูกค้าปัจจุบัน"
                }
            ]
        },
        {
            name: "จัดการลูกค้า",
            submenu: [
                {
                    name: "ลูกค้าใหม่"
                },
                {
                    name: "ลูกค้าปัจจุบัน"
                }
            ]
        }
    ]

    const Menu: FC = () => {
        return <div>
            {menus.map((item: Menu) => {
                return <div>
                    <div className="p-5 active:bg-white active:opacity-10 select-none flex justify-between">
                        <div>{item.name}</div>
                        <div>
                            <FiChevronDown size={25} />
                        </div>
                    </div>
                    <SubMenu submenu={item.submenu} />
                </div>
            })}
        </div>
    }

    const SubMenu: FC<{ submenu?: Menu[] }> = (props) => {
        return <div>
            {props.submenu?.map((item: any) => {
                return <div className="p-3 pl-7">{item.name}</div>
            })}
        </div>
    }


    return (
        <div className="bg-primary w-[250px]">
            <Menu />
        </div>
    )
}

export default SidebarV2
