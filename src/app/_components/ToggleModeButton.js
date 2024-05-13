import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ToggleModeButton() {
    const toggleMode = e => {
        document.querySelector('#dark').classList.toggle('hidden');
        document.querySelector('#light').classList.toggle('hidden');
        document.body.classList.toggle('dark');
    }
  return (
    <div className='cursor-pointer *:rounded-full flex items-center justify-center h-8 w-8 mx-auto py-8 lg:py-0 lg:ml-4' onClick={toggleMode}>
      <FontAwesomeIcon icon={faSun} className='p-2 bg-gray-600 text-lg text-white hover:scale-110' id='dark'/>
      <FontAwesomeIcon icon={faMoon} className='text-slate-700 bg-gray-300 text-lg py-[6px] px-[8.5px] hover:scale-110 hidden' id='light'/>
    </div>
  )
}
