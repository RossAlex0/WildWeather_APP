import axios from "axios";

export default function getAstroData(date : string){
    return axios
    .get(`https://aa.usno.navy.mil/api/moon/phases/date?date=${date}&nump=12`)
    .then((res) => res)
    .catch((err) => console.error(err))
}