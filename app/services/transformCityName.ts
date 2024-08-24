export default function cityFromArrondissement(cityName : string): string{
    const deleteSpeChart = cityName.replace(/'/g, " ");
    const breakSentence = deleteSpeChart.split(" ");

    return breakSentence.includes("Arrondissement") ? breakSentence.slice(2).join(" ") : cityName;
};