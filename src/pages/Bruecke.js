import React from 'react';
import '../styles/bruecke.css';
import brueckeImage from '../res/bruecke.png';
import { Helmet } from 'react-helmet';



function Bruecke(){
    return (
        
        <div className="bruecke-container"> {/* Wrap the entire content */}

            <Helmet>
                <title>Brücke</title>
            </Helmet>
        

            <div className="topBarBruecke">
            
                
            
            </div>

            <div className="contentContainerBruecke">
                <div className="imageAreaBruecke">
                        <img src={brueckeImage} alt="Brücke" />
                </div> 

                <div className="contentBruecke">
                        <span className='brueckeTitle'>Brücke</span>
                        <span className='brueckeDate'>- 01.09.2023 -</span>
                        <br></br>
                        

                        <span className="brueckeMainContent">

max und ich haben uns entschlossen, dass eine brücke positiv konnotiert ist, während ein tor negativ konnotiert ist. abgesehen von der architektonischen bedeutung lässt sich eine brücke auf metaphorischer ebene als ein portal zwischen zwei zuständen beschreiben. der eigene zustand hat immer eine zu sich gehörende brücke, welche sie mit anderen zuständen verbindet. dadurch ist ein zustand immer ein eigener zustand, aber auch immer eine brücke für einen anderen zustand. auch zähne können brücken haben. auch zähne können brücken sein, indem sie das verbindungsstück zwischen der "außenwelt" und dem "hals" (?) sind. <br></br><br></br>timo sagt später bestimmt auch noch etwas zu brücken, allerdings ist er aktuell noch zu sehr mit mathe beschäftigt. das sollte ich wahrscheinlich auch machen, allerdings sitze ich abends immer noch sehr lange in der bibliothek, was das wahrscheinlich (hoffentlich) wieder ausgleicht. mehr dazu in der unikachel. <br></br><br></br>hamburg hat, glaube ich, sogar super viele brücken, mir wurde mal gesagt, sogar mehr als venedig (was ich nicht glaube). und selbst wenn: was bringen einem die ganzen brücken, wenn alle scheiße aussehen. die brücke zwischen eppendorf und winterhude ist zwar ganz nett, allerdings fahren da halt andauernd autos lang. auf dem campus haben wir, glaube ich, auch ein paar brücken, die über so einen winzigen teich gehen. zur verteidigung muss ich aber sagen, dass unser campus wirklich hübsch ist. das lässt einen fast schon wieder vergessen, in was für einem hässlichen loch man sich gerade befindet. ich finde brücken eigentlich echt mega süß, aber irgendwie haben fast alle mittlerweile ihren charme verloren. ich meine was ist mit den ganzen kleinen brücken passiert die in irgendnem wald über einen kleinen fluss führen oder so? das ist zumindest die erste assoziation, die ich bei brücken im kopf habe. <br></br><br></br> als ich in prag war habe ich eine riesige brücke gesehen, die gefühlt über die halbe stadt verlief. ich google das gleich nochmal, ob die tatsächlich so groß war, aber mein internet ist gerade (mal wieder) weg. sozusagen "fehlt" also eine brücke zwischen dem server und meinem gerät (haha). aber eigentlich ein spannendes thema, weil sich gewisse zustände in jedem fall nur in eine bestimmte richtung verändern müssen, damit eine brücke entsteht oder aber auch wegbricht. wenn ich jetzt zu max sagen würde, dass er ein dummes stück scheiße ist, würde er mich wahrscheinlich komisch angucken, fragen wieso (worauf ich keine antwort hätte) und dann wieder beleidigt auf sein macbook schauen. würde das unser verhältnis nachhaltig beeinflussen? wahrscheinlich nicht. habe ich genau das gerade gesagt? ja. hat er genau das gemacht, was ich erwartet habe? fast. er hat "du auch" geantwortet. 


                        </span>



                </div>
            </div>
            
        </div>
    );
};

export default Bruecke;
