export default function HelloWorld(){
    const propsUserCard = {
        nama: "Naruto",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello Bosku</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <Usercard
                nama="Aldo"
                nim="2355301013"
                tanggal={new Date().toLocaleDateString()}
                />
            <Usercard {...propsUserCard}/>
            <img className="logo" src="img/paris.jpg" alt="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi Macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function Usercard(props){
   return (
    <div>
        <hr/>
        <h3>Nama: {props.nama}</h3>
        <p>NIM: {props.nim}</p>
        <p>Tanggal: {props.tanggal}</p>
    </div>
   ) 
}