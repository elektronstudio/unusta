var symbols, symbolsmixed, symbolsmixedA, symbolsmixedB, symbolsmixedC;
var order = 10;
var ngrams = {};
var beginnings = [];
var canvas;
var bcol = 250;
var bcolTarget = 15;
var easing = 0.01;
var timer = 60;
var vibr = 0.5;
var dancingWords = [];

// BROWNIAN MOVEMENT AMOUNT
var bx1 = -1 * vibr
var bx2 = 1 * vibr
var by1 = -1 * vibr
var by2 = 1 * vibr

class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }
  brownian() {
    this.x += random(bx1, bx2);
    this.y += random(by1, by2);
    this.element.position(this.x, this.y);
  }
}

/////////////////
//// PRELOAD ////
/////////////////

function preload() {
  symbols = loadTable('assets/text/symbols.csv');
  symbolsmixedA = loadTable('assets/text/symbolsmixedAeng.csv');
  symbolsmixedB = loadTable('assets/text/symbolsmixedBeng.csv');
  symbolsmixedC = loadTable('assets/text/symbolsmixedC.csv');
  story = loadTable('assets/text/forget.csv');
}

///////////////////////////////
// EVENT COUNTER + FADE BACK //
///////////////////////////////

var clicks = 0;

function addOne() {
  clicks += 1;
  console.log(clicks);
  
  if (timer == 0 && clicks >= 1 && clicks < 10) { bcolTarget; easing = 0.05; timer = 60; }     
  if (timer == 0 && clicks >= 10 && clicks < 20) { bcolTarget; easing = 0.05; timer = 60; }    
  if (timer == 0 && clicks >= 20 && clicks < 30) { bcolTarget; easing = 0.05; timer = 60; }    
  if (timer == 0 && clicks >= 30 && clicks < 40) { bcolTarget; easing = 0.05; timer = 60; }    
  if (timer == 0 && clicks >= 40 && clicks < 50) { bcolTarget; easing = 0.05; timer = 60; }    
  if (timer == 0 && clicks >= 50 && clicks < 60) { bcolTarget; easing = 0.05; timer = 60; }    
  if (timer == 0 && clicks >= 60 && clicks < 70) { bcolTarget; easing = 0.05; timer = 60; }    
  if (timer == 0 && clicks >= 70 && clicks < 80) { bcolTarget; easing = 0.05; timer = 60; }   
  if (timer == 0 && clicks >= 80 && clicks < 90) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 90 && clicks < 100) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 100 && clicks < 110) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 110 && clicks < 120) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 120 && clicks < 130) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 130 && clicks < 140) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 140 && clicks < 150) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 150 && clicks < 160) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 160 && clicks < 170) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 170 && clicks < 180) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 180 && clicks < 190) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 190 && clicks < 200) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 200 && clicks < 210) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 210 && clicks < 220) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 220 && clicks < 230) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 230 && clicks < 240) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 240 && clicks < 250) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 250 && clicks < 260) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 260 && clicks < 270) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 270 && clicks < 280) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 280 && clicks < 290) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 290 && clicks < 300) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 300 && clicks < 305) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 305 && clicks < 310) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 310 && clicks < 315) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 315 && clicks < 320) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 320 && clicks < 325) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 325 && clicks < 330) { bcolTarget; easing = 0.05; timer = 60; }    
    if (timer == 0 && clicks >= 330 && clicks < 335) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 335 && clicks < 340) { bcolTarget; easing = 0.05; timer = 60; }   
    if (timer == 0 && clicks >= 340 && clicks < 345) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 345 && clicks < 350) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 350 && clicks < 355) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 355 && clicks < 360) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 360 && clicks < 365) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 365 && clicks < 370) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 370 && clicks < 375) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 375 && clicks < 380) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 380 && clicks < 385) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 385 && clicks < 390) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 390 && clicks < 395) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 395 && clicks < 400) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 400 && clicks < 405) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 405 && clicks < 410) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 410 && clicks < 415) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 415 && clicks < 420) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 420 && clicks < 425) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 425 && clicks < 430) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 430 && clicks < 435) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 435 && clicks < 440) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 440 && clicks < 445) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 445 && clicks < 450) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 450 && clicks < 455) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 455 && clicks < 460) { bcolTarget; easing = 0.05; timer = 60; }
    if (timer == 0 && clicks >= 460 && clicks < 465) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 465 && clicks < 470) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 470 && clicks < 475) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 475 && clicks < 480) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 480 && clicks < 485) { bcolTarget; easing = 0.05; timer = 60; } 
      if (timer == 0 && clicks >= 485 && clicks < 490) { bcolTarget; easing = 0.05; timer = 60; }  
    if (timer == 0 && clicks >= 490 && clicks < 495) { bcolTarget; easing = 0.05; timer = 60; }
      if (timer == 0 && clicks >= 495 && clicks < 500) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 500 && clicks < 510) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 510 && clicks < 520) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 520 && clicks < 530) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 530 && clicks < 540) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 540 && clicks < 550) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 550 && clicks < 560) { bcolTarget; easing = 0.05; timer = 60; }
  if (timer == 0 && clicks >= 560 && clicks < 570) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 570 && clicks < 580) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 580 && clicks < 590) { bcolTarget; easing = 0.05; timer = 60; }  
  if (timer == 0 && clicks >= 590 && clicks < 600) { bcolTarget; easing = 0.05; timer = 60; }

  ///////////////////////////
  ////// SCENE PRESETS //////
  ///////////////////////////

  if (clicks == 1) { begin(); }
  if (clicks == 2) { titles1(); }
  if (clicks == 3) { forgetA(); }
  if (clicks == 4) { titles2(); }
  if (clicks == 5) { titles3(); }
  if (clicks == 6) { choose(); }

  //---/---/// MENU ///---/---//
  if (clicks == 9) { markov(); choose(); } 
          if (clicks == 1) { clickSND(); }
  if (clicks == 9) { console.log('MENU'); }
          if (clicks == 1) { fmSynth.connect(reverbLong); }        

  //////// A
  //---/---/// Story A1 - 1 ///---/---//

                                 //if (clicks == 11) { tempA(); }    //////TEMP

  if (clicks == 10) { Story(); bcolTarget = 50; easing = 0.05; console.log('Story-A1'); console.log('Story-A'); }
          if (clicks == 10) { fmSynth.triggerAttackRelease(random(29.14, 3729.31), 0.5); fmSynth.volume.value = -30; }
          if (clicks == 10) { noiseSynth.triggerAttackRelease("16n"); noiseSynth.volume.value = -35; } 
  if (clicks == 10) { bcol += 15; }
  if (clicks == 20) { laguneb(); }
  if (clicks == 21) { mureneb(); }
  if (clicks == 28) { munakivi(); }
  if (clicks == 38) { etendus(); }                              
          if (clicks == 29) { presetA1Two(); }
  if (clicks == 41) { bcolTarget = 25; easing = 0.15; }
          if (clicks == 41) { presetA1Three(); }
  if (clicks == 42) { sisse(); } 
          if (clicks == 42) { playerCK.connect(reverb); }   
  if (clicks == 45) { bcolTarget = 75; easing = 0.1; } //lights
          if (clicks == 45) { presetA1Four(); }
  if (clicks == 46) { ringi(); }  
  if (clicks == 47) { sammud(); }
          if (clicks == 48) { playerCK.disconnect(reverb); } 
  if (clicks == 49) { fez(); }          
          if (clicks == 50) { presetA1Five(); }
  if (clicks == 53) { bcolTarget = 35; easing = 0.1; } //darken  
  if (clicks == 56) { seal(); }      
  if (clicks == 59) { redBlue(); } //RED BLUE 
          if (clicks == 53) { presetA1Six(); }
  if (clicks == 67) { rewindA1B(); } //rewind
          if (clicks == 71) { presetA1Seven(); }
  //---/---/// Story A2 ///---/---//
  if (clicks == 77) { nextAbstractAx3(); }
  if (clicks == 78) { StoryA2(); console.log('Story-A2'); }
  if (clicks == 82) { bcolTarget = 25; easing = 0.1; } //darken  
          if (clicks == 82) { presetA2Two(); }
          if (clicks == 85) { presetA2Three(); }
  if (clicks == 88) { meenutas(); }
  if (clicks == 90) { mantel(); }
          if (clicks == 85) { presetA2Four(); }
  if (clicks == 95) { StoryA2(); }
          if (clicks == 95) { presetA2Three(); }
      if (clicks == 95) { bcol += 25; }  
  //---/---/// Story-A3 ///---/---//
  if (clicks == 103) { StoryA3(); console.log('Story-A3'); }
          if (clicks == 107) { presetA3Two(); }  
  if (clicks == 108) { kuidas(); }
  if (clicks == 109) { manada(); }
  if (clicks == 111) { kasoliseemantel(); }
  if (clicks == 113) { tumesinine(); }
  if (clicks == 114) { eiolnudju(); }
  if (clicks == 115) { eiolnud(); }
  if (clicks == 116) { andnud(); }
  if (clicks == 119) { mikssee(); }
  if (clicks == 122) { maastik0(); }
  if (clicks == 122) { maastik(); }
  if (clicks == 124) { StoryA3(); }
  //---/---/// Story-A4 ///---/---//
  if (clicks == 132) { console.log('Story-A4'); }
  if (clicks == 132) { lumi(); }
  if (clicks == 139) { rewind4(); }
      if (clicks == 139) { bcol += 25; } 
  if (clicks == 142) { kumab(); }
  if (clicks == 143) { kumab2(); }
      if (clicks > 146 && clicks <= 161) { bcolTarget-= 8; easing == 0.075; }
  if (clicks == 146) { oot(); }
  if (clicks == 153) { StoryA5(); }
  //---/---/// Story-A5 ///---/---//
  if (clicks == 156) { console.log('Story-A5'); }
  if (clicks == 158) { ei(); }
  if (clicks == 159) { oota(); }
          if (clicks == 158) { presetA5Zero(); }
  if (clicks == 161) { redBlue2(); }
          if (clicks == 167) { presetA5Two(); }
  if (clicks == 168) { astuma(); }
          if (clicks == 169) { presetA5Three(); }
  if (clicks == 171) { olen(); } 
          if (clicks == 171) { presetA5Four(); }
  if (clicks == 173) { ema(); } 
          if (clicks == 173) { presetA5Five(); }
          if (clicks == 175) { presetA5Six(); }
  if (clicks == 177) { kurat(); } 
          if (clicks == 177) { presetA5Seven(); }
  if (clicks == 179) { valetasid(); }
          if (clicks == 179) { presetA5Eight(); }
  if (clicks == 180) { keegi(); }
          if (clicks == 181) { presetA5Nine(); }
          if (clicks == 183) { presetA5Ten(); }
          if (clicks == 185) { presetA5Eleven(); }
          if (clicks == 186) { presetA5Twelve(); }
  if (clicks == 187) { selja(); }        
          if (clicks == 187) { presetA5Stop(); }
  if (clicks == 189) { redDot(); }        
  //---/---/// Story-A6 ///---/---//
  if (clicks == 192) { console.log('Story-A6'); }
  if (clicks == 195) { lahed(); }
          if (clicks == 195) { presetA6Two(); }
  if (clicks == 196) { laksid(); }
  if (clicks == 197) { tagasi(); }
          if (clicks == 198) { presetA6Three(); }
  if (clicks == 200) { loonud(); }
  if (clicks == 202) { midagivist(); }
  if (clicks == 204) { ilmaminuta(); }
  if (clicks == 205) { selja(); } 
  if (clicks == 206) { agaei(); } 
  if (clicks == 210) { aprill(); }
          if (clicks == 210) { presetA6Four(); }
  if (clicks == 212) { rewind6(); }
  //---/---/// Story-A7 ///---/---//
  if (clicks == 219) { StoryA7(); ('Story-A7'); } 
  if (clicks == 220) { nali(); }
  if (clicks == 229) { ta(); }
  if (clicks == 230) { mis(); }
  if (clicks == 231) { mingi(); }
  if (clicks == 233) { mitterohkem(); }
          if (clicks == 239) {  presetA7One(); }
          if (clicks == 241) {  presetA7Two(); }
      if (clicks == 212) { bcol += 25; } 
  if (clicks == 237) { oktoober(); }     
  if (clicks == 241) { seda(); }
          if (clicks == 241) { presetA7Stop(); } 
      if (clicks > 241 && clicks <= 248) { bcolTarget+= 8; easing == 0.005; }
  if (clicks == 244) { oot(); }
  if (clicks == 245) { kasselle(); }
  if (clicks == 246) { blueDot(); }  
  //---/---/// Story-A8 ///---/---//
  if (clicks == 248) { console.log('Story-A8'); }
  if (clicks == 251) { ilmselge(); }
          if (clicks == 251) { presetA8One2(); }
  if (clicks == 252) { kuidasmavarem(); }
  if (clicks == 253) { agaolen(); }
  if (clicks == 254) { ikkaolen(); }
          if (clicks == 254) { presetA8One3(); }
  if (clicks == 255) { thought(); }
  if (clicks == 261) { meie(); }
  if (clicks == 262) { agakuimapolegi(); }
  if (clicks == 263) { miks(); }
  if (clicks == 264) { selliseasja(); }
  if (clicks == 265) { silme(); }
  //---/---/// Story-A9 ///---/---//
  if (clicks == 266) { StoryA9(); ('Story-A9'); } 
      if (clicks > 269 && clicks <= 274) { bcolTarget+= 18; easing == 0.05; }
  if (clicks == 270) { kuitaoleks(); }
  if (clicks == 272) { eikola(); }
  if (clicks == 274) { agapoleka(); }
  if (clicks == 275) { misoleks(); }
          if (clicks == 274) { presetA8Four(); }
  if (clicks == 276) { she(); }
          if (clicks == 276) { presetA9One(); }
  if (clicks == 277) { polekspidanud(); }
  if (clicks == 278) { ulekahekumne(); }
      if (clicks > 278 && clicks <= 289) { bcolTarget-= 10; easing == 0.00; }
          if (clicks == 277) { presetA9Two(); }
  if (clicks == 279) { pogenesin(); }
          if (clicks == 286) { presetA9Three(); }
  if (clicks == 287) { nextAbstract(); }
          if (clicks == 288) { presetA9Stop(); }
  if (clicks == 291) { redBlue3(); }
  if (clicks == 293) { forget(); }

  //////// B
  //---/---/// Story B1 ///---/---//

                                 //if (clicks == 301) { tempB(); }    //////TEMP  
                            
  if (clicks == 300) { StoryB(); bcolTarget = 50; easing = 0.05; console.log('Story-B1'); }
      if (clicks == 300) { StoryB(); bcolTarget = 50; easing = 0.05; }
  if (clicks == 302) { oksajupi(); }
  if (clicks == 305) { nojah(); }
          if (clicks == 305) { presetB1Two(); }
  if (clicks == 309) { nukker(); } 
          if (clicks == 309) { presetB1Three(); }
  if (clicks == 312) { B1x(); }
          if (clicks == 313) { presetB1Four(); }
  if (clicks == 315) { uhke(); }
          if (clicks == 317) { presetB1Five(); }
  if (clicks == 319) { kuuaega(); }   
          if (clicks == 321) { presetB1Six(); }
  if (clicks == 323) { kistud(); } 
  if (clicks == 324) { hukkamist(); } 
          if (clicks == 325) { presetB1Seven(); }
  if (clicks == 326) { jumpB1(); }
  //---/---/// Story B2 ///---/---//
  if (clicks == 335) { jumpB2(); }
  //---/---/// Story B3 ///---/---//
  if (clicks == 346) { kirve(); }
  if (clicks == 347) { jumpB3(); }
  //---/---/// Story B4 ///---/---//
  if (clicks == 358) { jumpB4(); }
  //---/---/// Story B5 ///---/---//
  if (clicks == 366) { jumpB5(); }
  //---/---/// Story B6 ///---/---//
  if (clicks == 373) { jumpB6(); }
  //---/---/// Story B7 ///---/---//
  if (clicks == 383) { jumpB7(); }
  //---/---/// Story B8 ///---/---//
  if (clicks == 392) { jumpB8(); }
  //---/---/// Story B9 ///---/---//
  if (clicks == 401) { jumpB9(); }
  //---/---/// Story B10 ///---/---//
  if (clicks == 408) { hunnik(); }
  if (clicks == 410) { ehtes(); }
          if (clicks == 410) { presetB10Two(); }
  if (clicks == 412) { fotosid(); }
          if (clicks == 412) { presetB10Three(); }
  if (clicks == 413) { risust(); }
  if (clicks == 414) { mismulhakkas(); }
          if (clicks == 414) { presetB10Four(); }
  if (clicks == 415) { oksahunniku(); }
  if (clicks == 416) { jumpB10(); }
          if (clicks == 416) { presetB10Five(); }
  //---/---/// Story B11 ///---/---//
  if (clicks == 423) { unustasin(); }
  if (clicks == 425) { jumpB11(); }
  //---/---/// Story B12 ///---/---//
  if (clicks == 434) { viskaks(); }
  if (clicks == 437) { jumpB12(); }
  //---/---/// Story B13 ///---/---//
  if (clicks == 446) { kallasin(); }
  if (clicks == 447) { vee(); }
  if (clicks == 448) { jumpB13(); }
  //---/---/// Story B14 ///---/---//
  if (clicks == 458) { midamasellegateen(); }
  if (clicks == 459) { jumpB14(); }
  //---/---/// Story B15 ///---/---//
  if (clicks == 470) { jumpB15(); }
  //---/---/// Story B16 ///---/---//
  if (clicks == 477) { emam(); }
          if (clicks == 477) { presetB16Two(); }
  if (clicks == 478) { omastkaest(); }      
          if (clicks == 478) { presetB16Three(); }
          if (clicks == 479) { presetB16Four(); }
  if (clicks == 480) { nextAbstract(); presetBEnd(); }
          if (clicks == 480) { presetBEnd(); }
  if (clicks == 484) { yellow(); }
  if (clicks == 486) { forget(); }
}

