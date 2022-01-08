var saved_toDo = '';

// pages html code variables
let page_content_$html = [
    fetch('./components/home-page/home.html').then(res=>res.text()),
    fetch('./components/about-page/about.html').then(res=>res.text()),
    fetch('./components/about-page/about.html').then(res=>res.text()),
    fetch('./components/setting-page/setting.html').then(res=>res.text())
]
let home_html_code = `
<main>
    <span id="main-top-part-add-ToDo">
        <div id="add-ToDo-part">
            <textarea id="add-ToDo-input" placeholder="Type your note.." spellcheck="false"></textarea>
            <span id="add-ToDo-btn" onclick="create_todo__show_popUp()"><i class="fi-rr-plus"></i></span>
        </div>

        <div id="slider">
            <button class="slider-btn" onclick="slider_left_angle()"><i class="fi-rr-angle-small-left"></i></button>
            <button class="slider-btn" style="box-shadow: -3px 0 10px #22303d1f;margin-left: auto;" onclick="slider_right_angle()"><i class="fi-rr-angle-small-right"></i></button>
            <span id="slider-child" style="left: 0;">
                <span class="slider-child-part fourth"></span>
                <span class="slider-child-part third"></span>
                <span class="slider-child-part second"></span>
                <span class="slider-child-part first"></span>            
            </span>
        </div> 
    </span>

    <span id="main-bottom-part-added-note">
        <p id="no-added-toDo-text">No to do note added yet</p>
    </span>
</main>`;
let setting_html_code = `
<main>
<div id="setting-page">
<h2 style="margin-bottom: 3px;">Setting</h2>
<div id="set-font-size-part">
    <h3>Set Font Size</h3>
    <span>
        <h4>header</h4>
        <div class="skiptranslate">
            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-0" checked>
                <span class="-check"></span> <b class="font-size">17px</b>
            </label>

            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-0">
                <span class="-check"></span> <b class="font-size">19px</b>
            </label>

            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-0">
                <span class="-check"></span> <b class="font-size">21px</b>
            </label>
        </div>
    </span>

    <span id="side-bar-font-size">
        <h4>side bar</h4>
        <div class="skiptranslate">
            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-1">
                <span class="-check"></span> <b class="font-size">17px</b>
            </label>

            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-1" checked>
                <span class="-check"></span> <b class="font-size">19px</b>
            </label>

            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-1">
                <span class="-check"></span> <b class="font-size">21px</b>
            </label>
        </div>
    </span>

    <span class="skiptranslate">
        <h4>todo note</h4>
        <div>
            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-2" checked>
                <span class="-check"></span> <b class="font-size">17px</b>
            </label>

            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-2">
                <span class="-check"></span> <b class="font-size">19px</b>
            </label>

            <label class="font-size-checkBox-label">
                <input type="checkbox" class="font-size-check-box-2">
                <span class="-check"></span> <b class="font-size">21px</b>
            </label>
        </div>
    </span>
</div>

<span class="border"></span>

<div id="setting-theme-part">
    <h3 style="grid-area:headline;">App Themes</h3>
    <div>
        <figure style="grid-area:default;" class="chose-theme-part-option background">
            <img src="./assets/image/light.svg" height="95px" alt="Default theme preview">
            <figcaption>Light</figcaption>
        </figure>

        <figure style="grid-area:dark;" class="chose-theme-part-option">
            <img src="./assets/image/dark.svg" height="95px" alt="Dark theme preview">
            <figcaption>Dark</figcaption>
        </figure>

        <figure style="grid-area:neomorphism;font-size:22px;" class="chose-theme-part-option">
            <img src="./assets/image/glassmorphism.svg" height="95px" alt="Neomorphism theme preview">
            <figcaption>Glassmorphism</figcaption>
        </figure>
    </div>
</div>

<span class="border margin"></span>

<div id="delete-all-data-box">
    <h3 style="display: inline;">Delete All Data</h3>
    <button onclick="delete_all_data()" id="delete-data-btn">Delete</button> 
</div>
</div>
</main>`;
let saved_html_code = `
<main>
    <div id="saved-page">
        <h2 id="saved-page-header">Saved To Do note</h2>
        <div id="saved-to-do-grid"></div>
    </div>
</main>`;
let about_html_code = `
<span id="about-page-text">
<span class="about-page-part">
    <div id="about-page-p1"> 
        <p style="margin-bottom:10px">Connect With Me :</p>
        <span>Email: <a href=mailto:erfangharib5@gmail.com?subject='subject text'>erfangharib5@gmail.com</a></span>
        <span>Instagram: <a href="https://www.instagram.com/___erfan_gh___/">@___erfan_gh___</a></span>
        <span>Telegram: <a href="https://t.me/ERFAN_web_dev">@ERFAN_web_dev</a></span>
    </div>

    <div>
        <p style="margin:20px 0 13px 0;">Share App Link With Friends :</p>
        <div id="copy-link-box">
            <input type="text" value="${window.location.href}" id="copy-link-inp" readonly/>
            <button id="copy-link-btn" title="copy" onclick="copy_to_clip_board()"><i class="fi-rr-copy-alt"></i></button>
        </div>
    </div>
</span>

<p id="copy-right">Developed and Designed by Erfan Gharib <br>All Rights Reserved ©2021-2022</p>
</span>`;

