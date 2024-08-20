import dataUtcOffset from "./data/dataUtcOffset.json"

export function convertDateHours(dateAPI : string, codeCountry : string){
    // Format : YYYY-MM-DD HH:MM:SS
    const dateLocale = new Date(dateAPI);
    // Obtenir l'heure locale, Format : HH
    const hoursLocal = dateLocale.getHours();
    // Utilisation des données en Json pour obtenir UTC(convertie en minutes) grâce au code pays
    const hoursUTC = (dataUtcOffset as { [key: string]: number })[codeCountry];
    // hoursUTC / 60 = converti en heures
    // + 24 pour s'assurer que le nombre soit bien positif (UTC peut être négatif)
    // % 24 pour s'assurer que le nombre reste dans la plage horaire 0-23
    const hoursWithOffset = (hoursLocal + hoursUTC / 60 + 24) % 24;
    return hoursWithOffset.toString().padStart(2, "0");
};
export function convertHourToAPMArray(arrayHours: string[]): string[]{
    return arrayHours.map((h) => {
    const hNumb = parseInt(h); 
    if (12 <= hNumb && hNumb <= 23) {
        return `${hNumb - 12}:PM`;
    } else {
        return `${hNumb}:AM`;
    }
    });
};
export function convertHourToAPM(hours: string): string{
    const hNumb = parseInt(hours); 
    if (12 <= hNumb && hNumb <= 23) {
        return `${hNumb - 12}:PM`;
    } else {
        return `${hNumb}:AM`;
    }
    
};
