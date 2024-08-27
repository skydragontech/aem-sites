import closeSvg from '../../../../assets/images/close.svg'
import {useState} from "react";
import {Box, Collapse} from "@mui/material";
import renaultTruck from "../../../../assets/images/renault-truck.png"
const itemRenderer = (item, options) => {
    return <li className="we-mega-menu-li dropdown-menu" key={item.id}>
        <a href="#" className="we-megamenu-nolink" title={item.title}>{item.title}</a>
        {item.length > 0 && <SubmenuItemTemplate item={item.children}/>}
    </li>
};

export function MegaMenuItemTemplate(props) {

    return <ul className="we-mega-menu-ul nav nav-tabs" style={{backgroundColor: 'white'}}>
        <SubItem items={props.items}/>
    </ul>;

}

const SubItem = ({items}) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return <>{[...items].map((item) => {
        return <li className="we-mega-menu-li dropdown-menu" key={item.id} onClick={handleChange}>
            <a href="#" className="we-megamenu-nolink" title={item.title}>{item.title}</a>
            {item.children.length > 0 && <Box><Collapse orientation="horizontal" in={checked}><SubmenuItemTemplate
                item={item.children}/></Collapse></Box>}
        </li>;
    })}</>
}

const SubmenuItemTemplate = (items) => {
    return <div className="we-mega-menu-submenu">
        <div className="we-mega-menu-submenu-inner">
            <div className="we-mega-menu-row">
                <span className="submenu-title">
                    Trucks Range
                    <button className="close-menu" type="button">
                        <img src={closeSvg} alt={""}/>
                    </button>
                </span>
                <div className="we-mega-menu-col span4">
                    <ul className={"nav nav-tabs subul"}>
                        <li className="we-mega-menu-li dropdown-menu has-img">
                            <div className={"menu-image-wrapper"}>
                                <img src={renaultTruck} alt=""/>
                            </div>
                            <a href="#" className="we-megamenu-nolink" title="Renault Trucks E-Tech range">
                                Renault Trucks E-Tech</a>
                            <div className={"we-mega-menu-submenu"}>
                                <div className={"we-mega-menu-submenu-inner"}>
                                    <div className={"we-mega-menu-row"}>
                                        <div className={"we-mega-menu-col span12"}>
                                            <ul className={"nav nav-tabs subul"}>
                                                {[...items.item].map((item) => {
                                                    return <li className="we-mega-menu-li" key={item.id}>
                                                        <a className={"we-mega-menu-li with-0-children"}
                                                           title={item.title} href={item.href}
                                                           target="_self">{item.title}</a>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="we-mega-menu-col span4">
                    <ul className={"nav nav-tabs subul"}>
                        <li className="we-mega-menu-li dropdown-menu has-img">
                            <div className={"menu-image-wrapper"}>
                                <img src={renaultTruck} alt=""/>
                            </div>
                            <a href="#" className="we-megamenu-nolink" title="Renault Trucks E-Tech range">
                                Renault Trucks E-Tech</a>
                            <div className={"we-mega-menu-submenu"}>
                                <div className={"we-mega-menu-submenu-inner"}>
                                    <div className={"we-mega-menu-row"}>
                                        <div className={"we-mega-menu-col span12"}>
                                            <ul className={"nav nav-tabs subul"}>
                                                {[...items.item].map((item) => {
                                                    return <li className="we-mega-menu-li" key={item.id}>
                                                        <a className={"we-mega-menu-li with-0-children"}
                                                           title={item.title} href={item.href}
                                                           target="_self">{item.title}</a>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="we-mega-menu-col span4">
                    <ul className={"nav nav-tabs subul"}>
                        <li className="we-mega-menu-li dropdown-menu has-img">
                            <div className={"menu-image-wrapper"}>
                                <img src={renaultTruck} alt=""/>
                            </div>
                            <a href="#" className="we-megamenu-nolink" title="Renault Trucks E-Tech range">
                                Renault Trucks E-Tech</a>
                            <div className={"we-mega-menu-submenu"}>
                                <div className={"we-mega-menu-submenu-inner"}>
                                    <div className={"we-mega-menu-row"}>
                                        <div className={"we-mega-menu-col span12"}>
                                            <ul className={"nav nav-tabs subul"}>
                                                {[...items.item].map((item) => {
                                                    return <li className="we-mega-menu-li" key={item.id}>
                                                        <a className={"we-mega-menu-li with-0-children"}
                                                           title={item.title} href={item.href}
                                                           target="_self">{item.title}</a>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}
