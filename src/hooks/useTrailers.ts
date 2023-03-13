import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getTrailers from "../services/api/getTrailers"
import { iTrailers } from "../types/trailers.interface"

const useTrailers = () => {
    const [data, setData] = useState<iTrailers[]>([])
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await getTrailers(Number(id))
            setData(response)
        }
        getData()
    }, [])

    return data
}

export default useTrailers