//////// C
//---/---/// Story C1 ///---/---// 

////////// SCROLL-THROUGH FOR TESTING //////////
//window.addEventListener('click', addOne, false);

//////////////////////
/// FUNCTION SETUP ///
//////////////////////

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  background(bcol);

  startColor = color(5,5,5);
  newColor = color(random(150),random(150),random(150));
  amt = 0;

}

////////////////////////
//// TEXT FUNCTIONS ////
////////////////////////

/// TEMP JUMP A
function tempA() {
  clearup();
  removeAllButtons();
  redButton = createButton('&#x258a');
  redButton.style('color', '#F04B4C');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(StoryA5);
  textButton = createButton('edasi')
  textButton.center();  
  textButton.mousePressed(nextStory);
}

/// TEMP JUMP B
function tempB() {
  clearup();
  removeAllButtons();
  textButton = createButton('edasi')
  textButton.center();
  textButton.mousePressed(nextStory);
  redButton = createButton('&#x258a');
  redButton.style('color', '#F04B4C');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(StoryB15);
}

// SMOOTHSTEP
function smoothstep(edge0, edge1, x) {
  x = constrain((x - edge0) / (edge1 - edge0), 0.0, 1.0); 
  return x * x * (3 - 2 * x);
}

function randombuttonsB() {

  x1Button = createButton('&#x2583');
  x1Button.style('color', ('#0f0f0f'));
  x1Button.mousePressed(nextStory);
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.style('color', ('#0f0f0f'));
  x2Button.mousePressed(nextStory);
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.style('color', ('#0f0f0f'));
  x3Button.mousePressed(nextStory);
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);
  x4Button = createButton('&#x2599');
  x4Button.style('color', ('#0f0f0f'));
  x4Button.mousePressed(nextStory);
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.style('color', ('#0f0f0f'));
  x5Button.mousePressed(nextStory);
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.style('color', ('#0f0f0f'));
  x6Button.mousePressed(nextStory);
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);
  x7Button = createButton('&#x2596');
  x7Button.style('color', ('#0f0f0f'));
  x7Button.mousePressed(nextStory);
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.style('color', ('#0f0f0f'));
  x8Button.mousePressed(nextStory);
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.style('color', ('#0f0f0f'));
  x9Button.mousePressed(nextStory);
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);
}

function randombuttonsG() {

  x1Button = createButton('&#x2583');
  x1Button.style('color', ('#ededed'));
  x1Button.mousePressed(flashMute);
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.style('color', ('#ededed'));
  x2Button.mousePressed(flashMute);
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.style('color', ('#ededed'));
  x3Button.mousePressed(flashMute);
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);
  x4Button = createButton('&#x2599');
  x4Button.style('color', ('#ededed'));
  x4Button.mousePressed(flashMute);
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.style('color', ('#ededed'));
  x5Button.mousePressed(flashMute);
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.style('color', ('#ededed'));
  x6Button.mousePressed(flashMute);
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);
  x7Button = createButton('&#x2596');
  x7Button.style('color', ('#ededed'));
  x7Button.mousePressed(flashMute);
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.style('color', ('#ededed'));
  x8Button.mousePressed(flashMute);
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.style('color', ('#ededed'));
  x9Button.mousePressed(flashMute);
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);
}

function randombuttonsMass() {

  x1Button = createButton('&#x2583');
  x1Button.style('color', ('#111111'));
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.style('color', ('#111111'));
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.style('color', ('#111111'));
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);
  x4Button = createButton('&#x2599');
  x4Button.style('color', ('#111111'));
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.style('color', ('#111111'));
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.style('color', ('#111111'));
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);
  x7Button = createButton('&#x2596');
  x7Button.style('color', ('#111111'));
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.style('color', ('#111111'));
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.style('color', ('#111111'));
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);
  /*
  x1Button.mousePressed(flashC);
  x2Button.mousePressed(flashC);
  x3Button.mousePressed(flashC);
  x4Button.mousePressed(flashC);
  x5Button.mousePressed(flashC);
  x6Button.mousePressed(flashC);
  x7Button.mousePressed(flashC);
  x8Button.mousePressed(flashC);
  x9Button.mousePressed(flashC);
  */
        y1Button = createButton('&#x258c');
        y1Button.style('color', ('#111111'));
        const dwy1 = new DanceSpan(y1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy1);
        y2Button = createButton('&#x259d');
        y2Button.style('color', ('#111111'));
        const dwy2 = new DanceSpan(y2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy2);
        y3Button = createButton('&#x2583');
        y3Button.style('color', ('#111111'));
        const dwy3 = new DanceSpan(y3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy3);
        y4Button = createButton('&#x259f');
        y4Button.style('color', ('#111111'));
        const dwy4 = new DanceSpan(y4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy4);
        y5Button = createButton('&#x259e');
        y5Button.style('color', ('#111111'));
        const dwy5 = new DanceSpan(y5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy5);
        y6Button = createButton('&#x259c');
        y6Button.style('color', ('#111111'));
        const dwy6 = new DanceSpan(y6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy6);
        y7Button = createButton('&#x2598');
        y7Button.style('color', ('#111111'));
        const dwy7 = new DanceSpan(y7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy7);
        y8Button = createButton('&#x2590');
        y8Button.style('color', ('#111111'));
        const dwy8 = new DanceSpan(y8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy8);
        y9Button = createButton('&#x2595');
        y9Button.style('color', ('#111111'));
        const dwy9 = new DanceSpan(y9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
              dancingWords.push(dwy9);
        /*
        y1Button.mousePressed(flashC);
        y2Button.mousePressed(flashC);
        y3Button.mousePressed(flashC);
        y4Button.mousePressed(flashC);
        y5Button.mousePressed(flashC);
        y6Button.mousePressed(flashC);
        y7Button.mousePressed(flashC);
        y8Button.mousePressed(flashC);
        y9Button.mousePressed(flashC);
        */
}

