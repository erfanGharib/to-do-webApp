var saved_toDo = '';

// pages html code variables
const page_content_$html = [
    fetch('./components/home.html').then(res => res.text()),
    fetch('./components/setting.html').then(res => res.text()),
    fetch('./components/saved-note.html').then(res => res.text()),
    fetch('./components/about.html').then(res => res.text()),
];

let notif_sound = new Audio('../sounds/notification.wav');
let _date = new Date;
let L_S = localStorage;
let body_part = document.body;
let header = document.querySelector('header');
let main_page_part = document.querySelector('main');
let center_page_part = document.querySelector('#center-part');
let side_bar_icon = document.querySelectorAll('.side-bar-icon');
let root_styleSheet = document.querySelector('#root-styleSheet');
let brwoser_name = navigator.userAgent.includes('Firefox');
let google_translate = document.querySelector('#translate');
let body_overlay = document.querySelector('.body-overlay');
let warning_box = document.querySelector('.delete-data-warning');
let warning_btn = document.querySelectorAll('.warning-btn');
let css_root = document.querySelector(':root');

// app massage dom
let copied_massage = document.querySelector('.copied-massage');
let note_saved_massage = document.querySelector('.note-saved-massage');
let unexpected_character = document.querySelector('.unexpected-character');
let brwoser_doesnt_support = document.querySelector('.doesnt-support-on-firefox');
let fill_input_error_massage = document.querySelector('.fill-input-error-massage');

let search_box_v, search_input_v, search_filter, search_sugestion, not_found_text;

let update_search_var = () => {
    search_box_v = document.querySelector('.search-box');
    search_input_v = document.querySelector('#search-input');
    search_filter = document.querySelectorAll('.search-filter');
    search_sugestion = document.querySelector('#search-sugestion');
}
update_search_var()
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

