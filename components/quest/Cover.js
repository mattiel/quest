import PorgressBar from '../ProgressBar'
import CoverProcess from './CoverProgress'

export default function Cover(props) {
  return (
    <section 
      className="h-72 w-full flex col items-end p-6 relative bg-no-repeat bg-cover bg-center" 
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                          url('https://source.unsplash.com/random')`
      }}
    >
      <div className="flex justify-between w-full items-end">
        <div className="text-3xl font-bold text-white">Life Goals</div>
        <CoverProcess/>
      </div>
    </section>
  )
}