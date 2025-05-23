export default function TailwindCSS(){
    return(
        <div>
            <h1 className="bg-green-100 border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-green-500 text-white
                               px-4 py-2 mx-4 rounded
                               shadow-lg text-align center">Click Me</button>
            <Spacing/>
            <Typography/>
            <BorderRadius/>
            <BackgroundColors/>
            <FlexboxGrid/>
            <ShadowEffects/>
        </div>
    )
}

function Spacing(){
    return (
        <div className="bg-blue shadow-lg p-6 m-4 rounded-lg">
            <h2 className="bg-yellow-100 text-lg font-semibold">Card Title</h2>
            <p className="mt-2 text-yellow-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div>
            <h1 className="text-3xl font-bold text-green-600">Tailwind Typography</h1>
            <p className="text-pink-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-red-500 text-black-500 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-red-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-yellow-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}
