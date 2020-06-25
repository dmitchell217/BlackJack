

// Convert and debug
// class BlackJack:
//     def __init__(self, player, balance=100, hand=0, bet=0, verdict = 0, dd = False):
//         self.balance = balance # tracks player balance. Doesn't clear
//         self.player = player # tracks name of player. doesn't clear
//         self.bet = bet # tracks value of bet. clears every round
//         self.hand = hand # tracks value of hand. clears every round
//         self.dd = dd # tracks if player has doubled down on this hand yet. can only do once per hand. Clears every round
//         self.verdict = verdict
        
//         # can add in hand and bet here. but I think they are better off staying localized to "bet and play"
//         # If I add multiple
        
//     def __str__(self):
//         return f'Player:{self.player}\nAccount balance: ${self.balance} \
//                 Your current hand is {self.hand}, Your current bet is {self.bet}'    
//     def bet_and_play(self):
//         loop_breaker = 0
//         # asks how much they want to bet on this hand
//         self.bet = int(input(f"How much do you want to bet {self.player}?"))
//         # checks balance to see if they have enough 
//         if self.balance > self.bet:
//             self.balance -= self.bet           
//         else:
//             return (f"{self.player} can only bet {self.balance} with his current balance")
//         # Ask player for their next move... hit or stand or double down or split or surrender?
//         while self.verdict == 0 or loop_breaker > 40: # loop until game has verdict
//             loop_breaker += 1  
//             move = input(f"what is your next move {self.player}? \
//                         [hit, stand, double down, surrender]")
//             if move == "hit":
//                 self.hit()
//             elif move == "stand":
//                 self.stand()
//             elif move == "surrender":
//                 self.surrender()
//             elif move == "double down":
//                 self.double_down()
//             else:
//                 print("Please make a valid move")
//             print(f"Your current hand is {self.hand}, Your current bet is {self.bet}")
//             continue
            
//         # determine the verdict
//         if self.verdict == 1:
//             print(f"Congrats {self.player}! You won this round!")
//             self.balance = self.balance + (self.bet * 2)
//         if self.verdict == 2:
//             print(f"The house always wins... or at least this round")
            
//          # ask if player would like to play another round
//         another_round = input(f"Would you like to play another round {self.player}? [True or False]")
//         if another_round:
//             # clear hand, bet, verdict, dd
//             self.hand = 0
//             self.bet = 0
//             self.verdict = 0
//             self.dd = 0
//             self.bet_and_play()
//         pass

//     def hit(self):
//         # add to hand
//         self.hand += random.randint(1, 11)
//         if self.hand > 21:
//             self.verdict = 1
//         pass
        
//     def stand(self):
//         # house response - will hit until bust or more than self.hand
//         house = 0
//         loop_break = 0
//         if self.hand <= 21 and self.hand > house:
//             while self.hand > house or loop_break > 40:
//                 loop_break += 1
//                 house += random.randint(1, 11)
//         if house > 21:
//             self.verdict = 2
//         elif house > self.hand and house <= 21:
//             self.verdict = 1
//         pass
            
        
//     def double_down(self):
//         # only if they haven't doubledown this round
//         if self.dd == False:
//         # add to bet if they can afford it
//             if self.balance > self.bet:
//                 self.bet *= 2
//                 self.balance -= self.bet # subtract bet again.
//                 self.dd = True # prevent the player from doubling down again
//             else:
//                 print("Insufficient funds")
//                 pass
//         else:
//             print(f"{self.player}, you can only double down once")
//             pass
        
// #     def split(self):
//         # hard, attempt after everything else is working
        
//     def surrender(self):
//         # break out of bet_and_play loop structure
//         self.verdict = 1
//         pass