// other app variables
let _date = new Date;
let L_S = localStorage;
let body_part = document.body;
let main_page_part = document.querySelector('main');
let center_page_part = document.querySelector('#center-part');
let copied_massage = document.querySelector('.copied-massage');
let side_bar_icon = document.querySelectorAll('.side-bar-icon');
let root_styleSheet = document.querySelector('#root-styleSheet');
let header = document.querySelector('header');
let note_saved_massage = document.querySelector('.note-saved-massage');
let unexpected_character = document.querySelector('.unexpected-character');
let brwoser_doesnt_support = document.querySelector('.doesnt-support-on-firefox');
let fill_input_error_massage = document.querySelector('.fill-input-error-massage');

let search_box_v = document.querySelector('.search-box');
let search_input_v = document.querySelector('#search-input');
let search_filter = document.querySelectorAll('.search-filter');
let search_sugestion = document.querySelector('#search-sugestion');
let not_found_text = document.querySelector('#not-found-text');

let update_search_var = () => {
    search_box_v = document.querySelector('.search-box');
    search_input_v = document.querySelector('#search-input');
    search_filter = document.querySelectorAll('.search-filter');
    search_sugestion = document.querySelector('#search-sugestion');
    not_found_text = document.querySelector('#not-found-text');
}

var this_ = '';
var num = 0;
var num_2 = -1;
var num_3 = 0;
var num_4 = 0;
var num_5 = 0;
var num_6 = 0;

let set_timeout;
let remove_interval;
let input_;

