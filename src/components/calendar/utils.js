export function adjustWeekDayToMondayStart(day) {
    return (day + 6) % 7;
}

export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

export function isBeforeByMonth(cmpDate, refDate) {
    return cmpDate.getMonth() < refDate.getMonth() || cmpDate.getFullYear() < refDate.getFullYear()
}

export function isAfterByMonth(cmpDate, refDate) {
    return cmpDate.getMonth() > refDate.getMonth() || cmpDate.getFullYear() > refDate.getFullYear()
}

export function firstDay(event) {
    const dates = (event.dates || [event.date])
        .map(d => new Date(d))
        .sort((a, b) => a.getTime() - b.getTime());

    return dates[0];
}