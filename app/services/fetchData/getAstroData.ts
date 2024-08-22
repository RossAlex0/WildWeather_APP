import axios from "axios";

import { AstroInterface } from "../../types/interfaces/astronomyInterfaces";

export default function getAstroData(date : string): Promise<AstroInterface>{
    return axios
    .get(`https://aa.usno.navy.mil/api/moon/phases/date?date=${date}&nump=7`)
    .then((res) => res.data)
    .catch((err) => console.error(err))
}