function Symbols() {
  clearup();
  removeAllButtons();
  symbolButton = createButton('&#x25B6'); //▶
  symbolButton.mousePressed(nextAbstract);
  symbolButton.center();
}

function nextAbstract() { //NEXT ABSTRACT SYMBOL + FM SYNTH
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbol();
  addOne();
  addR();
  clickSND();
  fmSynth.triggerAttackRelease(random(1550, 2550), random(0.25, 0.75));  //(pitch.min, pitch.max) + length in seconds
        fmSynth.volume.value = random(-30, -20);
        fmSynth.harmonicity.value = random(0.15, 0.85);
        fmSynth.modulationIndex = random(5.0, 75.0);
        fmSynth.modulationEnvelope = {
          "attack": 0.05,
          "attackCurve": "linear",
          "decay": 0.01,
          "decayCurve": "exponential",
          "release": 0.5,
          "releaseCurve": "exponential",
          "sustain": 0.25
        }
}

function nextSymbol() { //NEXT SYMBOL
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstract);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function SymbolsA() {
  clearup();
  removeAllButtons();
  let fs = fullscreen();
  symbolButton = createButton('&#x2585');
  symbolButton.mousePressed(begin),(fullscreen(!fs));
  const dw = new DanceSpan(symbolButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw); 
}

function nextAbstractA() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolA();
  addR();
  clickSND();
}

function nextSymbolA() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextStory);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

// x2
function nextSymbolAx2() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstractAx22);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx2() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx2();
  addR();
  clickSND();
}

function nextSymbolAx22() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextStory);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx22() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx22();
  addR();
  clickSND();
}

// x3
function nextSymbolAx3() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstractAx32);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx3() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx3();
  addR();
  clickSND();
}

function nextSymbolAx32() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstractAx33);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx32() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx32();
  addR();
  clickSND();
}

function nextSymbolAx33() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextStory);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx33() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx33();
  addR();
  clickSND();
}

////////BOUNCE
function nextAbstractABounce() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolABounce();
  addR();
  clickSND();
}

function nextSymbolABounce() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextStoryBounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

// x2 BOUNCE
function nextSymbolAx2Bounce() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstractAx22Bounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx2Bounce() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx2Bounce();
  addR();
  clickSND();
}

function nextSymbolAx22Bounce() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextStoryBounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx22Bounce() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx22Bounce();
  addR();
  clickSND();
}

// x3 BOUNCE
function nextSymbolAx3Bounce() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstractAx32Bounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx3Bounce() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx3Bounce();
  addR();
  clickSND();
}

function nextSymbolAx32Bounce() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstractAx33Bounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx32Bounce() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx32Bounce();
  addR();
  clickSND();
}

function nextSymbolAx33Bounce() {
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextStoryBounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

function nextAbstractAx33Bounce() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolAx33Bounce();
  addR();
  clickSND();
}

/// CHOICE ///
function choose() {
  clearup();
  removeAllButtons();
  playerFX.stop();
  FM();
  bcolTarget = 15;
  clicks = 1;
  x1Button = createButton('&#x2583');
  x1Button.style('color', '#101010');
  x1Button.mousePressed(flash);
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.style('color', '#151515');
  x2Button.mousePressed(flash);
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.style('color', '#202020');
  x3Button.mousePressed(flash);
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);
  x4Button = createButton('&#x2599');
  x4Button.style('color', '#252525');
  x4Button.mousePressed(flash);
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.style('color', '#303030');
  x5Button.mousePressed(flash);
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.style('color', '#353535');
  x6Button.mousePressed(flash);
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);
  x7Button = createButton('&#x2596');
  x7Button.style('color', '#404040');
  x7Button.mousePressed(flash);
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.style('color', '#454545');
  x8Button.mousePressed(flash);
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.style('color', '#505050');
  x9Button.mousePressed(flash);
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);

  aButton = createButton('&#x2587')
  aButton.style('color', '#0096EA');
  const dwA = new DanceSpan(aButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  aButton.mousePressed(sinine);
  bButton = createButton('&#x259e')
  bButton.style('color', '#FFDB43');
  bButton.mousePressed(kollane);
  const dwB = new DanceSpan(bButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  cButton = createButton('&#x2595');
  cButton.style('color', '#F04B4C');
  cButton.mousePressed(punane);
  const dwC = new DanceSpan(cButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwC);
}

/// SININE ///
function sinine() {
  clearup();
  removeAllButtons();
  FM();
  bcolTarget = 15;
  clicks = 1;
  x1Button = createButton('&#x2583');
  x1Button.mousePressed(sinine);
  x1Button.style('color', color(random(26, 86), random(115, 175), random(177, 237), random(100, 200)));
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.mousePressed(sinine);
  x2Button.style('color', color(random(26, 86), random(115, 175), random(177, 237), random(100, 200)));
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.mousePressed(sinine);
  x3Button.style('color', color(random(26, 86), random(115, 175), random(177, 237), random(100, 200)));
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);

  x4Button = createButton('&#x2599');
  x4Button.mousePressed(sinine);
  x4Button.style('color', color(random(26, 86), random(115, 175), random(177, 237), random(100, 200)));
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.mousePressed(sinine);
  x5Button.style('color', color(random(26, 86), random(115, 175), random(177, 237), random(100, 200)));
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.mousePressed(sinine);
  x6Button.style('color', color(random(26, 86), random(115, 175), random(177, 237), random(100, 200)));
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);

  x7Button = createButton('&#x2596');
  x7Button.mousePressed(sinine);
  x7Button.style('color', color(random(36, 76), random(125, 165), random(187, 227), random(100, 200)));
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.mousePressed(sinine);
  x8Button.style('color', color(random(36, 76), random(125, 165), random(187, 227), random(100, 200)));
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.mousePressed(sinine);
  x9Button.style('color', color(random(36, 76), random(125, 165), random(187, 227), random(100, 200)));
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);

  aButton = createButton('&#x2587')
  const dwA = new DanceSpan(aButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  aButton.mousePressed(Story);
  aButton.style('color', color(56, 145, 207));
  bButton = createButton('&#x259e')
  bButton.mousePressed(sinine);
  bButton.style('color', color(random(36, 76), random(125, 165), random(187, 227), random(100, 200)));
  const dwB = new DanceSpan(bButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  cButton = createButton('&#x2595');
  cButton.mousePressed(sinine);
  cButton.style('color', color(random(36, 76), random(125, 165), random(187, 227), random(100, 200)));
  const dwC = new DanceSpan(cButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwC);
}

/// KOLLANE ///
function kollane() {
  clearup();
  removeAllButtons();
  FM();
  bcolTarget = 15;
  clicks = 1;
  x1Button = createButton('&#x2583');
  x1Button.mousePressed(kollane);
  x1Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.mousePressed(kollane);
  x2Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.mousePressed(kollane);
  x3Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);

  x4Button = createButton('&#x2599');
  x4Button.mousePressed(kollane);
  x4Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.mousePressed(kollane);
  x5Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.mousePressed(kollane);
  x6Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);

  x7Button = createButton('&#x2596');
  x7Button.mousePressed(kollane);
  x7Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.mousePressed(kollane);
  x8Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.mousePressed(kollane);
  x9Button.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);

  aButton = createButton('&#x2587')
  const dwA = new DanceSpan(aButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  aButton.mousePressed(kollane);
  aButton.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  bButton = createButton('&#x259e')
  bButton.mousePressed(StoryB);
  bButton.style('color', color(255, 219, 67));
  const dwB = new DanceSpan(bButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  cButton = createButton('&#x2595');
  cButton.mousePressed(kollane);
  cButton.style('color', color(random(235, 275), random(199, 239), random(47, 87), random(100, 200)));
  const dwC = new DanceSpan(cButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwC);
}

/// PUNANE ///
function punane() {
  clearup();
  removeAllButtons();
  FM();
  bcolTarget = 15;
  clicks = 1;
  x1Button = createButton('&#x2583');
  x1Button.mousePressed(punane);
  x1Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX1 = new DanceSpan(x1Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX1);
  x2Button = createButton('&#x258b');
  x2Button.mousePressed(punane);
  x2Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX2 = new DanceSpan(x2Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX2);
  x3Button = createButton('&#x258e');
  x3Button.mousePressed(punane);
  x3Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX3 = new DanceSpan(x3Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX3);

  x4Button = createButton('&#x2599');
  x4Button.mousePressed(punane);
  x4Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX4 = new DanceSpan(x4Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX4);
  x5Button = createButton('&#x259a');
  x5Button.mousePressed(punane);
  x5Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX5 = new DanceSpan(x5Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX5);
  x6Button = createButton('&#x259b');
  x6Button.mousePressed(punane);
  x6Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX6 = new DanceSpan(x6Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX6);

  x7Button = createButton('&#x2596');
  x7Button.mousePressed(punane);
  x7Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX7 = new DanceSpan(x7Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX7);
  x8Button = createButton('&#x2595');
  x8Button.mousePressed(punane);
  x8Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX8 = new DanceSpan(x8Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX8);
  x9Button = createButton('&#x2587');
  x9Button.mousePressed(punane);
  x9Button.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwX9 = new DanceSpan(x9Button, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwX9);

  aButton = createButton('&#x2587')
  const dwA = new DanceSpan(aButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  aButton.mousePressed(punane);
  aButton.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  bButton = createButton('&#x259e')
  bButton.mousePressed(punane);
  bButton.style('color', color(random(220, 260), random(56, 96), random(56, 96), random(100, 200)));
  const dwB = new DanceSpan(bButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  cButton = createButton('&#x2595');
  cButton.mousePressed(StoryC);
  cButton.style('color', color(240,76,76));
  const dwC = new DanceSpan(cButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwC);
}

/// TITLES ///
function begin() {
  clearup();
  removeAllButtons();
  clickSND();
  presetIntro();
  clicks = 1;
  textButton = createButton('&#x259f');
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
  skipButton = createButton('&#x259d &#x259d &#x259d');
  skipButton.style('color', '#222222');
  skipButton.position(displayWidth * 0.90, displayHeight * 0.9);
  skipButton.mousePressed(choose);
}

function titles1() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 2;
  textButton = createButton('eˉlektron presents');
  textButton.style('letter-spacing', '0.15rem');
  textButton.mousePressed(nextAbstractAx2);
  textButton.center();
}

function titles2() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 4;
  textButton = createButton('concept, score & code - Sander Saarmets');
  textButton.style('letter-spacing', '0.075rem');
  textButton.mousePressed(nextAbstractAx2);
  textButton.center();
}

function titles3() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 5;
  textButton = createButton('text - Jan Kaus');
  textButton.style('letter-spacing', '0.15rem');
  textButton.mousePressed(nextAbstractAx2);
  textButton.center();
}