// place page html code in array
let page_html_code_arr = [home_html_code, setting_html_code, saved_html_code, about_html_code];
// todo part icon functions
let added_toDo_icon_function_arr = [
    function save_note() {
        let p_note = this_.parentElement.parentElement.firstElementChild.innerHTML;
        let created_date = this_.parentElement.querySelector('b').innerHTML;

        let checked_uncheckd='';
        let none_flex='';

        if ($input!==undefined && $input.parentElement.querySelector('div').style.display=='none') {
            checked_uncheckd = 'checked';
            none_flex = 'none';
        }

        saved_toDo += `
        <div class="ToDo-note-part skiptranslate">
            <p class="p-note">${p_note}</p>
            <span id="ToDo-note-icon-part">
                <label class="checkBox-label" onclick="ToDo_note_checkBox(this)">
                    <input type="checkbox" class="ToDo-note-check-box" ${checked_uncheckd}>
                    <span class="check"></span>
                </label>
                <b class="created-date" title="created date">${created_date}</b>
                <p style="display:none" class="ToDo-note-iconS" title="save"><i class="fi-rr-bookmark-todo-part"></i></p>
                <div class="ToDo-note-iconS" style="display:${none_flex};" title="edit"><i class="fi-rr-pencil"></i></div>
                <span class="ToDo-note-iconS" title="delete"><i class="fi-rr-trash"></i></span>
            </span>
        </div>`;

        L_S.setItem('saved-note', saved_toDo);

        note_saved_massage.classList.remove('display');

        setTimeout(() => {
            note_saved_massage.classList.add('display');
        }, 2000);
    },
    function edit_note() {
        let p_notes = this_.parentElement.parentElement.firstElementChild.innerHTML;
        let created_date = this_.parentElement.querySelector('b').innerHTML;

        this_.parentElement.parentElement.innerHTML = `
        <textarea class="edit-p-note-textarea" spellcheck="false">${p_notes}</textarea>
        <button class="make-changes-to-p-note">Done</button>
        <b class="created-date" style="display:none;" title="created date">${created_date}</b>`;

        if (num_4 === 2) {
            saved_toDo = document.querySelector('#saved-to-do-grid').innerHTML;
            L_S.setItem(`saved-note`, saved_toDo);
        }

        done_btn_function();
        set_page_data();
    },
    function delete_note() {
        let ToDo_note_part = document.querySelectorAll('.ToDo-note-part');
        let no_added_toDo_text = document.querySelector('#no-added-toDo-text');
        let search_sugestion_child = document.querySelectorAll('.search-sugestion-child');

        num_2 -= 1;
        this_.parentElement.parentElement.remove();

        for(let n=0;n<search_sugestion_child.length;n++) {
            let b = this_.parentElement.parentElement.firstElementChild.innerHTML.length;
            if (search_sugestion_child[n].firstElementChild.innerHTML.substring(0,b)===this_.parentElement.parentElement.firstElementChild.innerHTML) {
                search_sugestion_child[n].remove();
            }
        }

        ToDo_note_part = document.querySelectorAll('.ToDo-note-part');

        if (ToDo_note_part.length == 0 && side_bar_icon[2].classList.contains('side-bar-icon-border') !== true) {
            no_added_toDo_text.style.display = "flex";
            not_found_text.style.display = 'flex';
        }

        if (num_4 === 2) {
            saved_toDo = document.querySelector('#saved-to-do-grid').innerHTML;
            L_S.setItem(`saved-note`, saved_toDo);
        }

        set_page_data();
    }
]
let setting_page_font_size_var_property = [
    '17px', '19px', '21px'
]

let tablet_font_sizes = [
    '21px', '23px', '25px',
    '21px', '23px', '25px',
    '21px', '23px', '25px'
]
let mobile_font_sizes = [
    '13px', '15px', '17px',
    '13px', '15px', '17px',
    '13px', '15px', '17px'
]
let pc_font_sizes = [
    '17px', '19px', '21px',
    '17px', '19px', '21px',
    '17px', '19px', '21px'
]

let root_styleSheet_hrefs = [
    '../css/light-theme-root.css',
    '../css/dark-theme-root.css',
    '../css/glassmorphism-theme-root.css'
]

body_part.onload = () => {
    get_page_data();
    update_search_var();
    ToDo_note_iconS_function();
    change_font_size();
    done_btn_function();
    if (L_S.getItem(`saved-note`)!=null) {
        saved_toDo = L_S.getItem(`saved-note`);
    }
}

let change_font_size = ()=> {
    remove_interval = setInterval(()=>{
        let browser_screen_width = parseInt(screen.width);
        let css_root = document.querySelector(':root');
        if (browser_screen_width<=425) css_root.style.setProperty('--header-font-size', '13px')
        else if (browser_screen_width<=768) css_root.style.setProperty('--header-font-size', '21px')
        else  css_root.style.setProperty('--header-font-size', '17px')
    },100)
}

