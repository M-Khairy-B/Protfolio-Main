import $ from 'jquery';
import 'bootstrap';
import {test} from "./test";


$(document).ready(function() {
    $('#navbarToggler').click(function() {
        $('#navbarTogglerIcon i').toggleClass('fa-bars fa-xmark');
    });
});
