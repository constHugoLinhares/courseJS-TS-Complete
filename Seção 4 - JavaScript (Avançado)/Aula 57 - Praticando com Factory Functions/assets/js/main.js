function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();

            const display = document.getElementById('textBox');
            display.addEventListener("input", (e) => {
                var value = display.value;
            var digitsOnly = value.replace(/[^\d.\  -+()*/]/g, '');
        
                display.value = digitsOnly;
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = ''
        },
        
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                
                if(!conta) {
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();