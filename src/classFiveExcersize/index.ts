export class Order {
  private status: string;

  constructor() {
    this.status = "CREATED";
  }

  public pay(): void {
    if (this.status === "CREATED") {
      console.log("Pedido pagado");
      this.status = "PAID";
    } else if (this.status === "PAID") {
      console.log("Ya está pagado");
    } else if (this.status === "SHIPPED") {
      console.log("Ya fue enviado");
    } else if (this.status === "DELIVERED") {
      console.log("Pedido finalizado");
    } else if (this.status === "CANCELLED") {
      console.log("Pedido cancelado");
    }
  }

  public ship(): void {
    if (this.status === "CREATED") {
      console.log("No se puede enviar sin pagar");
    } else if (this.status === "PAID") {
      console.log("Pedido enviado");
      this.status = "SHIPPED";
    } else if (this.status === "SHIPPED") {
      console.log("Ya enviado");
    } else if (this.status === "DELIVERED") {
      console.log("Ya entregado");
    } else if (this.status === "CANCELLED") {
      console.log("Pedido cancelado");
    }
  }

  public deliver(): void {
    if (this.status === "SHIPPED") {
      console.log("Pedido entregado");
      this.status = "DELIVERED";
    } else {
      console.log("No se puede entregar");
    }
  }

  public cancel(): void {
    if (this.status === "DELIVERED") {
      console.log("No se puede cancelar");
    } else if (this.status === "CANCELLED") {
      console.log("Ya cancelado");
    } else {
      console.log("Pedido cancelado");
      this.status = "CANCELLED";
    }
  }
}

// refactor into a template pattern

abstract class OrderAction {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }
  pay() {
    console.log("pay");
  }
  create() {
    console.log("create");
  }
  ship() {
    console.log("ship");
  }
  deliver() {
    console.log("deliver");
  }
  cancel() {
    console.log("cancel");
  }
}


