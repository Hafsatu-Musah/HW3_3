function NavItem(props) {
    return (
        <a href="#" className={props.classItem}>
            {props.text}
        </a>
    );
}
function WallPaper(props) {
    return (
        <article className="wallpaper">
            <img src={props.img} alt="Wallpaper #1" className="wallpaper" />
        </article>
    );
}

function Searchform(props) {
    return (
        <form action="">
            <input type="search" placeholder="Search" value={props.value} onChange={props.onChange} />
        </form>
    );
}


function App() {

    const [navData, setNavData] = React.useState([
        { id: 1, text: "Hulk", classItem: "" },
        { id: 2, text: "Mavel", classItem: "logo is-active" },
        { id: 3, text: "Venom", classItem: "" }
    ]);

    const [wallData, setWallData] = React.useState([
        { id: 1, img: "./img/venom-1.jpg" },
        { id: 2, img: "./img/hulk-1.jpg" },
        { id: 3, img: "./img/venom-2.jpg" }
    ]);
    const [value, setValue] = React.useState("");
    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <React.Fragment>
            {/*Navbar */}
            <nav className="navbar">
                <div className="container">
                    {navData.map(item => <NavItem key={item.id} text={item.text} classItem={item.classItem} />)}
                </div>
            </nav>

            {/* Introductory Content  */}
            <header className="header">
                <div className="container">
                    <h1 className="title">Mavel's Fearless</h1>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                        molestias earum eveniet.
                    </p>
                    <div className="search-bar">
                        <Searchform value={value} onChange={onChange} />
                    </div>
                    {/* Sample Wallpaper */}
                    <div className="sample-wallpaper">
                        {wallData.map(item => <WallPaper key={item.id} img={item.img} />)}
                    </div>
                </div>
            </header>

        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root"));
