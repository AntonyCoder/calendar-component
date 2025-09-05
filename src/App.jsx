import './App.css';
import Calendar from './components/Calendar/Calendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.locale('ru');
dayjs.extend(customParseFormat)


const App = () => {
  const now = dayjs("05-05-2025", "DD-MM-YYYY");

  return (
    <Calendar date={now} />
  )

}

export default App;
