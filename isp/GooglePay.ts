import { CashBackManager } from "./CashBackManager";
import { UPIPayment } from "./UPIPayment";

class GooglePay implements UPIPayment, CashBackManager {
  payMoney(): void {}
  getScratchCard(): void {}
  getCashBackAsCreditBalance(): void {}
}