/// FORGET
function forgetA() {
  clearup();
  removeAllButtons();
  let forget = createA('', 'F O R G E T');
  forget.center();
  forget.mousePressed(nextAbstractAx2);
}

/// STORY A1 ///
function Story() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 10;
  StoryButton = createButton('it happened in that pointless town');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
  presetA1();
}

/// NEXT STORY
function nextStory() { 
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextStoryString();
  addOne();
  clickSND();
}

/// NEXT STORY SENCTENCE
function nextStoryString() {
  clearup();
  const textButton = createButton(story.getString(clicks, 0));
        textButton.mousePressed(nextStory);
        textButton.center();  
}

/// NEXT STORY BOUNCE
function nextStoryBounce() { 
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextStoryStringBounce();
  addOne();
  clickSND();
}

/// NEXT STORY SENCTENCE BOUNCE
function nextStoryStringBounce() {
  clearup();
  const textButton = createButton(story.getString(clicks, 0));
        textButton.mousePressed(nextStoryBounce);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw); 
}

function redBlue() {
  clearup();
  removeAllButtons();
  clickSND();
  redButton = createButton('&#x258a')
  redButton.style('color', '#F04B4C');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(rewindA1);
  blueButton = createButton('&#x258a');
  blueButton.style('color', '#0096EA');
  const dwB = new DanceSpan(blueButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  blueButton.mousePressed(jump1B);
  textButton = createButton('one of them red &#x2596 the other blue')
  textButton.center();
  textButton.mousePressed(nextStory);
}

function laguneb() {
  clearup();
  removeAllButtons();
  clickSND();
  aButton = createButton('everything is');
  aButton.mousePressed(nextStory);
  const dwA = new DanceSpan(aButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  bButton = createButton('disintegrating');
  bButton.mousePressed(nextStory);
  const dwB = new DanceSpan(bButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  cButton = createButton('in real time');
  cButton.mousePressed(nextStory);
  const dwC = new DanceSpan(cButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwC);      
}

function mureneb() {
  clearup();
  removeAllButtons();
  clickSND();
  aButton = createButton('stone crumbles');
  aButton.mousePressed(nextAbstractA);
  const dwA = new DanceSpan(aButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  bButton = createButton('and');
  bButton.mousePressed(nextAbstractA);
  const dwB = new DanceSpan(bButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  cButton = createButton('wood rots');
  cButton.mousePressed(nextAbstractA);
  const dwC = new DanceSpan(cButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwC);      
}

function fez() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('FEZ');
  textButton.mousePressed(cannes);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function cannes() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('CANNES');
  textButton.mousePressed(agra);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function agra() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('AGRA');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function munakivi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('meandering through huddled wooden houses');
  textButton.mousePressed(lookas);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function lookas() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('along the cobblestone roads');
  textButton.mousePressed(nextAbstractAx3);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function etendus() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('they probably give one performance a year here');
  textButton.mousePressed(nextAbstractA);
  textButton.center();
}

function sisse() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('there was nothing better to do anyway');
  textButton.mousePressed(nextAbstractAx3);
  textButton.center();
}

function ringi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I walked around');
  textButton.mousePressed(nextAbstractAx2);
  textButton.center();
}

function sammud() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('footsteps echoing around me');
  textButton.mousePressed(nextAbstractAx3);
  textButton.center();
}

function seal() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('but there');
  textButton.mousePressed(keset);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function keset() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('in the middle of the snowfield');
  textButton.mousePressed(raamas);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function raamas() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('among the old shabby houses');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jump1B() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 70;
  textButton = createButton('one standing with her back to the other');
  textButton.mousePressed(nextStory);
  textButton.center();
}

function rewindA1() {
  clearup();
  removeAllButtons();
  clickSND();
  bcolTarget = 15;
  easing = 0.005;
  clicks = 34;
  symbolButton = createButton('WHERE WAS I?');
  symbolButton.mousePressed(nextStory);
  symbolButton.center();
  bcol += 25;
}

function rewindA1B() {
  clearup();
  removeAllButtons();
  clickSND();
  bcolTarget = 15;
  easing = 0.005;
  clicks = 10;
  symbolButton = createButton('&#x2594 I think it happened in that pointless town');
  symbolButton.mousePressed(nextStory);
  symbolButton.center();
  presetA1Reset();
  bcol += 25;
}

/// STORY A2
function StoryA2() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  clicks = 80;
  textButton = createButton('was it YOU?');
  textButton.center();
  textButton.mousePressed(sind);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
  bcolTarget = 15; easing = 0.1;
  presetA2One();
}

function sind() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA2Reset();
  clicks = 81;
  textButton = createButton('was it YOU that I saw?');
  textButton.center();
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function meenutas() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 88;
  textButton = createButton('or did it really look like you after all?');
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function mantel() {
  clearup();
  removeAllButtons();
  clickSND();
  brightButton = createButton('&#x258a')
  brightButton.style('color', '#0096EA');
  const dwB = new DanceSpan(brightButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  brightButton.mousePressed(rewind2);
  darkButton = createButton('&#x258a');
  darkButton.style('color', '#164393');
  const dwD = new DanceSpan(darkButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwD);
  darkButton.mousePressed(jumpA2);
  textButton = createButton('you were wearing that beautiful coat')
  textButton.center();
  textButton.mousePressed(nextStory);
}

function rewind2() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 89;
  symbolButton = createButton('I REMEMBER');
  symbolButton.mousePressed(nextAbstractA);
  symbolButton.center();
  bcol += 25;
}

function jumpA2() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 98;
  textButton = createButton('with big buttons');
  textButton.mousePressed(nextStory);
  textButton.center();
}

/// STORY A3
function StoryA3() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA3One();
  flashMute();
  bcolTarget = 25; easing = 0.1;
  clicks = 106;
  textButton = createButton('WAIT');
  textButton.center();
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function oot() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('wait')
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function kuidas() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('how can I not remember?')
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function manada() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('sometimes I can’t even remember your face anymore')
  textButton.center();
  textButton.mousePressed(nextAbstractA);
}

function kasoliseemantel() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('was it the coat?')
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function tumesinine() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('but was it the dark one')
  textButton.mousePressed(tumesiniste);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function tumesiniste() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('with the big blue buttons?')
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function eiolnudju() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('it wasn’t, was it?')
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function eiolnud() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('NO IT WASN’T')
  textButton.center();
  textButton.mousePressed(nextAbstractA);
}

function andnud() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('you had already given it away')
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function mikssee() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('why did that blue bother me so much?')
  textButton.style('color', '#0096EA');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function maastik0() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('maybe it was the landscape that affected me somehow')
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function maastik() {
  clearup();
  removeAllButtons();
  clickSND();
  brightButton = createButton('&#x258a')
  brightButton.style('color', '#222222');
  const dwB = new DanceSpan(brightButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  brightButton.mousePressed(rewind3);
  darkButton = createButton('&#x258a');
  const dwD = new DanceSpan(darkButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwD);
  darkButton.mousePressed(jump3B);
  textButton = createButton('that black and white landscape')
  textButton.center();
  textButton.mousePressed(nextStory);
}

function rewind3() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 121;
  bcol += 25;
  textButton = createButton('maybe it was the landscape that somehow affected me');
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jump3B() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 127;
  textButton = createButton('everything that remains between black and white');
  textButton.mousePressed(StoryA4);
  textButton.center();
}

/// STORY A4
function StoryA4() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 131;
  bcolTarget = 125; easing = 0.1;
  textButton = createButton('I guess it was really the same as in that painting');
  textButton.center();
  textButton.mousePressed(nextStory);
}

function lumi() {
  clearup();
  removeAllButtons();
  clickSND();
  snowButton = createButton('&#x258a');
  snowButton.style('color', '#ffffff');
  const dwD = new DanceSpan(snowButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwD);
  snowButton.mousePressed(jump4B);
  textButton = createButton('a thin layer of snow')
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function kumab() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('so that the soil begins to shine through')
  textButton.center();
  textButton.mousePressed(nextAbstractA);
}

function kumab2() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('shine through the snow')
  textButton.mousePressed(nextAbstractAx3);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function rewind4() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 131;
  textButton = createButton('was it really the same as in that painting?');
  textButton.center();
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
  textButton.mousePressed(nextStory);
  bcol += 25;
}

function jump4B() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 141;
  textButton = createButton('the kind that makes all living things wither away');
  textButton.mousePressed(nextStory);
  textButton.center();
}

/// STORY A5
function StoryA5() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 156;
  textButton = createButton('so there was no layer of snow &#x2596');
  textButton.center();
  textButton.mousePressed(nextStory);
}

function ei() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('no');
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function oota() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('wait');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function redBlue2() {
  clearup();
  removeAllButtons();
  clickSND();
  redButton = createButton('&#x258a');
  redButton.style('color', '#F04B4C');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(jump5B);
  blueButton = createButton('&#x258a');
  blueButton.style('color', '#0096EA');
  const dwB = new DanceSpan(blueButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  blueButton.mousePressed(jump5B);
  textButton = createButton('the blue stick figure was standing with her back to the red one')
  textButton.center();
  textButton.mousePressed(rewind5);
}

function rewind5() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 158;
  textButton = createButton('no');
  textButton.center();
  textButton.mousePressed(nextStory);
  bcol += 25;
}

function jump5B() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 165;
  textButton = createButton('they stood side by side &#x2594 but not facing each other');
  textButton.mousePressed(nextAbstractAx2Bounce);
  const dwA = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dwA);
  presetA5Low();
}

