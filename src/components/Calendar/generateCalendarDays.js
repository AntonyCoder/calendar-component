export default function generateCalendarDays(date) {
    const dayInMonth = date.daysInMonth();
    const firstDayOfWeek = date.startOf('month').day();

    // Предыдущий месяц
    const prevMonthDate = date.subtract(1, 'month');
    const daysInPrevMonth = prevMonthDate.daysInMonth();

    //Дни предыдущего месяца для первой недели
    const prevMonthDays = [];
    for (let i = daysInPrevMonth - firstDayOfWeek + 2; i <= daysInPrevMonth; i++) {
        prevMonthDays.push({
            number: i,
            isCurrentMonth: false,
        });
    }

    //Дни текущего месяца
    const currentMonthDays = [];
    for (let i = 1; i <= dayInMonth; i++) {
        currentMonthDays.push({
            number: i,
            isCurrentMonth: true,

        });
    }

    //Дни следующего месяца для заполнения последней недели
    const totalCells = prevMonthDays.length + currentMonthDays.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    const nextMonthDays = [];
    for (let i = 1; i <= remainingCells; i++) {
        nextMonthDays.push({
            number: i,
            isCurrentMonth: false,
        });
    }

    //Итоговый массив всех дней
    const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
        weeks.push(allDays.slice(i, i + 7))
    }

    return weeks;
}