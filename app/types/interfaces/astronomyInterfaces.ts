interface PhaseData {
    day: number;
    month: number;
    phase: string;
    time: string;
    year: number;
}

interface AstroInterface {
    apiversion: string;
    day: number;
    month: number;
    numphases: number;
    phasedata: PhaseData[];
    year: number;
}

export { AstroInterface, PhaseData }