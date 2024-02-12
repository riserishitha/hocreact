import './App.css';
import Count from './components/count';
import PostLiking from './components/likePost(render)';
import ImageLiking from './components/likeImage(render)';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePost/>
        <LikeImage/> */}

        {/*Render props*/}
        <Count render={({increament, onClicking})=>(
          <PostLiking increament = {increament} onClicking={onClicking}/>
        )}/>

        <Count render={({increament, onClicking})=>(
          <ImageLiking increament = {increament} onClicking = {onClicking} />
        )}/>

      </div>
    </div>
  );
}

export default App;
