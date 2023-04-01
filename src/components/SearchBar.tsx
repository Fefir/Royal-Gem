import { VscSearch } from 'react-icons/vsc'
import { useState } from 'react'

function SearchBar () {
    const [isCovered, setIsCovered] = useState<boolean>(true)
    return <>
    <div className="flex items-center justify-center bg-red-400 fixed w-full z-10">
        <div className="flex items-center justify-center -translate-x-full">
            <img src="src/assets/Logo.png" className="w-80 h-24"></img>
        </div>
        <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center bg-white">
                <VscSearch />
                <input type="text" placeholder="Wpisz nazwę produktu"/>
            </div>
            <div className="flex items-center justify-center gap-8 text-2xl">
                <ul className="flex justify-center items-center gap-8">
                    <li onMouseOver={()=>setIsCovered(false)}>Biżuteria</li>
                    <li>Wyroby z kamienia</li>
                    <li>Skamieniałości</li>
                </ul>
            </div>
        </div>
    </div>
    </>
}

export default SearchBar