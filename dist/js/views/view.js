export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let templete = this.templete(model);
        if (this.escapar) {
            templete = templete.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = templete;
    }
}
