// 6. Tax Calculator
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const log = console.log

type Strategy = (income: number) => number;

const strategies: { [k: string]: Strategy } = {
    NoTax: (income: number) => 0,
    FlatTax: (income: number) => income * 0.1,
    ProgressiveTax: (income: number) => {
        if (income <= 100) return 0;
        if (income <= 500) return income * 0.1;
        if (income <= 1000) return income * 0.2;
        return income * 0.4;
    },
}

class TaxCalculator {
    constructor(private strategy: Strategy) { }
    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    calculate(income: number): number {
        // calculate total tax for a given income
        return this.strategy(income);
    }
}

export async function main() {
    log("6. Tax Calculator");

    const showTaxes = function (strategy: string, incomes: number[]) {
        for (const income of incomes)
            log(`Strategy: ${strategy}, Income ${income}, Tax:`, calculator.calculate(income));
    }

    const calculator = new TaxCalculator(strategies.FlatTax);
    showTaxes('Flat Tax', [100, 500, 1000]);
    calculator.setStrategy(strategies.NoTax);
    showTaxes('No Tax', [100, 500, 1000]);
    calculator.setStrategy(strategies.ProgressiveTax);
    showTaxes('Progressive Tax', [50, 100, 150, 500, 550, 1000, 10000]);

    // Bonus: Create a UI menu (in console or browser)
    // that lets the user switch between strategies at runtime.

    const rl = readline.createInterface({ input, output });
    let availableOptions: string[] = [];
    let answer: string | undefined;

    do {
        availableOptions = ['s', 'q'];
        do {
            const userInput = await rl.question(`\nSelect an option:\ns: change strategy\nq: quit\n>>> `);
            answer = userInput.toLowerCase();
            if (!availableOptions.includes(answer)) log(`Unknown option: ${userInput}.\nTry again.`)
        } while (!availableOptions.includes(answer));

        if (answer === 's') {
            let lines: string[] = [`\nSelect a strategy:`];

            availableOptions = Object.keys(strategies);
            availableOptions.forEach(s => lines.push('- ' + s));
            lines.push("q: quit\n>>> ")
            availableOptions.push('q');
            const lowerCaseAvailableOptions = availableOptions.map(o => o.toLowerCase());
            do {
                const userInput = await rl.question(lines.join("\n"));
                answer = userInput.toLowerCase();
                if (!lowerCaseAvailableOptions.includes(answer)) log(`Unknown option: ${userInput}.\nTry again.`)
            } while (!lowerCaseAvailableOptions.includes(answer))
            if (answer !== 'q') {
                const strategyIndex = lowerCaseAvailableOptions.findIndex((a) => a === answer);
                const strategyName = availableOptions[strategyIndex];
                const strategy = strategies[strategyName];
                calculator.setStrategy(strategy);
                showTaxes(strategyName, [50, 100, 150, 500, 550, 1000, 10000]);
            }
        }
    } while (answer !== 'q');

    rl.close();
}