function astuma() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('as if to start walking away');
  textButton.mousePressed(nextAbstractABounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

function olen() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('or rather &#x2596 am');
  textButton.mousePressed(nextAbstractAx2Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

function ema() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('as your mother used to call me');
  textButton.mousePressed(nextAbstractAx3Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

function kurat() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('GODDAMNIT');
  textButton.mousePressed(nextAbstractAx3Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

function valetasid() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('you also lied &#x2596');
  textButton.mousePressed(nextAbstractAx2Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

function keegi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('saying that you had someone else');
  textButton.mousePressed(nextAbstractAx3Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

function selja() {
  clearup();
  removeAllButtons();
  clickSND();
  bcolTarget = 15; easing = 0.1;
  textButton = createButton('you turned your back to me');
  textButton.center();
  textButton.mousePressed(nextStory);
}

function redDot() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA5Stop2();
  filterFX.frequency.rampTo(0, 1);
  redButton = createButton('&#x258a')
  redButton.style('color', '#F04B4C');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(StoryA6);
}

/// STORY A6
function StoryA6() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA6One();
  bcolTarget = 25; easing = 0.1;
  clicks = 192;
  textButton = createButton('and it doesn’t get any easier');
  textButton.center();
  textButton.mousePressed(nextStory);
}

function lahed() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('you go')
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function laksid() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('you went')
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

function tagasi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('without looking back')
  textButton.center();
  textButton.mousePressed(nextAbstractA);
}

function loonud() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('I could have almost hit you')
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function midagivist() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('something about')
  textButton.mousePressed(kohas);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function kohas() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('you having reached a point')
  textButton.mousePressed(kuseisaa);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function kuseisaa() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('where there’s no turning back')
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function ilmaminuta() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('just without me')
  textButton.mousePressed(nextAbstractA);
  textButton.center();
}

function selja2() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('you turned your back')
  textButton.mousePressed(nextAbstractAx3);
  textButton.center();
}

function agaei() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  bcolTarget = 25; easing = 0.1;
  textButton = createButton('but no')
  textButton.mousePressed(nextStoryBounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function aprill() {
  clearup();
  removeAllButtons();
  clickSND();
  bcolTarget = 15; easing = 0.1;
  cyanButton = createButton('&#x258a')
  cyanButton.style('color', '#88E8ED');
  const dwR = new DanceSpan(cyanButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  cyanButton.mousePressed(jump6);
  textButton = createButton('APRIL')
  textButton.mousePressed(StoryA6);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function rewind6() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 192;
  textButton = createButton('but it doesn’t get any easier');
  textButton.center();
  textButton.mousePressed(nextStory);
  bcol += 25;
}

function jump6() {
  clearup();
  removeAllButtons();
  clickSND();
  bcolTarget = 25; easing = 0.1;
  clicks = 215;
  textButton = createButton('what');
  textButton.mousePressed(StoryA7);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function nali() {
  clearup();
  removeAllButtons();
  clickSND();
  addOne();
  textButton = createButton('was it a joke?');
  textButton.mousePressed(seeeisaaolla);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function seeeisaaolla() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('it can’t be');
  textButton.mousePressed(nextAbstractABounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function ta() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('he');
  textButton.mousePressed(nextAbstractAx2Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function mis() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('what');
  textButton.mousePressed(nextAbstractABounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function mingi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I have seen him &#x2594');
  textButton.mousePressed(nextAbstractABounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function mitterohkem() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('not more');
  textButton.mousePressed(nextAbstractAx2Bounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

/// STORY A7
function StoryA7() {
  clearup();
  removeAllButtons();
  clickSND();
  bcolTarget = 15; easing = 0.1;
  clicks = 219;
  textButton = createButton('no');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function oktoober() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('but what if it was in October?');
  textButton.center();
  textButton.mousePressed(nextStoryBounce);
}

function seda() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('that');
  textButton.center();
  textButton.mousePressed(nextStory);

}

function oot2() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('WAIT');
  textButton.mousePressed(kasselle);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function kasselle() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('was it because of the belly?');
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

function blueDot() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('&#x258a');
  textButton.style('color', '#0096EA');
  textButton.mousePressed(StoryA8);
  const dwR = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
}

/// STORY A8
function StoryA8() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA8One();
  bcolTarget = 15; easing = 0.1;
  clicks = 248;
  textButton = createButton('why haven’t I thought of it before');
  textButton.center();
  textButton.mousePressed(nextStory);
}

function ilmselge() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('damn it')
  textButton.mousePressed(nextAbstractAx3);
  const dwA = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA)
  textButton2 = createButton('so obvious')
  textButton2.mousePressed(nextAbstractAx3);
  const dwB = new DanceSpan(textButton2, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB)
}

function kuidasmavarem() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('how can it be &#x2596 that I never &#x2594')
  textButton.center();
  textButton.mousePressed(nextAbstractA);
}

function agaolen() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('but maybe I have?')
  textButton.mousePressed(nextAbstractAx2);
  const dwR = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR)
}

function ikkaolen() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('or indeed not?')
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function thought() {
  clearup();
  removeAllButtons();
  clickSND();
  blueButton = createButton('&#x258a')
  blueButton.style('color', '#FFDB43');
  const dwR = new DanceSpan(blueButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  blueButton.mousePressed(jump8);
  textButton = createButton('it never crossed my mind that &#x2594')
  textButton.center();
  textButton.mousePressed(rewind8);
}

function rewind8() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 249;
  textButton = createButton('if it was indeed in October');
  textButton.mousePressed(nextStory);
  textButton.center();
  bcol += 25;
}

function jump8() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA8Two();
  clicks = 259;
  textButton = createButton('what if');
  textButton.mousePressed(jump8B);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jump8B() {
  clearup();
  removeAllButtons();
  clickSND();
  clicks = 260;
  textButton = createButton('he were mine');
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function meie() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  clicks = 261;
  textButton = createButton('OURS');
  textButton.mousePressed(nextAbstractAx3);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function agakuimapolegi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('but if I’ve never thought of it &#x2596');
  textButton.center();
  textButton.mousePressed(siismiks);
}

function siismiks() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('then why?');
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

function miks() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('why?');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function selliseasja() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('how could I have missed something like that');
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function silme() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('it was right in front of me and I missed it');
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

/// STORY A9
function StoryA9() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA8Three();
  bcolTarget = 15; easing = 0.1;
  clicks = 269;
  textButton = createButton('WHAT IF');
  textButton.center();
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
  textButton.mousePressed(nextAbstractA);
}

function kuitaoleks() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('HE WERE MINE?');
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

function eikola() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('and yet it doesn’t');
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function agapoleka() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('but not quite');
  textButton.center();
  textButton.mousePressed(nextAbstractA);
}

function misoleks() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('what if &#x2594');
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

function she() {
  clearup();
  removeAllButtons();
  clickSND();
  presetA8Five();
  redButton = createButton('&#x259f')
  redButton.style('color', '#ffffff');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(nextStory);
}

function polekspidanud() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I wish I hadn’t seen you last month')
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function ulekahekumne() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('after twenty years')
  textButton.center();
  textButton.mousePressed(nextAbstractAx3);
}

function pogenesin() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('did I escape?')
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
  textButton.mousePressed(nextAbstractAx3Bounce);
}

function redBlue3() {
  clearup();
  removeAllButtons();
  clickSND();
  player.stop();
  redButton = createButton('&#x258a');
  redButton.style('color', '#F04B4C');
  const dwR = new DanceSpan(redButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwR);
  redButton.mousePressed(nextStory);
  blueButton = createButton('&#x258a');
  blueButton.style('color', '#0096EA');
  const dwB = new DanceSpan(blueButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  blueButton.mousePressed(nextStory);
}

/// GLITCH A
function GlitchA() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextGlitchA();
  addR2();
  fmSynth.triggerAttackRelease(random(27, 28), random(0.015, 0.75));  //(pitch.min, pitch.max) + length in seconds
  fmSynth.volume.value = random(-24, -12);
  fmSynth.harmonicity.value = random(0.15, 0.25);
  fmSynth.modulationIndex = random(5.0, 10.0);
}

/// NEXT GLITCH A
function nextGlitchA() {
  clearup();
  clickSND();
  const textButton = createButton(symbolsmixedA.getString(clicksR2, 0));
        textButton.mousePressed(nextSymbolsNoise);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.95), random(displayHeight * 0.1, displayHeight * 0.95));
        dancingWords.push(dw);     
}

/// FORGET
function forget() {
  clearup();
  removeAllButtons();
  clicks = 1;
  let forget = createA('', 'F O R G E T');
  forget.center();
  forget.mousePressed(choose);
  bcol += 25;
}

//////// B
/// STORY B1 ///
function StoryB() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  presetB1One();
  console.log('Story-B1');
  bcolTarget = 15;
  easing = 0.25;
  clicks = 300;
  textButton = createButton('I don’t know what came over me');
  textButton.mousePressed(nextStoryBounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function B1x() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('&#x259b');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function oksajupi() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('a little twig from the tree that was already sawn into pieces');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function nojah() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('oh well');
  textButton.mousePressed(nojah2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function nojah2() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I was in a foreign city');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function nukker() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('although it would’ve been sad at home too');
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function uhke() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('a magnificent view');
  textButton.mousePressed(nextStoryBounce);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function kuuaega() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('for the whole month');
  textButton.center();
  textButton.mousePressed(nextAbstractAx2);
}

function kistud() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('like stripping a person of their clothes');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function hukkamist() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('before a public execution');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jumpB1() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('where did such a crazy thought come from?');
  textButton.mousePressed(StoryB2);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB1One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB1One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB1x();
  randombuttonsG();
  clicks = 328;
  StoryButton = createButton('DADDY');
  StoryButton.mousePressed(StoryB2);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  //      dancingWords.push(dw);
}

/// STORY B2 ///
function StoryB2() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB2One();
  console.log('Story-B2');
  clicks = 332;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I’m no green deal enthusiast &#x2596 you know');
  StoryButton.mousePressed(nextAbstractAx3);
  StoryButton.center();
}

function jumpB2() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('is just to fill the pockets of some corporations');
  textButton.mousePressed(StoryB3);
  const dwA = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwA);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB2One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB2One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB2x();
  randombuttonsG();
  clicks = 337;
  StoryButton = createButton('COME ON');
  StoryButton.mousePressed(StoryB2Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB2Two() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB2x();
  randombuttonsG();
  clicks = 338;
  StoryButton = createButton('DON’T CRY NOW!');
  StoryButton.mousePressed(StoryB3);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B3 ///
function StoryB3() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB3One();
  console.log('Story-B3');
  clicks = 342;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I have nothing against chopping down some Christmas trees');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function jumpB3() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('and chopped the tree into pieces');
  textButton.mousePressed(StoryB4);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB3One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);    
}

function kirve() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('I brought an axe from the shed');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB3One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB3x();
  randombuttonsG();
  clicks = 349;
  StoryButton = createButton('HEY &#x2596 WHY ARE YOU CRYING?');
  StoryButton.mousePressed(StoryB3Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB3Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 350;
  StoryButton = createButton('IT’S NOTHING!');
  StoryButton.mousePressed(StoryB4);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B4 ///
function StoryB4() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB4One();
  console.log('Story-B4');
  clicks = 354;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('it had dried up by then anyway');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function jumpB4() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('long after the snow had melted');
  textButton.mousePressed(StoryB5);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB4One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB4One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB4x();
  randombuttonsG();
  clicks = 360;
  StoryButton = createButton('DADDY');
  StoryButton.mousePressed(StoryB4Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB4Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 361;
  StoryButton = createButton('PLEASE DON’T!');
  StoryButton.mousePressed(StoryB5);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B5 ///
function StoryB5() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB5One();
  console.log('Story-B5');
  clicks = 365;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('so I’m not some kind of a tree hugger');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function jumpB5() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I’m more of a pragmatic man myself');
  textButton.mousePressed(StoryB6);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB5One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB5One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB5x();
  randombuttonsG();
  clicks = 368;
  StoryButton = createButton('PLEASE-PLEASE!');
  StoryButton.mousePressed(StoryB6);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B6 ///
function StoryB6() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB6One();
  console.log('Story-B6');
  clicks = 372;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('but for some reason it made me terribly sad');
  StoryButton.mousePressed(jumpB6);
  StoryButton.center();
}

function jumpB6() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('to see them wreck that beautiful Christmas tree');
  textButton.mousePressed(StoryB7);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB6One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB6One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB6x();
  randombuttonsG();
  clicks = 375;
  StoryButton = createButton('COME ON');
  StoryButton.mousePressed(StoryB6Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB6Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 376;
  StoryButton = createButton('IT WILL BE OVER IN NO TIME');
  StoryButton.mousePressed(StoryB6Three);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB6Three() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 376;
  StoryButton = createButton('I TOLD YOU IT’S NOTHING');
  StoryButton.mousePressed(StoryB7);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B7 ///
function StoryB7() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB7One();
  console.log('Story-B7');
  clicks = 380;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('one day they just turned off the lights');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function jumpB7() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('and cut the tree into pieces');
  textButton.mousePressed(StoryB8);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB7One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB7One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB7x();
  randombuttonsG();
  clicks = 385;
  StoryButton = createButton('ENOUGH');
  StoryButton.mousePressed(StoryB7Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB7Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 386;
  StoryButton = createButton('DON’T CRY OVER SUCH A SMALL THING');
  StoryButton.mousePressed(StoryB8);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B8 ///
function StoryB8() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB8One();
  console.log('Story-B8');
  clicks = 390;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I had a meeting early in the morning');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function jumpB8() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('and watched how they began to saw the tree');
  textButton.mousePressed(StoryB9);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB8One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB8One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB8x();
  randombuttonsG();
  clicks = 394;
  StoryButton = createButton('COME NOW');
  StoryButton.mousePressed(StoryB8Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB8Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 395;
  StoryButton = createButton('REAL MEN DON’T CRY &#x2596 YOU KNOW');
  StoryButton.mousePressed(StoryB8Three);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB8Three() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 396;
  StoryButton = createButton('DO YOU HEAR ME?');
  StoryButton.mousePressed(StoryB9);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B9 ///
function StoryB9() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB9One();
  console.log('Story-B9');
  clicks = 400;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('from the bottom upwards');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function jumpB9() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('branch by branch');
  textButton.mousePressed(StoryB10);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB9One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB9One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB9x();
  randombuttonsG();
  clicks = 403;
  StoryButton = createButton('NOW THAT DOES IT!');
  StoryButton.mousePressed(StoryB10);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B10 ///
function StoryB10() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB10One();
  console.log('Story-B10');
  clicks = 407;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('when I came back in the evening ');
  StoryButton.mousePressed(nextAbstractA);
  StoryButton.center();
}

function hunnik() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('there was only a heap of branches left');
  textButton.mousePressed(nextAbstractAx3);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function ehtes() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('in its full glory');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function fotosid() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('and take photos in front of it');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function risust() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('but now they just stepped over its remains');
  textButton.mousePressed(nextAbstractA);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function mismulhakkas() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('and I don’t know what came over me');
  textButton.mousePressed(nextAbstractA);
  textButton.center();
}

function oksahunniku() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I went over to the heap of branches');
  textButton.mousePressed(nextStory);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jumpB10() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('and broke off a twig');
  textButton.mousePressed(StoryB11);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB10One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB10One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB10x();
  randombuttonsG();
  clicks = 418;
  StoryButton = createButton('YOU HEAR ME?');
  StoryButton.mousePressed(StoryB11);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B11 ///
function StoryB11() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB11One();
  console.log('Story-B11');
  clicks = 422;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I put it in my coat pocket');
  StoryButton.mousePressed(nextAbstractA);
  StoryButton.center();
}

function unustasin() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('and left it there for the whole day');
  textButton.mousePressed(nextAbstractAx3);
  textButton.center();
}

