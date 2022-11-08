import { BankCard } from "./BankCard";
import { DebitCard } from "./DebitCard";
import { ShoppingMall } from "./ShoppingMall"

class Driver {
  main(): void {
    const bankCard: BankCard = new DebitCard();
    const shoppingMall: ShoppingMall = new ShoppingMall(bankCard);
    shoppingMall.doPurchaseSomething(4000);
  }
}
