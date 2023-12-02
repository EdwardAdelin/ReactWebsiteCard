import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';
import Button from './Button';
import profilePic1 from './assets/adelin.jpg'
import profilePic2 from './assets/hadasa.jpg'
import List from './List';
function App(){
  return (
    <div>
    <Header></Header>
    <Card name="Adelin" picture='./src/assets/adelin.jpg' description="Best husband ever!"></Card>
    <Card name="Hadasa" picture='./src/assets/hadasa.jpg' description="Best wife ever! "></Card>
    <Button></Button>
    <Food></Food>
    <List></List>
    <Footer></Footer>
    </div>
  )

}
export default App;