function jumpB11() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('I found the twig in my pocket');
  textButton.mousePressed(StoryB12);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB11One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB11One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB11x();
  randombuttonsG();
  clicks = 427;
  StoryButton = createButton('GODDAMNIT');
  StoryButton.mousePressed(StoryB11Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB11Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 428;
  StoryButton = createButton('I SAID');
  StoryButton.mousePressed(StoryB11Three);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB11Three() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 429;
  StoryButton = createButton('THAT’S ENOUGH!');
  StoryButton.mousePressed(StoryB12);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B12 ///
function StoryB12() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB12One();
  console.log('Story-B12');
  clicks = 433;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I was wondering what to do with it');
  StoryButton.mousePressed(nextAbstractAx3);
  StoryButton.center();
}

function viskaks() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('maybe I should just throw it away');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jumpB12() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('why should I get rid of it straight away');
  textButton.mousePressed(StoryB13);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB12One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB12One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB12x();
  randombuttonsG();
  clicks = 439;
  StoryButton = createButton('WHAT THE HELL!');
  StoryButton.mousePressed(StoryB12Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB12Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 440;
  StoryButton = createButton('NOW YOU START PROTECTING HIM');
  StoryButton.mousePressed(StoryB12Three);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB12Three() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 441;
  StoryButton = createButton('BECAUSE OF A FREAKING DEAD TREE?!');
  StoryButton.mousePressed(StoryB13);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B13 ///
function StoryB13() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB13One();
  console.log('Story-B13');
  clicks = 445;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I took a small bottle of vodka from the minibar');
  StoryButton.mousePressed(nextAbstractA);
  StoryButton.center();
}

function kallasin() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('poured out the drink');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function vee() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('filled the bottle with tap water');
  textButton.mousePressed(nextAbstractAx3);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function jumpB13() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('and stuck the twig in it');
  textButton.mousePressed(StoryB14);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB13One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB13One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB13x();
  randombuttonsG();
  clicks = 450;
  StoryButton = createButton('ALL RIGHT');
  StoryButton.mousePressed(StoryB13Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB13Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 451;
  StoryButton = createButton('NEXT YEAR I’ll LEAVE IT HERE TO DRY THEN');
  StoryButton.mousePressed(StoryB13Three);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB13Three() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 452;
  StoryButton = createButton('IS THAT WHAT YOU WANT?');
  StoryButton.mousePressed(StoryB13Four);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB13Four() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 453;
  StoryButton = createButton('A CORPSE IN THE LIVING ROOM!');
  StoryButton.mousePressed(StoryB14);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B14 ///
function StoryB14() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB14One();
  console.log('Story-B14');
  clicks = 457;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('now I don’t even know');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function midamasellegateen() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('what to do with it');
  textButton.mousePressed(nextAbstractAx3);
  textButton.center();
}

function jumpB14() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('maybe it will take root?');
  textButton.mousePressed(StoryB15);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB14One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB14One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB14x();
  randombuttonsG();
  clicks = 461;
  StoryButton = createButton('FUCK');
  StoryButton.mousePressed(StoryB14Two);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB14Two() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 462;
  StoryButton = createButton('I’M NOT ANGRY');
  StoryButton.mousePressed(StoryB14Three);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB14Three() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 463;
  StoryButton = createButton('IT’S JUST THAT');
  StoryButton.mousePressed(StoryB14Four);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB14Four() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 464;
  StoryButton = createButton('JESUS CHRIST');
  StoryButton.mousePressed(StoryB14Five);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

function StoryB14Five() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsG();
  clicks = 465;
  StoryButton = createButton('DON’T BE SUCH A FUCKING BABY!!');
  StoryButton.mousePressed(StoryB15);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B15 ///
function StoryB15() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB15One();
  console.log('Story-B15');
  clicks = 469;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('if it does &#x2596 I’ll take it home with me');
  StoryButton.mousePressed(nextAbstractAx2);
  StoryButton.center();
}

function jumpB15() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('and plant it in the garden');
  textButton.mousePressed(StoryB16);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(StoryB15One);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function StoryB15One() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB15x();
  randombuttonsG();
  clicks = 472;
  StoryButton = createButton('TO HELL WITH IT &#x2596 I’VE HAD ENOUGH!!');
  StoryButton.mousePressed(StoryB16);
  StoryButton.style('color', '#444444');
  const dw = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        //dancingWords.push(dw);
}

/// STORY B16 ///
function StoryB16() {
  clearup();
  removeAllButtons();
  clickSND();
  presetB16One();
  console.log('Story-B16');
  clicks = 476;
  bcolTarget = 15;
  easing = 0.25;
  StoryButton = createButton('I’ll tell Sander &#x2594');
  StoryButton.mousePressed(nextStory);
  StoryButton.center();
}

function emam() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('that it’s in memory of his mother');
  textButton.mousePressed(nextAbstractAx2);
  const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function omastkaest() {
  clearup();
  removeAllButtons();
  clickSND();
  textButton = createButton('or that now we have our own Christmas tree');
  textButton.mousePressed(nextAbstractA);
  textButton.center();
}

function jumpB16() {
  clearup();
  removeAllButtons();
  clickSND();
  flashMute();
  textButton = createButton('and there’s no need to cut it down anymore');
  textButton.mousePressed(nextStory);
  textButton.center();
  boxButton = createButton('&#x258a');
  boxButton.mousePressed(yellow);
  boxButton.style('color', '#FFDB43');
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
}

function yellow() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsB();
  player.stop();
  yellowButton = createButton('&#x258a')
  yellowButton.style('color', (15, 15, 15));
  const dw = new DanceSpan(yellowButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);
  yellowButton.mousePressed(nextStory);
}

/// GLITCH B
function GlitchB() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextGlitchB();
  addR2();
  fmSynth.triggerAttackRelease(random(27, 28), random(0.015, 0.75));  //(pitch.min, pitch.max) + length in seconds
  fmSynth.volume.value = random(-24, -12);
  fmSynth.harmonicity.value = random(0.15, 0.25);
  fmSynth.modulationIndex = random(5.0, 10.0);
}

/// NEXT GLITCH B
function nextGlitchB() {
  clearup();
  clickSND();
  const textButton = createButton(symbolsmixedB.getString(clicksR2, 0));
        textButton.mousePressed(nextSymbolsNoise);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.95), random(displayHeight * 0.1, displayHeight * 0.95));
        dancingWords.push(dw);     
}

//////// C
/// STORY C1 ///
function StoryC() {
  clearup();
  removeAllButtons();
  clickSND();
  randombuttonsMass();
  clicks = 500;
  bcol = 25;
  console.log('Story-C1');
  presetC1Zero();
  StoryButton = createButton('it often happens to me that');
  StoryButton.mousePressed(flashC);
  const dwB = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  boxButton = createButton('&#x2596');
  boxButton.mousePressed(nextStoryC);
  const dw = new DanceSpan(boxButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
  dancingWords.push(dw);
}

/// FLASH
function flash() { 
  bcol += 25;
  FM();
}

function flashC() { 
  amt = random(100);
  FM();
}

function flashMute() { 
  bcol += 25;
}

/// FM
function FM() { 
  fmSynth.triggerAttackRelease(random(1550, 2550), random(0.05, 0.15));  //(pitch.min, pitch.max) + length in seconds
  fmSynth.volume.value = random(-36, -18);
  fmSynth.harmonicity.value = random(0.15, 0.85);
  fmSynth.modulationIndex = random(5.0, 75.0);
}

function nextSymbolC() { //NEXT SYMBOL C
  //clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextAbstract);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}

/// NEXT STORY C
function nextStoryC() { 
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextStoryStringC();
  addOne();
  clickSND();
  filterAdd.frequency += 100;
}

/// NEXT STORY SENCTENCE C
function nextStoryStringC() {
  clearup();
  randombuttonsMass();
  StoryButton = createButton(story.getString(clicks, 0));
  StoryButton.mousePressed(flashC);
  const dwA = new DanceSpan(StoryButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));

  textButton = createButton('&#x2596');
  textButton.mousePressed(nextStoryC);
  const dwB = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dwB);
}

//// GLITCH C
function GlitchC() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextGlitchC();
  addR3();
  presetCEnd();
  fmSynth.triggerAttackRelease(random(27, 28), random(0.015, 0.75));  //(pitch.min, pitch.max) + length in seconds
  fmSynth.volume.value = random(-24, -12);
  fmSynth.harmonicity.value = random(0.15, 0.75);
  fmSynth.modulationIndex = random(5.0, 85.0);
}

/// NEXT GLITCH C
function nextGlitchC() {
  clearup();
  clickSND();
  const textButton = createButton(symbolsmixedC.getString(clicksR3, 0));
        textButton.mousePressed(nextSymbolsNoise);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.95), random(displayHeight * 0.1, displayHeight * 0.95));
        dancingWords.push(dw);     
}




function abstractGlitch() { //ABSTRACT GLITCH
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolWide();
  addR();
  fmSynth.triggerAttackRelease(random(55, 61.74), random(0.15, 0.25));  //(pitch.min, pitch.max) + length in seconds
  fmSynth.volume.value = random(-36, -18);
  noiseSynth.triggerAttackRelease("16n");
  noiseSynth.volume.value = random(-72, -56);
}

