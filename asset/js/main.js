/*
1) Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
2) Stampare all'interno di una lista, un item per ogni todo.

3) Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
4) Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
5) Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
BONUS extra:
non permettere l'inserimento di todo doppie nell'array di oggetti */
var app = new Vue(
    {
        el: "#root",
        data: {
            todos: [
                {
                    text: "lista della spesa",
                    done: false,
                    change: false
                },
                {
                    text: "fare benzina",
                    done: false,
                    change: false
                },
                {
                    text: "sistemare la bici",
                    done: false,
                    change: false
                },
            ],
            newTodo: "",
            changeTodo: "",
            stopEvent: false,
            //isDisabled: true //:disabled="isDisabled"
        },
        methods: {
            aggiungiTodo: function() {
                let newTodoObj = {
                    text: this.newTodo,
                    done: false,
                    change: false
                };
                if (this.newTodo != '') {
                    this.todos.push(newTodoObj);
                    this.newTodo = ""
                }
            },
            modificaTodo: function(todoIndex) {
                this.todos[todoIndex].change = true;
                this.stopEvent = true
            },
            confermaModifica: function(todoIndex) {
                if (this.changeTodo !== '') {
                    this.todos[todoIndex].text = this.changeTodo;
                }
                this.todos[todoIndex].change = false;
                this.changeTodo = '';
                this.stopEvent = false
            },
            annullaModifica: function(todoIndex) {
                this.todos[todoIndex].change = false;
                this.stopEvent = false
            },
            rimuoviTodo: function(todoIndex) {
                if ( confirm('Eliminare?') == true ) {
                    this.todos.splice(todoIndex, 1);
                }
            },
            rimuoviMettiBarra: function(el) {
                if (el.done == true) {
                    el.done = false;
                } else {
                    el.done = true;
                }
            }
        }
    }
);