import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { TimeLineData } from '../constants/constants';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Mypic } from '../components/mypic';


const Home = () => {
  const style={
    "display":'flex',
    "padding":'10px'
    

     

  }
  return (
    <Layout>
       {/* <Section grid>  */}
      
         <div style={style}>
        <Hero />
        <Mypic/>
        </div>  
          
       {/* </Section>  */}

       
      
      <Projects/>
      
     
     
     
     
      <Technologies />
      <Timeline/>
      

      <Acomplishments />
    </Layout>
  );
};

export default Home;
