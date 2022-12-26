#!/usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";
import ChalkAnimation from "chalk-animation";
//creating bank account for a dummy user:
const user1: {
  name: string;
  pin: number;
  balance: number;
} = {
  name: "shaff",
  pin: 1234,
  balance: 20000,
};

let sleep = () =>
  new Promise((res, rej) => {
    setTimeout(res, 2000);
  });

async function welcome() {
  const rainbow = ChalkAnimation.rainbow("welcome to shaff's Bank");
  await sleep();
  rainbow.stop();
}
//
//taking input from the user

async function TakingInput() {
  await welcome();
  do {
    
  var que = await inquirer.prompt([
    {
      type: "number",
      name: "pin",
      message: "enter your atm pin: ",
    },
  ]);
  chalk.green(que.pin);

    let r = ChalkAnimation.rainbow("checking for pin....");
    if(que.pin!==user1.pin){
        console.log(chalk.red("wrong plz kindly enter again"))

    }
    r.stop();
} while (que.pin !== user1.pin);


  if (que.pin === user1.pin) {
   
    do {
        
    
      console.log(chalk.green("1) check balance"));
      console.log(chalk.green("2) Deposit"));
      console.log(chalk.green("3) WithDraw"));
      console.log(chalk.green("4) Logout"));
      var que2 = await inquirer.prompt([
        {
          type: "number",
          name: "pin",
          message: "enter your option here :  ",
        },
      ]);

      if (que2.pin === 1) {
        console.log(chalk.yellow(`your current balance is : `, user1.balance));
      } else if (que2.pin === 2) {
        let deposit = await inquirer.prompt([
          {
            type: "number",
            name: "deposit",
            message: chalk.yellow(
              "enter the amount you want to add to your account"
            ),
          },
        ]);
        user1.balance = user1.balance + deposit.deposit;
        console.log(`your new balance is : `, user1.balance);
      } else if (que2.pin === 3) {
        // console.log(chalk.red("enter the amount you want to withdraw : "));
        let withdraw = await inquirer.prompt([
          {
            type: "number",
            name: "withdraw",
            message: chalk.yellow(
              "enter the amount you want to add to your account"
            ),
          },
        ]);
        user1.balance = user1.balance - withdraw.withdraw;
        console.log(`your new balance is :`, user1.balance);
      }else if(que2.pin ===4){
        break;
      }
      var cond = await inquirer.prompt([
        {
          type: "string",
          name: "c",
          message: chalk.yellow(
            "do you want to use atm again? press y for yes and n for no"
          ),
        },
      ]);

    } while (cond.c !== "n" );

    } 
}
TakingInput();
