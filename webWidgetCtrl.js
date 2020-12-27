import { LitElement, html, css } from 'lit-element';


class wcWidget extends LitElement {


    // component styles 
    static get styles() {
        return css`
            * {margin: 0; padding: 0; box-sizing: border-box;}
            html {background: #333;font-family: 'Open Sans', sans-serif;text-align: center;padding-top: 50px;}
            .purchase-box {background: #bcdb33;border-radius:8px;max-width: 540px;margin: 0 auto 50px;padding: 30px;text-align: center;}
          
            h1, h3 {color: #fff;margin-bottom: 20px;}
            h2 {color: #0a9e56;}

            button.btn {background: #333;color: #fff;cursor: pointer;border: 1px solid #333;padding: 15px 30px;text-transform: uppercase;letter-spacing: 1px;border-radius: 3px;box-shadow: 0 6px 18px rgba(0,0,0,0.3);margin: 30px 0 10px;outline: 0;}
            button.btn:hover {background: #000;box-shadow: 0 6px 12px rgba(0,0,0,0.4);}

            button.btn-link {background: transparent;color: #333;border: 0;text-decoration: underline;padding: 5px;text-transform: uppercase;letter-spacing: 1px;border-radius: 3px;margin: 10px auto;display: table;cursor: pointer;outline: 0;}
            button.btn-link:hover {color: #0a9e56;}

            .prizes-list {background: #fff;padding: 15px 30px;margin: 30px;}
            .prize-item {display: flex;align-items: center;padding: 15px 0;text-align: left;border-bottom: 1px solid #bcdb33;}
            .prize-item img {width: 120px;margin-right: 20px;}
            .prize-item p, .prize-item strong {font-size: 80%;color: #aaa;}
            .prize-item:last-child {border-bottom: 0;}
            .prize-item h4 {color: #f57e8b;}

            .after-participate p {padding: 0 20%;margin: 20px 0;}
            .total-entries {background: #f4432d;color: #fff;border-radius: 100px;max-width: 340px;margin: 20px auto;padding: 15px 30px;display: flex;align-items: center;justify-content: space-between;}
            .total-entries strong {font-size: 40px;}
            .total-entries span {font-size: 22px;}
            .show{display: block;}
            .hide{display: none;}
            .widget-container{
                display: none;
               position: relative;
               z-index: 100;
            }
            .widget-overlay{
                position:absolute;
                width: 100%;
                height: 100%;
                top: 0;
                z-index: 10;
                display: none;
                background: rgba(0, 0, 0, 0.8);
            }
            .widget-container.open,.widget-overlay.open{
                display: flex;
                justify-content: center;
            }
            .widget-container.close,.widget-overlay.close{
                display: none;
            }
            
        `;
    }


    // component html blocks
    render() {
        return html`
        <!-- widget overlay -->
        <div class="widget-overlay ${this.widgetAction}" @click="${(e) => this.closeWidget(e)}"></div>
        <div class="widget-container ${this.widgetAction}">
            <!-- Pre Login -->
            <div class="preLogin ">
                <h3>Pre login</h3>
                <div class="purchase-box pre-login">
                    <h2>PURCHASE FOR A CHANCE TO WIN</h2>
                    <button class="btn-link" @click="${(e) => this.openPrizes(e)}">Prizes</button>
                </div>
            </div>
        
            <!-- Prizes -->
            <div class="prizes hide">
                <h3>Prizes</h3>
                <div class="purchase-box prizes-section">
                    <h2>Prizes</h2>
                    <div class="prizes-list">
                        <div class="prize-item">
                            <figure><img src="https://cdn.appsmav.com/gr/assets/img/gift.jpg" alt="" /></figure>
                            <div class="prize-content">
                                <h4>iPhone</h4>
                                <p>Lorem Ipsum is simply dummy, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <strong>Available: 5</strong>
                            </div>
                        </div>
                    </div>
                    <button class="btn-link" @click="${() => this.backToLogin()}">Back</button>
                </div>
            </div>
        </div>
        `;
    }

    constructor() {
        super();
        // this.widgetAction = "";

    }

    //To open prizes block
    openPrizes(e) {
        this.renderRoot.querySelector('.preLogin').classList.toggle('hide');
        this.renderRoot.querySelector('.prizes').classList.toggle('hide');
    }
    //Back to login block from prizes
    backToLogin() {
        this.renderRoot.querySelector('.prizes').classList.toggle('hide');
        this.renderRoot.querySelector('.preLogin').classList.toggle('hide');
    }

    //dispatch close event to outside the shadow root
    closeWidget() {
        var evt = new CustomEvent("widgetData", { detail: "close" });
        window.dispatchEvent(evt);
    }
    // get properties passed via data-attributes in selector
    static get properties() {
        return {
            widgetAction: { type: String }
        };
    }

}

customElements.define('web-widget-ctrl', wcWidget);