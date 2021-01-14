const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState=0;
var state = 0

var bgI,bg,bgI2;

//buttons...............................................
var setting,settingI,for1,forward,forwardI,backward,backwardI;
var sound,soundI,music,musicI,info,infoI,mark,markI;
var sound2,soundI2,music2,musicI2;

//countries...............................................................................
var bang,bangI,china,chinaI,india,indiaI,korea,koreaI,pak,pakI,sri,sriI,usa,usaI,eng,engI;

//logo.......
var angI,ang;

//characters................................................................................................................................................
var shin,shinI,chan,chanI,doraemon,doraemonI,nobi,nobiI,nobita,nobitaI,player1,player1I,player2,player2I,player3,player3I,player4,player4I,player5,player5I;

//levels.....................................
var norf,norf1,norf2,norf3,norf4,norfI;
var bricf,bricf1,bricf2,bricf3,bricf4,bricfI;
var silf,silf1,silf2,silf3,silf4,silfI
var golf,golf1,golf2,golf3,golf4,golfI;

//footballs..........................................
var football,bricFootball,silFootball,goldenFootball;

var goal,goalImage;

function preload() {
    //background...................................
    bgI = loadImage("stadiums/s2.jpg");
    bgI2 = loadImage("stadiums/changing room.jpg");

    //buttons..............................
    settingI = loadImage("buttons/b1.png");
    forwardI=loadImage("buttons/a2.png");
    backwardI = loadImage("buttons/a1.png");
    soundI = loadImage("buttons/s1.png");
    musicI = loadImage("buttons/m1.png");
    infoI = loadImage("buttons/Info.png");
    markI = loadImage("buttons/mark.png")
    soundI2 = loadImage("buttons/s2.png");
    musicI2 = loadImage("buttons/m2.png");

    //logo.................................
    angI = loadImage("stadiums/start.png");

    //countries...............................
    bangI = loadImage("flags/Bangladesh.png");
    chinaI = loadImage("flags/China.png");
    indiaI = loadImage("flags/India.png");
    koreaI = loadImage("flags/Korea.png");
    pakI = loadImage("flags/Pak.png");
    sriI = loadImage("flags/Sri Lanka.png");
    usaI = loadImage("flags/USA.png");
    engI = loadImage("flags/England.png")

    //characters.................................
    shinI = loadImage("playingObj/C1/c1.1.png");
    chanI = loadImage("playingObj/C2/c2.1.png");
    doraemonI = loadImage("playingObj/C3/c3.1.png");
    nobiI = loadImage("playingObj/C4/c4.1.png");
    nobitaI = loadImage("playingObj/C5/c5.1.png");
    player1I=loadImage("playingObj/C6/c6.1.png")
    player2I = loadImage("playingObj/C7/c7.1.png");
    player3I = loadImage("playingObj/C8/c8.1.png");
    player4I = loadImage("playingObj/C9/c9.1.png");
    player5I = loadImage("playingObj/C10/c10.1.png");

    //footballs.....................................
    norfI = loadImage("footballs/F.png")
    bricfI = loadImage("footballs/BF.png")
    silfI = loadImage("footballs/SF.png")
    golfI = loadImage("footballs/GF.png")

    goalImage=loadImage("playingObj/GP.png")
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-40);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(displayWidth/2,displayHeight/2,displayWidth*100,displayHeight*100)
    bg.addImage("bg",bgI);
    bg.velocityX=-2
    bg.scale =3.5
    bgI.scale = 2

    //logo...........................................................
    ang = createSprite(displayWidth/2-500,displayHeight/2+100,50,50);
    ang.addImage("ang",angI);
    ang.scale = 1;
    ang.visible = false;

    //buuttons........................................................
    setting = createSprite(displayWidth/2+500,displayHeight/2+300,50,50)
    setting.addImage("setting",settingI);
    setting.scale = 0.1
    setting.visible = false;
    
    forward= createSprite(displayWidth/2+750,displayHeight/2+300,50,50)
    forward.addImage("forward",forwardI);
    forward.scale=0.3;
    forward.visible = false;

    for1 = createSprite(displayWidth/2+850,displayHeight/2+400,50,50)
    for1.addImage("for1",forwardI);
    for1.scale=0.15;
    for1.visible = false;

    backward=createSprite(displayWidth/25,displayHeight/20,50,50);
    backward.addImage("backward",backwardI);
    backward.scale=0.15;
    backward.visible = false;

    back=createSprite(displayWidth/25,displayHeight/8,50,50);
    back.addImage("backward",backwardI);
    back.scale=0.15;
    back.visible = false;

    sound = createSprite(displayWidth/2-180,displayHeight/2-100,50,50);
    sound.addImage("sound",soundI);
    sound.visible=false;
    sound.scale = 0.08;

    sound2 = createSprite(displayWidth/2-180,displayHeight/2-100,50,50)
    sound2.addImage("sound2",soundI2);
    sound2.visible=false;
    sound2.scale = 0.15

    music=createSprite(displayWidth/2+20,displayHeight/2-100,50,50);
    music.addImage("music",musicI);
    music.visible=false;
    music.scale=0.25;  
    
    music2 = createSprite(displayWidth/2+20,displayHeight/2-100,50,50)
    music2.addImage("music2",musicI2)
    music2.visible=false;
    music2.scale = 0.25

    info=createSprite(displayWidth/2+240,displayHeight/2-100,50,50);
    info.addImage("info",infoI);
    info.visible=false;
    info.scale=0.09;  
    
    mark = createSprite(displayWidth/2+320,displayHeight/2+50,50,50);
    mark.addImage("mark",markI);
    mark.visible=false;
    mark.scale = 0.3;

    //countries...............................................
    bang = createSprite(displayWidth/4-100,displayHeight/6,0,0);
    bang.addImage("bang",bangI);
    bang.scale = 0.27;

    china = createSprite(displayWidth/2-150,displayHeight/6,0,0);
    china.addImage("china",chinaI);
    china.scale = 0.21;

    india = createSprite(displayWidth/2+300,displayHeight/6,0,0);
    india.addImage("india",indiaI);
    india.scale = 0.25;

    korea = createSprite(displayWidth/2+750,displayHeight/6,0,0);
    korea.addImage("korea",koreaI);
    korea.scale = 0.32;

    pak = createSprite(displayWidth/4-100,displayHeight/3+100,0,0);
    pak.addImage("pak",pakI);
    pak.scale = 0.17;

    sri = createSprite(displayWidth/2+300,displayHeight/3+100,0,0);
    sri.addImage("sri",sriI);
    sri.scale = 0.18;

    eng = createSprite(displayWidth/2-150,displayHeight/3+100,0,50);
    eng.addImage("eng",engI);
    eng.scale = 0.13;

    usa = createSprite(displayWidth/2+750,displayHeight/3+100,0,50);
    usa.addImage("usa",usaI);
    usa.scale = 0.15;

    //characters.....................................................
    shin = createSprite(displayWidth/8,displayHeight/3+450,0,50);
    shin.addImage("shin",shinI);
    shin.scale = 1.5;

    chan = createSprite(displayWidth/4+200,displayHeight/3+430,0,50);
    chan.addImage("chan",chanI);
    chan.scale = 4;

    doraemon = createSprite(displayWidth/3+750,displayHeight/3+430,0,50);
    doraemon.addImage("doraemon",doraemonI);
    doraemon.scale = 1.5;

    nobi= createSprite(displayWidth/4+500,displayHeight/3+430,0,50);
    nobi.addImage("nobi",nobiI);
    nobi.scale = 3.82;

    nobita = createSprite(displayWidth/2+750,displayHeight/3+440,0,50);
    nobita.addImage("nobita",nobitaI);
    nobita.scale =0.7; 

    //levels..............................................................
    norf = createSprite(displayWidth/2-600,displayHeight/2-350,0,50);
    norf.addImage("norf",norfI);
    norf.scale =0.05; 
    
    norf1 = createSprite(displayWidth/2-300,displayHeight/2-350,0,50);
    norf1.addImage("norf1",norfI);
    norf1.scale =0.05; 

    norf2 = createSprite(displayWidth/2,displayHeight/2-350,0,50);
    norf2.addImage("norf2",norfI);
    norf2.scale =0.05; 

    norf3 = createSprite(displayWidth/2+300,displayHeight/2-350,0,50);
    norf3.addImage("norf3",norfI);
    norf3.scale =0.05; 

    norf4 = createSprite(displayWidth/2+600,displayHeight/2-350,0,50);
    norf4.addImage("norf4",norfI);
    norf4.scale =0.05; 

    bricf = createSprite(displayWidth/2-600,displayHeight/2-150,0,50);
    bricf.addImage("bricf",bricfI);
    bricf.scale =0.15; 
    
    bricf1 = createSprite(displayWidth/2-300,displayHeight/2-150,0,50);
    bricf1.addImage("bricf1",bricfI);
    bricf1.scale =0.15; 

    bricf2 = createSprite(displayWidth/2,displayHeight/2-150,0,50);
    bricf2.addImage("bricf2",bricfI);
    bricf2.scale =0.15; 

    bricf3 = createSprite(displayWidth/2+300,displayHeight/2-150,0,50);
    bricf3.addImage("bricf3",bricfI);
    bricf3.scale =0.15; 

    bricf4 = createSprite(displayWidth/2+600,displayHeight/2-150,0,50);
    bricf4.addImage("bricf4",bricfI);
    bricf4.scale =0.15; 
    
    //footballs....................................
    

}

