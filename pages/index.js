import Content from './content'
import DateBrowser from './date-browser'

export default function Home() {
    return (
        <div className="h-screen w-screen flex flex-col">        
            <div className="flex-1 bg-amber-50"><Content /></div>
            <div className="h-32 bg-emerald-50"><DateBrowser /></div>
        </div>
    )
}