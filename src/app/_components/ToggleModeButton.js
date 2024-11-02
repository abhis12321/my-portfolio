import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function ToggleMode({ bodyRef }) {
  const handleToggleMode = (e) => {
    e.preventDefault()
    bodyRef?.current?.classList?.toggle('dark');
    e.currentTarget?.dark?.classList?.toggle("hidden");
    e.currentTarget?.light?.classList?.toggle("hidden");
    axios.get("/api/theme");
  }
  return (
    <form className="w-[46px] aspect-square mx-auto md:mx-4 mt-4 md:my-0 rounded-full cursor-pointer bg-white dark:bg-inherit hover:bg-gray-500 dark:hover:bg-gray-400/30 flex items-center justify-center shadow-[0_0_2px_gray_inset] overflow-hidden text-gray-500 dark:text-white hover:text-white duration-500 hover:ring-1 ring-gray-500 dark:ring-white" onSubmit={handleToggleMode}>
      <button className={`w-full h-full flex items-center justify-center ${!bodyRef?.current?.classList?.contains("dark") && "hidden"}`} name='dark'>
        <FontAwesomeIcon icon={faSun} className='h-[23px]' />
      </button>
      <button className={`w-full h-full flex items-center justify-center ${bodyRef?.current?.classList?.contains("dark") && "hidden"}`} name='light'>
        <FontAwesomeIcon icon={faMoon} className='h-[25px]' />
      </button>
    </form>
  )
}
