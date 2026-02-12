class Header {
  private header: HTMLElement | null;
  private burger: HTMLElement | null;

  constructor() {
    this.header = document.querySelector(".header");
    this.burger = document.querySelector(".burger");
    this.init();
  }

  private init(): void {
    this.addBurgerListener();
  }

  private addBurgerListener(): void {
    if (this.burger) {
      this.burger.addEventListener("click", () => this.toggleMenu());
    }
  }

  private toggleMenu(): void {
    if (this.header) {
      this.header.classList.toggle("header--open");
    }
  }

  public closeMenu(): void {
    if (this.header) {
      this.header.classList.remove("header--open");
    }
  }
}

export default Header;