setInterval(() => {
    document.body.style.top = 0;
    document.body.style.position = 'fixed';
    if(document.querySelector('#goog-gt-tt')!=null) {
        document.querySelector('#goog-gt-tt').style.display="none";
    }

    if (num_4===1||num_4===3) search_box_v.style.display='none';
    else if(num_4===0||num_4===2) search_box_v.style.display='flex';
}, 1);

// set side bar icon event listeners
for (let icon = 0; icon < side_bar_icon.length; icon++) {
    side_bar_icon[icon].addEventListener('click', function side_bar_icon_function() {
        let google_translate = document.querySelector('#translate');
        side_bar_icon[0].classList.remove('side-bar-icon-border');
        side_bar_icon[1].classList.remove('side-bar-icon-border');
        side_bar_icon[2].classList.remove('side-bar-icon-border');
        side_bar_icon[3].classList.remove('side-bar-icon-border');
        side_bar_icon[icon].classList.add('side-bar-icon-border');

        num_4 = icon;

        main_page_part.innerHTML = page_html_code_arr[icon];

        get_page_data()
        update_search_var();

        if (icon == 0) {
            ToDo_note_iconS_function();
        }
        if (icon == 1) {
            font_size_check_box();
            app_theme_function();
            google_translate.classList.remove('display-none');
            search_box_v.classList.remove('increase-width');
            search_box_v.classList.remove('increase-width-mobile');
            search_box_v.classList.remove('increase-width-tablet');
            search_box_v.classList.remove('search-box-bg');
        }
        else if (icon == 2) {
            if (L_S.getItem(`saved-note`) !== null)
                document.querySelector('#saved-to-do-grid').innerHTML = L_S.getItem(`saved-note`);
            
            get_page_data();
            done_btn_function();
            ToDo_note_iconS_function();
        }
        else if(icon==3) {
            google_translate.classList.remove('display-none');
            search_box_v.classList.remove('increase-width');
            search_box_v.classList.remove('increase-width-mobile');
            search_box_v.classList.remove('increase-width-tablet');
            search_box_v.classList.remove('search-box-bg');
        }
    });
}
function set_page_data() {
    L_S.setItem(`html-page${num_4}`, main_page_part.innerHTML);
    L_S.setItem('app-theme', root_styleSheet.href);
    switch (num_4) {
        case 0: case undefined:
            L_S.setItem('search-suggestion-home', search_sugestion.innerHTML)
            break;

        case 2:
            L_S.setItem('search-suggestion-saved', search_sugestion.innerHTML)
            break;
    }
}
function get_page_data() {
    if (num_4 == 0 && L_S.getItem(`html-page${0}`) != null) {
        main_page_part.innerHTML = L_S.getItem(`html-page${0}`)
    }
    else if (num_4 == 1 && L_S.getItem(`html-page${1}`) != null) {
        main_page_part.innerHTML = L_S.getItem(`html-page${1}`)
    }
    switch (num_4) {
        case 0: case undefined:
            search_sugestion.innerHTML=L_S.getItem('search-suggestion-home')
            break;
            
        case 2:
            search_sugestion.innerHTML=L_S.getItem('search-suggestion-saved')
            break;
    }
    if(L_S.getItem('app-theme')!=null)
        root_styleSheet.setAttribute('href', L_S.getItem('app-theme'));
}

// google translate function 
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google-translate-element');
}

