export class AutoElementti extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const merkki = this.getAttribute("merkki");
    const malli = this.getAttribute("malli");
    const hinta = this.getAttribute("hinta");

    this.innerHTML = `
      <div>
        <h3>${merkki ?? ""} ${malli ?? ""}</h3>
        <p>Hinta: ${hinta ?? ""} €</p>
        <button>Lisää koriin</button>
      </div>
    `;

    this.querySelector("button").onclick = () => {
      this.dispatchEvent(
        new CustomEvent("lisaa-koriin", {
          detail: {
            merkki,
            malli,
            hinta: Number(hinta),
          },
          bubbles: true,
        }),
      );
    };
  }
  static get observedAttributes() {
    return ["merkki", "malli", "hinta"];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("auto-elementti", AutoElementti);
