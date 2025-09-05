import generateCalendarDays from "./generateCalendarDays";

function Calendar({ date }) {
    const day = date.format('dddd');
    const dayNum = date.format('D');
    const month = date.format('MMMM');
    const year = date.format('YYYY');

    function Header() {
        return (
            <>
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{day}</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{dayNum}</div>
                        <div className="ui-datepicker-material-month">{month}</div>
                        <div className="ui-datepicker-material-year">{year}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
                    </div>
                </div>
            </>
        )
    }

    function Table() {

        const weeks = generateCalendarDays(date);

        return (
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map(({number, isCurrentMonth}, dayIndex) => (
                                <td key={dayIndex}
                                    className={`${isCurrentMonth ? '' : 'ui-datepicker-other-month'} 
                                            ${number === Number(dayNum) && isCurrentMonth === true ? 'ui-datepicker-today' : ''}`}>
                                    {number}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    return (
        <div className="ui-datepicker">
            <Header />
            <Table />
        </div>
    )
}

export default Calendar