// edit note done btn
function done_btn_function() {
    let ToDo_p_note = document.querySelectorAll('.ToDo-p-note');
    let make_changes_to_p_note = document.querySelectorAll('.make-changes-to-p-note');
    for (let done_button = 0; done_button < make_changes_to_p_note.length; done_button++) {
        make_changes_to_p_note[done_button].addEventListener('click', function () {
            let created_date = document.querySelectorAll('.created-date')[done_button].innerHTML;
            let make_changes_to_p_note = document.querySelectorAll('.make-changes-to-p-note');
            let make_changes_to_p_note_textArea = make_changes_to_p_note[done_button].parentElement.firstElementChild.value;
            
            document.querySelectorAll('.search-sugestion-child')[num_6].firstElementChild.innerHTML=make_changes_to_p_note_textArea+'...';
            
            make_changes_to_p_note[done_button].parentElement.innerHTML = `
            <p class="p-note skiptranslate">${make_changes_to_p_note_textArea}</p>
            <span id="ToDo-note-icon-part">
                <label class="checkBox-label" onclick="ToDo_note_checkBox(this)">
                    <input type="checkbox" class="ToDo-note-check-box">
                    <span class="check"></span>
                </label>
                <b class="created-date" title="created date">${created_date}</b>
                <p class="ToDo-note-iconS" title="save"><i class="fi-rr-bookmark-todo-part"></i></p>
                <div class="ToDo-note-iconS" title="edit"><i class="fi-rr-pencil"></i></div>
                <span class="ToDo-note-iconS" title="delete"><i class="fi-rr-trash"></i></span>
            </span>`;

            ToDo_note_iconS_function.call();

            let ToDo_note_iconS = document.querySelectorAll('.ToDo-note-iconS');
            if (side_bar_icon[2].classList.contains('side-bar-icon-border')) {
                ToDo_note_iconS[0].style.display = 'none';
            }
            if (ToDo_p_note[num_2] !== null && ToDo_p_note[num_2] !== undefined) {
                ToDo_p_note[num_2].innerHTML = make_changes_to_p_note_textArea;
            }

            if (num_4 === 2) {
                saved_toDo = document.querySelector('#saved-to-do-grid').innerHTML;
                L_S.setItem(`saved-note`, saved_toDo);
            }

            set_page_data();
        });
    }
}

// todo part check box function
function create_todo__show_popUp() {
    let add_toDo_note_input = document.querySelector('#add-ToDo-input');
    let search_sugestion = document.querySelector('#search-sugestion');
    let no_added_toDo_text = document.querySelector('#no-added-toDo-text');
    let main_bottom_part_added_note = document.querySelector('#main-bottom-part-added-note');

    if (add_toDo_note_input.value !== '' && add_toDo_note_input.value.includes('<','>')===false) {
        if (not_found_text===null||not_found_text===undefined) {
            search_sugestion.innerHTML+=`<span id="not-found-text" style="justify-content:center;"><b>not found</b></span>`;
        }
        not_found_text = document.querySelector('#not-found-text');

        num_2 += 1;
        not_found_text.style.display = 'none';

        let search_inp_subString = `${add_toDo_note_input.value.substring(0,20)}...`;
        let insert_zero_before_day = _date.getDate()<10 ? '0'+_date.getDate() : _date.getDate();
        let insert_zero_before_month = _date.getMonth()<10 ? '0'+(_date.getMonth()+1) : (_date.getMonth()+1);

        search_sugestion.innerHTML += `<span class="search-sugestion-child display-none"><b>${search_inp_subString}</b> <b id="date-">${_date.getFullYear()}-${insert_zero_before_month}-${insert_zero_before_day}</b></span>`;
        no_added_toDo_text.style.display = "none";
        main_bottom_part_added_note.innerHTML += `<div class="ToDo-note-part skiptranslate">
            <p class="p-note">${add_toDo_note_input.value}</p>
            <span id="ToDo-note-icon-part">
                <label class="checkBox-label" onclick="ToDo_note_checkBox(this)">
                    <input type="checkbox" class="ToDo-note-check-box">
                    <span class="check"></span>
                </label>
                <b class="created-date" title="created date">${_date.getFullYear()}-${insert_zero_before_month}-${insert_zero_before_day}</b>
                <p class="ToDo-note-iconS" title="save"><i class="fi-rr-bookmark-todo-part"></i></p>
                <div class="ToDo-note-iconS" title="edit"><i class="fi-rr-pencil"></i></div>
                <span class="ToDo-note-iconS" title="delete"><i class="fi-rr-trash"></i></span>
            </span>
            </div>`;

        ToDo_note_iconS_function();
        set_page_data();

        add_toDo_note_input.value = '';
    }
    else if (add_toDo_note_input.value === '') {
        fill_input_error_massage.classList.remove('display');
    }
    else if (add_toDo_note_input.value.includes('<','>')) {
        unexpected_character.classList.remove('display')
    }
    setTimeout(() => {
        fill_input_error_massage.classList.add('display');
        unexpected_character.classList.add('display');
    }, 4000);
}
function ToDo_note_iconS_eventListener_function() {
    let ToDo_note_part = document.querySelectorAll('.ToDo-note-part');
    let ToDo_note_part_arr = Array.from(ToDo_note_part);
    var this_str = String(this);
    this_ = this;

    num_6=ToDo_note_part_arr.indexOf(this.parentElement.parentElement);

    if (this_str === `[object HTMLSpanElement]`)
        added_toDo_icon_function_arr[2]();
    else if (this_str === `[object HTMLDivElement]`)
        added_toDo_icon_function_arr[1]();
    else if (this_str === `[object HTMLParagraphElement]`)
        added_toDo_icon_function_arr[0]();

    return this_;
}
function ToDo_note_iconS_function() {
    let ToDo_note_iconS = document.querySelectorAll('.ToDo-note-iconS');
    for (let TD_icon = 0; TD_icon < ToDo_note_iconS.length; TD_icon++) {
        ToDo_note_iconS[TD_icon].addEventListener('click', ToDo_note_iconS_eventListener_function);
    }
}
function ToDo_note_checkBox(input) {
    input_ = input; 
    input_.firstElementChild.setAttribute('checked', 'checked');
    input_.firstElementChild.checked=true;

    input_.parentElement.querySelector('div').style.display='none';

    if (num_4==2) {
        L_S.setItem('saved-note', document.querySelector('#saved-to-do-grid').innerHTML);
    }
    set_page_data();
}

