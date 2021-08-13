import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import './SearchBar.css'

function SearchBar({placeholder, data}) {
    const [searchWord, setSearchWord] = useState('')
    const [filterData, setFilterData] = useState([])

    const handleFilter = (event) => {
        setSearchWord(event.target.value)
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord === ""){
            setFilterData([])
        }else{
        setFilterData(newFilter)
        }
    }

    const clearInput = () => {
        setFilterData([])
        setSearchWord("")
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" value={searchWord} placeholder={placeholder} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filterData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearButton" onClick={clearInput}/>}
                </div>
            </div>
            {
                filterData.length !== 0 &&
                (<div className="dataResults">
                {filterData.slice(0, 15).map((value, key) => {
                    return(
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a className="dataItem" href={value.link} target="_blank">
                           <p>{value.title}</p> 
                        </a>
                    )
                })}
            </div>)
            }
        </div>
    )
}

export default SearchBar
