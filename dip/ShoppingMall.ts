import { BankCard } from "./BankCard";

export class ShoppingMall {
  private bankCard: BankCard;

  constructor(bankCard: BankCard) {
    this.bankCard = bankCard;
  }

  doPurchaseSomething(amount: number): void {
    this.bankCard.doTransaction(amount);
  }
}
