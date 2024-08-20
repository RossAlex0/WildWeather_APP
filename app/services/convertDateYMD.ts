export default function( setter: any ){
    const date = new Date()
    const year = date.getFullYear() 
    const month = date.getMonth() + 1
    const day = date.getDate()
    const YYYY_MM_DD = `${year}-${month}-${day}`
    setter(YYYY_MM_DD)
}