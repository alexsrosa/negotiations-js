class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listanegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        this._listanegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = null;
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}