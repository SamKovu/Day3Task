import React from 'react';
import {useState} from 'react';
import bench from './pics/bench-press.gif';
import squat from './pics/barbell-squat.gif';
import deadlift from './pics/deadlift.gif';
import './App.css';


function App() {
  const [msg,setMsg] = useState("");
  function getInfo(info){
  setMsg(info);
  }

  
  return (
    <div className="App">
        <h1>Top 3 Gym Exercises</h1> 
        <h3>Click The Gifs For More Info</h3>
        <ul className="Order">
        <li><BenchPicture name="BENCH" info={getInfo}/></li>
        <li><SquatPicture name="SQUAT"info={getInfo}/></li>
        <li><DeadLiftPicture name="DEADLIFT" info={getInfo}/></li>
        </ul>
        <div id="infoDIV">
        <h3>INFO</h3>
        <p id="info">{msg}</p>
        </div>
        
    </div>
  );
}


function BenchPicture(props) {

  function handleClick(event) {
    event.preventDefault();   
    props.info("Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.");

  }

  return (
    <div>
    <h3>{props.name} </h3>
    <img src={bench} alt="bench" onClick={handleClick}/>
    </div>
  );
}



function SquatPicture(props) {

  function handleClick(event) {
    event.preventDefault();
    props.info("Beginning Position:  Use the floor-to-shoulder lifting technique described in the Power Clean exercise to move the bar from the floor to the shoulders.  Upward Movement Phase:  Slightly flex the hips and knees, keeping torso erect. Immediately follow with an explosive push upward by extending the knees. Keep torso erect and tensed. At maximum hip and knee extension, shift body weight to balls of feet and extend ankle joints. At maximum plantar flexion, push bar from the shoulders. Push the bar with the arms to a fully extended elbow position overhead.  Downward Movement Phase:  Lower bar to shoulders. Flex hips and knees slightly as bar touches shoulders. Straighten the hips and knees before the upward movement phase begins again.  Breathing:  Exhale through the sticking point of the upward movement phase. Inhale during the downward movement phase.")
  }

  return (
    <div>
     <h3>{props.name}</h3>
    <img src={squat} alt="bench" onClick={handleClick}/>
    </div>
  );
}



function DeadLiftPicture(props) {

  function handleClick(event) {
    event.preventDefault();
    props.info("Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor.");
  }

  return (
    <div>
    <h3>{props.name}</h3>
    <img src={deadlift} alt="bench" onClick={handleClick}/>
    </div>
  );

}

export default App;