// todo part icon functions
let added_toDo_icon_function_arr = [
    function save_note() {
        saved_toDo+=this_.parentElement.parentElement.parentElement.innerHTML;

        L_S.setItem('saved-note', saved_toDo);

        note_saved_massage.classList.remove('display');
        notif_sound.play();
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
        this_.parentElement.parentElement.classList.remove('add-note-animate');
        setTimeout(() => {
            this_.parentElement.parentElement.remove();
            search_sugestion_child[num_6].remove();

            if (ToDo_note_part.length == 1 && L_S.getItem('page-index')==0) {
                no_added_toDo_text.style.display = "flex";
                not_found_text.style.display = 'flex';
            }

            if (num_4 === 2) {
                saved_toDo = document.querySelector('#saved-to-do-grid').innerHTML;
                L_S.setItem(`saved-note`, saved_toDo);
            }
            
            set_page_data();
        }, 200);
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

const url_$arr = [
    {url:'home', title:'Home | ToDo web App'},
    {url:'setting', title:'Setting | ToDo web App'},
    {url:'saved-notes', title:'Saved Notes | ToDo web App'},
    {url:'about', title:'About | ToDo web App'}
]

body_part.onload = () => {
    if(L_S.getItem('page-index')==null) L_S.setItem('page-index', 0);
    if(L_S.getItem(`saved-note`) != null) saved_toDo = L_S.getItem(`saved-note`);
    if(L_S.getItem('app-theme-index') == null) L_S.setItem('app-theme-index', 0);

    num_4=L_S.getItem('page-index');
    change_URL(L_S.getItem('page-index'));

    side_bar_icon.forEach((value) => {
        value.classList.remove('side-bar-icon-border');
    })
    side_bar_icon[L_S.getItem('page-index')].classList.add('side-bar-icon-border');
    load_page_$func(L_S.getItem('page-index'));

    update_search_var();
    ToDo_note_iconS_function();
    change_font_size();
    done_btn_function();
    update_not_found_text();

    if (L_S.getItem('app-theme') != null)
        root_styleSheet.setAttribute('href', L_S.getItem('app-theme'));
}

setInterval(() => {
    document.body.style.top = 0;
    document.body.style.position = 'fixed';
    if (document.querySelector('#goog-gt-tt') != null) {
        document.querySelector('#goog-gt-tt').style.display = "none";
    }
}, 1);

// set side bar icon event listeners
side_bar_icon.forEach((value, index) => {
    value.addEventListener('click', () => {
        change_URL(index)
        side_bar_icon.forEach((value) => {
            value.classList.remove('side-bar-icon-border');
        })
        side_bar_icon[L_S.getItem('page-index')].classList.add('side-bar-icon-border');

        num_4 = L_S.getItem('page-index');
        load_page_$func(index);
        get_page_data()
    });
})
let load_page_$func =(index)=> {
    page_content_$html[index].then((data) => {
        main_page_part.innerHTML = data;
    })
    .then(() => {
        switch (parseInt(num_4)) {
            case 0: {
                get_page_data();
                ToDo_note_iconS_function();
                search_box_v.style.display = 'flex';
                break;
            }
            case 1: case 3:{
                font_size_check_box();
                app_theme_function();
                search_box_v.style.display = 'none'
                google_translate.classList.remove('display-none');
                let app_themes = document.querySelectorAll('.chose-theme-part-option');

                if (num_4==1) {     
                    app_themes.forEach((value) => value.classList.remove('background'));

                    app_themes[
                        L_S.getItem('app-theme-index')
                    ].classList.add('background');
                }
                break;
            }
            case 2: {
                if (L_S.getItem(`saved-note`) !== null)
                    document.querySelector('#saved-to-do-grid').innerHTML = L_S.getItem(`saved-note`);

                get_page_data();
                done_btn_function();
                ToDo_note_iconS_function();
                search_box_v.style.display = 'flex';
                break;
            }
        }
    })
}
function update_not_found_text() {
    if(not_found_text==null || not_found_text==undefined)
        search_sugestion.innerHTML+=`<span id="not-found-text"><b>not found</b></span>`;
    not_found_text= document.querySelector('#not-found-text')
}

function set_page_data() {
    L_S.setItem(`html-page${num_4}`, main_page_part.innerHTML);
    L_S.setItem('app-theme', root_styleSheet.href);
    L_S.setItem('css-root', css_root);

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
    side_bar_icon.forEach((value) => {
        value.classList.remove('side-bar-icon-border');
    })
    side_bar_icon[L_S.getItem('page-index')].classList.add('side-bar-icon-border');
    
    if (num_4 == 0 && L_S.getItem(`html-page${0}`) != null) {
        main_page_part.innerHTML = L_S.getItem(`html-page${0}`)
        search_sugestion.innerHTML = L_S.getItem('search-suggestion-home')
    }
    else if (num_4 == 1 && L_S.getItem(`html-page${1}`) != null) {
        alert()
        main_page_part.innerHTML = L_S.getItem(`html-page${1}`);
        search_sugestion.innerHTML = L_S.getItem('search-suggestion-saved');

        document.querySelectorAll('.chose-theme-part-option')[
            L_S.setItem('app-theme-index', theme)
        ].classList.add('background');
    }

    if (L_S.getItem('app-theme') != null) 
        root_styleSheet.setAttribute('href', L_S.getItem('app-theme'));
}
let change_URL =(url_num)=> {
    const url = new URL(window.location);
    url.searchParams.set('app-page', url_$arr[url_num].url);
    window.history.pushState({}, '', url);
    L_S.setItem('page-index', url_num);
}

// google translate function 
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google-translate-element');
}

// edit note done btn
function done_btn_function() {
    let ToDo_p_note = document.querySelectorAll('.ToDo-p-note');
    let make_changes_to_p_note = document.querySelectorAll('.make-changes-to-p-note');

    make_changes_to_p_note.forEach((value, done_button)=>{
        value.addEventListener('click', function () {
            let created_date = document.querySelectorAll('.created-date')[done_button].innerHTML;
            let make_changes_to_p_note_textArea = make_changes_to_p_note[done_button].parentElement.firstElementChild.value;

            document.querySelectorAll('.search-sugestion-child')[num_6].firstElementChild.innerHTML = make_changes_to_p_note_textArea;

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

            ToDo_note_iconS_function();

            let ToDo_note_iconS = document.querySelectorAll('.ToDo-note-iconS');

            if (side_bar_icon[2].classList.contains('side-bar-icon-border')) 
                ToDo_note_iconS[0].style.display = 'none';
                
            if (ToDo_p_note[num_2] !== null && ToDo_p_note[num_2] !== undefined) 
                ToDo_p_note[num_2].innerHTML = make_changes_to_p_note_textArea;

            if (num_4 === 2) {
                saved_toDo = document.querySelector('#saved-to-do-grid').innerHTML;
                L_S.setItem(`saved-note`, saved_toDo);
            }

            set_page_data();
        });
    })
}

// todo part check box function
function create_todo__show_popUp() {
    let add_toDo_note_input = document.querySelector('#add-ToDo-input');
    let search_sugestion = document.querySelector('#search-sugestion');
    let no_added_toDo_text = document.querySelector('#no-added-toDo-text');
    let main_bottom_part_added_note = document.querySelector('#main-bottom-part-added-note');

    // add notes when if get right
    if (add_toDo_note_input.value !== '' && add_toDo_note_input.value.includes('<', '>') === false) {
        update_not_found_text()
        num_2 += 1;
        
        let insert_zero_before_day = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate();
        let insert_zero_before_month = _date.getMonth() < 10 ? '0' + (_date.getMonth() + 1) : (_date.getMonth() + 1);
        
        not_found_text.style.display = 'none';
        no_added_toDo_text.style.display = "none";
        search_sugestion.innerHTML += (`
            <span class="search-sugestion-child display-none">
                <b id="text">${add_toDo_note_input.value}</b> 
                <b id="date-">${_date.getFullYear()}-${insert_zero_before_month}-${insert_zero_before_day}</b>
            </span>
        `);
        main_bottom_part_added_note.innerHTML += `<div class=" add-note-animate ToDo-note-part skiptranslate">
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
    // no entered text notification
    else if (add_toDo_note_input.value === '') {
        fill_input_error_massage.classList.remove('display');
        notif_sound.play();
    }
    // unexpected characters notification
    else if (add_toDo_note_input.value.includes('<', '>')) {
        unexpected_character.classList.remove('display')
        notif_sound.play();
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

    num_6 = ToDo_note_part_arr.indexOf(this.parentElement.parentElement);

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
    input_.firstElementChild.checked = true;

    input_.parentElement.querySelector('div').style.display = 'none';

    if (num_4 == 2) {
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
        if (num_4 === 2) {
            search_sugestion.innerHTML += (`
                <span class="search-sugestion-child display-none">
                    <b>${p_note[S_S_C_num].innerHTML}</b> 
                    <b id="date-">${created_date[S_S_C_num].innerHTML}</b>
                </span>
            `);
        }
        update_not_found_text();
        search_sugestion_child = document.querySelectorAll('.search-sugestion-child');
        // not_found_text = document.querySelector('#not-found-text');

        search_sugestion_child[S_S_C_num].addEventListener('click', () => {
            ToDo_note_part[S_S_C_num].scrollIntoView();
            ToDo_note_part[S_S_C_num].classList.add('background');
            search_sugestion.style.display = 'none';
            search_box_v.classList.remove('search-box-bg');
            search_input_v.blur();

            setTimeout(() => {
                ToDo_note_part[S_S_C_num].classList.remove('background');
            }, 2500)
        })

        search_sugestion_child[S_S_C_num].classList.add('display-none');

        if (search_filter[1].classList.contains('background') && p_note[S_S_C_num] !== undefined && p_note[S_S_C_num].innerHTML.includes(search_input_v.value) === true) {
            not_found_text.style.display = 'none';
            search_sugestion_child[S_S_C_num].classList.remove('display-none');
        }
        else if (search_filter[0].classList.contains('background') && p_note[S_S_C_num] !== undefined && search_sugestion_child[S_S_C_num].querySelectorAll('b')[1].innerHTML === search_input_v.value) {
            not_found_text.style.display = 'none';
            search_sugestion_child[S_S_C_num].classList.remove('display-none');
        }
    }
}
function search_box_mouseleave() {
    let google_translate = document.querySelector('#translate');
    set_timeout = setTimeout(() => {
        search_sugestion.style.display = 'none';
        search_box_v.classList.remove('search-box-bg');
        search_box_v.classList.remove('increase-width-mobile');
        search_box_v.classList.remove('increase-width');
        google_translate.classList.remove('display-none');
        search_input_v.blur();
    }, 2500)
}
function clear_timeout() {
    clearTimeout(set_timeout);
}
let search_filter_$func = (bg_rm, bg_add) => {
    search_filter[bg_add].classList.add('background');
    search_filter[bg_rm].classList.remove('background');
    let search_filter_type = ['text', 'date'];
    search_input_v.setAttribute('type', search_filter_type[bg_rm]);
    set_page_data();
}

let increas_searchBox_width = () => {
    let google_translate = document.querySelector('#translate');
    let browser_screen_width = parseInt(screen.width);

    const cls_toggle =()=> {
        search_box_v.classList.toggle('search-box-bg');
        google_translate.classList.toggle('display-none');
    }

    if (browser_screen_width <= 768 && browser_screen_width > 425) {
        search_box_v.classList.toggle('increase-width');
        cls_toggle();
    } 
    else if (browser_screen_width <= 425) {
        search_box_v.classList.toggle('increase-width-mobile'); 
        cls_toggle();
    }   
}
let change_font_size = () => {
    remove_interval = setInterval(() => {
        let browser_screen_width = parseInt(screen.width);
        let css_root = document.querySelector(':root');
        if (browser_screen_width <= 425) css_root.style.setProperty('--header-font-size', '13px')
        else if (browser_screen_width <= 768) css_root.style.setProperty('--header-font-size', '21px')
        else css_root.style.setProperty('--header-font-size', '17px')
    }, 100)
}

// slider button function
let slider_angle = (dir, mov) => {
    let slider_child = document.querySelector('#slider-child').style;
    if (slider_child.left !== mov) {
        num += dir;
        slider_child.left = num + '%';
    }
}

// about page button copy text
let copy_to_clip_board = () => {
    let copy_link_inp = document.querySelector('#copy-link-inp')
    copy_link_inp.select();
    navigator.clipboard.writeText(copy_link_inp.value);

    notif_sound.play();
    copied_massage.classList.remove('display');

    setTimeout(() => {
        copied_massage.classList.add('display');
    }, 3000);
}

// setting page app themes
function app_theme_function() {
    let app_themes = document.querySelectorAll('.chose-theme-part-option');

    for (let theme = 0; theme < app_themes.length; theme++) {
        app_themes[theme].addEventListener('click', () => {
            if (brwoser_name === true && theme === 2) {
                brwoser_doesnt_support.classList.remove('display');
                notif_sound.play();
                
                setTimeout(() => {
                    brwoser_doesnt_support.classList.add('display');
                }, 4000);
            }

            else {
                app_themes.forEach((value) => value.classList.remove('background'));
                root_styleSheet.setAttribute('href', root_styleSheet_hrefs[theme]);
                app_themes[theme].classList.add('background');
                L_S.setItem('app-theme-index', theme);
            }

            set_page_data();
        });
    }
}

const font_size_record = [
    '--header-font-size',
    '--side-bar-font-size',
    '--todo-text-font-size'
]
// setting page font size checkbox
function font_size_check_box() {
    const setting_check_boxses_$arr = [
        document.querySelectorAll('.font-size-check-box-0'),
        document.querySelectorAll('.font-size-check-box-1'),
        document.querySelectorAll('.font-size-check-box-2'),
    ]
    let font_sizes_text = document.querySelectorAll('.font-size');
    let browser_screen_width = parseInt(screen.width);    
    
    font_sizes_text.forEach((value,font_sizes) => {
        if (browser_screen_width <= 768) {
            font_sizes_text[font_sizes].innerHTML = tablet_font_sizes[font_sizes];
            setting_page_font_size_var_property = ['21px', '23px', '25px']
        }

        if (browser_screen_width <= 425) {
            font_sizes_text[font_sizes].innerHTML = mobile_font_sizes[font_sizes];
            setting_page_font_size_var_property = ['13px', '15px', '17px']
        }

        else if (browser_screen_width > 768) {
            font_sizes_text[font_sizes].innerHTML = pc_font_sizes[font_sizes];
            setting_page_font_size_var_property = ['17px', '19px', '21px'];
        }
    });

    for (let index=0; index<3; index++) {
        
        setting_check_boxses_$arr[index].forEach((value, check_box)=> {
            value.addEventListener('click', function() {
                clearTimeout(remove_interval);
                
                css_root.style.setProperty(font_size_record[index], setting_page_font_size_var_property[check_box]);
                for (let x = 0; x < 3; x++) {
                    setting_check_boxses_$arr[index][x].checked = false
                    setting_check_boxses_$arr[index][x].removeAttribute('checked', 'checked')
                }

                this.checked = true
                this.setAttribute('checked', 'checked');
                set_page_data();
            })
        });
    }
}
function delete_all_data() {
    notif_sound.play();

    body_overlay.classList.remove('display-none');
    warning_box.classList.remove('display-none');

    warning_btn.forEach((value, index)=>{
        value.addEventListener('click', () => {
            body_overlay.classList.add('display-none');
            warning_box.classList.add('display-none');

            if (index==1) {
                L_S.clear();
                window.location.reload();
            }
        })
    })
}