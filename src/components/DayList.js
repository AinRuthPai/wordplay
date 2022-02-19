import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./DayList.css";
import dummy from "../db/data.json";

function DayList() {
  console.log(dummy);
  const days = useFetch("http://localhost:3000/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className='list_day'>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DayList;