// search box functions 
function search_box() {
    let search_sugestion_child = document.querySelectorAll('.search-sugestion-child');
    let ToDo_note_part = document.querySelectorAll('.ToDo-note-part');
    let p_note = document.querySelectorAll('.p-note');
    let created_date = document.querySelectorAll('.created-date');

    update_search_var();

    if(not_found_text===null || not_found_text===undefined)
        search_sugestion.innerHTML+=`<span id="not-found-text" style="justify-content:center;"><b>not found</b></span>`
    not_found_text = document.querySelector('#not-found-text');

    ToDo_note_part.length = 0 ? search_sugestion.style.display = 'flex' : search_sugestion.style.display = 'none';

    if (search_input_v.value == '') {
        not_found_text.style.display = 'none';
        search_sugestion.style.display = 'none'
    }
    else {
        not_found_text.style.display = 'flex';
        search_sugestion.style.display = 'flex'
    }

    for (let S_S_C_num = 0; S_S_C_num < ToDo_note_part.length; S_S_C_num++) {
        if(num_4===2) {
            search_sugestion.innerHTML += `<span class="search-sugestion-child display-none"><b>${p_note[S_S_C_num].innerHTML}</b> <b id="date-">${created_date[S_S_C_num].innerHTML}</b></span>`;
            if(not_found_text===null || not_found_text===undefined)
                search_sugestion.innerHTML+=`<span id="not-found-text" style="justify-content:center;"><b>not found</b></span>`
        }

        search_sugestion_child = document.querySelectorAll('.search-sugestion-child');
        not_found_text = document.querySelector('#not-found-text');

        search_sugestion_child[S_S_C_num].addEventListener('click', ()=>{
            ToDo_note_part[S_S_C_num].scrollIntoView();
            ToDo_note_part[S_S_C_num].classList.add('background');
            search_sugestion.style.display = 'none';
            search_box_v.classList.remove('search-box-bg');
            search_input_v.blur();

            setTimeout(()=>{
                ToDo_note_part[S_S_C_num].classList.remove('background');
            },2500)
        })

        search_sugestion_child[S_S_C_num].classList.add('display-none');
    
        if (search_filter[1].classList.contains('background') && p_note[S_S_C_num]!==undefined && p_note[S_S_C_num].innerHTML.includes(search_input_v.value)===true) {
            not_found_text.style.display = 'none';
            search_sugestion_child[S_S_C_num].classList.remove('display-none');
        }
        else if (search_filter[0].classList.contains('background') && p_note[S_S_C_num]!==undefined && search_sugestion_child[S_S_C_num].querySelectorAll('b')[1].innerHTML === search_input_v.value) {
            not_found_text.style.display = 'none';
            search_sugestion_child[S_S_C_num].classList.remove('display-none');
        }
    }
}
function search_input() {
    search_box_v.classList.add('search-box-bg');
}
function search_box_mouseleave() {
    let google_translate = document.querySelector('#translate');
    set_timeout = setTimeout(()=>{
        search_sugestion.style.display = 'none';
        search_box_v.classList.remove('search-box-bg');
        search_box_v.classList.remove('increase-width-mobile');
        search_box_v.classList.remove('increase-width');
        google_translate.classList.toggle('display-none');
        search_input_v.blur();
    },2500)
}
function clear_timeout() {
    clearTimeout(set_timeout);
}
let search_text_filter = () => {
    search_filter[1].classList.add('background');
    search_filter[0].classList.remove('background');
    search_input_v.setAttribute('type', 'text')
    search_input_v.value = ''
    set_page_data();
}
let search_date_filter = () => {
    search_filter[0].classList.add('background');
    search_filter[1].classList.remove('background');
    search_input_v.setAttribute('type', 'date')
    set_page_data();
}
let increas_searchBox_width = () => {
    let google_translate = document.querySelector('#translate');
    let browser_screen_width = parseInt(screen.width);
    if (browser_screen_width <= 768 && browser_screen_width > 425) {
        search_box_v.classList.toggle('increase-width');
        search_box_v.classList.toggle('search-box-bg');
        google_translate.classList.toggle('display-none');
    }
    else if (browser_screen_width <= 425) {
        search_box_v.classList.toggle('increase-width-mobile');
        search_box_v.classList.toggle('search-box-bg');
        google_translate.classList.toggle('display-none');
    }
}

