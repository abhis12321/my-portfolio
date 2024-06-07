import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ToggleModeButton() {
    const toggleMode = e => {
        document.querySelector('#dark').classList.toggle('hidden');
        document.querySelector('#light').classList.toggle('hidden');
        document.body.classList.toggle('dark');
    }
  return (
    <div className='group cursor-pointer md:hover:scale-110 md:rounded-full *:rounded-full flex items-center justify-center mx-auto py-[13px] md:p-[4px] md:ml-[1rem] md:mr-[5px] hover:bg-blue-600/20 dark:hover:bg-gray-400/30 md:hover:ring-2 ring-slate-950 dark:ring-gray-300' onClick={toggleMode}>
      <FontAwesomeIcon icon={faSun} className=' h-4 w-4 bg-gray-700 text-white text-lg p-[7px] group-hover:bg-gray-900' id='dark'/>
      <FontAwesomeIcon icon={faMoon} className=' h-4 w-4 text-slate-700 bg-gray-300 text-lg p-[7px] group-hover:bg-gray-100 hidden' id='light'/>
    </div>
  )
}
