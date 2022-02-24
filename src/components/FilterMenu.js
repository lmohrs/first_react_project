//import React, {useMemo, useState} from 'react'
// import {Link} from 'react-router-dom'
// import Logo from '../logo.svg'
// import {DropDownMenu} from "material-ui";
// import { DropDownList } from "react"
// import '../styles/FilterMenu.css'
import { CocktailList } from '../helpers/CocktailList'
// import ReorderIcon from '@material-ui/icons/Reorder'

// function FilterMenu(props) {
//     const [openMenu, setOpenMenu] = useState(false)
//
//     const toggleFilter = () => {
//         setOpenMenu(!openMenu)
//     }
//     return (
//         <DropDownMenu className="dropDownMenu-Filter">
//             <Link to="/"> Home </Link>
//             <Link to="/vodka"> Vodka </Link>
//         </DropDownMenu>
//     )
// }

// export const CocktailDropDownList = () => {
//     const [category, setCategory] = useState("all")
//
//     for (let i = 0; i < CocktailList.length; i++) {
//         console.log(CocktailList[i])
//     }
//     const filteredData = useMemo(() => {
//         if (!category || category === "all") return CocktailList;
//
//         return CocktailList
//     })
// }

function test() {
    for (let i = 0; i < CocktailList.length; i++) {
        console.log(CocktailList[i])
    }
}

test()