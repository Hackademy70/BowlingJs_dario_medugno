/*
   ES.3 Creare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia 
       diverse funzionalità tra cui:
    - creare 10 punteggi casuali per ogni giocatore:
    - Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ 
      scores, dieci punteggi casuali ad ogni giocatore
    - Utilizzare l’istruzione: Math.floor(Math.random() * (10 - 1 +1) + 1)
    - trovare il punteggio finale per ogni giocatore:
    - Suggerimento: ordinare l’array in ordine Decrescente
    - aggiungere un nuovo giocatore
    - determinare il vincitore
    - EXTRA: impostare una classifica dei giocatori */
    
    let bowling = {
        'players': [
            {'name': 'Livio', 'scores': []},
            {'name': 'Paola', 'scores': []},
            {'name': 'Filippo', 'scores': []},
            {'name': 'Giuseppe', 'scores': []}
        ],
        
        'addScores' : function () {
            this.players.forEach(element => {
                for(let i=0; i<10; i++) {
                    element.scores.push(Math.floor(Math.random() * (10-0)+0));
                };
                
            })   
        },
            

        // nuovo giocatore
        'totalScores': function() {
            this.players.forEach(element => element.totalScores =element.scores.reduce((acc, el) => acc+ el ,0 ));
            
        },
    
        'newPlayer': function (name) {
            this.players.push({'name': `${name}`, 'scores':[]});
        },
    
        'winner': function () {
            this.players.sort((a,b) => b.totalScores - a.totalScores);
            if (this.players[0].finalScore> this.players[1].finalScore) {
                let winner = this.players[0];
                console.log(`il vincitore è ${winner.name} con ${winner.totalScores} punti`);
            } else {
                let winner1 = this.players[0]
                let winner2 =this.players[1];
                console.log(`I vincitori sono ${winner1.name} e ${winner2.name} con ${winner1.totalScores} punti`)
            };
            
        },
    
        'ranking': function () {
            this.players.sort((a,b) => b.totalScores - a.totalScores);
            console.log(`Classifica Finale:`); 
           
            this.players.forEach(element => {
                let index= this.players.indexOf(element) + 1;
                console.log(`${index}. ${element.name}`) });
           
        }  
    } 
    
    
    bowling.newPlayer('Sara');
    
    bowling.addScores();
    
    bowling.totalScores();
    
    bowling.winner();
    
    bowling.ranking();
    
    console.log(bowling.players);


   

