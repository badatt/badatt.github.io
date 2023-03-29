import moment from "moment";

export const calculateExperience = (datOfJoining: string): string => {
    const start = moment(datOfJoining);
    const end   = moment();
    const duration = moment.duration(end.diff(start));
    return `${duration.years()}.${duration.months()} years`;
};