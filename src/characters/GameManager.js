export default class GameManager {

    /**
     * 
     * @param {number} wincondition
     * numero de personagens descobertos para
     * concluir o nivel  
     * @param {Event} winevent
     * evento de resposta para quando wincondition
     * for atendido
     */
    constructor(data = {wincondition, winevent} ) {
        this.wincondition = data.wincondition
        this.winevent = data.winevent
        this.currentstate = 0
    }

    ChangeState() {
        this.currentstate++
        this.CheckCondition()
    }

    CheckCondition() {
        if (this.currentstate >= this.wincondition) {
            if (!this.winevent)
                console.log("No win event...")
            else
                this.winevent()
        }
    }
}