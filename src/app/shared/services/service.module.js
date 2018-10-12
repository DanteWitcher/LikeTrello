import angular from 'angular';
import ngResource from 'angular-resource';
import authService from './auth.service.js';
import boardService from './board.service.js';
import columnService from './column.service.js';
import noteToDoService from './note-to-do.service.js';
import interceptorService from './intercetopr.service.js';
import interceptorConfig from './interceptor.config';
import updateNoteService from './update-note.service';
import registerService from './register.service';

export default angular
    .module("myServices", [ngResource])
    .factory("AuthService", authService)
    .factory("BoardService", boardService)
    .factory("ColumnService", columnService)
    .factory("NoteToDoService", noteToDoService)
    .factory("interceptor", interceptorService)
    .factory("updateNoteService", updateNoteService)
    .factory("registerService", registerService)
    .config(interceptorConfig)
    .name;