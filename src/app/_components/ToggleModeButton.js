import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function ToggleMode({ bodyRef }) {
  const toggleMode = e => {
    e.preventDefault()
    bodyRef?.current?.classList?.toggle('dark');
    e.currentTarget?.dark?.classList?.toggle("hidden");
    e.currentTarget?.light?.classList?.toggle("hidden");

  }
  return (
    <form className="h-[70%] max-h-[45px] aspect-square mx-auto mt-4 md:my-0 md:mx-4 rounded-full cursor-pointer bg-white dark:bg-inherit hover:bg-gray-200 dark:hover:bg-gray-400/30 flex items-center justify-center shadow-[0_0_2px_gray_inset] overflow-hidden" onSubmit={toggleMode}>
      <button className="h-full w-full hidden text-[1.37rem] text-white" name='dark'>
        <FontAwesomeIcon icon={faSun} className=''/>
      </button>
      <button className="h-full w-full text-[1.5rem] text-gray-700/95" name='light'>
        <FontAwesomeIcon icon={faMoon} className='' />
      </button>
    </form>
  )
}
