export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let templete = this.templete(model);
        if (this.escapar) {
            templete = templete.replace(/<script>[\s\S]*?<script>/, '')  
        }
        this.elemento.innerHTML = templete;
    }

    protected abstract templete(model: T): string;
}
