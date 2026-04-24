export class AutoElementti extends HTMLElement {
  static get observedAttributes() {
    return ["merkki", "malli", "hinta", "valmistaja"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get data() {
    return {
      merkki: this.getAttribute("merkki"),
      malli: this.getAttribute("malli"),
      hinta: Number(this.getAttribute("hinta")),
      valmistaja: this.getAttribute("valmistaja"),
    };
  }

  set data(obj) {
    this.setAttribute("merkki", obj.merkki);
    this.setAttribute("malli", obj.malli);
    this.setAttribute("hinta", obj.hinta);
    this.setAttribute("valmistaja", obj.valmistaja);
  }

  render() {
    const d = this.data;

    this.innerHTML = `
      <div class="auto">
        <h3>${d.merkki} ${d.malli}</h3>
        <p>Valmistaja: ${d.valmistaja}</p>
        <p>Hinta: ${d.hinta} €</p>
        <button>Lisää koriin</button>
      </div>
    `;

    const btn = this.querySelector("button");
    if (!btn) return;

    btn.onclick = () => {
      this.dispatchEvent(
        new CustomEvent("lisaa-koriin", {
          detail: d,
          bubbles: true,
        }),
      );
    };
  }
}

customElements.define("auto-elementti", AutoElementti);