function draw(){ 

    Engine.update(engine);

    if(bg.x<displayWidth/2-150){
        bg.x=bg.width/2+500
    }

    //gameState=0
    if(gameState === 0){
        background(bgI)

        strokeWeight(18)
        stroke("blue")
        fill("lightBlue");
        textFont("pristina")
        textStyle(BOLD)
        textSize(200)
        text("!!Foot - Fighters!!",displayWidth/2-620,displayHeight/6)

        bg.visible = false;

        //flags
       
        bang.visible = false;
        china.visible = false;
        india.visible = false;
        korea.visible = false;
        pak.visible = false;
        sri.visible = false;
        usa.visible = false;
        eng.visible = false;

        //characters
        shin.visible = false;
        chan.visible = false;
        doraemon.visible = false;
        nobi.visible = false;
        nobita.visible = false;

        //buttons
        for1.visible = false;
        backward.visible = false;
        back.visible = false;

        //logo & buttons
        ang.visible = true;
        setting.visible = true;
        forward.visible = true;
        
        //levels
        norf.visible = false;
        norf1.visible = false;
        norf2.visible = false;
        norf3.visible = false;
        norf4.visible = false;

        bricf.visible = false;
        bricf1.visible = false;
        bricf2.visible = false;
        bricf3.visible = false;
        bricf4.visible = false;

        

        if(mousePressedOver(setting)){
        sound.visible = true;
        music.visible = true;
        mark.visible = true;
        info.visible = true;
        }

        if(mousePressedOver(info)){

        }

        if(mousePressedOver(mark)){
            sound.visible = false;
            music.visible = false;
            mark.visible = false;
            info.visible = false;
        }

        if(mousePressedOver(forward) ){
            gameState = 1
        }
    }

    //gameState=1
    if(gameState === 1){
        background(bgI2)
        bg.visible = false;

        strokeWeight(8)
        stroke("white")
        fill("green");
        textFont("pristina")
        textStyle(BOLD)
        textSize(80)
        text("Bangl",displayWidth/2-750,displayHeight/3-30)
        fill("red");
        text("adesh",displayWidth/2-580,displayHeight/3-30)

        fill("red");
        text("Ch",displayWidth/2-250,displayHeight/3-10)
        fill("yellow");
        text("ina",displayWidth/2-165,displayHeight/3-10)

        fill("darkorange");
        text("In",displayWidth/2+220,displayHeight/3-10)
        fill("green");
        text("dia",displayWidth/2+290,displayHeight/3-10)

        fill("darkorange");
        text("In",displayWidth/2+220,displayHeight/3-10)
        fill("green");
        text("dia",displayWidth/2+290,displayHeight/3-10)

        fill("Red");
        text("Ko",displayWidth/2+650,displayHeight/3-10)
        fill("Blue");
        text("rea",displayWidth/2+745,displayHeight/3-10)

        fill("Green");
        text("Pakistan",displayWidth/2-720,displayHeight/2+100);

        fill("Blue");
        text("Eng",displayWidth/2-285,displayHeight/2+100);
        fill("Red");
        text("land",displayWidth/2-165,displayHeight/2+100);

        fill(237,209,10);
        text("Sri ",displayWidth/2+150,displayHeight/2+100)
        fill(120,24,29);
        text("Lanka",displayWidth/2+260,displayHeight/2+100)

        
        fill("Red");
        text("Ame",displayWidth/2+605,displayHeight/2+100)
        fill("Blue");
        text("rica",displayWidth/2+745,displayHeight/2+100)
        

        ang.visible = false;
        setting.visible = false;
        forward.visible = false; 
        back.visible = false;  
        
        backward.visible = true;
        for1.visible = true;
        
        bang.visible = true;
        china.visible = true;
        india.visible = true;
        korea.visible = true;
        pak.visible = true;
        sri.visible = true;
        usa.visible = true;
        eng.visible = true;

        if(mousePressedOver(backward) ){
            gameState = 0;
        }

        if(mousePressedOver(bang) || mousePressedOver(china) || mousePressedOver(india) || mousePressedOver(korea)){
            shin.visible = true;
            chan.visible = true;
            doraemon.visible = true;
            nobi.visible = true;
            nobita.visible = true;
            var rand = Math.round(random(shin,chan,doraemon,nobi,nobita));
         
         }
        

        if(mousePressedOver(pak) || mousePressedOver(eng)|| mousePressedOver(usa)|| mousePressedOver(sri)){

        }

        if(mousePressedOver(for1) ){
            gameState = 2;
        }


    }

    if(gameState === 2){
     
        bg.visible = true;

        //buttons
        backward.visible = false;

        back.visible = false;
        for1.visible = false;

        //flags
        bang.visible = false;
        china.visible = false;
        india.visible = false;
        korea.visible = false;
        pak.visible = false;
        sri.visible = false;
        usa.visible = false;
        eng.visible = false;

        //characters
        shin.visible = false;
        chan.visible = false;
        doraemon.visible = false;
        nobi.visible = false;
        nobita.visible = false;

        //levels
        norf.visible = false;
        norf1.visible = false;
        norf2.visible = false;
        norf3.visible = false;
        norf4.visible = false;

        bricf.visible = false;
        bricf1.visible = false;
        bricf2.visible = false;
        bricf3.visible = false;
        bricf4.visible = false;

        



    }




    drawSprites();

}

