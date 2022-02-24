import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from "react";
import '../styles/Cocktails.css'
import {CocktailList} from "../helpers/CocktailList";
import CocktailItem from "../components/CocktailItem";
import FilterMenu from '../components/FilterMenu'
import LongIsland from '../assets/Long_Island.jpg'

function Cocktails() {

    const [filter, setFilter] = useState("All");
    const [filterButtonText, setFilterButtonText] = useState("All")

    const handleFilter = () => {

        if (filter === "All") {
            setFilter("Vodka")
            setFilterButtonText("Vodka")
        }
        if (filter === "Vodka") {
            setFilter("All")
            setFilterButtonText("All")
        }
    };

    return (
        <div className="cocktails">
            <div className="headerContainer">
                <h1>Cocktails</h1>
            </div>
            <div className="dropdown-Menu">
                <button className="filter-Button" onClick={handleFilter}>{filterButtonText}</button>
            </div>
            <div className="cocktailList">
                {CocktailList.map((cocktailItem, key) => {
                   // console.log(cocktailItem.alcohol.indexOf("Vodka", 0))
                    // console.log(filter)

                    switch (filter){

                    }
                    if (filter === "All") {
                        console.log(filter)
                        return (
                            <CocktailItem
                                key={key}
                                image={cocktailItem.image}
                                name={cocktailItem.name}
                                ingredients={cocktailItem.ingredients}
                            />
                        )
                   } else if (filter === "Vodka") {
                       if (cocktailItem.alcohol.indexOf("Vodka", 0) !== -1) {
                           return (
                           <CocktailItem
                               key={key}
                               image={cocktailItem.image}
                               name={cocktailItem.name}
                               ingredients={cocktailItem.ingredients}
                           />
                           )
                       }
                   }
                })}
            </div>
        </div>
    );
}

export default Cocktails