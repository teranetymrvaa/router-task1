import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddBook() {
    const url = "http://localhost:3000/books"
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)

    async function addData() {
        const res = await axios.post(url)
        const data = res.data
        setdata(data)
        setisloading(false)

    }
    useEffect(() => {
        addData()

    }, []);





    return (
        <>
            {isloading ? <h1>Loading...</h1> :
                <form >
                    <input type="text" placeholder='kitab adi daxil et' />
                    <input type="text" placeholder='muellif adi daxil et' />
                    <input type="text" placeholder='sekil url dax et' />
                    <input type="text" placeholder='kitab tipi daxil et' />
                    <input type="text" placeholder='kitab qiymeti daxil et' />
                    <button>Add</button>






                </form>
            }








        </>
    )
}

export default AddBook