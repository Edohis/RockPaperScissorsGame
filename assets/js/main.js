(function() {
  "use strict";
  
  /**---- TRANSLATIONS ----**/
  
  const stringMainText = {
    en: {
      Title: "Rock, Paper & Scissors - The Game | Christopher Rieffel",
      Rock: "Rock,",
      Paper: "Paper,",
      Scissors: "Scissors",
      TheClassicGame: "- The classic game",
      Back: "Back",
      Start: "Start",
      ChooseLanguage: "Choose language",
      ChooseYourLanguage: "Choose your language",
      ChooseYourMode: "Choose your mode",
      VsIa: "vs. IA",
      VsHuman: "vs. Humain",
      ChooseYourDifficulty: "Choose your difficulty",
      Easy: "Easy",
      Normal: " Normal",
      Hard: "Hard",
      Hell: "Hell",
      HowManyRounds: "How many rounds",
      WouldYouLikeToPlay: "would you like to play?",
      Unlimited: "Unlimited",
      EnabledDataStorage: "Enable data storage",
      Score: "Score",
      Play: "Play",
      Draw: "Draw",
      Round: "Round",
      ItsMeContinue: "It's me. Continue.",
      Result: "Result",
      ActRock: "Rock",
      ActPaper: "Paper",
      ActScissors: "Scissors",
      ChooseYourAction: "Choose your action",
      End: "End",
      WouldYouLikeARemarch: "Would you like a rematch?",
      Restart: "Yes. Restart!"
    },
    fr: {
      Title: "Pierre, Papier & Ciseaux - Le jeu | Christopher Rieffel",
      Rock: "Pierre,",
      Paper: "Papier,",
      Scissors: "Ciseaux",
      TheClassicGame: "- Le jeu classique",
      Back: "Retour",
      Start: "Start",
      ChooseLanguage: "Choisir la langue",
      ChooseYourLanguage: "Choix de la langue",
      ChooseYourMode: "Choix du mode",
      VsIa: "vs. Robot",
      VsHuman: "vs. Humain",
      ChooseYourDifficulty: "Choix de la difficulté",
      Easy: "Facile",
      Normal: "Normal",
      Hard: "Difficile",
      Hell: "Impossible",
      HowManyRounds: "Combien de tours",
      WouldYouLikeToPlay: "souhaitez-vous jouer ?",
      Unlimited: "Illimité",
      EnabledDataStorage: "Activé les stockage des données",
      Score: "Score",
      Play: "Jouer",
      Draw: "Égalité",
      Round: "Tour",
      ItsMeContinue: "C'est moi. Continuer.",
      Result: "Résultat",
      ActRock: "Pierre",
      ActPaper: "Papier",
      ActScissors: "Ciseaux",
      ChooseYourAction: "Choisissez votre action",
      End: "Fin",
      WouldYouLikeARemarch: "Voulez-vous une revanche ?",
      Restart: "Oui. Recommencer !"
    }
  };
  
  const stringPlayText = {
    en: {
      Player: "Player",
      Robot: "Robot",
      Unlimited: "Unlimited",
      Rock: "Rock",
      Paper: "Paper",
      Scissors: "Scissors",
      PlayerPlay: "Player is your turn",
      PlayerAPlay: "First player is your turn",
      PlayerBPlay: "Second player is your turn",
      PlayerWinRound: "You win this round!",
      PlayerLossRound: "You loss this round!",
      PlayerDrawRound: "It's a draw!",
      PlayerAWin: "First player win this round!",
      PlayerBWin: "Second player win this round!",
      EndWinVsIa: "You win this game!",
      EndLossVsIa: "You loss this game!",
      EndDraw: "It's a draw!<br />No winner! No losser!",
      EndWinAVsHuman: "First play win this game!",
      EndLossAVsHuman: "Second player win this game!",
      EndGiveUp: "Too bad!<br />You've given up on this game.",
      EndAGiveUp: "Too bad!<br />First player has given up this game.",
      EndBGiveUp: "Too bad!<br />Second player has given up this game."
    },
    fr: {
      Player: "Joueur",
      Robot: "Robot",
      Unlimited: "Illimité",
      Rock: "Pierre",
      Paper: "Papier",
      Scissors: "Ciseaux",
      PlayerPlay: "Tour du joueur",
      PlayerAPlay: "Tour du joueur n°1",
      PlayerBPlay: "Tour du joueur n°2",
      PlayerWinRound: "Vous avez gagné(e) ce round !",
      PlayerLossRound: "Vous avez perdu ce tour !",
      PlayerDrawRound: "C'est une égalité !",
      PlayerAWin: "Joueur n°1 a gagné(e) ce round!",
      PlayerBWin: "Joueur n°2 a gagné(e) ce round!",
      EndWinVsIa: "Vous avez gagné(e) cette partie !",
      EndLossVsIa: "Vous avez perdu cette partie !",
      EndDraw: "C'est une égalité !<br />Ni gagnant, ni perdant !",
      EndWinAVsHuman: "Joueur n°1 a gagné(e) cette partie !",
      EndLossAVsHuman: "Joueur n°2 a gagné(e) cette partie !",
      EndGiveUp: "Dommage !<br />Vous avez abandoné(e) cette partie.",
      EndAGiveUp: "Dommage !<br />Joueur n°1 a abandonné(e) cette partie.",
      EndBGiveUp: "Dommage !<br />Joueur n°2 a abandonné(e) cette partie."
    }
  };
  
  const SetLanguage = (language) => {
    const strings = document.querySelectorAll("[data-i18n-key]");
    strings.forEach((string) => {
      const key = string.getAttribute("data-i18n-key");
      const translate = stringMainText[language][key];
      if (key === "Title") {
        document.title = translate;
      } else {
        string.textContent = translate;
      }
    });
    return
  };
  
  const GetLanguage = () => {
    const listLangs = ["en", "En", "EN", "fr", "Fr", "FR"];
    let userLang;
    const userBrowserLang = navigator.language || navigator.userLanguage;
    userLang = userBrowserLang.substring(0, 2).toLowerCase();
    if (!listLangs.includes(userLang)) {
      userLang = "en";
    }
    
    //editGameVars("language", userLang);
    return userLang
  };
  
  const lang = GetLanguage();
  SetLanguage(lang);
  
  /**---- VARIABLES ----**/
  
  const gameVars = {
    language: GetLanguage(),
    roundTotal: null,
    roundCurrent: 1,
    choiceA: null,
    choiceB: null,
    scoreA: 0,
    scoreB: 0,
    scoreDraw: 0,
    winner: null,
    choices: ["Rock", "Paper", "Scissors"]
  };
  
  const EditGameVars = (key, value) => {
    if (gameVars[key] === value) return
    gameVars[key] = value;
  };
  
  const GetGameVars = (key) => {
    return gameVars[key]
  };
  
  /**---- HELPERS ----**/
  
  //--Selector
  const SelectElement = (element, all = false) => {
    if (all) {
      return [...document.querySelectorAll(element)]
    }
    return document.querySelector(element)
  };
  
  //--Add event listener
  const AddEvent = (type, element, listener, all = false) => {
    let selectItem = SelectElement(element, all);
    if (all) {
      selectItem.forEach(e => e.addEventListener(type, listener));
      return
    }
    selectItem.addEventListener(type, listener);
  };

  //--Add class
  const AddClassTo = (element, classToAdd) => {
    let item = document.querySelector(element); //selectElement(element, all);
    let list = classToAdd.split(" ");

    for (const value in list) {
      if (!item.classList.contains(list[value])) {
        item.classList.add(list[value]);
      };
    };
  };

  //--Remove class
  const RemoveClassTo = (element, classToRemove) => {
    let item = document.querySelector(element);
    let list = classToRemove.split(" ");

    for (const value in list) {
      if (item.classList.contains(list[value])) {
        item.classList.remove(list[value]);
      };
    };
  };
  
  //--Remove all class
  const RemoveAllClass = (element) => {
    let item = document.querySelector(element);
    item.className = "";
  };
  
  //--Remove children
  const RemoveElementChild = (element, all = false) => {
    const item = SelectElement(element, all);
    let child = item.lastElementChild;
    while (child) {
      item.removeChild(child);
      child = item.lastElementChild;
    }
  };

  //--Add hidden to element
  const AddHideToElement = (element) => {
    AddClassTo(element, "hidden");
  };

  //--Remove hidden to element
  const RemoveHideToElement = (element) => {
    RemoveClassTo(element, "hidden");
  };

  //--Write
  const Write = (element, text) => {
    let item = document.querySelector(element);
    item.innerHTML = text;
  };
  
  //--Add icon
  const AddClassIcon = (element, type) => {
    if (type === "Rock") {
      AddClassTo(element, "fa-solid fa-hand-back-fist");
      return
    }
    if (type === "Paper") {
      AddClassTo(element, "fa-solid fa-hand");
      return
    }
    if (type === "Scissors") {
      AddClassTo(element, "fa-solid fa-hand-scissors");
      return
    }
  };
  
  /**---- SCREEN ----**/
  
  const GameReset = () => {
    //*for variables
    EditGameVars("roundTotal", null);
    EditGameVars("roundCurrent", 1);
    EditGameVars("choiceA", null);
    EditGameVars("choiceB", null);
    EditGameVars("scoreA", 0);
    EditGameVars("scoreB", 0);
    EditGameVars("scoreDraw", 0);
    EditGameVars("winner", null);
    //*for not screen home
    const hideElements = ["#HeaderLanguage", "#HeaderRound", "main", "#GameArea", "#GameAreaScore", "#GameAreaPlay", "#GameAreaPlayResult", "#GameAreaPlayWhoseTurn", "#GameAreaPlayChoose", "#PlayEnd"]
    hideElements.forEach(element => {
      AddHideToElement(element);
    });
    //*for screen home
    DisplayScreenHome("show");
  };
  
  const DisplaySettingsBtnBackHome = () =>  {
    AddEvent("click", "#Header.header-settings #HeaderBack #BtnBackHome", function(e) {
      //*for screen round
      AddHideToElement("#HeaderBack");
      AddHideToElement("#HeaderRound");
      //*for screen home
      DisplayScreenHome("show");
    });
  };
  
  const DisplayLanguageBtnBackHome = () => {
    AddEvent("click", "#Header.header-language #HeaderBack #BtnBackHome", function(e) {
      //*for screen language 
      AddHideToElement("#HeaderBack");
      AddHideToElement("#HeaderLanguage");
      //*for screen home
      DisplayScreenHome("show");
    });
  };
  
  const DisplayPlayBtnBackHome = () => {
    AddEvent("click", "#Header.header-play #HeaderBack #BtnBackHome", function(e) {
      //*for screen play
      AddHideToElement("#HeaderBack");
      GameReset();
      //*for screen home
      DisplayScreenHome("show");
    });
  };
  
  const DisplayScreenHome = (display = "show") => {
    if (display === "show") {
      RemoveAllClass("#Header");
      AddClassTo("#Header", "header header-main header-home");
      RemoveHideToElement("#HeaderDesc");
      RemoveHideToElement("#HeaderStart");
      RemoveHideToElement("#HeaderBtnGoLang");
      RemoveHideToElement("#Footer");
      return
    }
    AddHideToElement("#HeaderDesc");
    AddHideToElement("#HeaderStart");
    AddHideToElement("#HeaderBtnGoLang");
    return
  };
  
  const DisplayScreenPlayWhoseTurn = () => {
    const playLanguage = GetGameVars("language");
    let getTotalRound = GetGameVars("roundTotal");
    const getCurrentRound = GetGameVars("roundCurrent");
    
    //btn back home
    DisplayPlayBtnBackHome();
    
    //display screen
    RemoveHideToElement("#GameAreaPlayWhoseTurn");

    //text for round
    Write(".round-cur", getCurrentRound);
    if (getTotalRound === "Unlimited") {
      getTotalRound = stringPlayText[playLanguage]["Unlimited"];
    }
    Write(".round-total", getTotalRound);
    
    //text for who play
    Write("#WhoseTurnTitle", stringPlayText[playLanguage]["PlayerPlay"]);

    return
  };
  
  const DisplayScreenPlayResult = () => {
    const playLanguage = GetGameVars("language");
    
    //generate computer choice
    let choice = Math.floor(Math.random() * gameVars["choices"].length);
    EditGameVars("choiceB", gameVars["choices"][choice]);
    
    //display choice for player/playerA
    const playerChoiceIs = GetGameVars("choiceA");
    Write("#GameAreaPlayResult #BoxPlayerA #LabelA", stringPlayText[playLanguage]["Player"]);
    RemoveAllClass("#GameAreaPlayResult #BoxPlayerA #ChooseIconA");
    AddClassIcon("#GameAreaPlayResult #BoxPlayerA #ChooseIconA", playerChoiceIs);
    Write("#GameAreaPlayResult #BoxPlayerA #ChooseA", stringPlayText[playLanguage][playerChoiceIs]);
    
    //display choice for computer/playerB
    const computerChoiceIs = GetGameVars("choiceB");
    Write("#GameAreaPlayResult #BoxPlayerB #LabelB", stringPlayText[playLanguage]["Robot"]);
    RemoveAllClass("#GameAreaPlayResult #BoxPlayerB #ChooseIconB");
    AddClassIcon("#GameAreaPlayResult #BoxPlayerB #ChooseIconB", computerChoiceIs);
    Write("#GameAreaPlayResult #BoxPlayerB #ChooseB", stringPlayText[playLanguage][computerChoiceIs]);
    
    //check and display winner of the round
    let playerAChoice = GetGameVars("choiceA");
    let playerBChoice = GetGameVars("choiceB");
    let choices = playerAChoice + playerBChoice;
    const choicesWin = ["RockScissors", "PaperRock", "ScissorsPaper"];
    const choicesLoss = ["RockPaper", "PaperScissors", "ScissorsRock"];
    const choicesDraw = ["RockRock", "PaperPaper", "ScissorsScissors"];
    
    if (choicesWin.includes(choices)) {
      EditGameVars("winner", "playerA");
      let scoreForA = GetGameVars("scoreA");
      scoreForA++;
      EditGameVars("scoreA", scoreForA);
    }
    
    else if (choicesLoss.includes(choices)) {
      EditGameVars("winner", "playerB");
      let scoreForB = GetGameVars("scoreB");
      scoreForB++;
      EditGameVars("scoreB", scoreForB);
    }
    
    else if (choicesDraw.includes(choices)) {
      EditGameVars("winner", "none");
      let scoreForDraw = GetGameVars("scoreDraw");
      scoreForDraw++;
      EditGameVars("scoreDraw", scoreForDraw);
    }
    EditGameVars("choiceA", null);
    EditGameVars("choiceB", null);
    
    let winnerRoundIs = GetGameVars("winner");
    
    if (winnerRoundIs === "playerA") {
      Write("#GameAreaPlayResult .result-msg", stringPlayText[playLanguage]["PlayerWinRound"]);
    }
    
    else if (winnerRoundIs === "playerB") {
      Write("#GameAreaPlayResult .result-msg", stringPlayText[playLanguage]["PlayerLossRound"]);
    }
    
    else if (winnerRoundIs === "none") {
      Write("#GameAreaPlayResult .result-msg", stringPlayText[playLanguage]["PlayerDrawRound"]);
    }
    
    return
  };
  
  const DisplayScreenScore = () => {
    const playLanguage = GetGameVars("language");
  
    const playerAScoreIs = GetGameVars("scoreA");
    Write("#ScoreTxtA", stringPlayText[playLanguage]["Player"]);
    Write("#ScoreCurrA", playerAScoreIs);
  
    const playerBScoreIs = GetGameVars("scoreB");
    Write("#ScoreTxtB", stringPlayText[playLanguage]["Robot"]);
    Write("#ScoreCurrB", playerBScoreIs);
  
    const drawScoreIs = GetGameVars("scoreDraw");
    Write("#ScoreCurrDraw", drawScoreIs);
  
    return
  };
  
  const DisplayScreenPlayEnd = (type) => {
    const playLanguage = GetGameVars("language");
    
    //*for screen end
    RemoveHideToElement("#PlayEnd");
    AddHideToElement("#HeaderBack");
    //**game winner is
    if (type === "end") {
      let scoreAEnd = GetGameVars("scoreA");
      let scoreBEnd = GetGameVars("scoreB");
      if (scoreAEnd === scoreBEnd) {
        Write("#PlayEndMsg", stringPlayText[playLanguage]["EndDraw"]);
      }
      else if (scoreAEnd > scoreBEnd) {
        Write("#PlayEndMsg", stringPlayText[playLanguage]["EndWinVsIa"]);
      }
      else if (scoreAEnd < scoreBEnd) {
        Write("#PlayEndMsg", stringPlayText[playLanguage]["EndLossVsIa"]);
      }
    }
    else if (type === "giveUp") {
      Write("#PlayEndMsg", stringPlayText[playLanguage]["EndGiveUp"]);
    }
  };
  
  /**---- ACTIONS ----**/
  
  //--Game Start
  AddEvent("click", "#BtnStartGame", function(e) {
    //*for screen home
    DisplayScreenHome("hide");
    //*for screen round
    RemoveAllClass("#Header");
    AddClassTo("#Header", "header header-main header-settings");
    RemoveHideToElement("#HeaderBack");
    RemoveHideToElement("#HeaderRound");
    AddHideToElement("#Footer");
    DisplaySettingsBtnBackHome();
  });
  
  //--Go to language
  AddEvent("click", "#HeaderBtnGoLang", function(e) {
    //*for screen home
    DisplayScreenHome("hide");
    //*for screen language
    RemoveAllClass("#Header");
    AddClassTo("#Header", "header header-main header-language");
    RemoveHideToElement("#HeaderBack");
    RemoveHideToElement("#HeaderLanguage");
    AddHideToElement("#Footer");
    DisplayLanguageBtnBackHome();
  });
  
  //--Btn lang
  AddEvent("click", "#HeaderLanguage button", function(e) {
    EditGameVars("language", this.getAttribute("data-lang"));
    const currentLang = GetGameVars("language");
    SetLanguage(currentLang);
  }, true);
  
  //--Btn round
  AddEvent("click", "#HeaderRound button", function(e) {
    //*for screen round
    AddHideToElement("#HeaderRound");
    //*for screen play
    RemoveAllClass("#Header");
    AddClassTo("#Header", "header header-play");
    RemoveHideToElement("main");
    RemoveHideToElement("#GameArea");
    RemoveHideToElement("#GameAreaPlay");
    //*for screen play - whose turn
    EditGameVars("roundTotal", this.getAttribute("data-round"));
    DisplayScreenPlayWhoseTurn();
  }, true);
  
  //--Btn go to play choose
  AddEvent("click", "#BtnWhoseTurnContinue", function(e) {
    //*for screen play - whose turn
    AddHideToElement("#GameAreaPlayWhoseTurn");
    //*for screen play - choose
    RemoveHideToElement("#GameAreaPlayChoose");
  });
  
  //--Btn choose
  AddEvent("click", "#GameAreaPlayChoose button", function(e) {
    //*for screen play - choose
    AddHideToElement("#GameAreaPlayChoose");
    //*for screen play - result
    EditGameVars("choiceA", this.getAttribute("data-play"));
    RemoveHideToElement("#GameAreaPlayResult");
    DisplayScreenPlayResult();
  }, true);
  
  //--Btn see score
  AddEvent("click", "#BtnShowScore", function(e) {
    //*for screen play - not score
    AddHideToElement("#GameAreaPlay");
    //*for screen play - score
    RemoveHideToElement("#GameAreaScore");
    DisplayScreenScore();
  });
  
  //--Btn see play
  AddEvent("click", "#BtnShowPlay", function(e) {
    //*for screen play - score
    AddHideToElement("#GameAreaScore");
    //*for screen play - not score
    RemoveHideToElement("#GameAreaPlay");
  });

  //--Btn play continue
  AddEvent("click", "#ResultBtnContinue", function(e) {
    const roundTotalIs = GetGameVars("roundTotal");
    let roundCurrentIs = GetGameVars("roundCurrent");
    roundCurrentIs++;
    EditGameVars("roundCurrent", roundCurrentIs);
    if (roundCurrentIs > roundTotalIs) {
      //*for screen play
      AddHideToElement("#GameArea");
      AddHideToElement("#GameAreaScore");
      AddHideToElement("#GameAreaPlay");
      //*for screen play - result
      AddHideToElement("#GameAreaPlayResult");
      //*for screen end
      DisplayScreenPlayEnd("end");
      return
    }
    //*for screen play - result
    AddHideToElement("#GameAreaPlayResult");
    //*for screen play - choose
    RemoveHideToElement("#GameAreaPlayWhoseTurn");
    DisplayScreenPlayWhoseTurn();
  });

  //--Btn play stop
  AddEvent("click", "#ResultBtnStop", function(e) {
    const getTotalRound = GetGameVars("roundTotal");
    const getCurrentRound = GetGameVars("roundCurrent");
    //*for screen play
    AddHideToElement("#GameArea");
    AddHideToElement("#GameAreaScore");
    AddHideToElement("#GameAreaPlay");
    //*for screen play - result
    AddHideToElement("#GameAreaPlayResult");
    //*for screen end
    if (getTotalRound === "Unlimited" || getCurrentRound >= getTotalRound) {
      DisplayScreenPlayEnd("end");
      return
    }
    DisplayScreenPlayEnd("giveUp");
  });
  
  //--Btn restart
  AddEvent("click", "#PlayEndRestart", function(e) {
    //*for screen end
    AddHideToElement("#PlayEnd");
    //*for game reset
    GameReset();
  });
  
})();
