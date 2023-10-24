import Button from '../components/Button';

const Homepage = () => {
  return <div>
    <h1>Homepage</h1>
    <Button 
      label= "Register now" 
      type = "primary"/>
    <Button 
      label= "Download now" 
      type = "secondary"/>
    <Button 
    label= "Learn more" />
  </div>
}
export default Homepage;