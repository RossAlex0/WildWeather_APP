import dataUtcOffset from "./data/dataUtcOffset.json"

export function convertDateHours(dateAPI : string, codeCountry : string): string{
    // Format : YYYY-MM-DD HH:MM:SS
    const dateLocale = new Date(dateAPI);
    const localHours = dateLocale.getHours();
    const utcOffset = (dataUtcOffset as { [key: string]: number })[codeCountry];
    // + 24 pour s'assurer que le nombre soit bien positif (UTC peut être négatif)
    // % 24 pour s'assurer que le nombre reste dans la plage horaire 0-23
    const hoursWithOffset = (localHours + utcOffset / 60 + 24) % 24;
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
/**
 * Convertit un timestamp Unix en heure locale en fonction du décalage horaire.
 * 
 * @param {number} timestamp - Le timestamp Unix en secondes depuis le 1er janvier 1970 (UTC).
 * @param {number} timeZoneOffset - Le décalage horaire en minutes à appliquer à l'heure UTC.
 * @returns {string} - L'heure locale au format "HH:MM".
 */
export function convertUnixToHours(unixUTC: number, codeCountry: string): string {
    // Convertir le temps Unix UTC de secondes en millisecondes
    const dateUtc = new Date(unixUTC * 1000);
    const utcHours = dateUtc.getUTCHours();
    const utcMinutes = dateUtc.getUTCMinutes();
    const utcOffset = (dataUtcOffset as { [key: string]: number })[codeCountry];
    // Convertir utcHours en minutes, ajouter utcMinutes
    // rajouter au calcul les minutes en fonction du fuseau d'horaire donnés
    const totalMinutes = utcHours * 60 + utcMinutes + utcOffset;
    const localHours = Math.floor(totalMinutes / 60) % 24;
    const localMinutes = totalMinutes % 60;

    const formattedHours = localHours.toString().padStart(2, '0');
    const formattedMinutes = localMinutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}