function nextSymbolWide() { //NEXT SYMBOL WIDE
  clearup();
  const wordButton = createButton(symbols.getString(clicksR, 0));
        wordButton.mousePressed(nextAbstract);
        const dw = new DanceSpan(wordButton, random(displayWidth * 0.1, displayWidth * 0.9), random(displayHeight * 0.1, displayHeight * 0.9));
        dancingWords.push(dw);     
}

function nextSymbolsNoise() { //NEXT ABSTRACT SYMBOL + NOISE
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  nextSymbolNoise();
  addOne();
  addR();
  noiseSynth.triggerAttackRelease("16n");
  noiseSynth.volume.value = random(-42, -32);
}

function nextSymbolNoise() {  //NEXT SYMBOL NOISE
  clearup();
  const textButton = createButton(symbols.getString(clicksR, 0));
        textButton.mousePressed(nextSymbolsNoise);
        const dw = new DanceSpan(textButton, random(displayWidth * 0.1, displayWidth * 0.75), random(displayHeight * 0.1, displayHeight * 0.75));
        dancingWords.push(dw);     
}
/// MARKOV + BROWNIAN MOVEMENT
function markov() {
  clearup();
  var currentGram = random(beginnings);
  var result = currentGram;

  for (var i = 0; i < 60; i++) {
    var possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }
    var next = random(possibilities);
    result += next;
    var len = result.length;
    currentGram = result.substring(len - order, len);
  }
  createP(result).addClass('text').hide();
  const texts = selectAll('.text');
  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const textButton = createButton(words[j]); ///////
      textButton.mousePressed(nextWord);
      const dw = new DanceSpan(textButton, random(displayWidth * 0.2, displayWidth * 0.75), random(displayHeight * 0.2, displayHeight * 0.75));
      dancingWords.push(dw);
    }
  }
}

function nextWord() {
  dancingWords.length = 0
  clearup();
  removeAllButtons();
  markov();
  addOne(); //counter function
  clickSND();
}


//////////////////////////
// MECHANICAL FUNCTIONS //
//////////////////////////

// CLEAR
function removeAllButtons() {
  const buttons = selectAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove();
  }
}
function clearup() {
  removeElements();
  removeAllButtons();
}

// PROCEED
function mouseClicked() {
  if (clicks == 292) {
    addOne(); 
  }
  if (clicks == 485) {
    addOne(); 
  }
  if (clicks == 582) {
    addOne();
  }
  if (clicks == 583) {
    forget(); 
  }
  
}

// RANDOM CLICKS
var clicksR = 0;
function addR() {
  clicksR = Math.floor((Math.random() * 25) + 1);
}

var clicksR2 = 0;
function addR2() {
  clicksR2 = Math.floor((Math.random() * 59) + 1);
}

var clicksR3 = 0;
function addR3() {
  clicksR3 = Math.floor((Math.random() * 61) + 1);
}

///////////////////////////
////// D - R - A - W //////
///////////////////////////

function draw() {

  bcol += ((bcolTarget - bcol) * easing);

  // TIMER
  if (clicks >= 1 && frameCount % 60 == 0 && timer > 0) { timer--; } if (timer == 0) { easing = 0.005; bcol++; }

  background(bcol)
  
  // GLITCH
  if (clicks == 292) { GlitchA(); bcol = random(0, 20); }
  if (clicks == 485) { GlitchB(); bcol = random(0, 20); }
  if (clicks == 582) { GlitchC(); bcol = random(0, 20); }

  //A
  if (clicks > 164 && clicks <= 186) { bcol = random(5, 13); }
  if (clicks > 218 && clicks <= 240) { bcol = random(5, 9); }
  //B
  if (clicks == 328) { bcol = 255; easing = 0.05; }
  if (clicks == 337) { bcol = 255; easing = 0.05; }
  if (clicks == 338) { bcol = 255; easing = 0.05; }
  if (clicks == 349) { bcol = 255; easing = 0.05; }
  if (clicks == 350) { bcol = 255; easing = 0.05; }
  if (clicks == 360) { bcol = 255; easing = 0.05; }
  if (clicks == 361) { bcol = 255; easing = 0.05; }
  if (clicks == 368) { bcol = 255; easing = 0.05; }
  if (clicks == 375) { bcol = 255; easing = 0.05; }
  if (clicks == 376) { bcol = 255; easing = 0.05; }
  if (clicks == 385) { bcol = 255; easing = 0.05; }
  if (clicks == 386) { bcol = 255; easing = 0.05; }
  if (clicks == 394) { bcol = 255; easing = 0.05; }
  if (clicks == 395) { bcol = 255; easing = 0.05; }
  if (clicks == 396) { bcol = 255; easing = 0.05; }
  if (clicks == 403) { bcol = 255; easing = 0.05; }
  if (clicks == 418) { bcol = 255; easing = 0.05; }
  if (clicks == 427) { bcol = 255; easing = 0.05; }
  if (clicks == 428) { bcol = 255; easing = 0.05; }
  if (clicks == 429) { bcol = 255; easing = 0.05; }
  if (clicks == 439) { bcol = 255; easing = 0.05; }
  if (clicks == 440) { bcol = 255; easing = 0.05; }
  if (clicks == 441) { bcol = 255; easing = 0.05; }
  if (clicks == 450) { bcol = 255; easing = 0.05; }
  if (clicks == 451) { bcol = 255; easing = 0.05; }
  if (clicks == 452) { bcol = 255; easing = 0.05; }
  if (clicks == 453) { bcol = 255; easing = 0.05; }
  if (clicks == 461) { bcol = 255; easing = 0.05; }
  if (clicks == 462) { bcol = 255; easing = 0.05; }
  if (clicks == 463) { bcol = 255; easing = 0.05; }
  if (clicks == 464) { bcol = 255; easing = 0.05; }
  if (clicks == 465) { bcol = 255; easing = 0.05; }
  if (clicks == 472) { bcol = 255; easing = 0.05; }
  if (clicks == 484) { fill(255, 219, 67, 200); rect(0, 0, width, height); }

  //C
  if (clicks > 499 && clicks <= 581) { background(lerpColor(startColor, newColor, smoothstep(0.1,0.25,amt)));
    amt += 0.001;
    if(amt >= 1){
      amt = 0.0;
      startColor = newColor;
      newColor = color(random(175),random(175),random(175));
    } 
  }
  if (clicks > 499 && clicks <= 581) { fill(5, 5, 5, 200); rect(0, 0, width, height); }

  // BROWNIAN MOVEMENT
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }
}

/////////////////////////
//////// AUDIO ENGINE ->
////////////////////////

/// AUDIO ACTIVATION ///
var loop;
document.querySelector('#start').addEventListener('click', async () => {
  await Tone.start()
  console.log('audio is ready')
})

/// TEMPO ///
Tone.Transport.bpm.value = 20;
/////////////

//// CLICKS
var filelistCK = ["assets/audio/sampler/ck1.wav", "assets/audio/sampler/ck2.wav", "assets/audio/sampler/ck3.wav", "assets/audio/sampler/ck4.wav", "assets/audio/sampler/ck5.wav", "assets/audio/sampler/ck6.wav", 
"assets/audio/sampler/ck7.wav", "assets/audio/sampler/ck8.wav", "assets/audio/sampler/ck9.wav", "assets/audio/sampler/ck10.wav", "assets/audio/sampler/ck11.wav", "assets/audio/sampler/ck12.wav", 
"assets/audio/sampler/ck13.wav", "assets/audio/sampler/ck14.wav", "assets/audio/sampler/ck15.wav", "assets/audio/sampler/ck16.wav", "assets/audio/sampler/ck17.wav", "assets/audio/sampler/ck18.wav", 
"assets/audio/sampler/ck19.wav", "assets/audio/sampler/ck20.wav", "assets/audio/sampler/ck21.wav", "assets/audio/sampler/ck22.wav", "assets/audio/sampler/ck23.wav", "assets/audio/sampler/ck24.wav", 
"assets/audio/sampler/ck25.wav", "assets/audio/sampler/ck26.wav", "assets/audio/sampler/ck27.wav", "assets/audio/sampler/ck28.wav", "assets/audio/sampler/ck29.wav", "assets/audio/sampler/ck30.wav",
"assets/audio/sampler/ck31.wav", "assets/audio/sampler/ck32.wav", "assets/audio/sampler/ck33.wav", "assets/audio/sampler/ck34.wav", "assets/audio/sampler/ck35.wav", "assets/audio/sampler/ck36.wav",
"assets/audio/sampler/ck37.wav", "assets/audio/sampler/ck38.wav", "assets/audio/sampler/ck39.wav", "assets/audio/sampler/ck40.wav", "assets/audio/sampler/ck41.wav", "assets/audio/sampler/ck42.wav",
"assets/audio/sampler/ck43.wav", "assets/audio/sampler/ck44.wav", "assets/audio/sampler/ck45.wav", "assets/audio/sampler/ck46.wav", "assets/audio/sampler/ck47.wav", "assets/audio/sampler/ck48.wav",
"assets/audio/sampler/ck49.wav", "assets/audio/sampler/ck50.wav", "assets/audio/sampler/ck51.wav", "assets/audio/sampler/ck52.wav", "assets/audio/sampler/ck53.wav", "assets/audio/sampler/ck54.wav", 
"assets/audio/sampler/ck55.wav", "assets/audio/sampler/ck56.wav", "assets/audio/sampler/ck57.wav", "assets/audio/sampler/ck58.wav", "assets/audio/sampler/ck59.wav", "assets/audio/sampler/ck60.wav",
"assets/audio/sampler/ck61.wav"]
var buffCK = new Tone.Buffers(filelistCK, () => {
  console.log("loaded", buffCK);
})
const playerCK = new Tone.Player({
  "volume": -6,
  "loop": false,
  "autostart": false,
})

//// SAMPLE PLAYER
var filelist = ["assets/audio/A4.mp4", "assets/audio/A1.mp4", "assets/audio/A5.mp4", "assets/audio/sammud.mp4"]
var buff = new Tone.Buffers(filelist, () => {
  console.log("loaded", buff);
})
const player = new Tone.Player({
  "volume": -2,
  "loop": false,
  "autostart": false,
  "fadeIn": fader,
  "fadeOut": fader,
})

//// SAMPLE PLAYER FX
var filelist2 = ["assets/audio/unustab.mp4", "assets/audio/const.mp4", "assets/audio/madal.mp4", "assets/audio/intro.mp4"]
var buffFX = new Tone.Buffers(filelist2, () => {
  console.log("loaded", buffFX);
})
const playerFX = new Tone.Player({
  "volume": -2,
  "loop": true,
  "autostart": false,
  "fadeIn": faderTwo,
  "fadeOut": faderTwo,
})

//// SAMPLE PLAYER ADDITIONAL
var filelistAdd = ["assets/audio/arp.mp4", "assets/audio/arp2.mp4", "assets/audio/ether.mp4", "assets/audio/bend.mp4", "assets/audio/arploop.mp4"]
var buffAdd = new Tone.Buffers(filelistAdd, () => {
  console.log("loaded", buffAdd);
})
const playerAdd = new Tone.Player({
  "volume": -8,
  "loop": true,
  "autostart": false,
  "fadeIn": 0.15,
  "fadeOut": 0.75
})

//// FM SYNTH
const fmSynth = new Tone.FMSynth();
fmSynth.volume.value = -20;
////  NOISE SYNTH
const noiseSynth = new Tone.NoiseSynth({
  envelope : {
    attack : 0.025,
    decay : 0.025,
    sustain : 0.025
    }
})
noiseSynth.volume.value = -36;

