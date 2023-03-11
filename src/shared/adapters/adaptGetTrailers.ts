import { iTrailers, iTrailersResultsResponse } from "../../types/trailers.interface"

const adaptGetTrailers = (trailers: any) => {
    const adaptedTrailers: iTrailers[] = trailers.results.map((trailer: iTrailersResultsResponse) => {
        return {
            key: trailer.key
        }
    })

    return adaptedTrailers
}

export default adaptGetTrailers