// slider button function
let slider_left_angle = () => {
    let slider_child = document.querySelector('#slider-child').style;
    if (slider_child.left !== '0%') {
        num += 100;
        slider_child.left = num + '%';
    }
}
let slider_right_angle = () => {
    let slider_child = document.querySelector('#slider-child').style;
    if (slider_child.left !== '-300%') {
        num -= 100;
        slider_child.left = num + '%';
    }
}

// about page button copy text
let copy_to_clip_board = () => {
    let copy_link_inp = document.querySelector('#copy-link-inp')
    copy_link_inp.select();
    navigator.clipboard.writeText(copy_link_inp.value);

    copied_massage.classList.remove('display');

    setTimeout(() => {
        copied_massage.classList.add('display');
    }, 3000);
}

// setting page app themes
function app_theme_function() {
    let app_themes = document.querySelectorAll('.chose-theme-part-option');
    let brwoser_name = navigator.userAgent.includes('Firefox');

    for (let theme = 0; theme < app_themes.length; theme++) {
        app_themes[theme].addEventListener('click', () => {
            if (brwoser_name === true && theme === 2)
                brwoser_doesnt_support.classList.remove('display');

            else {
                app_themes[0].classList.remove('background');
                app_themes[1].classList.remove('background');
                app_themes[2].classList.remove('background');
                root_styleSheet.setAttribute('href', root_styleSheet_hrefs[theme]);
                app_themes[theme].classList.add('background');
            }

            setTimeout(() => {
                brwoser_doesnt_support.classList.add('display');
            }, 4000);

            set_page_data();
        });
    }
}
// setting page font size checkbox
function font_size_check_box() {
    let setting_check_boxses_0 = document.querySelectorAll('.font-size-check-box-0');
    let setting_check_boxses_1 = document.querySelectorAll('.font-size-check-box-1');
    let setting_check_boxses_2 = document.querySelectorAll('.font-size-check-box-2');
    let font_sizes_text = document.querySelectorAll('.font-size');
    let browser_screen_width = parseInt(screen.width);

    let css_root = document.querySelector(':root');

    browser_screen_width <= 768 ? setting_page_font_size_var_property=['21px', '23px', '25px'] : setting_page_font_size_var_property=['17px', '19px', '21px'];
    browser_screen_width <= 425 ? setting_page_font_size_var_property=['13px', '15px', '17px'] : setting_page_font_size_var_property=['17px', '19px', '21px'];

    for (let font_sizes = 0; font_sizes < font_sizes_text.length; font_sizes++) {
        if (browser_screen_width <= 768)
            font_sizes_text[font_sizes].innerHTML = tablet_font_sizes[font_sizes];
        if (browser_screen_width <= 425)
            font_sizes_text[font_sizes].innerHTML = mobile_font_sizes[font_sizes];
        else if (browser_screen_width > 768)
            font_sizes_text[font_sizes].innerHTML = pc_font_sizes[font_sizes];
    }

    for (let check_box = 0; check_box < setting_check_boxses_0.length; check_box++) {
        setting_check_boxses_0[check_box].addEventListener('click', () => {
            clearTimeout(remove_interval);

            css_root.style.setProperty('--header-font-size', setting_page_font_size_var_property[check_box]);
            for (let x = 0; x < setting_check_boxses_0.length; x++) {
                setting_check_boxses_0[x].checked = false
                setting_check_boxses_0[x].removeAttribute('checked', 'checked')
            }

            setting_check_boxses_0[check_box].checked = true
            setting_check_boxses_0[check_box].setAttribute('checked', 'checked')
            set_page_data();
        })

        if (browser_screen_width > 768) {
            setting_check_boxses_1[check_box].addEventListener('click', () => {
                clearTimeout(remove_interval);
                css_root.style.setProperty('--side-bar-font-size', setting_page_font_size_var_property[check_box]);
                for (let x = 0; x < setting_check_boxses_1.length; x++) {
                    setting_check_boxses_1[x].checked = false
                    setting_check_boxses_1[x].removeAttribute('checked', 'checked')
                }

                setting_check_boxses_1[check_box].checked = true
                setting_check_boxses_1[check_box].setAttribute('checked', 'checked')
                set_page_data();
            })
        }

        setting_check_boxses_2[check_box].addEventListener('click', () => {
            clearTimeout(remove_interval);
            css_root.style.setProperty('--todo-text-font-size', setting_page_font_size_var_property[check_box]);
            for (let x = 0; x < setting_check_boxses_2.length; x++) {
                setting_check_boxses_2[x].checked = false
                setting_check_boxses_2[x].removeAttribute('checked', 'checked')
            }

            setting_check_boxses_2[check_box].checked = true
            setting_check_boxses_2[check_box].setAttribute('checked', 'checked')
            set_page_data();
        })
    }
}
function delete_all_data() {
    let body_overlay = document.querySelector('.body-overlay');
    let warning_box = document.querySelector('.delete-data-warning');
    let warning_btn = document.querySelectorAll('.warning-btn');

    body_overlay.classList.remove('display-none');
    warning_box.classList.remove('display-none');

    warning_btn[0].addEventListener('click', () => {
        body_overlay.classList.add('display-none');
        warning_box.classList.add('display-none');
    })

    warning_btn[1].addEventListener('click', () => {
        body_overlay.classList.add('display-none');
        warning_box.classList.add('display-none');

        L_S.clear();
        window.location.reload();
    })
}