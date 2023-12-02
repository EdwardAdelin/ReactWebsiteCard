import './Header.css'
function Header(){
return (
<header>
    <h1>Learning React - topic</h1>
    <div className="navBar">
    <nav>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
    </ul>
    </nav>
    </div>
    <hr />
</header>
);
}
export default Header;