//// //// AUDIO FX CONTROLS  
var loopinterval = 1250;
var fader = 0.75;
var faderTwo = 1;
var pitchshift = 0;
var pitchshift2 = 0;

//// //// AUDIO FX
const pitch = new Tone.PitchShift(pitchshift);
const pitchFX = new Tone.PitchShift(pitchshift2);
const filter = new Tone.Filter(50, "lowpass");
const filterFX = new Tone.Filter(22000, "lowpass");
const filterAdd = new Tone.Filter(22000, "lowpass");
const filterNotch = new Tone.Filter(500, "notch");
const phaser = new Tone.Phaser(15, 8, 250);
const delay = new Tone.PingPongDelay("16n", 0.55); //delayTime, feedback
const delayMedium = new Tone.PingPongDelay("8n", 0.75); //delayTime, feedback
const delayXL = new Tone.FeedbackDelay("4n", 0.15);
const reverb = new Tone.Freeverb(0.2);
const reverbLong = new Tone.Freeverb(0.75)
const comp = new Tone.Compressor(-12, 2.5);
const compFinal = new Tone.Compressor(-6, 1.5);

//// //// AUDIO FX CHAIN
fmSynth.connect(compFinal)
reverbLong.connect(compFinal)
delayMedium.connect(compFinal)
////
noiseSynth.connect(compFinal)
////
player.connect(pitch)
pitch.connect(filter)
filter.connect(delay)
delay.connect(reverb)
reverb.connect(comp)
comp.connect(compFinal)
////
playerFX.connect(pitchFX)
pitchFX.connect(filterFX)
filterFX.connect(compFinal)
////
playerCK.connect(phaser)
phaser.connect(compFinal)
filterNotch.connect(compFinal)
////
playerAdd.connect(filterAdd)
filterAdd.connect(compFinal)
////
compFinal.toMaster()

////////////////////////////////
//////// END OF AUDIO MACHINE <-
////////////////////////////////

/////////////////////////
///// AUDIO PRESETS /////
/////////////////////////

// CLICK
function clickSND() {
  playerCK.buffer = buffCK.get(Math.floor(Math.random() * 60));
  playerCK.start();
}

//INTRO

function presetIntro() {
  playerFX.buffer = buffFX.get(3);
  playerFX.start();
}

//A1 -

function presetA1() {
  player.buffer = buff.get(0);
  pitch.pitch = 0;
  filter.frequency.rampTo(100, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

function presetA1Reset() {
  pitch.pitch = 0;
  filter.frequency.rampTo(100, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

function presetA1Two() {
  filter.frequency.rampTo(150, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2000)
}

function presetA1Three() {
  playerFX.stop();
  filter.frequency.rampTo(500, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 1750)
}

function presetA1Four() {
  filter.frequency.rampTo(225, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 1500)
}

function presetA1Five() {
  filter.frequency.rampTo(150, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 1250)
}

function presetA1Six() {
  filter.frequency.rampTo(100, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 1000)
}

function presetA1Seven() {
  player.buffer = buff.get(1);
  pitch.pitch = 0;
  filter.frequency.rampTo(50, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2000)
}

// A2 -

function presetA2One() {
  filter.frequency.rampTo(500, 0.5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 4000)
}

function presetA2Two() {
  filter.frequency.rampTo(100, 1);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 3000)
}

function presetA2Three() {
  player.buffer = buff.get(0);
  pitch.pitch = 0;
  filter.frequency.rampTo(100, 1);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2750)
}

function presetA2Four() {
  filter.frequency.rampTo(250, 1);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

function presetA2Reset() {
  player.buffer = buff.get(1);
  filter.frequency.rampTo(500, 0.5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

// A3 -

function presetA3One() {
  playerAdd.buffer = buffAdd.get(0);
  playerAdd.start();
  filterAdd.frequency.rampTo(22000, 0);
  filter.frequency.rampTo(500, 2.5);
  console.log('ARP');
}

function presetA3Two() {
  player.buffer = buff.get(0);
  pitch.pitch = 0;
  filter.frequency.rampTo(100, 5);
}

// A5 -

function presetA5Zero() {
  player.buffer = buff.get(1);
  player.start();
  filterAdd.frequency.rampTo(0, 5);
}

function presetA5Low() {
  pitch.pitch = -0.25;
  playerAdd.buffer = buffAdd.get(2);
  playerAdd.start();
  pitchFX.pitch = 0;
  playerFX.buffer = buffFX.get(2);
  playerFX.start();
  filter.frequency.rampTo(1000, 1);
  filterFX.frequency.rampTo(500, 1);
  filterAdd.frequency.rampTo(22000, 0.1);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { playerFX.start() }, 10000)
}

function presetA5Two() {
  pitch.pitch = -0.5;
}

function presetA5Three() {
  pitch.pitch = -0.75;
}

function presetA5Four() {
  pitch.pitch = -1;
}

function presetA5Five() {
  pitch.pitch = -1.25;
}

function presetA5Six() {
  pitch.pitch = -1.5;
}

function presetA5Seven() {
  pitch.pitch = -1.75;
}

function presetA5Eight() {
  pitch.pitch = -2;
}

function presetA5Nine() {
  pitch.pitch = -2.25;
}

function presetA5Ten() {
  pitch.pitch = -2.5;
}

function presetA5Eleven() {
  pitch.pitch = -2.75;
}

function presetA5Twelve() {
  pitch.pitch = -3;
}

function presetA5Stop() {
  playerAdd.stop();
  filterFX.frequency.rampTo(0, 1.5);
}

function presetA5Stop2() {
  player.stop();
  playerFX.stop();
}

// A6 -

function presetA6One() {
  playerAdd.buffer = buffAdd.get(1);
  playerAdd.start();
  player.buffer = buff.get(3);
  filter.frequency.rampTo(0, 0.1);
  pitch.pitch = 0;
  pitchFX.pitch = 0;
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

function presetA6Two() {
  playerAdd.buffer = buffAdd.get(0);
  filterFX.frequency.rampTo(100, 5);
}

function presetA6Three() {
  filterAdd.frequency.rampTo(22000, 5);
  playerFX.buffer = buffFX.get(1);
  playerFX.start();
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { playerFX.start() }, 1750)
}

function presetA6Four() {
  filter.frequency.rampTo(350, 5);
  player.start();
}

// A7 -

function presetA7One() {
  filter.frequency.rampTo(0, 5);
}

function presetA7Two() {
  filterFX.frequency.rampTo(0, 5);
}

function presetA7Stop() {
  playerAdd.stop();;
}

// A8 -

function presetA8One() {
  player.buffer = buff.get(0);
  player.start();
  pitch.pitch = 0;
  filter.frequency.rampTo(150, 2,5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2750)
}

function presetA8One2() {
  pitch.pitch = 0;
  filter.frequency.rampTo(200, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

function presetA8One3() {
  pitch.pitch = 0;
  filter.frequency.rampTo(150, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2000)
}

function presetA8Two() {
  playerAdd.buffer = buffAdd.get(0);
  playerAdd.start();
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2500)
}

function presetA8Three() {
  filter.frequency.rampTo(350, 0.5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2250)
}

function presetA8Four() {
  filter.frequency.rampTo(500, 5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 2000)
}

function presetA8Five() {
  player.buffer = buff.get(2);
  filter.frequency.rampTo(300, 2.5);
  if (typeof loop != "undefined") { clearInterval(loop) } loop = setInterval(() => { player.start() }, 1750)
}

// A9 -

function presetA9One() {
  filter.frequency.rampTo(150, 5);
}

function presetA9Two() {
  filter.frequency.rampTo(100, 10);
  filterAdd.frequency.rampTo(500, 10);
}

function presetA9Three() {
  filter.frequency.rampTo(0, 10);
  filterAdd.frequency.rampTo(0, 10);
}

function presetA9Stop() {
  player.stop();
  playerAdd.stop();
}

////////
//B1 -

function presetB1One() {
  playerAdd.buffer = buffAdd.get(4);
  filterAdd.frequency.rampTo(350, 0.1);
  playerAdd.start();
  playerFX.buffer = buffFX.get(0);
  filterFX.frequency.rampTo(25, 0);
  playerFX.start();
}

function presetB1Two() {
  filterAdd.frequency.rampTo(400, 2.5);
}

function presetB1Three() {
  filterAdd.frequency.rampTo(475, 2.5);
}

function presetB1Four() {
  filterAdd.frequency.rampTo(550, 2.5);
}

function presetB1Five() {
  filterAdd.frequency.rampTo(625, 2.5);
}

function presetB1Six() {
  filterAdd.frequency.rampTo(700, 2.5);
}

function presetB1Seven() {
  filterAdd.frequency.rampTo(775, 2.5);
}

function presetB1x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B2 -

function presetB2One() {
  filterAdd.frequency.rampTo(350, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB2x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B3 -

function presetB3One() {
  filterAdd.frequency.rampTo(400, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB3x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B4 -

function presetB4One() {
  filterAdd.frequency.rampTo(450, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB4x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B5 -

function presetB5One() {
  filterAdd.frequency.rampTo(500, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB5x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B6 -

function presetB6One() {
  filterAdd.frequency.rampTo(600, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB6x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B7 -

function presetB7One() {
  filterAdd.frequency.rampTo(750, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB7x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B8 -

function presetB8One() {
  filterAdd.frequency.rampTo(1000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB8x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B9 -

function presetB9One() {
  filterAdd.frequency.rampTo(1500, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB9x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B10 -

function presetB10One() {
  filterAdd.frequency.rampTo(3000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB10Two() {
  filterAdd.frequency.rampTo(3500, 0.25);
}

function presetB10Three() {
  filterAdd.frequency.rampTo(4000, 0.25);
}

function presetB10Four() {
  filterAdd.frequency.rampTo(4500, 0.25);
}

function presetB10Five() {
  filterAdd.frequency.rampTo(5000, 0.25);
}

function presetB10x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B11 -

function presetB11One() {
  filterAdd.frequency.rampTo(7500, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB11x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B12 -

function presetB12One() {
  filterAdd.frequency.rampTo(10000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB12x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B13 -

function presetB13One() {
  filterAdd.frequency.rampTo(15000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB13x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B14 -

function presetB14One() {
  filterAdd.frequency.rampTo(20000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB14x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B15 -

function presetB15One() {
  filterAdd.frequency.rampTo(22000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB15x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

//B16 -

function presetB16One() {
  filterAdd.frequency.rampTo(22000, 0.25);
  filterFX.frequency.rampTo(25, 0.25);
}

function presetB16x() {
  filterAdd.frequency.rampTo(25, 0.25);
  filterFX.frequency.rampTo(22000, 0.25);
}

function presetB16Two() {
  filterAdd.frequency.rampTo(8000, 5);
}

function presetB16Three() {
  filterAdd.frequency.rampTo(2000, 4);
}

function presetB16Four() {
  filterAdd.frequency.rampTo(500, 2.5);
}

//B END -

function presetBEnd() {
  filterAdd.frequency.rampTo(25, 2.5);
  playerAdd.stop();
  filterFX.frequency.rampTo(25, 0.25);
  playerFX.stop();
}


////////
//C1 -

function presetC1Zero() {
  playerAdd.buffer = buffAdd.get(3);
  filterAdd.frequency.rampTo(22000, 0);
  playerAdd.start();
}

function presetC1One() {
  filterAdd.frequency.rampTo(250, 5);
}

function presetCEnd() {
  filterAdd.frequency.rampTo(0, 0.5);
  playerAdd.stop();
}