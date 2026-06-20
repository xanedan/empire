/* global Chart */
// ==================== LANGUAGE SYSTEM ====================
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        nav_dashboard:'Dashboard', nav_rooms:'Room Management', nav_checkin:'Check In',
        nav_checkout:'Check Out', nav_services:'Services', nav_history:'History & Records',
        nav_reports:'Reports', nav_purchases:'Purchases', nav_settings:'Settings', nav_logout:'Logout', nav_shift_report:'Shift Report',
        all_status:'All Status', status_available:'Available', status_occupied:'Occupied',
        status_reserved:'Reserved', status_cleaning:'Cleaning', status_checkout:'Checkout',
        all_floors:'All Floors', floor_prefix:'Floor', all_types:'All Types',
        min_price:'Min Price', max_price:'Max Price', reset:'Reset',
        edit:'Edit', details:'Details', per_night:'per night', cancel:'Cancel', close:'Close',
        search:'Search', no_data:'No data available', na:'N/A',
        room_prefix:'Room', floor_label:'Floor', capacity_label:'Capacity',
        guests_label:'guests', guest_label:'Guest', phone_label:'Phone',
        check_in_label:'Check In', check_out_label:'Check Out', nights_label:'nights',
        not_occupied:'Not occupied', none_label:'None', open_label:'Open',
        stat_available:'Available Rooms', stat_occupied:'Occupied Rooms',
        stat_income:'Total Income', stat_guests_today:'Guests Today',
        chart_daily_income:'Daily Income', chart_room_status:'Room Status Distribution',
        recent_activities:'Recent Activities',
        col_guest_name:'Guest Name', col_room:'Room', col_action:'Action',
        col_time:'Time', col_amount:'Amount', no_recent:'No recent activities',
        add_new_room:'Add New Room',
        available_rooms_title:'Available Rooms', max_price_night:'Max Price / Night',
        form_guest_checkin:'Guest Check In',
        form_fill_required:'Fill in all required fields to register the guest',
        section_room_info:'Room Information', section_guest_details:'Guest Details',
        section_stay_duration:'Stay Duration', section_pricing:'Pricing',
        label_room_number:'Room Number', label_room_type:'Room Type',
        label_full_name:'Full Name', label_phone:'Phone Number',
        label_nationality:'Nationality', label_id_type:'ID Type',
        label_num_guests:'Number of Guests', label_id_number:'ID / Passport Number',
        label_email:'Email Address', label_checkin_date:'Check In Date & Time',
        label_checkout_date:'Check Out Date & Time',
        label_price_iqd:'Price (IQD)', label_price_usd:'Price (USD)',
        label_nights:'Nights', label_per_night:'Per Night', label_total:'Total',
        btn_checkin_guest:'Check In Guest', btn_reset_form:'Reset',
        select_room_placeholder:'Select a room', select_id_type:'Select ID type',
        opt_passport:'Passport', opt_national_id:'National ID', opt_driver_license:'Driver License',
        occupied_rooms_title:'Occupied Rooms',
        checkout_invoice_title:'Guest Check Out & Invoice',
        select_room_checkout:'Select a room to proceed with checkout',
        guest_information:'Guest Information', invoice_summary:'Invoice Summary',
        col_description:'Description', services_label:'Services',
        subtotal_label:'Subtotal', tax_label:'Tax', grand_total_label:'GRAND TOTAL',
        room_charges:'Room Charges', btn_confirm_checkout:'Confirm Checkout',
        btn_print_invoice:'Print Invoice', change_adjust:'Change to adjust the invoice',
        services_hint:'Click on an <span class="font-semibold text-red-500">occupied</span> room to add services to the guest\'s bill.',
        btn_add_service:'Add Service',
        search_history_title:'Search History', search_by_name:'Search by guest name',
        search_by_id:'Search by ID/Passport', guest_records_title:'Guest Records',
        col_check_in:'Check In', col_check_out:'Check Out',
        col_total_amount:'Total Amount', no_records:'No records found', btn_view:'View',
        reports_title:'Reports & Export', btn_daily:'Daily', btn_weekly:'Weekly',
        btn_monthly:'Monthly', btn_yearly:'Yearly', btn_export_all:'Export All',
        stat_total_revenue:'Total Revenue', stat_total_guests:'Total Guests',
        stat_occupancy:'Occupancy Rate', stat_avg_price:'Avg Room Price',
        chart_monthly_revenue:'Monthly Revenue', chart_top_rooms:'Top Rooms by Revenue',
        room_history_report:'Room History Report',
        col_type:'Type', col_last_guest:'Last Guest', col_stays:'Stays',
        col_total_revenue:'Total Revenue', col_avg_rating:'Avg Rating',
        btn_add_purchase:'Add Purchase', col_num:'#', col_name:'Name',
        col_price:'Price', col_quantity:'Quantity', col_total:'Total',
        col_date:'Date', no_purchases:'No purchases yet',
        nav_outside_income:'Outside Income', btn_add_outside_income:'Add Outside Income',
        modal_add_outside_income:'Add Outside Income', no_outside_income:'No outside income yet',
        toast_outside_income_added:'Outside income added successfully!',
        toast_outside_income_deleted:'Outside income deleted.',
        hotel_settings_title:'Hotel Settings', label_hotel_name:'Hotel Name',
        label_currency:'Currency', label_tax_rate:'Tax Rate (%)',
        exchange_rate_title:'Exchange Rate', label_exchange_rate:'1 USD = ? IQD',
        exchange_rate_hint:'Used to convert between USD and IQD at checkout (room price, deposit, services, and payment all get compared using this rate).',
        room_config_title:'Room Configuration', label_total_rooms:'Total Rooms',
        room_types_title:'Room Types', btn_add_room_type:'Add Room Type',
        service_items_title:'Service Items', btn_add_service_item:'Add Service Item',
        btn_save_settings:'Save Settings', btn_export_data:'Export Data',
        modal_add_edit_room:'Add/Edit Room',
        label_room_number_req:'Room Number *', label_room_type_req:'Room Type *',
        label_price_per_night:'Price per Night *', label_capacity:'Capacity',
        label_floor:'Floor', label_description:'Description',
        btn_save_room:'Save Room', select_room_type:'Select room type',
        modal_add_order:'Add Order/Extra Service', label_service_item:'Service Item *',
        select_service_item:'Select service item',
        label_quantity_req:'Quantity *', label_unit_price:'Unit Price *',
        label_notes:'Notes', btn_add_order:'Add Order',
        notes_placeholder:'Add any special notes',
        modal_add_purchase:'Add Purchase',
        label_name_req:'Name', label_price_req:'Price', label_quantity_opt:'Quantity',
        modal_guest_details:'Guest Details', orders_services_label:'Orders & Services',
        no_orders:'No orders', total_spent_label:'Total Spent',
        modal_room_details:'Room Details', modal_price_history:'Price Change History',
        col_changed_by:'Changed By', col_old_price:'Old Price', col_new_price:'New Price',
        col_change_date:'Change Date', col_reason:'Reason', no_price_changes:'No price changes',
        current_guest_label:'Current Guest', btn_edit_room:'Edit Room',
        toast_room_saved:'Room saved successfully!',
        toast_service_added:'Service added to guest bill!',
        toast_purchase_added:'Purchase added successfully!',
        toast_purchase_deleted:'Purchase deleted.',
        toast_settings_saved:'Settings saved successfully!',
        toast_fill_fields:'Please fill in all required fields.',
        toast_invalid_date:'Check out date must be after check in date',
        toast_room_unavailable:'Selected room is not available',
        toast_checkout_updated:'Checkout date updated! New total will be calculated.',
        toast_checkout_after:'Checkout date must be after check-in date!',
        toast_no_guest:'No active guest in this room.',
        toast_checkout_ok:'Guest checked out successfully!',
        toast_checkin_ok:'checked in successfully!',
        price_placeholder:'0',
        nav_cleaner:'Room Status',
        login_subtitle:'Management System',
        label_email_addr:'Email', label_password:'Password',
        enter_email:'Enter your email', enter_password:'Enter your password',
        btn_login:'Login', login_error:'Invalid email or password.',
        role_admin:'Admin', role_reception:'Reception', role_cleaner:'Cleaner',
        cleaner_page_title:'Room Status',
        cleaner_hint:'Select a room and change its status.',
        user_mgmt_title:'User Management', btn_add_user:'Add User',
        label_user_name:'Name', label_user_email:'Email',
        label_user_password:'Password', label_user_role:'Role',
        cleaner_statuses_title:'Cleaner Status Options',
        btn_add_cleaner_status:'Add Status',
        toast_status_updated:'Room status updated!',
        toast_cannot_delete_self:'You cannot delete your own account.',
        access_denied:'Access denied.',
        select_role:'Select role',
        logout_confirm:'Are you sure you want to logout?',
        service_categories_title:'Service Categories', btn_add_category:'Add Category',
        label_service_category:'Category', label_item_name:'Item Name',
        room_statuses_title:'Room Statuses',
        room_statuses_hint:'Customize room status labels and colors. System statuses cannot be deleted.',
        btn_add_status:'Add Status',
        label_status_label:'Label', label_status_color:'Color',
        label_bookable:'Bookable', system_badge:'System',
        reserve_room:'Reserve Room', btn_reserve:'Reserve',
        btn_group:'Group', lbl_group:'Group',
        confirm_group_checkin:'Check in this room as a Group (no guest details, no charges)?',
        toast_group_checkin:'Room checked in as Group.',
        btn_change_room:'Change Room', modal_change_room:'Change Reserved Room',
        label_select_new_room:'Move reservation to',
        toast_room_changed:'Reservation moved to the new room.',
        err_select_room:'Please select a room.',
        err_no_other_rooms:'No other available rooms to move this reservation to.',
        label_arrival_date:'Expected Arrival Date',
        label_agreed_price:'Agreed Price / Night',
        label_deposit:'Deposit Paid (IQD)',
        label_deposit_iqd:'Deposit (IQD)', label_deposit_usd:'Deposit (USD)',
        section_deposit:'Deposit / Advance Payment',
        deposit_hint:'Optional: Record any advance payment received from the guest.',
        lbl_deposit_paid:'Deposit Paid',
        lbl_deposit:'Deposit',
        payment_method_label:'Payment Method',
        payment_methods_title:'Payment Methods',
        btn_add_payment_method:'Add Payment Method',
        lbl_payment:'Payment',
        toast_room_reserved:'Room reserved successfully!',
        toast_reservation_cancelled:'Reservation cancelled.',
        btn_checkin_now:'Check In Now',
        cancel_reservation:'Cancel Reservation',
        arrives:'Arrives', reserved_for:'Reserved for',
        change_status_label:'Change Status',
        back:'Back',
        checkout_note_label:'Note',
        checkout_note_placeholder:'Add a note about this checkout (optional)...',
        lbl_balance_due:'Balance Due', lbl_fully_paid:'Fully covered by deposit',
        lbl_cash:'Cash', lbl_mastercard:'MasterCard',
        checkout_payment_title:'Checkout Payment',
        checkout_payment_hint:'Enter the amount being collected from the guest now.',
        err_checkout_payment_required:'Please enter the amount collected from the guest (Cash IQD, Cash USD, or MasterCard IQD).',
        err_checkout_payment_insufficient:'The amount entered is less than the balance due. Please collect the full balance before checking out.',
        lbl_remaining:'Remaining', lbl_change_due:'Change due',
        lbl_fully_paid_now:'Fully paid — no balance remaining',
        lbl_guest:'Guest', lbl_room:'Room', lbl_checkin:'Check-in', lbl_checkout:'Check-out',
        lbl_description:'Description', lbl_amount:'Amount',
        lbl_room_charges:'Room Charges', lbl_room_total:'Room Total',
        lbl_services_total:'Services Total', lbl_thank_you:'Thank you for staying with us!',
        lbl_invoice:'Invoice',
    },
    ar: {
        nav_dashboard:'لوحة التحكم', nav_rooms:'إدارة الغرف', nav_checkin:'تسجيل الدخول',
        nav_checkout:'تسجيل الخروج', nav_services:'الخدمات', nav_history:'السجلات والتاريخ',
        nav_reports:'التقارير', nav_purchases:'المشتريات', nav_settings:'الإعدادات',
        nav_logout:'تسجيل الخروج', nav_shift_report:'تقرير الوردية',
        all_status:'جميع الحالات', status_available:'متاحة', status_occupied:'مشغولة',
        status_reserved:'محجوزة', status_cleaning:'قيد التنظيف', status_checkout:'تم تسجيل الخروج',
        all_floors:'جميع الطوابق', floor_prefix:'الطابق', all_types:'جميع الأنواع',
        min_price:'أقل سعر', max_price:'أعلى سعر', reset:'إعادة تعيين',
        edit:'تعديل', details:'تفاصيل', per_night:'في الليلة', cancel:'إلغاء', close:'إغلاق',
        search:'بحث', no_data:'لا توجد بيانات', na:'غير متاح',
        room_prefix:'غرفة', floor_label:'الطابق', capacity_label:'السعة',
        guests_label:'ضيوف', guest_label:'الضيف', phone_label:'الهاتف',
        check_in_label:'الدخول', check_out_label:'الخروج', nights_label:'ليالٍ',
        not_occupied:'غير مشغولة', none_label:'لا أحد', open_label:'مفتوح',
        stat_available:'الغرف المتاحة', stat_occupied:'الغرف المشغولة',
        stat_income:'إجمالي الدخل', stat_guests_today:'ضيوف اليوم',
        chart_daily_income:'الدخل اليومي', chart_room_status:'توزيع حالة الغرف',
        recent_activities:'النشاطات الأخيرة',
        col_guest_name:'اسم الضيف', col_room:'الغرفة', col_action:'الإجراء',
        col_time:'الوقت', col_amount:'المبلغ', no_recent:'لا توجد نشاطات حديثة',
        add_new_room:'إضافة غرفة جديدة',
        available_rooms_title:'الغرف المتاحة', max_price_night:'أعلى سعر / ليلة',
        form_guest_checkin:'تسجيل دخول الضيف',
        form_fill_required:'أدخل جميع الحقول المطلوبة لتسجيل الضيف',
        section_room_info:'معلومات الغرفة', section_guest_details:'بيانات الضيف',
        section_stay_duration:'مدة الإقامة', section_pricing:'التسعير',
        label_room_number:'رقم الغرفة', label_room_type:'نوع الغرفة',
        label_full_name:'الاسم الكامل', label_phone:'رقم الهاتف',
        label_nationality:'الجنسية', label_id_type:'نوع الهوية',
        label_num_guests:'عدد الضيوف', label_id_number:'رقم الهوية / جواز السفر',
        label_email:'البريد الإلكتروني', label_checkin_date:'تاريخ ووقت الدخول',
        label_checkout_date:'تاريخ ووقت الخروج',
        label_price_iqd:'السعر (د.ع)', label_price_usd:'السعر (دولار)',
        label_nights:'الليالي', label_per_night:'في الليلة', label_total:'الإجمالي',
        btn_checkin_guest:'تسجيل دخول الضيف', btn_reset_form:'إعادة تعيين',
        select_room_placeholder:'اختر غرفة', select_id_type:'اختر نوع الهوية',
        opt_passport:'جواز سفر', opt_national_id:'بطاقة وطنية', opt_driver_license:'رخصة قيادة',
        occupied_rooms_title:'الغرف المشغولة',
        checkout_invoice_title:'تسجيل خروج الضيف والفاتورة',
        select_room_checkout:'اختر غرفة للمتابعة في عملية الخروج',
        guest_information:'معلومات الضيف', invoice_summary:'ملخص الفاتورة',
        col_description:'الوصف', services_label:'الخدمات',
        subtotal_label:'المجموع الجزئي', tax_label:'الضريبة', grand_total_label:'الإجمالي الكلي',
        room_charges:'رسوم الغرفة', btn_confirm_checkout:'تأكيد الخروج',
        btn_print_invoice:'طباعة الفاتورة', change_adjust:'غيّر لتعديل الفاتورة',
        services_hint:'انقر على غرفة <span class="font-semibold text-red-500">مشغولة</span> لإضافة خدمات إلى فاتورة الضيف.',
        btn_add_service:'إضافة خدمة',
        search_history_title:'البحث في السجلات', search_by_name:'البحث باسم الضيف',
        search_by_id:'البحث بالهوية / جواز السفر', guest_records_title:'سجلات الضيوف',
        col_check_in:'الدخول', col_check_out:'الخروج',
        col_total_amount:'المبلغ الإجمالي', no_records:'لا توجد سجلات', btn_view:'عرض',
        reports_title:'التقارير والتصدير', btn_daily:'يومي', btn_weekly:'أسبوعي',
        btn_monthly:'شهري', btn_yearly:'سنوي', btn_export_all:'تصدير الكل',
        stat_total_revenue:'إجمالي الإيرادات', stat_total_guests:'إجمالي الضيوف',
        stat_occupancy:'معدل الإشغال', stat_avg_price:'متوسط سعر الغرفة',
        chart_monthly_revenue:'الإيرادات الشهرية', chart_top_rooms:'أعلى الغرف إيراداً',
        room_history_report:'تقرير تاريخ الغرف',
        col_type:'النوع', col_last_guest:'آخر ضيف', col_stays:'الإقامات',
        col_total_revenue:'إجمالي الإيرادات', col_avg_rating:'التقييم',
        btn_add_purchase:'إضافة مشترى', col_num:'#', col_name:'الاسم',
        col_price:'السعر', col_quantity:'الكمية', col_total:'الإجمالي',
        col_date:'التاريخ', no_purchases:'لا توجد مشتريات',
        nav_outside_income:'دخل خارجي', btn_add_outside_income:'إضافة دخل خارجي',
        modal_add_outside_income:'إضافة دخل خارجي', no_outside_income:'لا يوجد دخل خارجي حتى الآن',
        toast_outside_income_added:'تم إضافة الدخل الخارجي بنجاح!',
        toast_outside_income_deleted:'تم حذف الدخل الخارجي.',
        hotel_settings_title:'إعدادات الفندق', label_hotel_name:'اسم الفندق',
        label_currency:'العملة', label_tax_rate:'نسبة الضريبة (%)',
        exchange_rate_title:'سعر الصرف', label_exchange_rate:'1 دولار = ؟ دينار عراقي',
        exchange_rate_hint:'يُستخدم لتحويل العملة بين الدولار والدينار العراقي عند تسجيل الخروج (سعر الغرفة، العربون، الخدمات، والدفع تتم مقارنتها جميعها بهذا السعر).',
        room_config_title:'إعدادات الغرف', label_total_rooms:'إجمالي الغرف',
        room_types_title:'أنواع الغرف', btn_add_room_type:'إضافة نوع غرفة',
        service_items_title:'عناصر الخدمة', btn_add_service_item:'إضافة خدمة',
        btn_save_settings:'حفظ الإعدادات', btn_export_data:'تصدير البيانات',
        modal_add_edit_room:'إضافة / تعديل غرفة',
        label_room_number_req:'رقم الغرفة *', label_room_type_req:'نوع الغرفة *',
        label_price_per_night:'السعر في الليلة *', label_capacity:'السعة',
        label_floor:'الطابق', label_description:'الوصف',
        btn_save_room:'حفظ الغرفة', select_room_type:'اختر نوع الغرفة',
        modal_add_order:'إضافة طلب / خدمة إضافية', label_service_item:'عنصر الخدمة *',
        select_service_item:'اختر عنصر الخدمة',
        label_quantity_req:'الكمية *', label_unit_price:'سعر الوحدة *',
        label_notes:'ملاحظات', btn_add_order:'إضافة طلب',
        notes_placeholder:'أضف أي ملاحظات خاصة',
        modal_add_purchase:'إضافة مشترى',
        label_name_req:'الاسم', label_price_req:'السعر', label_quantity_opt:'الكمية',
        modal_guest_details:'تفاصيل الضيف', orders_services_label:'الطلبات والخدمات',
        no_orders:'لا توجد طلبات', total_spent_label:'إجمالي الإنفاق',
        modal_room_details:'تفاصيل الغرفة', modal_price_history:'سجل تغييرات الأسعار',
        col_changed_by:'تم التغيير بواسطة', col_old_price:'السعر القديم', col_new_price:'السعر الجديد',
        col_change_date:'تاريخ التغيير', col_reason:'السبب', no_price_changes:'لا توجد تغييرات في الأسعار',
        current_guest_label:'الضيف الحالي', btn_edit_room:'تعديل الغرفة',
        toast_room_saved:'تم حفظ الغرفة بنجاح!',
        toast_service_added:'تمت إضافة الخدمة إلى فاتورة الضيف!',
        toast_purchase_added:'تم إضافة المشترى بنجاح!',
        toast_purchase_deleted:'تم حذف المشترى.',
        toast_settings_saved:'تم حفظ الإعدادات بنجاح!',
        toast_fill_fields:'يرجى ملء جميع الحقول المطلوبة.',
        toast_invalid_date:'يجب أن يكون تاريخ الخروج بعد تاريخ الدخول',
        toast_room_unavailable:'الغرفة المختارة غير متاحة',
        toast_checkout_updated:'تم تحديث تاريخ الخروج! سيتم إعادة حساب الإجمالي.',
        toast_checkout_after:'يجب أن يكون تاريخ الخروج بعد تاريخ الدخول!',
        toast_no_guest:'لا يوجد ضيف نشط في هذه الغرفة.',
        toast_checkout_ok:'تم تسجيل الخروج بنجاح!',
        toast_checkin_ok:'تم تسجيل الدخول بنجاح!',
        price_placeholder:'٠',
        nav_cleaner:'حالة الغرف',
        login_subtitle:'نظام إدارة الفندق',
        label_email_addr:'البريد الإلكتروني', label_password:'كلمة المرور',
        enter_email:'أدخل بريدك الإلكتروني', enter_password:'أدخل كلمة المرور',
        btn_login:'تسجيل الدخول', login_error:'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
        role_admin:'مدير', role_reception:'استقبال', role_cleaner:'عامل نظافة',
        cleaner_page_title:'حالة الغرف',
        cleaner_hint:'اختر غرفة وحدّث حالتها.',
        user_mgmt_title:'إدارة المستخدمين', btn_add_user:'إضافة مستخدم',
        label_user_name:'الاسم', label_user_email:'البريد الإلكتروني',
        label_user_password:'كلمة المرور', label_user_role:'الدور',
        cleaner_statuses_title:'خيارات حالة التنظيف',
        btn_add_cleaner_status:'إضافة حالة',
        toast_status_updated:'تم تحديث حالة الغرفة!',
        toast_cannot_delete_self:'لا يمكنك حذف حسابك الخاص.',
        access_denied:'غير مصرح بالدخول.',
        select_role:'اختر الدور',
        logout_confirm:'هل أنت متأكد من تسجيل الخروج؟',
        service_categories_title:'فئات الخدمات', btn_add_category:'إضافة فئة',
        label_service_category:'الفئة', label_item_name:'اسم العنصر',
        room_statuses_title:'حالات الغرف',
        room_statuses_hint:'خصص تسميات وألوان حالات الغرف. لا يمكن حذف الحالات الأساسية.',
        btn_add_status:'إضافة حالة',
        label_status_label:'التسمية', label_status_color:'اللون',
        label_bookable:'قابل للحجز', system_badge:'نظام',
        reserve_room:'حجز الغرفة', btn_reserve:'احجز',
        btn_group:'مجموعة', lbl_group:'مجموعة',
        confirm_group_checkin:'تسجيل دخول هذه الغرفة كمجموعة (بدون بيانات نزيل وبدون رسوم)؟',
        toast_group_checkin:'تم تسجيل دخول الغرفة كمجموعة.',
        btn_change_room:'تغيير الغرفة', modal_change_room:'تغيير الغرفة المحجوزة',
        label_select_new_room:'نقل الحجز إلى',
        toast_room_changed:'تم نقل الحجز إلى الغرفة الجديدة.',
        err_select_room:'يرجى اختيار غرفة.',
        err_no_other_rooms:'لا توجد غرف أخرى متاحة لنقل هذا الحجز إليها.',
        label_arrival_date:'تاريخ الوصول المتوقع',
        label_agreed_price:'السعر المتفق / ليلة',
        label_deposit:'العربون المدفوع (د.ع)',
        label_deposit_iqd:'العربون (د.ع)', label_deposit_usd:'العربون (دولار)',
        section_deposit:'العربون / الدفعة المقدمة',
        deposit_hint:'اختياري: سجل أي دفعة مقدمة مستلمة من الضيف.',
        lbl_deposit_paid:'العربون المدفوع',
        lbl_deposit:'العربون',
        payment_method_label:'طريقة الدفع',
        payment_methods_title:'طرق الدفع',
        btn_add_payment_method:'إضافة طريقة دفع',
        lbl_payment:'الدفع',
        toast_room_reserved:'تم حجز الغرفة بنجاح!',
        toast_reservation_cancelled:'تم إلغاء الحجز.',
        btn_checkin_now:'تسجيل الدخول الآن',
        cancel_reservation:'إلغاء الحجز',
        arrives:'يصل', reserved_for:'محجوزة لـ',
        change_status_label:'تغيير الحالة',
        back:'رجوع',
        checkout_note_label:'ملاحظة',
        checkout_note_placeholder:'أضف ملاحظة عن هذا الخروج (اختياري)...',
        lbl_balance_due:'المبلغ المتبقي', lbl_fully_paid:'مغطى بالكامل من العربون',
        lbl_cash:'نقدي', lbl_mastercard:'ماستركارد',
        checkout_payment_title:'دفعة تسجيل الخروج',
        checkout_payment_hint:'أدخل المبلغ الذي يتم استلامه من النزيل الآن.',
        err_checkout_payment_required:'يرجى إدخال المبلغ المستلم من النزيل (نقدي د.ع، نقدي دولار، أو ماستركارد د.ع).',
        err_checkout_payment_insufficient:'المبلغ المدخل أقل من المبلغ المتبقي. يرجى تحصيل المبلغ المتبقي بالكامل قبل تسجيل الخروج.',
        lbl_remaining:'المتبقي', lbl_change_due:'المبلغ المسترجع',
        lbl_fully_paid_now:'تم الدفع بالكامل — لا يوجد مبلغ متبقي',
        lbl_guest:'الضيف', lbl_room:'الغرفة', lbl_checkin:'تاريخ الدخول', lbl_checkout:'تاريخ الخروج',
        lbl_description:'الوصف', lbl_amount:'المبلغ',
        lbl_room_charges:'رسوم الغرفة', lbl_room_total:'إجمالي الغرفة',
        lbl_services_total:'إجمالي الخدمات', lbl_thank_you:'شكراً لإقامتكم معنا!',
        lbl_invoice:'فاتورة',
    }
};

function t(key) {
    return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function fmtIQD(n) {
    return Math.round(n).toLocaleString('en-US');
}

function catName(cat) {
    if (!cat) return '';
    if (typeof cat === 'object') return currentLang === 'ar' ? (cat.ar || cat.en || '') : (cat.en || cat.ar || '');
    return cat; // legacy string
}

function catNameByKey(key) {
    if (!key) return '';
    const cats = hotelData.settings.serviceCategories || [];
    const found = cats.find(c => (typeof c === 'object' ? c.en : c) === key);
    return found ? catName(found) : key;
}

function fmtUSD(n) {
    return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.classList.toggle('arabic-font', lang === 'ar');
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'en' ? 'العربية' : 'English';
    translatePage();
    if (loggedInUser) {
        applyRoleUI();
        const visiblePage = [...document.querySelectorAll('.page-content')].find(p => p.style.display !== 'none');
        if (visiblePage) switchPage(visiblePage.id, document.querySelector('.sidebar-item.active'));
    }
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}

// ==================== STATUS SYSTEM ====================
// Adds any newly-introduced default statuses to data saved before they existed, and strips
// out statuses that have since been retired — without touching colors/labels the user
// already customized for statuses that are still active.
const RETIRED_STATUSES = ['vacated'];
// Finds any status entry that's really a duplicate of the canonical 'checkout' status —
// e.g. a custom one a user added by hand called "check out" — so it can be merged away.
function findCheckoutDupeIds(statuses) {
    return (Array.isArray(statuses) ? statuses : [])
        .filter(s => s.id !== 'checkout' && /^check\s*-?\s*out$/i.test((s.label || '').trim()))
        .map(s => s.id);
}
function ensureDefaultRoomStatuses(statuses) {
    const dupeIds = findCheckoutDupeIds(statuses);
    const list = (Array.isArray(statuses) ? [...statuses] : [])
        .filter(s => !RETIRED_STATUSES.includes(s.id) && !dupeIds.includes(s.id));
    const defaults = [
        { id: 'cleaning', label: 'Cleaning', color: '#3b82f6', bookable: false },
        { id: 'checkout', label: 'Checkout', color: '#dc2626', bookable: false },
    ];
    defaults.forEach(d => { if (!list.find(s => s.id === d.id)) list.push(d); });
    return list;
}

// Remaps room statuses that have been retired/merged. Takes the *raw* (pre-cleanup) statuses
// list so dupe ids can still be found — must be computed before ensureDefaultRoomStatuses() runs.
function migrateRoomStatuses(rooms, rawStatuses) {
    const dupeIds = findCheckoutDupeIds(rawStatuses);
    return (rooms || []).map(r => {
        if (r.status === 'vacated') return { ...r, status: 'cleaning' };
        if (dupeIds.includes(r.status)) return { ...r, status: 'checkout' };
        return r;
    });
}

function getStatusConfig(id) {
    const found = (hotelData.settings.roomStatuses || []).find(s => s.id === id);
    return found || { id, label: id, color: '#6b7280', bookable: false };
}

function getStatusLabel(id) {
    const cfg = getStatusConfig(id);
    return cfg.label || id;
}

function getCleanerStatuses() {
    return (hotelData.settings.roomStatuses || []).filter(s => !s.system);
}

const STATUS_ICONS = {
    available: 'fa-check-circle', cleaning: 'fa-broom', checkout: 'fa-door-open',
    unavailable: 'fa-ban', reserved: 'fa-bookmark', occupied: 'fa-user-circle'
};

function getStatusIcon(id) { return STATUS_ICONS[id] || 'fa-circle'; }

// ==================== DATA MANAGEMENT ====================
// Ensure XLSX is loaded
function ensureXLSX() {
    return new Promise((resolve) => {
        if (window.XLSX) {
            resolve();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
            script.onload = () => resolve();
            script.onerror = () => {
                console.error('Failed to load XLSX library');
                resolve(); // Still resolve to continue
            };
            document.head.appendChild(script);
        }
    });
}

let hotelData = {
    rooms: [],
    guests: [],
    orders: [],
    priceHistory: [],
    settings: {
        hotelName: 'My Hotel',
        currency: 'USD',
        currencySymbol: '$',
        taxRate: 0,
        exchangeRate: 1500,
        totalRooms: 20,
        paymentMethods: ['Cash', 'Card', 'Bank Transfer'],
        serviceCategories: [
            {en:'Food',ar:'طعام'},
            {en:'Drinks',ar:'مشروبات'},
            {en:'Hot Drinks',ar:'مشروبات ساخنة'},
            {en:'Laundry',ar:'غسيل'},
            {en:'Cleaning',ar:'تنظيف'},
            {en:'Other',ar:'أخرى'}
        ],
        roomTypes: ['Single', 'Double', 'Suite', 'Deluxe'],
        roomStatuses: [
            { id: 'available',   label: 'Available',   color: '#10b981', bookable: true  },
            { id: 'cleaning',    label: 'Cleaning',    color: '#3b82f6', bookable: false },
            { id: 'checkout',    label: 'Checkout',    color: '#dc2626', bookable: false },
            { id: 'unavailable', label: 'Unavailable', color: '#ef4444', bookable: false },
            { id: 'reserved',    label: 'Reserved',    color: '#f59e0b', bookable: false, system: true },
            { id: 'occupied',    label: 'Occupied',    color: '#6b7280', bookable: false, system: true },
        ]
    },
    activities: [],
    purchases: [],
    outsideIncome: [],
    shiftLog: [],
    reservationLog: [],
    users: [
        { id: 1, name: 'Admin', email: 'admin@hotel.com', password: 'admin123', role: 'admin' }
    ]
};

let loggedInUser = null;

let selectedRoom = null;
let _historyPage = 1;
let _historyRecords = [];
let charts = {};
let isOnline = true;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage();
    initializeRooms();
    updateCurrentDate();
    setupEventListeners();
    setInterval(updateCurrentDate, 1000);
    // Init language
    document.documentElement.dir  = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.body.classList.toggle('arabic-font', currentLang === 'ar');
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = currentLang === 'en' ? 'العربية' : 'English';
    translatePage();

    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('sidebar-collapsed');
    }

    // Firebase auth
    if (window.fbAuth) {
        setupOnlineWatcher();
        window.fbAuth.onAuthStateChanged(user => {
            if (user) {
                window.fbDb.ref('users/' + user.uid).once('value').then(snap => {
                    const profile = snap.val();
                    if (!profile) { window.fbAuth.signOut(); checkFirstRun(); return; }
                    loggedInUser = { uid: user.uid, ...profile };
                    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                    return window.fbDb.ref('hotelData').once('value').then(dataSnap => {
                        const fbData = dataSnap.val();
                        if (fbData) { hotelData = fbMerge(fbData); localStorage.setItem('hotelData', JSON.stringify(hotelData)); }
                        showApp();
                        setupFirebaseRealtimeListener();
                    });
                }).catch(() => {
                    showLogin();
                });
            } else {
                checkFirstRun();
            }
        });
    } else {
        checkAuth();
    }
});

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Check In Form
    document.getElementById('checkInForm')?.addEventListener('submit', handleCheckIn);
    document.getElementById('basePriceIQD')?.addEventListener('input', () => lockOtherPriceField('basePriceIQD', 'basePriceUSD'));
    document.getElementById('basePriceUSD')?.addEventListener('input', () => lockOtherPriceField('basePriceUSD', 'basePriceIQD'));
    document.getElementById('roomSelect')?.addEventListener('change', handleRoomSelection);

    // Room Form
    document.getElementById('roomForm')?.addEventListener('submit', handleRoomSubmit);

    // Order Form
    document.getElementById('orderForm')?.addEventListener('submit', handleOrderSubmit);

    // Purchase Form
    document.getElementById('purchaseForm')?.addEventListener('submit', handlePurchaseSubmit);
    document.getElementById('outsideIncomeForm')?.addEventListener('submit', handleOutsideIncomeSubmit);
}

// ==================== MODAL FUNCTIONS ====================
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ==================== NAVIGATION ====================
function switchPage(pageId, clickedEl) {
    // Role guard
    if (loggedInUser && PAGE_ACCESS[pageId] && !PAGE_ACCESS[pageId].includes(loggedInUser.role)) {
        showToast(t('access_denied'), 'error');
        return;
    }

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    document.getElementById(pageId).style.display = 'block';

    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const sidebarItem = clickedEl ? clickedEl.closest('.sidebar-item') : null;
    if (sidebarItem) sidebarItem.classList.add('active');

    // Update page title
    const titles = {
        'dashboard': t('nav_dashboard'), 'rooms': t('nav_rooms'),
        'checkIn': t('nav_checkin'), 'checkOut': t('nav_checkout'),
        'history': t('nav_history'), 'reports': t('nav_reports'),
        'purchases': t('nav_purchases'), 'outsideIncome': t('nav_outside_income'), 'services': t('nav_services'),
        'settings': t('nav_settings'), 'cleanerStatus': t('cleaner_page_title')
    };
    document.getElementById('pageTitle').textContent = titles[pageId] || t('nav_dashboard');

    // Load page specific data
    if (pageId === 'dashboard') loadDashboard();
    if (pageId === 'rooms') loadRoomsPage();
    if (pageId === 'checkIn') loadCheckInPage();
    if (pageId === 'checkOut') loadCheckOutPage();
    if (pageId === 'history') loadHistoryPage();
    if (pageId === 'reports') loadReportsPage();
    if (pageId === 'purchases') loadPurchasesPage();
    if (pageId === 'outsideIncome') loadOutsideIncomePage();
    if (pageId === 'services') loadServicesPage();
    if (pageId === 'settings') loadSettingsPage();
    if (pageId === 'cleanerStatus') loadCleanerPage();

    // Close sidebar on phones only (tablet keeps it visible)
    if (window.innerWidth < 768) closeSidebar();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (window.innerWidth < 768) {
        // Mobile: toggle 'open' class (sidebar hidden by CSS default)
        const opening = !sidebar.classList.contains('open');
        sidebar.classList.toggle('open');
        overlay?.classList.toggle('active', opening);
    } else {
        // Desktop: toggle 'sidebar-collapsed' class
        sidebar.classList.toggle('sidebar-collapsed');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');   // mobile
    document.getElementById('sidebarOverlay')?.classList.remove('active');
}

// ==================== FILTER UTILITIES ====================
function applyRoomFilters(rooms, { status, floor, type, minPrice, maxPrice } = {}) {
    return rooms.filter(room => {
        if (status && status !== 'all' && room.status !== status) return false;
        if (floor && floor !== 'all' && String(room.floor) !== String(floor)) return false;
        if (type && type !== 'all' && room.type.toLowerCase() !== type.toLowerCase()) return false;
        if (minPrice !== '' && minPrice != null && !isNaN(minPrice) && room.price < parseFloat(minPrice)) return false;
        if (maxPrice !== '' && maxPrice != null && !isNaN(maxPrice) && room.price > parseFloat(maxPrice)) return false;
        return true;
    });
}

function populateFilterSelects(floorElId, typeElId) {
    const floors = [...new Set(hotelData.rooms.map(r => r.floor))].sort((a, b) => a - b);
    const floorEl = document.getElementById(floorElId);
    if (floorEl) {
        const cur = floorEl.value;
        floorEl.innerHTML = `<option value="all">${t('all_floors')}</option>` +
            floors.map(f => `<option value="${f}">${t('floor_prefix')} ${f}</option>`).join('');
        if (cur) floorEl.value = cur;
    }
    const types = hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe'];
    const typeEl = document.getElementById(typeElId);
    if (typeEl) {
        const cur = typeEl.value;
        typeEl.innerHTML = `<option value="all">${t('all_types')}</option>` +
            types.map(tp => `<option value="${tp}">${tp}</option>`).join('');
        if (cur) typeEl.value = cur;
    }
}

// ==================== ROOM MANAGEMENT ====================
function initializeRooms() {
    if (hotelData.rooms.length === 0) {
        const roomTypes = ['Single', 'Double', 'Suite', 'Deluxe'];
        let roomNum = 101;
        const prices = { 'Single': 50, 'Double': 75, 'Suite': 150, 'Deluxe': 200 };

        for (let i = 0; i < hotelData.settings.totalRooms; i++) {
            const type = roomTypes[i % roomTypes.length];
            hotelData.rooms.push({
                id: i + 1,
                number: roomNum,
                type: type,
                price: prices[type],
                capacity: type === 'Single' ? 1 : type === 'Double' ? 2 : type === 'Suite' ? 3 : 4,
                status: 'available', // available, occupied, reserved, cleaning
                floor: Math.floor((roomNum - 100) / 10) + 1,
                currentGuest: null,
                description: `Comfortable ${type} room with modern amenities`
            });
            roomNum++;
        }
    }
    saveDataToStorage();
}

let _editingRoomId = null;

function openRoomModal(roomId = null) {
    _editingRoomId = roomId || null;
    // Populate room type dropdown from settings
    const roomTypeSelect = document.getElementById('roomType');
    roomTypeSelect.innerHTML = '<option value="">Select room type</option>';
    (hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe']).forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        roomTypeSelect.appendChild(opt);
    });

    if (roomId) {
        const room = hotelData.rooms.find(r => r.id === roomId);
        document.getElementById('roomNumber').value = room.number;
        // Match case-insensitively for backwards compatibility
        const matchedOpt = Array.from(roomTypeSelect.options)
            .find(o => o.value.toLowerCase() === (room.type || '').toLowerCase());
        roomTypeSelect.value = matchedOpt ? matchedOpt.value : room.type;
        document.getElementById('roomPrice').value = Math.round(room.price).toLocaleString('en-US');
        document.getElementById('roomCapacity').value = room.capacity;
        document.getElementById('roomFloor').value = room.floor;
        document.getElementById('roomDescription').value = room.description;
    } else {
        document.getElementById('roomForm').reset();
        // Re-populate after reset clears the select
        roomTypeSelect.innerHTML = '<option value="">Select room type</option>';
        (hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe']).forEach(type => {
            const opt = document.createElement('option');
            opt.value = type;
            opt.textContent = type;
            roomTypeSelect.appendChild(opt);
        });
    }
    openModal('roomModal');
}

function handleRoomSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const roomNumber = document.getElementById('roomNumber').value;
    const roomType = document.getElementById('roomType').value;
    const roomPrice = parseFloat((document.getElementById('roomPrice').value || '').replace(/,/g, ''));
    const capacity = parseInt(document.getElementById('roomCapacity').value);
    const floor = parseInt(document.getElementById('roomFloor').value);
    const description = document.getElementById('roomDescription').value;

    let room = _editingRoomId != null ? hotelData.rooms.find(r => r.id === _editingRoomId) : null;

    if (room) {
        room.number      = parseInt(roomNumber);
        room.type        = roomType;
        room.price       = roomPrice;
        room.capacity    = capacity;
        room.floor       = floor;
        room.description = description;
    } else {
        room = {
            id: Date.now(),
            number: parseInt(roomNumber),
            type: roomType,
            price: roomPrice,
            capacity: capacity,
            floor: floor,
            status: 'available',
            currentGuest: null,
            description: description
        };
        hotelData.rooms.push(room);
    }
    _editingRoomId = null;

    saveDataToStorage();
    closeModal('roomModal');
    showToast(t('toast_room_saved'), 'success');
    loadRoomsPage();
}

function loadRoomsPage() {
    populateFilterSelects('rmFilterFloor', 'rmFilterType');
    filterRoomsAdvanced();
}

function filterRoomsAdvanced() {
    const status   = document.getElementById('rmFilterStatus')?.value || 'all';
    const floor    = document.getElementById('rmFilterFloor')?.value  || 'all';
    const type     = document.getElementById('rmFilterType')?.value   || 'all';
    const minPrice = document.getElementById('rmFilterMinPrice')?.value ?? '';
    const maxPrice = document.getElementById('rmFilterMaxPrice')?.value ?? '';
    displayRooms(applyRoomFilters(hotelData.rooms, { status, floor, type, minPrice, maxPrice }));
}

function resetRoomFilters() {
    ['rmFilterStatus','rmFilterFloor','rmFilterType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    ['rmFilterMinPrice','rmFilterMaxPrice'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    displayRooms(hotelData.rooms);
}

function displayRooms(rooms) {
    const grid = document.getElementById('roomsGrid');
    grid.innerHTML = '';

    rooms.forEach(room => {
        const cfg = getStatusConfig(room.status);
        const card = document.createElement('div');
        card.className = 'room-card bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all';
        card.style.cssText = `border-left:4px solid ${cfg.color};`;
        const statusLabel = cfg.label;
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${t('room_prefix')} ${room.number}</h3>
                    <p class="text-gray-600 text-sm">${room.type} - ${t('floor_prefix')} ${room.floor}</p>
                </div>
                <span class="badge" style="background:${cfg.color}20;color:${cfg.color};">
                    <i class="fas fa-circle text-xs mr-1"></i>${statusLabel}
                </span>
            </div>
            <div class="mb-4">
                <p class="text-2xl font-bold text-green-600">$${room.price}</p>
                <p class="text-xs text-gray-500">${t('per_night')}</p>
            </div>
            <div class="mb-4 text-sm">
                <p class="text-gray-600">${t('capacity_label')}: <span class="font-semibold">${room.capacity} ${t('guests_label')}</span></p>
                ${room.currentGuest ? `<p class="text-gray-600">${t('guest_label')}: <span class="font-semibold">${room.currentGuest.name}</span></p>` : ''}
            </div>
            <div class="flex gap-2">
                <button onclick="openRoomModal(${room.id})" class="btn btn-secondary btn-sm flex-1 text-sm">
                    <i class="fas fa-edit"></i> ${t('edit')}
                </button>
                <button onclick="viewRoomDetails(${room.id})" class="btn btn-primary btn-sm flex-1 text-sm">
                    <i class="fas fa-info-circle"></i> ${t('details')}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}


// ==================== CHECK IN ====================
function loadCheckInPage() {
    populateFilterSelects('ciFilterFloor', 'ciFilterType');
    startCheckInClock();
    displayCheckInRooms(hotelData.rooms);
}

let _checkInClockTimer = null;
function startCheckInClock() {
    const ciEl = document.getElementById('checkInDateTime');
    const coEl = document.getElementById('checkOutDateTime');
    if (!ciEl) return;
    // ciEl is editable — user can change check-in date/time
    ciEl.readOnly = false;
    ciEl.style.cssText = '';

    function tick() {
        if (document.getElementById('checkInModal').classList.contains('active') === false) {
            clearInterval(_checkInClockTimer);
            _checkInClockTimer = null;
            return;
        }
        const now = new Date();
        now.setSeconds(0, 0);
        if (!ciEl.dataset.userChanged) {
            const pad = n => String(n).padStart(2, '0');
            ciEl.value = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
        }
        recalcCheckout();
    }

    tick(); // set immediately
    if (_checkInClockTimer) clearInterval(_checkInClockTimer);
    _checkInClockTimer = setInterval(tick, 60000); // update every minute
}

// Mark fields as user-changed when manually edited
document.addEventListener('DOMContentLoaded', function() {
    const ciEl = document.getElementById('checkInDateTime');
    const coEl = document.getElementById('checkOutDateTime');
    if (ciEl) ciEl.addEventListener('change', () => { ciEl.dataset.userChanged = '1'; recalcCheckout(); });
});

function filterCheckInRooms() {
    const floor    = document.getElementById('ciFilterFloor')?.value    || 'all';
    const type     = document.getElementById('ciFilterType')?.value     || 'all';
    const maxPrice = document.getElementById('ciFilterMaxPrice')?.value ?? '';
    displayCheckInRooms(applyRoomFilters(hotelData.rooms, { floor, type, maxPrice }));
}

function resetCheckInFilters() {
    ['ciFilterFloor', 'ciFilterType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    const mp = document.getElementById('ciFilterMaxPrice');
    if (mp) mp.value = '';
    displayCheckInRooms(hotelData.rooms);
}

function displayCheckInRooms(rooms) {
    const grid = document.getElementById('checkInRoomsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    rooms.forEach(room => {
        const cfg = getStatusConfig(room.status);
        const isAvailable = cfg.bookable;
        // Based on reservationInfo, not status — so a temp-checked-out room still shows its
        // pending reservation even while sitting in "Checkout" (needs cleaning) for the cleaner.
        const isReserved = !!room.reservationInfo;

        const isOccupied = room.status === 'occupied' && room.currentGuest;
        const isClickable = isAvailable || isOccupied || isReserved;

        const card = document.createElement('div');
        card.className = `room-card rounded-lg p-6 transition-all ${isClickable ? 'cursor-pointer hover:shadow-lg' : 'opacity-60 cursor-not-allowed'}`;
        card.style.cssText = `border-left:4px solid ${cfg.color};background:${isClickable ? '#ffffff' : cfg.color + '10'};`;

        if (isAvailable) {
            card.onclick = () => openCheckInModal(room.id);
        } else if (isOccupied) {
            card.onclick = () => openRoomServiceModal(room.id);
        }

        let reserveBlock = '';
        if (isReserved && room.reservationInfo) {
            const ri = room.reservationInfo;
            const arrDate = ri.arrivalDate ? new Date(ri.arrivalDate).toLocaleDateString() : '—';
            reserveBlock = `
                <div style="margin-top:8px;padding:8px 10px;background:${cfg.color}15;border-radius:8px;font-size:0.78rem;color:#374151;">
                    <b>${t('reserved_for')}:</b> ${ri.guestName} &nbsp;·&nbsp; <b>${t('arrives')}:</b> ${arrDate}${(()=>{const parts=[];const iqd=ri.depositIQD||(ri.deposit||0);const usd=ri.depositUSD||0;if(iqd>0)parts.push(`IQD ${fmtIQD(iqd)}`);if(usd>0)parts.push(`$${usd.toFixed(2)}`);return parts.length?` &nbsp;·&nbsp; <b>${t('lbl_deposit')}:</b> ${parts.join(' + ')}`:'';})()}
                    <div style="display:flex;gap:6px;margin-top:6px;">
                        <button onclick="openCheckInFromReservation(${room.id});event.stopPropagation();"
                            style="flex:1;padding:5px 8px;background:${cfg.color};color:white;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;">
                            <i class="fas fa-sign-in-alt"></i> ${t('btn_checkin_now')}
                        </button>
                        <button onclick="openTempCheckIn(${room.id});event.stopPropagation();"
                            style="flex:1;padding:5px 8px;background:#f59e0b;color:white;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;">
                            <i class="fas fa-clock"></i> Temp
                        </button>
                        <button onclick="openChangeRoomModal(${room.id});event.stopPropagation();"
                            style="padding:5px 10px;background:#ede9fe;color:#7c3aed;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;" title="${t('btn_change_room')||'Change Room'}">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                        <button onclick="cancelReservation(${room.id});event.stopPropagation();"
                            style="padding:5px 10px;background:#fee2e2;color:#dc2626;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>`;
        }

        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${t('room_prefix')} ${room.number}</h3>
                    <p class="text-gray-600 text-sm">${room.type} — ${t('floor_prefix')} ${room.floor}</p>
                </div>
                <span class="badge" style="background:${cfg.color}20;color:${cfg.color};">
                    <i class="fas fa-circle text-xs mr-1"></i>${cfg.label}
                </span>
            </div>
            <div class="mb-3">
                <p class="text-2xl font-bold text-green-600">$${room.price}</p>
                <p class="text-xs text-gray-500">${t('per_night')}</p>
            </div>
            <div class="text-sm mb-4">
                <p class="text-gray-600">${t('capacity_label')}: <span class="font-semibold">${room.capacity} ${t('guests_label')}</span></p>
                ${room.currentGuest ? `<p class="text-gray-600">${t('guest_label')}: <span class="font-semibold">${room.currentGuest.name}</span></p>` : ''}
            </div>
            ${reserveBlock}
            ${isAvailable && !isReserved
                ? `<div style="display:flex;gap:5px;margin-top:8px;">
                       <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#16a34a;color:white;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="openCheckInModal(${room.id});event.stopPropagation();">
                           <i class="fas fa-sign-in-alt"></i> ${t('btn_checkin_guest') || 'Check In'}
                       </button>
                       <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#ede9fe;color:#7c3aed;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="openReserveModal(${room.id});event.stopPropagation();">
                           <i class="fas fa-bookmark"></i> ${t('btn_reserve') || 'Reserve'}
                       </button>
                       <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#fef3c7;color:#b45309;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="groupCheckIn(${room.id});event.stopPropagation();">
                           <i class="fas fa-users"></i> ${t('btn_group') || 'Group'}
                       </button>
                   </div>`
                : isOccupied
                    ? `<div style="display:flex;gap:5px;margin-top:8px;">
                           <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#3b82f6;color:white;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="openRoomServiceModal(${room.id});event.stopPropagation();">
                               <i class="fas fa-plus"></i> ${t('btn_add_service') || 'Add Service'}
                           </button>
                           <button style="padding:5px 10px;background:#ede9fe;color:#7c3aed;border:none;border-radius:7px;cursor:pointer;" onclick="openChangeRoomModal(${room.id});event.stopPropagation();" title="${t('btn_change_room')||'Change Room'}">
                               <i class="fas fa-exchange-alt"></i>
                           </button>
                       </div>`
                    : (!isReserved ? `<p class="text-xs text-gray-400 text-center mt-2">${cfg.label}</p>` : '')
            }
        `;
        grid.appendChild(card);
    });
}

let _lastCheckedInRoomId = null;
let _checkoutBalanceIQD = 0;
let _checkoutRate = 1500;

// Live-updates the "Remaining" line under the checkout payment fields as the user types,
// so the receptionist doesn't have to use an outside calculator to figure out what's left.
function updateCheckoutRemaining() {
    const el = document.getElementById('checkoutRemainingBalance');
    if (!el) return;
    const cashIQD = parseFloat((document.getElementById('checkoutCashIQD')?.value || '0').replace(/,/g, '')) || 0;
    const cashUSD = parseFloat(document.getElementById('checkoutCashUSD')?.value || '0') || 0;
    const cardIQD = parseFloat((document.getElementById('checkoutCardIQD')?.value || '0').replace(/,/g, '')) || 0;
    const paidIQDEquivalent = cashIQD + cardIQD + (cashUSD * _checkoutRate);
    const remaining = _checkoutBalanceIQD - paidIQDEquivalent;

    if (remaining > 0.5) {
        el.style.background = '#fef2f2'; el.style.color = '#b91c1c';
        el.innerHTML = `<i class="fas fa-exclamation-circle mr-1"></i>${t('lbl_remaining') || 'Remaining'}: IQD ${fmtIQD(remaining)} <span style="opacity:0.75;">(&asymp; $${fmtUSD(remaining / _checkoutRate)})</span>`;
    } else if (remaining < -0.5) {
        el.style.background = '#f0fdf4'; el.style.color = '#15803d';
        el.innerHTML = `<i class="fas fa-coins mr-1"></i>${t('lbl_change_due') || 'Change due'}: IQD ${fmtIQD(-remaining)} <span style="opacity:0.75;">(&asymp; $${fmtUSD(-remaining / _checkoutRate)})</span>`;
    } else {
        el.style.background = '#f0fdf4'; el.style.color = '#15803d';
        el.innerHTML = `<i class="fas fa-check-circle mr-1"></i>${t('lbl_fully_paid_now') || 'Fully paid — no balance remaining'}`;
    }
}

function openTempCheckIn(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.reservationInfo) return;
    openCheckInModal(roomId, true);
}

function openCheckInModal(roomId, isTemp = false) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    document.getElementById('checkInModalForm').style.display = '';
    document.getElementById('checkInModalSuccess').style.display = 'none';
    document.getElementById('checkInForm').reset();
    resetPriceFields();
    populateRoomSelectDropdown();
    document.getElementById('roomSelect').value = room.id;
    handleRoomSelection();
    document.getElementById('basePriceUSD').value = room.price;
    document.getElementById('basePriceIQD').value = '';
    lockOtherPriceField('basePriceUSD', 'basePriceIQD');

    // Hide the room selector — room was chosen by clicking the card
    document.getElementById('roomSelectSection').style.display = 'none';
    const banner = document.getElementById('roomSelectedBanner');
    banner.style.display = '';
    document.getElementById('roomBannerTitle').textContent =
        `${t('room_prefix')} ${room.number} — ${room.type}`;
    document.getElementById('roomBannerSub').textContent =
        `${t('floor_prefix')} ${room.floor}  ·  $${room.price} / ${t('per_night')}`;

    // Temp occupancy on a reserved room
    const tempWarning = document.getElementById('tempCheckInWarning');
    if (isTemp && room.reservationInfo) {
        const ri = room.reservationInfo;
        const arrivalStr = ri.arrivalDate ? new Date(ri.arrivalDate).toLocaleString() : '—';
        if (tempWarning) {
            tempWarning.style.display = '';
            tempWarning.innerHTML = `
                <i class="fas fa-exclamation-triangle" style="color:#d97706;margin-right:6px;"></i>
                <span><strong>Temporary occupancy</strong> — reserved for <strong>${ri.guestName}</strong>.<br>
                Guest <strong>must check out by ${arrivalStr}</strong>.</span>`;
        }
        // Lock checkout to arrival date — calculate max nights and constrain nights input
        if (ri.arrivalDate) {
            const now = new Date();
            now.setSeconds(0, 0);
            const arrivalDate = new Date(ri.arrivalDate);
            const maxNights = Math.max(1, Math.ceil((arrivalDate - now) / (1000 * 60 * 60 * 24)));
            const nightsEl = document.getElementById('nightsInput');
            if (nightsEl) {
                nightsEl.max = maxNights;
                nightsEl.value = Math.min(parseInt(nightsEl.value) || 1, maxNights);
            }
            const checkOutDisplay = document.getElementById('checkOutDisplay');
            if (checkOutDisplay) {
                checkOutDisplay.style.borderColor = '#f59e0b';
                checkOutDisplay.style.background = '#fef3c7';
            }
        }
        // Store temp flag on the form so handleCheckIn can read it
        document.getElementById('checkInForm').dataset.tempRoomId = roomId;
    } else {
        if (tempWarning) tempWarning.style.display = 'none';
        document.getElementById('checkInForm').dataset.tempRoomId = '';
        const nightsEl = document.getElementById('nightsInput');
        if (nightsEl) nightsEl.max = '';
        const checkOutDisplay = document.getElementById('checkOutDisplay');
        if (checkOutDisplay) { checkOutDisplay.style.borderColor = ''; checkOutDisplay.style.background = ''; }
    }

    // Auto-fill current date/time
    const now = new Date();
    now.setSeconds(0, 0);
    const pad = n => String(n).padStart(2, '0');
    const localNow = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const dtEl = document.getElementById('checkInDateTime');
    if (dtEl) { dtEl.value = localNow; }
    recalcCheckout();

    startCheckInClock();
    openModal('checkInModal');
}

function changeRoomSelection() {
    document.getElementById('roomSelectSection').style.display = '';
    document.getElementById('roomSelectedBanner').style.display = 'none';
    document.getElementById('checkInForm').dataset.tempRoomId = '';
    resetPriceFields();
    document.getElementById('basePriceIQD').value = '';
    document.getElementById('basePriceUSD').value = '';
}

function resetCheckInForm() {
    document.getElementById('checkInForm').reset();
    resetPriceFields();
    document.getElementById('basePriceIQD').value = '';
    document.getElementById('basePriceUSD').value = '';
    document.getElementById('checkInForm').dataset.tempRoomId = '';
    ['checkInDepositCashIQD', 'checkInDepositCardIQD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
    const cashUSD = document.getElementById('checkInDepositCashUSD');
    if (cashUSD) { cashUSD.value = ''; cashUSD.disabled = false; cashUSD.style.opacity = '1'; cashUSD.style.cursor = ''; }
    // Re-fill current date/time
    const now = new Date();
    now.setSeconds(0, 0);
    const pad = n => String(n).padStart(2, '0');
    const localNow = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const dtEl = document.getElementById('checkInDateTime');
    if (dtEl) dtEl.value = localNow;
    recalcCheckout();
}

function openServiceAfterCheckIn() {
    const room = hotelData.rooms.find(r => r.id === _lastCheckedInRoomId);
    if (!room || !room.currentGuest) return;
    closeModal('checkInModal');
    selectedRoom = room;
    _populateOrderModal();
    openModal('orderModal');
}

function populateRoomSelectDropdown() {
    const bookableRooms = hotelData.rooms.filter(r => {
        const cfg = getStatusConfig(r.status);
        return cfg.bookable || r.status === 'reserved';
    });
    const select = document.getElementById('roomSelect');
    select.innerHTML = '<option value="">Select a room</option>';

    bookableRooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.id;
        const tag = room.status === 'reserved' ? ' [Reserved]' : '';
        option.textContent = `Room ${room.number} (${room.type}) - $${room.price}/night${tag}`;
        select.appendChild(option);
    });
}

function lockDepositField(activeId, otherId) {
    // Both fields always stay open
}

function lockOtherPriceField(activeId, otherId) {
    const hintEl = document.getElementById('checkInCurrencyHint');
    if (hintEl) hintEl.textContent = '';
    calculateTotalPrice();
}

function resetPriceFields() {
    ['basePriceIQD', 'basePriceUSD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
}

function handleRoomSelection() {
    const roomId = parseInt(document.getElementById('roomSelect').value);
    const room = hotelData.rooms.find(r => r.id === roomId);

    if (room) {
        resetPriceFields();
        document.getElementById('roomTypeDisplay').value = room.type;
        document.getElementById('basePriceUSD').value = room.price;
        document.getElementById('basePriceIQD').value = '';
        lockOtherPriceField('basePriceUSD', 'basePriceIQD');
    }
}

function recalcCheckout() {
    const ciEl = document.getElementById('checkInDateTime');
    const nightsEl = document.getElementById('nightsInput');
    const checkOutHidden = document.getElementById('checkOutDateTime');
    const checkOutDisplay = document.getElementById('checkOutDisplay');
    const nightsCountEl = document.getElementById('nightsCount');

    const nights = Math.max(1, parseInt(nightsEl?.value) || 1);
    if (nightsCountEl) nightsCountEl.textContent = nights;

    if (!ciEl?.value) {
        if (checkOutDisplay) checkOutDisplay.textContent = '—';
        if (checkOutHidden) checkOutHidden.value = '';
        calculateTotalPrice();
        return;
    }

    const checkIn = new Date(ciEl.value);
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + nights);

    if (checkOutHidden) checkOutHidden.value = checkOut.toISOString().slice(0, 16);
    if (checkOutDisplay) {
        checkOutDisplay.textContent = checkOut.toLocaleString([], {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    }
    calculateTotalPrice();
}

function calculateNights() { recalcCheckout(); }

function calculateTotalPrice() {
    const priceIQD = parseFloat((document.getElementById('basePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('basePriceUSD').value) || 0;
    const nights = parseInt(document.getElementById('nightsCount').textContent) || 0;

    const price = priceIQD || priceUSD;
    const isIQD = priceIQD > 0 || (!priceUSD && hotelData.settings.currencySymbol === 'IQD');

    document.getElementById('finalNightPrice').textContent  = isIQD ? `IQD ${fmtIQD(price)}`          : `$ ${price.toFixed(2)}`;
    document.getElementById('totalStayPrice').textContent   = isIQD ? `IQD ${fmtIQD(price * Math.max(nights, 1))}` : `$ ${(price * Math.max(nights, 1)).toFixed(2)}`;
}

function handleCheckIn(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const roomId = parseInt(document.getElementById('roomSelect').value);
    const room = hotelData.rooms.find(r => r.id === roomId);

    const roomCfg = getStatusConfig(room.status);
    if (!room || (!roomCfg.bookable && room.status !== 'reserved')) {
        showToast(t('toast_room_unavailable'), 'error');
        return;
    }

    const priceIQD = parseFloat((document.getElementById('basePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('basePriceUSD').value) || 0;
    const depositCashIQD = parseFloat((document.getElementById('checkInDepositCashIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCashUSD = parseFloat(document.getElementById('checkInDepositCashUSD')?.value) || 0;
    const depositCardIQD = parseFloat((document.getElementById('checkInDepositCardIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCardUSD = parseFloat(document.getElementById('checkInDepositCardUSD')?.value) || 0;
    const depositIQD = depositCashIQD + depositCardIQD;
    const depositUSD = depositCashUSD + depositCardUSD;

    const guest = {
        id: Math.random().toString(36).substring(2, 11),
        roomId: roomId,
        name: document.getElementById('guestName').value,
        phone: document.getElementById('guestPhone').value,
        nationality: document.getElementById('guestNationality').value,
        idType: document.getElementById('idType').value,
        idNumber: document.getElementById('idNumber').value,
        email: document.getElementById('guestEmail').value,
        numGuests: parseInt(document.getElementById('numGuests').value),
        checkIn: document.getElementById('checkInDateTime').value,
        checkOut: document.getElementById('checkOutDateTime').value || (() => {
            const d = new Date(document.getElementById('checkInDateTime').value || new Date());
            d.setDate(d.getDate() + 1);
            d.setHours(12, 0, 0, 0);
            return d.toISOString();
        })(),
        basePriceIQD: priceIQD,
        basePriceUSD: priceUSD,
        basePrice: priceIQD || priceUSD,
        depositCashIQD: depositCashIQD,
        depositCashUSD: depositCashUSD,
        depositCardIQD: depositCardIQD,
        depositCardUSD: depositCardUSD,
        depositIQD: depositIQD,
        depositUSD: depositUSD,
        notes: (document.getElementById('checkInNotes')?.value || '').trim(),
        orders: [],
        totalSpent: 0,
        checkedInBy: loggedInUser?.name || '—'
    };

    // Check if this is a temporary occupancy on a reserved room
    const tempRoomId = parseInt(document.getElementById('checkInForm').dataset.tempRoomId || '0');
    const isTemp = tempRoomId === room.id && room.status === 'reserved' && room.reservationInfo;

    if (isTemp) {
        // Validate checkout is before reservation arrival
        const checkoutDT  = new Date(guest.checkOut);
        const arrivalDT   = new Date(room.reservationInfo.arrivalDate);
        if (guest.checkOut && checkoutDT > arrivalDT) {
            showToast(`Checkout must be before reservation arrival (${arrivalDT.toLocaleDateString()})`, 'error');
            return;
        }
        room.isTemporary      = true;
        room.savedReservation = { ...room.reservationInfo }; // keep reservation safe
    } else {
        room.isTemporary      = false;
        room.savedReservation = null;
        room.reservationInfo  = null;
    }

    room.status = 'occupied';
    room.currentGuest = { name: guest.name, id: guest.id };

    hotelData.guests.push(guest);
    const tempNote = isTemp ? ' (temporary — room reserved)' : '';
    addActivity(`Guest ${guest.name} checked in to Room ${room.number}${tempNote}`);
    saveDataToStorage();

    showToast(`${guest.name} — ${t('toast_checkin_ok')}`, 'success');
    _lastCheckedInRoomId = room.id;
    document.getElementById('checkInForm').reset();
    resetPriceFields();
    loadCheckInPage();

    // Switch modal to success state
    document.getElementById('checkInModalForm').style.display = 'none';
    document.getElementById('checkInModalSuccess').style.display = '';
    document.getElementById('checkInSuccessMsg').textContent = `${guest.name} — ${t('room_prefix')} ${room.number}`;
}

function groupCheckIn(roomId) {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === roomId);
    const roomCfg = getStatusConfig(room.status);
    if (!room || (!roomCfg.bookable && room.status !== 'reserved')) {
        showToast(t('toast_room_unavailable'), 'error');
        return;
    }
    if (!confirm(t('confirm_group_checkin') || 'Check in this room as a Group (no guest details, no charges)?')) return;

    const now = new Date();
    const checkOut = new Date(now.getTime() + 86400000);

    const guest = {
        id: Math.random().toString(36).substring(2, 11),
        roomId: roomId,
        name: t('lbl_group') || 'Group',
        phone: '', nationality: '', idType: '', idNumber: '', email: '',
        numGuests: 1,
        checkIn: now.toISOString(),
        checkOut: checkOut.toISOString(),
        basePriceIQD: 0, basePriceUSD: 0, basePrice: 0,
        depositCashIQD: 0, depositCashUSD: 0, depositCardIQD: 0, depositCardUSD: 0,
        depositIQD: 0, depositUSD: 0,
        notes: '',
        orders: [],
        totalSpent: 0,
        checkedInBy: loggedInUser?.name || '—',
        isGroup: true
    };

    room.isTemporary = false;
    room.savedReservation = null;
    room.reservationInfo = null;
    room.status = 'occupied';
    room.currentGuest = { name: guest.name, id: guest.id };

    hotelData.guests.push(guest);
    addActivity(`Room ${room.number} checked in as Group (no charges)`);
    saveDataToStorage();
    showToast(t('toast_group_checkin') || 'Room checked in as Group.', 'success');
    loadCheckInPage();
}

// ==================== CHECK OUT ====================
function loadCheckOutPage() {
    populateFilterSelects('coFilterFloor', 'coFilterType');
    populateOccupiedRooms();
}

function filterCheckOutRooms() {
    const floor = document.getElementById('coFilterFloor')?.value || 'all';
    const type  = document.getElementById('coFilterType')?.value  || 'all';
    const occupied = hotelData.rooms.filter(r => r.status === 'occupied' && r.currentGuest);
    populateOccupiedRooms(applyRoomFilters(occupied, { floor, type }));
}

function populateOccupiedRooms(rooms = null) {
    const occupiedRooms = rooms !== null ? rooms : hotelData.rooms.filter(r => r.status === 'occupied' && r.currentGuest);
    const list = document.getElementById('occupiedRoomsList');
    list.innerHTML = '';

    if (occupiedRooms.length === 0) {
        list.innerHTML = `<p class="text-gray-500 text-center py-4">${t('status_occupied')}: 0</p>`;
        return;
    }

    occupiedRooms.forEach(room => {
        const isTemp = room.isTemporary && room.savedReservation;
        const div = document.createElement('div');
        div.className = `p-3 border-l-4 rounded cursor-pointer transition ${isTemp ? 'bg-amber-50 border-amber-400 hover:bg-amber-100' : 'bg-red-50 border-red-500 hover:bg-red-100'}`;
        div.onclick = () => loadCheckOutForm(room.id);
        const deadlineBadge = isTemp
            ? `<p class="text-xs font-semibold text-amber-700 mt-1">
                   <i class="fas fa-clock mr-1"></i>Must leave by ${new Date(room.savedReservation.arrivalDate).toLocaleDateString()}
               </p>`
            : '';
        div.innerHTML = `
            <p class="font-semibold">${t('room_prefix')} ${room.number}</p>
            <p class="text-sm text-gray-600">${room.currentGuest.name}</p>
            ${deadlineBadge}
        `;
        list.appendChild(div);
    });
}

function loadCheckOutForm(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
    if (!guest) return;
    if (!Array.isArray(guest.orders)) guest.orders = [];

    const checkInDate = new Date(guest.checkIn);
    // If checkout date is missing, default to check-in + 1 day
    const checkOutDate = guest.checkOut ? new Date(guest.checkOut) : new Date(checkInDate.getTime() + 86400000);
    if (!guest.checkOut) guest.checkOut = checkOutDate.toISOString();
    const nights = Math.max(1, Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)));

    // Determine room currency
    const roomIsUSD = (guest.basePriceUSD > 0);
    const roomSymbol = roomIsUSD ? '$' : 'IQD';
    let finalPrice = roomIsUSD ? (guest.basePriceUSD || 0) : (guest.basePriceIQD || guest.basePrice || 0);
    if (guest.discountType === 'percentage' && guest.discount) {
        finalPrice = finalPrice - (finalPrice * guest.discount / 100);
    } else if (guest.discount) {
        finalPrice = finalPrice - guest.discount;
    }
    finalPrice = Math.max(0, finalPrice);

    const roomCharges = finalPrice * nights;
    // Services always in IQD
    const serviceTotal = guest.orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);

    // Balance due after deposit (room charges + services - deposit already paid)
    // Everything is converted to a single IQD figure using the exchange rate, so USD and IQD
    // amounts (room price, deposit, services, payment) can be compared/combined directly.
    const rate = hotelData.settings.exchangeRate || 1500;
    const depositIQD = guest.depositIQD || 0;
    const depositUSD = guest.depositUSD || 0;
    const roomChargeIQD = roomIsUSD ? roomCharges * rate : roomCharges;
    const depositIQDEquivalent = depositIQD + (depositUSD * rate);
    const balanceIQD = Math.max(0, roomChargeIQD + serviceTotal - depositIQDEquivalent);
    const balanceUSD = balanceIQD / rate;
    _checkoutBalanceIQD = balanceIQD;
    _checkoutRate = rate;

    const orderItems = guest.orders.map(order => `
        <tr>
            <td>${order.category ? catNameByKey(order.category) + ': ' : ''}${order.name}</td>
            <td>${order.quantity}</td>
            <td>IQD ${fmtIQD(order.price * order.quantity)}</td>
        </tr>
    `).join('');

    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    const content = document.getElementById('checkOutContent');
    content.innerHTML = `
        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-4">${t('guest_information')}</h4>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="info-item">
                    <div class="info-label">${t('col_guest_name')}</div>
                    <div class="info-value">${guest.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${t('col_room')}</div>
                    <div class="info-value">${t('room_prefix')} ${room.number}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${t('check_in_label')}</div>
                    <div class="info-value">${new Date(guest.checkIn).toLocaleString(locale)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${t('check_out_label')}</div>
                    <div>
                        <input type="datetime-local" id="checkoutDateModify"
                            value="${checkOutDate.toISOString().slice(0, 16)}"
                            class="px-3 py-2 border border-gray-300 rounded text-sm font-semibold w-full"
                            onchange="modifyCheckoutDate(${roomId}, this.value)">
                        <span class="text-xs text-gray-400">${t('change_adjust')}</span>
                    </div>
                </div>
                ${(guest.depositIQD > 0 || guest.depositUSD > 0) ? `
                <div class="info-item" style="border-left-color: #10b981; grid-column: 1 / -1;">
                    <div class="info-label"><i class="fas fa-hand-holding-usd mr-1 text-green-600"></i>${t('lbl_deposit_paid') || 'Deposit Paid'}</div>
                    <div class="info-value" style="color: #059669; display:flex; flex-wrap:wrap; gap:14px; font-size:0.95rem;">
                        ${guest.depositCashIQD > 0 ? `<span><i class="fas fa-money-bill-wave mr-1"></i>${t('lbl_cash')||'Cash'} IQD ${fmtIQD(guest.depositCashIQD)}</span>` : ''}
                        ${guest.depositCashUSD > 0 ? `<span><i class="fas fa-money-bill-wave mr-1"></i>${t('lbl_cash')||'Cash'} $${guest.depositCashUSD.toFixed(2)}</span>` : ''}
                        ${guest.depositCardIQD > 0 ? `<span><i class="fas fa-credit-card mr-1"></i>${t('lbl_mastercard')||'MasterCard'} IQD ${fmtIQD(guest.depositCardIQD)}</span>` : ''}
                    </div>
                </div>` : ''}
                <div class="info-item" style="border-left-color: #f59e0b; grid-column: 1 / -1;">
                    <div class="info-label"><i class="fas fa-balance-scale mr-1" style="color:#d97706;"></i>${t('lbl_balance_due')||'Balance Due'}</div>
                    <div class="info-value" style="color: #b45309;">
                        ${balanceIQD > 0
                            ? `IQD ${fmtIQD(balanceIQD)} <span style="color:#9ca3af;font-weight:500;">(&asymp; $${fmtUSD(balanceUSD)})</span>`
                            : (t('lbl_fully_paid')||'Fully covered by deposit')}
                    </div>
                    <div class="text-xs text-gray-400 mt-1">${t('exchange_rate_note')||'Rate used'}: $1 = IQD ${fmtIQD(rate)}</div>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-3">${t('invoice_summary')}</h4>
            <table class="w-full text-sm border-collapse">
                <thead>
                    <tr class="border-b-2 border-gray-300">
                        <th class="text-left py-2">${t('col_description')}</th>
                        <th class="text-right py-2">${t('col_amount')}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Room charges in room currency -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2">${t('room_charges')} (${nights} ${t('nights_label')} × ${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(finalPrice):finalPrice.toLocaleString()}/${t('per_night')})</td>
                        <td class="text-right py-2 font-semibold">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
                    </tr>
                    <tr class="bg-blue-50 border-b-2 border-blue-200">
                        <td class="py-2 font-bold">${t('room_charges')} ${t('grand_total_label')}</td>
                        <td class="text-right py-2 font-bold text-blue-700">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
                    </tr>
                    ${guest.orders.length > 0 ? `
                        <tr class="border-b border-gray-100">
                            <td colspan="2" class="py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">${t('services_label')} (IQD)</td>
                        </tr>
                        ${orderItems}
                        <tr class="bg-green-50 border-t-2 border-green-200">
                            <td class="py-2 font-bold">${t('services_label')} ${t('grand_total_label')}</td>
                            <td class="text-right py-2 font-bold text-green-700">IQD ${fmtIQD(serviceTotal)}</td>
                        </tr>
                    ` : ''}
                </tbody>
            </table>
        </div>

        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-2"><i class="fas fa-cash-register mr-2 text-green-600"></i>${t('checkout_payment_title')||'Checkout Payment'}</h4>
            <p class="text-xs text-gray-500 mb-2">${t('checkout_payment_hint')||'Enter the amount being collected from the guest now.'}</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Cash IQD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">IQD</span>
                        <input type="text" inputmode="numeric" id="checkoutCashIQD" placeholder="0" style="padding-left:52px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                            oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',');updateCheckoutRemaining()">
                    </div>
                </div>
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Cash USD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">$</span>
                        <input type="number" id="checkoutCashUSD" step="0.01" min="0" placeholder="0.00" style="padding-left:36px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                            oninput="updateCheckoutRemaining()">
                    </div>
                </div>
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">MasterCard IQD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">IQD</span>
                        <input type="text" inputmode="numeric" id="checkoutCardIQD" placeholder="0" style="padding-left:52px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                            oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',');updateCheckoutRemaining()">
                    </div>
                </div>
            </div>
            <div id="checkoutRemainingBalance" style="margin-top:10px;padding:9px 14px;border-radius:8px;font-size:0.88rem;font-weight:700;"></div>
        </div>

        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-2"><i class="fas fa-sticky-note mr-2 text-yellow-500"></i>${t('checkout_note_label') || 'Note'}</h4>
            <textarea id="checkoutNote" rows="3"
                placeholder="${t('checkout_note_placeholder') || 'Add a note about this checkout (optional)...'}"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                style="font-family:inherit;"
            >${guest.checkoutNote || ''}</textarea>
        </div>

        <div class="flex gap-4">
            <button onclick="confirmCheckOut(${roomId}, ${roomCharges}, '${roomSymbol}', ${serviceTotal})" class="btn btn-success flex-1" style="justify-content:center;">
                <i class="fas fa-check"></i> ${t('btn_confirm_checkout')}
            </button>
            <button onclick="printInvoice('${guest.name}', '${room.number}', ${nights}, ${roomCharges}, '${roomSymbol}', ${serviceTotal}, '${guest.checkIn}', '${guest.checkOut}')" class="btn btn-secondary flex-1" style="justify-content:center;">
                <i class="fas fa-print"></i> ${t('btn_print_invoice')}
            </button>
        </div>
    `;
    updateCheckoutRemaining();
}

function confirmCheckOut(roomId, roomAmount, roomSymbol, serviceAmountIQD) {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
    if (!guest) return;

    // Calculate balance after deposit — everything converted to one IQD figure via the
    // exchange rate, so USD/IQD room price, deposit, services, and payment all compare directly.
    const rate = hotelData.settings.exchangeRate || 1500;
    const depositIQD = guest.depositIQD || 0;
    const depositUSD = guest.depositUSD || 0;
    const roomChargeIQD = roomSymbol === 'IQD' ? roomAmount : roomAmount * rate;
    const depositIQDEquivalent = depositIQD + (depositUSD * rate);
    const balanceIQD = Math.max(0, roomChargeIQD + serviceAmountIQD - depositIQDEquivalent);
    const balanceUSD = balanceIQD / rate;

    // Read checkout payment amounts collected now
    const checkoutCashIQD = parseFloat((document.getElementById('checkoutCashIQD')?.value || '0').replace(/,/g, '')) || 0;
    const checkoutCashUSD = parseFloat(document.getElementById('checkoutCashUSD')?.value || '0') || 0;
    const checkoutCardIQD = parseFloat((document.getElementById('checkoutCardIQD')?.value || '0').replace(/,/g, '')) || 0;
    const paidIQDEquivalent = checkoutCashIQD + checkoutCardIQD + (checkoutCashUSD * rate);

    if (balanceIQD > 0) {
        if (checkoutCashIQD === 0 && checkoutCashUSD === 0 && checkoutCardIQD === 0) {
            showToast(t('err_checkout_payment_required'), 'error');
            return;
        }
        const TOLERANCE_IQD = 1; // guard against float rounding only, not a real discount
        if (paidIQDEquivalent + TOLERANCE_IQD < balanceIQD) {
            showToast(t('err_checkout_payment_insufficient'), 'error');
            return;
        }
    }

    guest.roomAmountPaid  = roomAmount;
    guest.roomCurrency    = roomSymbol;
    guest.serviceAmountIQD = serviceAmountIQD;
    guest.totalSpent      = roomAmount;
    guest.checkedOutAt    = new Date().toISOString();
    guest.checkedOutBy    = loggedInUser?.name || '—';
    guest.checkoutNote    = (document.getElementById('checkoutNote')?.value || '').trim();
    const paymentParts = [];
    if (checkoutCashIQD > 0 || checkoutCashUSD > 0) paymentParts.push('Cash');
    if (checkoutCardIQD > 0) paymentParts.push('MasterCard');
    guest.paymentMethod   = paymentParts.join(' + ');
    guest.checkoutCashIQD = checkoutCashIQD;
    guest.checkoutCashUSD = checkoutCashUSD;
    guest.checkoutCardIQD = checkoutCardIQD;
    guest.balanceIQD = balanceIQD;
    guest.balanceUSD = balanceUSD;

    // Temp-occupied rooms still need cleaning like any other checkout — restore the pending
    // reservation info so reception doesn't lose it, but let the cleaner see it as a checkout.
    if (room.isTemporary && room.savedReservation) {
        room.reservationInfo = { ...room.savedReservation };
        room.isTemporary     = false;
        room.savedReservation = null;
    }
    room.status = 'checkout';
    room.currentGuest = null;

    const svcNote = serviceAmountIQD > 0 ? ` + IQD ${fmtIQD(serviceAmountIQD)} (services)` : '';
    const roomAmtFmt = roomSymbol === 'IQD' ? fmtIQD(roomAmount) : roomAmount.toLocaleString();
    addActivity(`Guest ${guest.name} checked out from Room ${room.number} - ${roomSymbol} ${roomAmtFmt}${svcNote}`);
    saveDataToStorage();
    showToast(t('toast_checkout_ok'), 'success');

    const svcLine = serviceAmountIQD > 0
        ? `<p style="color:#6b7280;font-size:0.95rem;margin:4px 0;">${t('services_label')}: <strong>IQD ${fmtIQD(serviceAmountIQD)}</strong></p>`
        : '';
    const paymentLine = guest.paymentMethod
        ? `<p style="color:#6b7280;font-size:0.95rem;margin:4px 0;"><i class="fas fa-credit-card" style="margin-right:4px;"></i>${t('payment_method_label')}: <strong>${guest.paymentMethod}</strong></p>`
        : '';
    const noteLine = guest.checkoutNote
        ? `<div style="margin-top:16px;padding:10px 14px;background:#fefce8;border-left:4px solid #eab308;border-radius:8px;font-size:0.9rem;color:#374151;text-align:left;">
               <i class="fas fa-sticky-note" style="color:#eab308;margin-right:6px;"></i>${guest.checkoutNote}
           </div>`
        : '';

    const content = document.getElementById('checkOutContent');
    content.innerHTML = `
        <div style="text-align:center;padding:40px 24px;">
            <div style="width:80px;height:80px;border-radius:50%;background:#dcfce7;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                <i class="fas fa-check-circle" style="font-size:2.5rem;color:#16a34a;"></i>
            </div>
            <h3 style="font-size:1.5rem;font-weight:700;color:#1f2937;margin-bottom:6px;">${t('toast_checkout_ok') || 'Checked Out Successfully'}</h3>
            <p style="font-size:1.05rem;color:#374151;font-weight:600;margin-bottom:4px;">${guest.name} — ${t('room_prefix')} ${room.number}</p>
            <p style="color:#6b7280;font-size:0.95rem;margin:4px 0;">${t('lbl_room')}: <strong>${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomAmount):roomAmount.toLocaleString()}</strong></p>
            ${svcLine}
            ${paymentLine}
            ${noteLine}
            <div style="display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap;">
                <button onclick="loadCheckOutPage()" class="btn btn-secondary" style="min-width:140px;justify-content:center;">
                    <i class="fas fa-arrow-left"></i> ${t('back') || 'Back'}
                </button>
            </div>
        </div>
    `;

    populateOccupiedRooms();
}

function printInvoice(guestName, roomNumber, nights, roomCharges, roomSymbol, serviceAmountIQD, checkIn, checkOut) {
    const note = (document.getElementById('checkoutNote')?.value || '').trim();
    const checkInStr  = checkIn  ? new Date(checkIn).toLocaleString()  : '—';
    const checkOutStr = checkOut ? new Date(checkOut).toLocaleString() : '—';
    const hotelName   = hotelData.settings.hotelName || 'Hotel';
    const isRTL = currentLang === 'ar';
    const L = {
        invoice:       t('lbl_invoice'),
        guest:         t('lbl_guest'),
        room:          t('lbl_room'),
        checkin:       t('lbl_checkin'),
        checkout:      t('lbl_checkout'),
        description:   t('lbl_description'),
        amount:        t('lbl_amount'),
        roomSection:   t('room_prefix'),
        roomCharges:   t('lbl_room_charges'),
        roomTotal:     t('lbl_room_total'),
        services:      t('services_label'),
        svcTotal:      t('lbl_services_total'),
        noteLabel:     t('checkout_note_label'),
        thankyou:      t('lbl_thank_you'),
        nights:        t('nights_label'),
    };
    const html = `<!DOCTYPE html>
<html dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
    <meta charset="utf-8">
    <title>${L.invoice} - ${guestName}</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 30px; color: #222; direction: ${isRTL ? 'rtl' : 'ltr'}; }
        .header { text-align: center; margin-bottom: 24px; border-bottom: 3px solid #667eea; padding-bottom: 12px; }
        .header h1 { margin: 0 0 4px; color: #667eea; font-size: 1.8em; }
        .info { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; font-size: 0.95em; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
        th, td { padding: 10px 12px; text-align: ${isRTL ? 'right' : 'left'}; border-bottom: 1px solid #e5e7eb; }
        th { background: #667eea; color: white; font-size: 0.85em; text-transform: uppercase; }
        .section-header td { background: #f3f4f6; font-weight: 700; font-size: 0.8em; text-transform: uppercase; color: #6b7280; letter-spacing: 0.05em; }
        .total-room { font-weight: bold; background: #eff6ff; color: #1d4ed8; }
        .total-svc  { font-weight: bold; background: #f0fdf4; color: #15803d; }
        .footer { text-align: center; margin-top: 30px; font-size: 0.85em; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>${hotelName}</h1>
        <p style="margin:0;color:#6b7280;font-size:0.9em;">${L.invoice} &nbsp;·&nbsp; ${new Date().toLocaleString()}</p>
    </div>
    <div class="info">
        <div>
            <p><strong>${L.guest}:</strong> ${guestName}</p>
            <p><strong>${L.room}:</strong> ${roomNumber}</p>
        </div>
        <div>
            <p><strong>${L.checkin}:</strong> ${checkInStr}</p>
            <p><strong>${L.checkout}:</strong> ${checkOutStr} &nbsp;(${nights} ${L.nights})</p>
        </div>
    </div>
    <table>
        <tr><th>${L.description}</th><th style="text-align:${isRTL?'left':'right'};">${L.amount}</th></tr>
        <tr class="section-header"><td colspan="2">${L.roomSection}</td></tr>
        <tr>
            <td>${L.roomCharges} (${nights} ${L.nights})</td>
            <td style="text-align:${isRTL?'left':'right'};">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
        </tr>
        <tr class="total-room">
            <td>${L.roomTotal}</td>
            <td style="text-align:${isRTL?'left':'right'};">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
        </tr>
        ${serviceAmountIQD > 0 ? `
        <tr class="section-header"><td colspan="2">${L.services}</td></tr>
        <tr class="total-svc">
            <td>${L.svcTotal}</td>
            <td style="text-align:${isRTL?'left':'right'};">IQD ${fmtIQD(serviceAmountIQD)}</td>
        </tr>
        ` : ''}
    </table>
    ${note ? `<div style="margin-top:20px;padding:12px 16px;background:#fefce8;border-${isRTL?'right':'left'}:4px solid #eab308;border-radius:4px;font-size:0.9em;">
        <strong>${L.noteLabel}:</strong> ${note}
    </div>` : ''}
    <div class="footer"><p>${L.thankyou}</p></div>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const printWindow = window.open(url, '', 'height=700,width=860');
    if (printWindow) {
        printWindow.onload = () => { printWindow.print(); URL.revokeObjectURL(url); };
    } else {
        URL.revokeObjectURL(url);
    }
}

// ==================== HISTORY & RECORDS ====================
function loadHistoryPage() {
    displayHistoryRecords(hotelData.guests);
}

function searchHistory() {
    const name = document.getElementById('searchName').value.toLowerCase();
    const id = document.getElementById('searchID').value.toLowerCase();

    let results = hotelData.guests;

    if (name) {
        results = results.filter(g => g.name.toLowerCase().includes(name));
    }

    if (id) {
        results = results.filter(g => g.idNumber.toLowerCase().includes(id) || g.phone.includes(id));
    }

    displayHistoryRecords(results);
}

const HISTORY_PER_PAGE = 10;

function displayHistoryRecords(guests) {
    // newest first
    _historyRecords = [...guests].reverse();
    _historyPage = 1;
    renderHistoryPage();
}

function renderHistoryPage() {
    const table = document.getElementById('historyTable');
    const pagination = document.getElementById('historyPagination');
    table.innerHTML = '';

    if (_historyRecords.length === 0) {
        table.innerHTML = `<tr><td colspan="6" class="text-center text-gray-500 py-8">${t('no_records')}</td></tr>`;
        if (pagination) pagination.innerHTML = '';
        return;
    }

    const totalPages = Math.ceil(_historyRecords.length / HISTORY_PER_PAGE);
    const start = (_historyPage - 1) * HISTORY_PER_PAGE;
    const pageGuests = _historyRecords.slice(start, start + HISTORY_PER_PAGE);
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';

    pageGuests.forEach(guest => {
        const checkIn  = new Date(guest.checkIn).toLocaleDateString(locale);
        const checkOut = guest.checkOut ? new Date(guest.checkOut).toLocaleDateString(locale) : '-';
        const room = hotelData.rooms.find(r => r.id === guest.roomId) ||
                     hotelData.rooms.find(r => r.currentGuest?.id === guest.id);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${guest.name}</td>
            <td>${room ? t('room_prefix') + ' ' + room.number : t('na')}</td>
            <td>${checkIn}</td>
            <td>${checkOut}</td>
            <td>${hotelData.settings.currencySymbol}${guest.totalSpent ? guest.totalSpent.toFixed(2) : '0.00'}</td>
            <td>
                <button onclick="viewGuestDetails('${guest.id}')" class="btn btn-primary btn-sm">
                    <i class="fas fa-eye"></i> ${t('btn_view')}
                </button>
            </td>
        `;
        table.appendChild(row);
    });

    // ── Pagination ──
    if (!pagination) return;
    pagination.innerHTML = '';
    if (totalPages <= 1) return;

    const btn = (label, page, active, disabled) => {
        const b = document.createElement('button');
        b.textContent = label;
        b.style.cssText = `
            min-width:36px;height:36px;padding:0 10px;border-radius:8px;border:2px solid ${active ? '#667eea' : '#e5e7eb'};
            background:${active ? '#667eea' : 'white'};color:${active ? 'white' : '#374151'};
            font-weight:${active ? '700' : '500'};font-size:0.875rem;cursor:${disabled ? 'default' : 'pointer'};
            opacity:${disabled ? '0.4' : '1'};transition:all 0.15s;
        `;
        if (!disabled) b.onclick = () => { _historyPage = page; renderHistoryPage(); };
        return b;
    };

    // Prev
    pagination.appendChild(btn('‹', _historyPage - 1, false, _historyPage === 1));

    // Page numbers — show at most 7 buttons with ellipsis
    const pages = [];
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (_historyPage > 3) pages.push('…');
        for (let i = Math.max(2, _historyPage - 1); i <= Math.min(totalPages - 1, _historyPage + 1); i++) pages.push(i);
        if (_historyPage < totalPages - 2) pages.push('…');
        pages.push(totalPages);
    }

    pages.forEach(p => {
        if (p === '…') {
            const span = document.createElement('span');
            span.textContent = '…';
            span.style.cssText = 'padding:0 4px;color:#9ca3af;font-size:0.875rem;line-height:36px;';
            pagination.appendChild(span);
        } else {
            pagination.appendChild(btn(String(p), p, p === _historyPage, false));
        }
    });

    // Next
    pagination.appendChild(btn('›', _historyPage + 1, false, _historyPage === totalPages));
}

function viewGuestDetails(guestId) {
    const guest = hotelData.guests.find(g => g.id === guestId);
    if (!guest) return;
    if (!Array.isArray(guest.orders)) guest.orders = [];

    const room = hotelData.rooms.find(r => r.id === guest.roomId) ||
                 hotelData.rooms.find(r => r.currentGuest?.id === guest.id);
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';

    // ── Services section (always IQD) ──
    const svcTotal = guest.orders.reduce((s, o) => s + o.price * o.quantity, 0);
    const ordersHtml = guest.orders.length > 0
        ? guest.orders.map(o => `
            <div class="flex justify-between py-2 border-b border-gray-100 text-sm">
                <span class="text-gray-700">${o.category ? catNameByKey(o.category) + ': ' : ''}${o.name} × ${o.quantity}</span>
                <span class="font-semibold text-gray-800">IQD ${fmtIQD(o.price * o.quantity)}</span>
            </div>`).join('') +
          `<div class="flex justify-between py-2 mt-1">
               <span class="font-bold text-green-700">${t('grand_total_label')}</span>
               <span class="font-bold text-green-700">IQD ${fmtIQD(svcTotal)}</span>
           </div>`
        : `<p class="text-gray-400 text-sm py-2">${t('no_orders')}</p>`;

    // ── Room Expense section ──
    let roomExpenseHtml = '';
    if (guest.roomAmountPaid != null) {
        // Checked-out guest — use saved values
        const sym = guest.roomCurrency || 'IQD';
        const amt = guest.roomAmountPaid || 0;
        const fmtAmt = sym === 'IQD' ? `IQD ${fmtIQD(amt)}` : `$ ${amt.toLocaleString()}`;
        roomExpenseHtml = `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('room_charges')}</span>
                <span class="font-semibold text-gray-800">${fmtAmt}</span>
            </div>
            <div class="flex justify-between py-2 border-t border-gray-200 mt-1">
                <span class="font-bold text-blue-700">${t('grand_total_label')}</span>
                <span class="font-bold text-blue-700">${fmtAmt}</span>
            </div>`;
    } else if (guest.checkIn) {
        // Still checked in — estimate from rate × nights
        const checkInD  = new Date(guest.checkIn);
        const checkOutD = guest.checkOut ? new Date(guest.checkOut) : new Date();
        const nights    = Math.max(1, Math.ceil((checkOutD - checkInD) / 86400000));
        const isUSD     = guest.basePriceUSD > 0;
        const rate      = isUSD ? (guest.basePriceUSD || 0) : (guest.basePriceIQD || guest.basePrice || 0);
        const total     = rate * nights;
        const fmtRate   = isUSD ? `$ ${rate.toLocaleString()}` : `IQD ${fmtIQD(rate)}`;
        const fmtTotal  = isUSD ? `$ ${total.toLocaleString()}` : `IQD ${fmtIQD(total)}`;
        roomExpenseHtml = `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('room_charges')} (${nights} ${t('nights_label')} × ${fmtRate})</span>
                <span class="font-semibold text-gray-800">${fmtTotal}</span>
            </div>
            <div class="flex justify-between py-2 border-t border-gray-200 mt-1">
                <span class="font-bold text-blue-700">${t('grand_total_label')}</span>
                <span class="font-bold text-blue-700">${fmtTotal}</span>
            </div>`;
    }

    document.getElementById('guestDetailsContent').innerHTML = `
        <div class="grid grid-cols-2 gap-3 mb-5">
            <div class="info-item"><div class="info-label">${t('label_full_name')}</div><div class="info-value">${guest.name}</div></div>
            <div class="info-item"><div class="info-label">${t('col_room')}</div><div class="info-value">${room ? t('room_prefix') + ' ' + room.number : t('na')}</div></div>
            <div class="info-item"><div class="info-label">${t('label_phone')}</div><div class="info-value">${guest.phone || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_email')}</div><div class="info-value">${guest.email || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_nationality')}</div><div class="info-value">${guest.nationality || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_num_guests')}</div><div class="info-value">${guest.numGuests}</div></div>
            <div class="info-item"><div class="info-label">${t('label_id_type')}</div><div class="info-value">${guest.idType || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_id_number')}</div><div class="info-value">${guest.idNumber || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('check_in_label')}</div><div class="info-value">${new Date(guest.checkIn).toLocaleString(locale)}</div></div>
            <div class="info-item"><div class="info-label">${t('check_out_label')}</div><div class="info-value">${guest.checkedOutAt ? new Date(guest.checkedOutAt).toLocaleString(locale) : '-'}</div></div>
        </div>

        <div class="mb-4">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #f3f4f6;">
                <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="fas fa-concierge-bell" style="color:white;font-size:0.75em;"></i>
                </div>
                <span class="font-bold text-gray-700">${t('orders_services_label')}</span>
            </div>
            ${ordersHtml}
        </div>

        <div class="mb-4">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #f3f4f6;">
                <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="fas fa-hand-holding-usd" style="color:white;font-size:0.75em;"></i>
                </div>
                <span class="font-bold text-gray-700">${t('section_deposit') || 'Deposit / Advance Payment'}</span>
            </div>
            ${(guest.depositIQD > 0 || guest.depositUSD > 0) ? `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('lbl_deposit_paid') || 'Deposit Paid'}</span>
                <span class="font-semibold text-green-700">
                    ${guest.depositIQD > 0 ? `IQD ${fmtIQD(guest.depositIQD)}` : ''}
                    ${guest.depositIQD > 0 && guest.depositUSD > 0 ? ' + ' : ''}
                    ${guest.depositUSD > 0 ? `$${guest.depositUSD.toFixed(2)}` : ''}
                </span>
            </div>` : `<p class="text-gray-400 text-sm py-2">${t('na')}</p>`}
        </div>

        <div class="mb-5">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #f3f4f6;">
                <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="fas fa-bed" style="color:white;font-size:0.75em;"></i>
                </div>
                <span class="font-bold text-gray-700">${t('lbl_room_charges')}</span>
            </div>
            ${roomExpenseHtml}
        </div>

        <button onclick="closeModal('guestDetailsModal')" class="btn btn-primary w-full mt-2" style="justify-content:center;">${t('close')}</button>`;

    openModal('guestDetailsModal');
}

// ==================== REPORTS ====================
let _reportDateFrom = null; // null = All Time
let _reportDateTo   = null;

function loadReportsPage() {
    generatePaymentMethodFilters();
    populateReportMonthYearSelect();
    clearReportDateFilter();
    updateReportCharts();
}

// Fills the Year dropdown with the current year and the past 5 years, defaulted to this month.
function populateReportMonthYearSelect() {
    const yearEl = document.getElementById('repFilterMonthYear');
    const monthEl = document.getElementById('repFilterMonthName');
    if (!yearEl) return;
    const now = new Date();
    const thisYear = now.getFullYear();
    if (!yearEl.options.length) {
        for (let y = thisYear; y >= thisYear - 5; y--) {
            const opt = document.createElement('option');
            opt.value = y; opt.textContent = y;
            yearEl.appendChild(opt);
        }
    }
    yearEl.value = thisYear;
    if (monthEl) monthEl.value = now.getMonth();
}

function applyReportDateFilter(type) {
    if (type === 'day') {
        const v = document.getElementById('repFilterDay')?.value;
        if (!v) return;
        _reportDateFrom = new Date(v + 'T00:00:00');
        _reportDateTo   = new Date(v + 'T23:59:59');
    } else if (type === 'range') {
        const fromV = document.getElementById('repFilterRangeFrom')?.value;
        const toV   = document.getElementById('repFilterRangeTo')?.value;
        if (!fromV || !toV) { showToast('Pick both a From and To date, then click "Show Range".', 'error'); return; }
        const from = new Date(fromV + 'T00:00:00');
        const to   = new Date(toV + 'T23:59:59');
        if (from > to) { showToast('The "From" date must be before the "To" date.', 'error'); return; }
        _reportDateFrom = from;
        _reportDateTo   = to;
    } else if (type === 'month') {
        const m = parseInt(document.getElementById('repFilterMonthName')?.value);
        const y = parseInt(document.getElementById('repFilterMonthYear')?.value);
        if (Number.isNaN(m) || Number.isNaN(y)) return;
        _reportDateFrom = new Date(y, m, 1, 0, 0, 0, 0);
        _reportDateTo   = new Date(y, m + 1, 0, 23, 59, 59, 999);
    }
    updateReportFilterLabel();
    updateReportsStats();
    updateDepositBreakdown();
}

function clearReportDateFilter() {
    _reportDateFrom = null;
    _reportDateTo   = null;
    const dayEl = document.getElementById('repFilterDay');
    const rangeFromEl = document.getElementById('repFilterRangeFrom');
    const rangeToEl = document.getElementById('repFilterRangeTo');
    if (dayEl) dayEl.value = '';
    if (rangeFromEl) rangeFromEl.value = '';
    if (rangeToEl) rangeToEl.value = '';
    updateReportFilterLabel();
    updateReportsStats();
    updateDepositBreakdown();
}

function updateReportFilterLabel() {
    const el = document.getElementById('repFilterLabel');
    if (!el) return;
    el.textContent = _reportDateFrom
        ? `Showing: ${_reportDateFrom.toLocaleDateString()} – ${_reportDateTo.toLocaleDateString()}`
        : 'Showing: All Time';
}

function updateDepositBreakdown() {
    const filter = document.querySelector('input[name="depositSourceFilter"]:checked')?.value || 'all';
    const inRange = d => { if (!_reportDateFrom) return true; if (!d) return false; const dt = new Date(d); return dt >= _reportDateFrom && dt <= _reportDateTo; };
    const guests  = _reportDateFrom ? hotelData.guests.filter(g => inRange(g.checkIn)) : hotelData.guests;
    const resLog  = _reportDateFrom ? (hotelData.reservationLog || []).filter(e => inRange(e.reservedAt)) : (hotelData.reservationLog || []);

    // Guest check-in deposits
    const gCashIQD = guests.reduce((s, g) => s + (g.depositCashIQD || 0), 0);
    const gCashUSD = guests.reduce((s, g) => s + (g.depositCashUSD || 0), 0);
    const gCardIQD = guests.reduce((s, g) => s + (g.depositCardIQD || 0), 0);

    // Reservation deposits
    const rCashIQD = resLog.reduce((s, e) => s + (e.depositCashIQD || 0), 0);
    const rCashUSD = resLog.reduce((s, e) => s + (e.depositCashUSD || 0), 0);
    const rCardIQD = resLog.reduce((s, e) => s + (e.depositCardIQD || 0), 0);

    const totalCashIQD = gCashIQD + rCashIQD;
    const totalCashUSD = gCashUSD + rCashUSD;
    const totalCardIQD = gCardIQD + rCardIQD;

    const showCash = filter === 'all' || filter === 'cash';
    const showCard = filter === 'all' || filter === 'card';

    const el = id => document.getElementById(id);
    if (el('depositCashIQDReport')) el('depositCashIQDReport').textContent = showCash ? `IQD ${fmtIQD(totalCashIQD)}` : 'IQD —';
    if (el('depositCashUSDReport')) el('depositCashUSDReport').textContent = showCash ? `$${fmtUSD(totalCashUSD)}` : '$—';
    if (el('depositCardIQDReport')) el('depositCardIQDReport').textContent = showCard ? `IQD ${fmtIQD(totalCardIQD)}` : 'IQD —';
}

function generatePaymentMethodFilters() {
    const container = document.getElementById('paymentMethodFilters');
    if (!container) return;
    const methods = hotelData.settings.paymentMethods || ['Cash', 'Card', 'Bank Transfer'];
    container.innerHTML = methods.map(method => `
        <label style="display:flex;align-items:center;gap:6px;padding:6px 12px;border:2px solid #e5e7eb;border-radius:8px;cursor:pointer;font-size:0.85rem;background:white;" class="payment-filter-label">
            <input type="checkbox" value="${method}" checked onchange="updateReportsStats()" class="payment-filter-checkbox">
            <span>${method}</span>
        </label>
    `).join('');
}

function getSelectedPaymentMethods() {
    const checkboxes = document.querySelectorAll('.payment-filter-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function resetPaymentFilters() {
    document.querySelectorAll('.payment-filter-checkbox').forEach(cb => cb.checked = true);
    updateReportsStats();
    updateReportCharts();
}

function updateReportsStats() {
    const selectedPayments = getSelectedPaymentMethods();
    const inRange = d => { if (!_reportDateFrom) return true; if (!d) return false; const dt = new Date(d); return dt >= _reportDateFrom && dt <= _reportDateTo; };

    const checkedOutGuests = hotelData.guests.filter(g => {
        const hasCheckout = g.checkedOutAt || (g.totalSpent && g.totalSpent > 0);
        if (!hasCheckout) return false;
        if (_reportDateFrom && !(g.checkedOutAt && inRange(g.checkedOutAt))) return false;
        const paymentMatch = !g.paymentMethod || selectedPayments.includes(g.paymentMethod);
        return paymentMatch;
    });
    const roomRevIQD = checkedOutGuests.filter(g => g.roomCurrency === 'IQD').reduce((s, g) => s + (g.roomAmountPaid || 0), 0);
    const roomRevUSD = checkedOutGuests.filter(g => g.roomCurrency === '$').reduce((s, g) => s + (g.roomAmountPaid || 0), 0);
    const servicesIQD = checkedOutGuests.reduce((s, g) => s + (g.serviceAmountIQD || 0), 0);
    // Check-in deposits (from guests who checked in, not just checked out)
    const checkInGuests = _reportDateFrom ? hotelData.guests.filter(g => inRange(g.checkIn)) : hotelData.guests;
    const checkInDepositsIQD = checkInGuests.reduce((s, g) => s + (g.depositIQD || 0), 0);
    const checkInDepositsUSD = checkInGuests.reduce((s, g) => s + (g.depositUSD || 0), 0);
    const totalGuests = checkedOutGuests.length;

    // Reservation deposits (all entries — they stay in revenue even if cancelled)
    const resLogAll = hotelData.reservationLog || [];
    const resLog = _reportDateFrom ? resLogAll.filter(e => inRange(e.reservedAt)) : resLogAll;
    const depositIQD = resLog.reduce((s, e) => s + (e.depositIQD || 0), 0);
    const depositUSD = resLog.reduce((s, e) => s + (e.depositUSD || 0), 0);

    // Total income (room revenue + services + reservation deposits + check-in deposits)
    const incomeIQD = roomRevIQD + servicesIQD + depositIQD + checkInDepositsIQD;
    const incomeUSD = roomRevUSD + depositUSD + checkInDepositsUSD;

    // Purchases
    const purchasesAll = hotelData.purchases || [];
    const purchases = _reportDateFrom ? purchasesAll.filter(p => inRange(p.date)) : purchasesAll;
    const purchIQD = purchases.reduce((s, p) => s + (p.priceIQD != null ? p.priceIQD : (p.price || 0)), 0);
    const purchUSD = purchases.reduce((s, p) => s + (p.priceUSD || 0), 0);

    const occupiedRooms = hotelData.rooms.filter(r => r.status === 'occupied').length;
    const occupancyRate = hotelData.rooms.length > 0 ? ((occupiedRooms / hotelData.rooms.length) * 100).toFixed(1) : 0;

    document.getElementById('totalIncomeIQDReport').textContent = `IQD ${fmtIQD(incomeIQD)}`;
    document.getElementById('totalIncomeUSDReport').textContent = `$${fmtUSD(incomeUSD)}`;
    document.getElementById('totalPurchasesIQDReport').textContent = `IQD ${fmtIQD(purchIQD)}`;
    document.getElementById('totalPurchasesUSDReport').textContent = `$${fmtUSD(purchUSD)}`;
    document.getElementById('netRevenueIQDReport').textContent = `IQD ${fmtIQD(incomeIQD - purchIQD)}`;
    document.getElementById('netRevenueUSDReport').textContent = `$${fmtUSD(incomeUSD - purchUSD)}`;
    document.getElementById('occupancyRateReport').textContent = `${occupancyRate}%`;
    document.getElementById('totalGuestsReport').textContent = totalGuests;

    populateRoomReportTable();
    populateReservationHistoryTable();
}

function updateReportCharts() {
    // Monthly Revenue Chart
    updateMonthlyRevenueChart();
    
    // Top Rooms Chart
    updateTopRoomsChart();
}

function updateMonthlyRevenueChart() {
    const ctx = document.getElementById('monthlyRevenueChart');
    if (!ctx) return;

    const monthlyData = new Array(12).fill(0);
    hotelData.guests.forEach(guest => {
        if (guest.totalSpent && guest.totalSpent > 0) {
            const date = new Date(guest.checkedOutAt || guest.checkOut);
            monthlyData[date.getMonth()] += guest.totalSpent || 0;
        }
    });

    if (charts.monthlyRevenue) charts.monthlyRevenue.destroy();
    
    charts.monthlyRevenue = new window['Chart'](ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Revenue',
                data: monthlyData,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 }, padding: 20 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(value) { return '$' + value; } }
                }
            }
        }
    });
}

function updateTopRoomsChart() {
    const ctx = document.getElementById('topRoomsChart');
    if (!ctx) return;

    const roomRevenue = {};
    hotelData.rooms.forEach(room => {
        roomRevenue[room.number] = 0;
    });

    hotelData.guests.forEach(guest => {
        if (guest.totalSpent && guest.totalSpent > 0) {
            const room = hotelData.rooms.find(r => r.id === guest.roomId);
            if (room) {
                roomRevenue[room.number] = (roomRevenue[room.number] || 0) + (guest.totalSpent || 0);
            }
        }
    });

    const sorted = Object.entries(roomRevenue)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    if (charts.topRooms) charts.topRooms.destroy();

    charts.topRooms = new window['Chart'](ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(r => `${t('room_prefix')} ${r[0]}`),
            datasets: [{
                label: 'Revenue',
                data: sorted.map(r => r[1]),
                backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { callback: function(value) { return '$' + value; } }
                }
            }
        }
    });
}

function populateRoomReportTable() {
    const table = document.getElementById('roomReportTable');
    table.innerHTML = '';

    hotelData.rooms.forEach(room => {
        const guestStays = hotelData.guests.filter(g => g.roomId === room.id);
        const revUSD = guestStays.filter(g => g.roomCurrency === '$').reduce((s, g) => s + (g.roomAmountPaid || 0), 0);
        const revIQD = guestStays.filter(g => g.roomCurrency === 'IQD').reduce((s, g) => s + (g.roomAmountPaid || 0), 0);
        const svcIQD = guestStays.reduce((s, g) => s + (g.serviceAmountIQD || 0), 0);
        const lastGuest = guestStays.length > 0 ? guestStays[guestStays.length - 1].name : (room.currentGuest?.name || t('none_label'));

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${t('room_prefix')} ${room.number}</td>
            <td>${room.type}</td>
            <td>${lastGuest}</td>
            <td>${guestStays.length}</td>
            <td>${revUSD > 0 ? '$' + revUSD.toFixed(2) : '—'}</td>
            <td>${revIQD > 0 ? 'IQD ' + fmtIQD(revIQD) : '—'}</td>
            <td>${svcIQD > 0 ? 'IQD ' + fmtIQD(svcIQD) : '—'}</td>
        `;
        table.appendChild(row);
    });
}

function populateReservationHistoryTable() {
    const tbody = document.getElementById('reservationHistoryTable');
    if (!tbody) return;
    const log = hotelData.reservationLog || [];
    if (log.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-gray-500 py-8">No reservations yet</td></tr>`;
        return;
    }
    // Show newest first
    tbody.innerHTML = [...log].reverse().map(e => {
        const reservedAt = new Date(e.reservedAt).toLocaleString();
        const arrivalDate = e.arrivalDate ? new Date(e.arrivalDate).toLocaleString() : '—';
        const depParts = [];
        if ((e.depositIQD || 0) > 0) depParts.push(`IQD ${fmtIQD(e.depositIQD)}`);
        if ((e.depositUSD || 0) > 0) depParts.push(`$${e.depositUSD.toFixed(2)}`);
        const deposit = depParts.length ? depParts.join(' + ') : '—';
        const isCancelled = e.status === 'cancelled';
        const statusBadge = isCancelled
            ? `<span style="background:#fee2e2;color:#dc2626;padding:2px 10px;border-radius:999px;font-size:0.75rem;font-weight:600;">Cancelled</span>`
            : `<span style="background:#d1fae5;color:#059669;padding:2px 10px;border-radius:999px;font-size:0.75rem;font-weight:600;">Active</span>`;
        const cancelledAt = isCancelled && e.cancelledAt ? new Date(e.cancelledAt).toLocaleString() : '—';
        return `<tr>
            <td>${t('room_prefix')} ${e.roomNumber}</td>
            <td>${e.guestName}</td>
            <td>${reservedAt}</td>
            <td>${arrivalDate}</td>
            <td>${deposit}</td>
            <td>${e.paymentMethod || '—'}</td>
            <td>${statusBadge}</td>
            <td>${cancelledAt}</td>
        </tr>`;
    }).join('');
}

// ==================== DASHBOARD ====================
function loadDashboard() {
    updateDashboardStats();
    updateDashboardCharts();
    updateRecentActivities();
}

function updateDashboardStats() {
    const availableRooms = hotelData.rooms.filter(r => r.status === 'available').length;
    const occupiedRooms = hotelData.rooms.filter(r => r.status === 'occupied').length;
    const totalIncome = hotelData.guests.reduce((sum, g) => sum + (g.totalSpent || 0), 0);
    const guestCount = hotelData.guests.filter(g => {
        const checkIn = new Date(g.checkIn);
        const today = new Date();
        return checkIn.toDateString() === today.toDateString();
    }).length;

    const _set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    _set('availableRoomsCount', availableRooms);
    _set('occupiedRoomsCount', occupiedRooms);
    _set('totalIncomeCount', (hotelData.settings.currencySymbol || '$') + totalIncome.toFixed(2));
    _set('guestsTodayCount', guestCount);
}

function updateDashboardCharts() {
    updateDailyIncomeChart();
    updateRoomStatusChart();
}

function updateDailyIncomeChart() {
    const ctx = document.getElementById('dailyIncomeChart');
    if (!ctx) return;

    const dailyData = {};
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dailyData[date.toLocaleDateString()] = 0;
    }

    hotelData.guests.forEach(guest => {
        const date = new Date(guest.checkedOutAt || guest.checkOut).toLocaleDateString();
        if (dailyData.hasOwnProperty(date)) {
            dailyData[date] += guest.totalSpent || 0;
        }
    });

    if (charts.dailyIncome) charts.dailyIncome.destroy();

    charts.dailyIncome = new window['Chart'](ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(dailyData),
            datasets: [{
                label: 'Daily Income',
                data: Object.values(dailyData),
                backgroundColor: '#667eea',
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(value) { return '$' + value; } }
                }
            }
        }
    });
}

function updateRoomStatusChart() {
    const ctx = document.getElementById('roomStatusChart');
    if (!ctx) return;

    const available = hotelData.rooms.filter(r => r.status === 'available').length;
    const occupied = hotelData.rooms.filter(r => r.status === 'occupied').length;
    const reserved = hotelData.rooms.filter(r => r.status === 'reserved').length;
    const cleaning = hotelData.rooms.filter(r => r.status === 'cleaning').length;
    const checkout = hotelData.rooms.filter(r => r.status === 'checkout').length;

    if (charts.roomStatus) charts.roomStatus.destroy();

    charts.roomStatus = new window['Chart'](ctx, {
        type: 'doughnut',
        data: {
            labels: ['Available', 'Occupied', 'Reserved', 'Cleaning', 'Checkout'],
            datasets: [{
                data: [available, occupied, reserved, cleaning, checkout],
                backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#dc2626'],
                borderColor: '#fff',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 15, font: { size: 12 } }
                }
            }
        }
    });
}

function updateRecentActivities() {
    const table = document.getElementById('recentActivitiesTable');
    table.innerHTML = '';

    const recentActs = hotelData.activities.slice(-10).reverse();

    if (recentActs.length === 0) {
        table.innerHTML = `<tr><td colspan="5" class="text-center text-gray-500 py-8">${t('no_recent')}</td></tr>`;
        return;
    }

    recentActs.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.guestName || activity.description}</td>
            <td>${activity.roomNumber || '-'}</td>
            <td>${activity.action}</td>
            <td>${new Date(activity.timestamp).toLocaleTimeString()}</td>
            <td>${activity.amount || '-'}</td>
        `;
        table.appendChild(row);
    });
}

// ==================== SETTINGS ====================
function loadSettingsPage() {
    loadUsersSection();

    const rateEl = document.getElementById('settingsExchangeRate');
    if (rateEl) rateEl.value = Math.round(hotelData.settings.exchangeRate || 1500).toLocaleString('en-US');

    const serviceContainer = document.getElementById('serviceCategories');
    if (serviceContainer) {
        serviceContainer.innerHTML = '';
        (hotelData.settings.serviceCategories || []).forEach((cat, i) => {
            const enVal = typeof cat === 'object' ? (cat.en || '') : cat;
            const arVal = typeof cat === 'object' ? (cat.ar || '') : '';
            const div = document.createElement('div');
            div.className = 'flex gap-2 mb-2 items-center';
            div.innerHTML = `
                <input type="text" data-cat-en="${i}" value="${enVal}"
                    class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="English">
                <input type="text" data-cat-ar="${i}" value="${arVal}" dir="rtl"
                    class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="عربي">
                <button type="button" onclick="removeServiceCategory(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`;
            serviceContainer.appendChild(div);
        });
    }

    const pmContainer = document.getElementById('paymentMethodItems');
    if (pmContainer) {
        pmContainer.innerHTML = '';
        (hotelData.settings.paymentMethods || []).forEach((method, i) => {
            const div = document.createElement('div');
            div.className = 'flex gap-2 mb-2 items-center';
            div.innerHTML = `
                <input type="text" value="${method}" onchange="hotelData.settings.paymentMethods[${i}]=this.value"
                    class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Payment method name">
                <button type="button" onclick="removePaymentMethod(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`;
            pmContainer.appendChild(div);
        });
    }

    const rtContainer = document.getElementById('roomTypeItems');
    rtContainer.innerHTML = '';
    (hotelData.settings.roomTypes || []).forEach((type, i) => {
        const div = document.createElement('div');
        div.className = 'flex gap-2 mb-2 items-center';
        div.innerHTML = `
            <input type="text" value="${type}" onchange="hotelData.settings.roomTypes[${i}]=this.value"
                class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Room type name">
            <button type="button" onclick="removeRoomType(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`;
        rtContainer.appendChild(div);
    });
}

function addServiceCategory() {
    if (!hotelData.settings.serviceCategories) hotelData.settings.serviceCategories = [];
    hotelData.settings.serviceCategories.push({ en: '', ar: '' });
    saveDataToStorage();
    loadSettingsPage();
}

function removeServiceCategory(index) {
    hotelData.settings.serviceCategories.splice(index, 1);
    saveDataToStorage();
    loadSettingsPage();
}

function saveSettings() {
    if (!requireOnline()) return;
    const rateEl = document.getElementById('settingsExchangeRate');
    if (rateEl) {
        const rate = parseFloat((rateEl.value || '').replace(/,/g, '')) || 0;
        if (rate > 0) hotelData.settings.exchangeRate = rate;
    }

    // Read edited category names from DOM inputs
    const catRows = document.querySelectorAll('#serviceCategories > div');
    hotelData.settings.serviceCategories = Array.from(catRows).map(row => {
        const enInp = row.querySelector('[data-cat-en]');
        const arInp = row.querySelector('[data-cat-ar]');
        return { en: enInp ? enInp.value.trim() : '', ar: arInp ? arInp.value.trim() : '' };
    }).filter(c => c.en || c.ar);

    // Read edited room types from DOM inputs
    const rtInputs = document.querySelectorAll('#roomTypeItems input[type="text"]');
    hotelData.settings.roomTypes = Array.from(rtInputs).map(inp => inp.value.trim()).filter(v => v);

    // Read edited payment methods from DOM inputs
    const pmInputs = document.querySelectorAll('#paymentMethodItems input[type="text"]');
    if (pmInputs.length > 0) {
        hotelData.settings.paymentMethods = Array.from(pmInputs).map(inp => inp.value.trim()).filter(v => v);
    }

    // Sync any label/color edits typed directly into inputs before saving
    const rsRows = document.querySelectorAll('#roomStatusItems > div');
    rsRows.forEach((row, i) => {
        if (!hotelData.settings.roomStatuses[i]) return;
        const labelInp = row.querySelector('input[type="text"]');
        const colorInp = row.querySelector('input[type="color"]');
        const bookInp  = row.querySelector('input[type="checkbox"]');
        if (labelInp) hotelData.settings.roomStatuses[i].label   = labelInp.value.trim() || hotelData.settings.roomStatuses[i].label;
        if (colorInp) hotelData.settings.roomStatuses[i].color   = colorInp.value;
        if (bookInp)  hotelData.settings.roomStatuses[i].bookable = bookInp.checked;
    });

    saveDataToStorage();
    showToast(t('toast_settings_saved'), 'success');
    // Refresh user display name in case role changed
    applyRoleUI();
}

function addServiceItem() {
    hotelData.settings.serviceItems.push({ id: Date.now(), name: 'New Service', price: 0 });
    saveDataToStorage();
    loadSettingsPage();
}

function addPaymentMethod() {
    if (!hotelData.settings.paymentMethods) hotelData.settings.paymentMethods = [];
    hotelData.settings.paymentMethods.push('New Method');
    saveDataToStorage();
    loadSettingsPage();
}

function removePaymentMethod(index) {
    hotelData.settings.paymentMethods.splice(index, 1);
    saveDataToStorage();
    loadSettingsPage();
}

function addRoomType() {
    if (!hotelData.settings.roomTypes) hotelData.settings.roomTypes = [];
    hotelData.settings.roomTypes.push('New Type');
    saveDataToStorage();
    loadSettingsPage();
}

function removeRoomType(index) {
    hotelData.settings.roomTypes.splice(index, 1);
    saveDataToStorage();
    loadSettingsPage();
}

// ==================== CLEANER VIEW ====================
function loadCleanerPage() {
    const grid = document.getElementById('cleanerRoomsGrid');
    if (!grid) return;

    const cleanerStatuses = getCleanerStatuses(); // non-system statuses the cleaner can set

    // Summary stats bar — one card per unique status currently on rooms
    const summary = document.getElementById('cleanerSummary');
    if (summary) {
        const allStatusIds = [...new Set(hotelData.rooms.map(r => r.status))];
        summary.innerHTML = allStatusIds.map(sid => {
            const cfg = getStatusConfig(sid);
            const count = hotelData.rooms.filter(r => r.status === sid).length;
            return `<div style="background:${cfg.color};border-radius:16px;padding:16px 18px;color:white;display:flex;align-items:center;gap:12px;box-shadow:0 4px 14px ${cfg.color}55;">
                <i class="fas ${getStatusIcon(sid)}" style="font-size:1.7em;opacity:0.85;"></i>
                <div>
                    <div style="font-size:1.8rem;font-weight:800;line-height:1;">${count}</div>
                    <div style="font-size:0.78rem;opacity:0.9;font-weight:600;margin-top:2px;">${cfg.label}</div>
                </div>
            </div>`;
        }).join('');
    }

    // Floor filter
    const floorEl = document.getElementById('cleanerFloorFilter');
    const statusEl = document.getElementById('cleanerStatusFilter');
    if (floorEl) {
        const curFloor = floorEl.value;
        const floors = [...new Set(hotelData.rooms.map(r => r.floor))].sort((a,b) => a-b);
        floorEl.innerHTML = `<option value="all">${t('all_floors')}</option>` +
            floors.map(f => `<option value="${f}" ${String(f)===curFloor?'selected':''}>${t('floor_prefix')} ${f}</option>`).join('');
    }
    if (statusEl) {
        const curStat = statusEl.value || 'all';
        const allSt = [...new Set(hotelData.rooms.map(r => r.status))];
        statusEl.innerHTML = `<option value="all">${t('all_status')}</option>` +
            allSt.map(sid => `<option value="${sid}" ${sid===curStat?'selected':''}>${getStatusConfig(sid).label}</option>`).join('');
    }

    // Filter rooms
    const selFloor = floorEl?.value || 'all';
    const selStatus = statusEl?.value || 'all';
    let rooms = hotelData.rooms;
    if (selFloor !== 'all') rooms = rooms.filter(r => String(r.floor) === selFloor);
    if (selStatus !== 'all') rooms = rooms.filter(r => r.status === selStatus);

    if (rooms.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#9ca3af;">${t('no_data')}</div>`;
        return;
    }

    grid.innerHTML = rooms.map(room => {
        const cfg  = getStatusConfig(room.status);
        const icon = getStatusIcon(room.status);
        // Cleaner dropdown — only non-system statuses
        const opts = cleanerStatuses.map(s =>
            `<option value="${s.id}" ${room.status === s.id ? 'selected' : ''}>${s.label}</option>`
        ).join('');
        const guestLine = room.currentGuest
            ? `<div style="font-size:0.75rem;color:white;opacity:0.75;margin-top:2px;"><i class="fas fa-user" style="margin-right:4px;"></i>${room.currentGuest.name || ''}</div>`
            : '';
        return `<div style="background:white;border-radius:18px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.1);transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform=''">
            <div style="background:${cfg.color};padding:20px 18px;display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <div style="color:white;font-size:1.25rem;font-weight:800;line-height:1.2;">${t('room_prefix')} ${room.number}</div>
                    <div style="color:rgba(255,255,255,0.8);font-size:0.78rem;margin-top:3px;">${t('floor_prefix')} ${room.floor} &nbsp;·&nbsp; ${room.type}</div>
                    ${guestLine}
                </div>
                <i class="fas ${icon}" style="color:rgba(255,255,255,0.5);font-size:2.2em;"></i>
            </div>
            <div style="padding:14px 16px;background:#f9fafb;">
                <div style="font-size:0.72rem;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">${t('change_status_label')}</div>
                <select onchange="updateRoomCleaning(${room.id}, this.value)"
                    style="width:100%;padding:10px 14px;border:2px solid ${cfg.color}66;border-radius:10px;font-size:0.9rem;font-weight:600;color:#374151;background:white;cursor:pointer;outline:none;">
                    ${opts}
                </select>
            </div>
        </div>`;
    }).join('');
}

function updateRoomCleaning(roomId, newStatus) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    room.status = newStatus;
    saveDataToStorage();
    showToast(t('toast_status_updated'), 'success');
    loadCleanerPage();
}

// ==================== RESERVATION SYSTEM ====================
let _reservingRoomId = null;

function openReserveModal(roomId) {
    _reservingRoomId = roomId;
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    const info = document.getElementById('reserveRoomInfo');
    if (info) {
        info.innerHTML = `<b>${t('room_prefix')} ${room.number}</b> &nbsp;·&nbsp; ${room.type} &nbsp;·&nbsp; ${t('floor_prefix')} ${room.floor}
            <span style="float:${currentLang==='ar'?'left':'right'};font-weight:700;color:#667eea;">$${room.price}/${t('per_night')}</span>`;
    }
    // Pre-fill price
    const priceEl = document.getElementById('reservePrice');
    if (priceEl) priceEl.value = room.price;
    // Set default arrival to now (local time)
    const arrEl = document.getElementById('reserveArrivalDate');
    if (arrEl) {
        const now = new Date();
        const pad = n => String(n).padStart(2, '0');
        arrEl.value = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
    // Populate payment methods
    const pmEl = document.getElementById('reservePaymentMethod');
    if (pmEl) {
        const methods = hotelData.settings.paymentMethods || ['Cash', 'Card', 'Bank Transfer'];
        pmEl.innerHTML = '<option value="">Select payment method</option>' +
            methods.map(m => `<option value="${m}">${m}</option>`).join('');
    }
    document.getElementById('reserveGuestName').value = '';
    document.getElementById('reservePhone').value = '';
    const notesEl = document.getElementById('reserveNotes');
    if (notesEl) notesEl.value = '';
    ['reserveDepositCashIQD','reserveDepositCashUSD','reserveDepositCardIQD','reserveDepositCardUSD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
    document.getElementById('reserveModalForm').style.display = '';
    document.getElementById('reserveModalSuccess').style.display = 'none';
    openModal('reserveModal');
}

function lockReserveCurrency() { /* replaced by lockDepositField */ }

function resetReserveCurrencyLock() {
    ['reserveDepositCashIQD','reserveDepositCashUSD','reserveDepositCardIQD','reserveDepositCardUSD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
}

function confirmReservation(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === _reservingRoomId);
    if (!room) return;
    const depositCashIQD = parseFloat((document.getElementById('reserveDepositCashIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCashUSD = parseFloat(document.getElementById('reserveDepositCashUSD')?.value) || 0;
    const depositCardIQD = parseFloat((document.getElementById('reserveDepositCardIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCardUSD = parseFloat(document.getElementById('reserveDepositCardUSD')?.value) || 0;
    const depositIQD = depositCashIQD + depositCardIQD;
    const depositUSD = depositCashUSD + depositCardUSD;
    const paymentMethod = document.getElementById('reservePaymentMethod')?.value || '';
    const notes = (document.getElementById('reserveNotes')?.value || '').trim();
    const ri = {
        guestName:   document.getElementById('reserveGuestName').value.trim(),
        phone:       document.getElementById('reservePhone').value.trim(),
        arrivalDate: document.getElementById('reserveArrivalDate').value,
        price:       parseFloat(document.getElementById('reservePrice').value) || room.price,
        depositCashIQD, depositCashUSD, depositCardIQD, depositCardUSD,
        depositIQD, depositUSD,
        paymentMethod,
        notes,
        createdAt:   new Date().toISOString()
    };
    room.status = 'reserved';
    room.reservationInfo = ri;
    if (!hotelData.reservationLog) hotelData.reservationLog = [];
    hotelData.reservationLog.push({
        id: Date.now(),
        roomId: room.id,
        roomNumber: room.number,
        roomType: room.type,
        guestName: ri.guestName,
        phone: ri.phone,
        arrivalDate: ri.arrivalDate,
        depositCashIQD, depositCashUSD, depositCardIQD, depositCardUSD,
        depositIQD, depositUSD,
        paymentMethod: ri.paymentMethod,
        notes,
        reservedAt: new Date().toISOString(),
        reservedBy: loggedInUser?.name || '—',
        status: 'active',
        cancelledAt: null
    });
    saveDataToStorage();
    updateNotificationBell();
    addActivity(`Room ${room.number} reserved for ${ri.guestName}`);
    showToast(t('toast_room_reserved'), 'success');
    loadCheckInPage();

    const arrStr = ri.arrivalDate ? new Date(ri.arrivalDate).toLocaleString() : '—';
    const parts = [];
    if (depositIQD > 0) parts.push(`IQD ${fmtIQD(depositIQD)}`);
    if (depositUSD > 0) parts.push(`$${depositUSD.toFixed(2)}`);
    const depositLine = parts.length ? ` · Deposit: ${parts.join(' + ')}` : '';
    const paymentLine = paymentMethod ? ` · Payment: ${paymentMethod}` : '';
    document.getElementById('reserveSuccessMsg').textContent =
        `${ri.guestName} — ${t('room_prefix')} ${room.number} · ${t('arrives') || 'Arrival'}: ${arrStr}${depositLine}${paymentLine}`;
    document.getElementById('reserveModalForm').style.display = 'none';
    document.getElementById('reserveModalSuccess').style.display = '';
}

function cancelReservation(roomId) {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    if (!hotelData.reservationLog) hotelData.reservationLog = [];

    const logEntry = hotelData.reservationLog.find(e => e.roomId === roomId && e.status === 'active');
    if (logEntry) {
        logEntry.status = 'cancelled';
        logEntry.cancelledAt = new Date().toISOString();
    } else if (room.reservationInfo) {
        // Reservation was made before logging existed — create the entry now as already-cancelled
        const ri = room.reservationInfo;
        hotelData.reservationLog.push({
            id: Date.now(),
            roomId: room.id,
            roomNumber: room.number,
            roomType: room.type,
            guestName: ri.guestName,
            phone: ri.phone || '',
            arrivalDate: ri.arrivalDate,
            depositIQD: ri.depositIQD || ri.deposit || 0,
            depositUSD: ri.depositUSD || 0,
            reservedAt: ri.createdAt || new Date().toISOString(),
            status: 'cancelled',
            cancelledAt: new Date().toISOString()
        });
    }

    const bookable = (hotelData.settings.roomStatuses || []).find(s => s.bookable);
    room.status = bookable ? bookable.id : 'available';
    room.reservationInfo = null;
    saveDataToStorage();
    updateNotificationBell();
    showToast(t('toast_reservation_cancelled'), 'success');
    loadCheckInPage();
}

let _changingRoomId = null;
let _changingRoomMode = null; // 'reservation' or 'guest'

function openChangeRoomModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    const isGuestMove = !!(room.currentGuest && room.status === 'occupied');
    if (!isGuestMove && !room.reservationInfo) return;

    _changingRoomId = roomId;
    _changingRoomMode = isGuestMove ? 'guest' : 'reservation';

    const candidates = hotelData.rooms.filter(r => r.id !== roomId && getStatusConfig(r.status).bookable);
    const select = document.getElementById('changeRoomSelect');
    if (!candidates.length) {
        select.innerHTML = `<option value="">${t('err_no_other_rooms') || 'No other available rooms to move this reservation to.'}</option>`;
    } else {
        select.innerHTML = candidates
            .map(r => `<option value="${r.id}">${t('room_prefix')} ${r.number} — ${r.type} — $${r.price}/${t('per_night')}</option>`)
            .join('');
    }

    const info = document.getElementById('changeRoomCurrentInfo');
    if (info) {
        const guestName = isGuestMove ? room.currentGuest.name : room.reservationInfo.guestName;
        const label = isGuestMove ? (t('guest_label') || 'Guest') : t('reserved_for');
        info.innerHTML = `<b>${label}:</b> ${guestName} &nbsp;·&nbsp; ${t('room_prefix')} ${room.number} → ?`;
    }

    openModal('changeRoomModal');
}

function confirmChangeRoom() {
    if (!requireOnline()) return;
    const oldRoom = hotelData.rooms.find(r => r.id === _changingRoomId);
    if (!oldRoom) return;

    const newRoomId = parseInt(document.getElementById('changeRoomSelect')?.value);
    if (!newRoomId) { showToast(t('err_select_room'), 'error'); return; }
    const newRoom = hotelData.rooms.find(r => r.id === newRoomId);
    if (!newRoom) { showToast(t('err_select_room'), 'error'); return; }

    if (_changingRoomMode === 'guest') {
        if (!oldRoom.currentGuest) return;
        const guest = hotelData.guests.find(g => g.id === oldRoom.currentGuest.id);
        if (!guest) return;

        guest.roomId = newRoom.id;
        newRoom.currentGuest = { name: guest.name, id: guest.id };
        newRoom.status = 'occupied';

        // The vacated room needs cleaning, same as a normal checkout — but keep/restore any
        // pending reservation info so reception doesn't lose track of it (same as checkout flow).
        if (oldRoom.isTemporary && oldRoom.savedReservation) {
            oldRoom.reservationInfo = { ...oldRoom.savedReservation };
            oldRoom.isTemporary = false;
            oldRoom.savedReservation = null;
        }
        oldRoom.status = 'checkout';
        oldRoom.currentGuest = null;

        saveDataToStorage();
        addActivity(`Guest ${guest.name} moved from Room ${oldRoom.number} to Room ${newRoom.number}`);
        showToast(t('toast_room_changed'), 'success');
        closeModal('changeRoomModal');
        loadCheckInPage();
        populateOccupiedRooms();
        return;
    }

    if (!oldRoom.reservationInfo) return;
    const ri = { ...oldRoom.reservationInfo };
    newRoom.reservationInfo = ri;
    newRoom.status = 'reserved';

    const bookable = (hotelData.settings.roomStatuses || []).find(s => s.bookable);
    oldRoom.status = bookable ? bookable.id : 'available';
    oldRoom.reservationInfo = null;

    if (!hotelData.reservationLog) hotelData.reservationLog = [];
    const logEntry = hotelData.reservationLog.find(e => e.roomId === oldRoom.id && e.status === 'active');
    if (logEntry) {
        logEntry.roomId = newRoom.id;
        logEntry.roomNumber = newRoom.number;
        logEntry.roomType = newRoom.type;
    }

    saveDataToStorage();
    updateNotificationBell();
    addActivity(`Reservation for ${ri.guestName} moved from Room ${oldRoom.number} to Room ${newRoom.number}`);
    showToast(t('toast_room_changed'), 'success');
    closeModal('changeRoomModal');
    loadCheckInPage();
}

function openCheckInFromReservation(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.reservationInfo) return;
    const ri = room.reservationInfo;
    openCheckInModal(roomId);
    if (ri.guestName) document.getElementById('guestName').value = ri.guestName;
    if (ri.phone)     document.getElementById('guestPhone').value = ri.phone;
    if (ri.price) {
        resetPriceFields();
        document.getElementById('basePriceUSD').value = ri.price;
        document.getElementById('basePriceIQD').value = '';
        lockOtherPriceField('basePriceUSD', 'basePriceIQD');
    }

    // Pre-fill deposit fields from the reservation
    const cashIQDEl = document.getElementById('checkInDepositCashIQD');
    if (cashIQDEl && ri.depositCashIQD) cashIQDEl.value = Math.round(ri.depositCashIQD).toLocaleString('en-US');
    const cashUSDEl = document.getElementById('checkInDepositCashUSD');
    if (cashUSDEl && ri.depositCashUSD) cashUSDEl.value = ri.depositCashUSD;
    const cardIQDEl = document.getElementById('checkInDepositCardIQD');
    if (cardIQDEl && ri.depositCardIQD) cardIQDEl.value = Math.round(ri.depositCardIQD).toLocaleString('en-US');

    // Pre-fill notes from the reservation
    const notesEl = document.getElementById('checkInNotes');
    if (notesEl && ri.notes) notesEl.value = ri.notes;

    calculateTotalPrice();
}

// ==================== USER MANAGEMENT ====================
function loadUsersSection() {
    const container = document.getElementById('usersContainer');
    if (!container) return;
    container.innerHTML = '';
    (hotelData.users || []).forEach((user, i) => {
        const isSelf = loggedInUser && (user.uid === loggedInUser.uid || user.email === loggedInUser.email);
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;gap:8px;margin-bottom:10px;align-items:center;flex-wrap:wrap;padding:10px;background:#f9fafb;border-radius:10px;';
        div.innerHTML = `
            <input type="text" value="${user.name}" placeholder="Name"
                style="flex:1;min-width:120px;" class="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                onchange="updateUserField(${i},'name',this.value)">
            <span style="flex:2;min-width:160px;padding:10px 12px;background:#f3f4f6;border-radius:8px;font-size:0.9rem;color:#6b7280;">${user.email}</span>
            <select style="min-width:120px;" class="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                onchange="updateUserField(${i},'role',this.value)">
                <option value="admin" ${user.role==='admin'?'selected':''}>Admin</option>
                <option value="reception" ${user.role==='reception'?'selected':''}>Reception</option>
                <option value="cleaner" ${user.role==='cleaner'?'selected':''}>Cleaner</option>
            </select>
            <button type="button" onclick="sendPasswordReset('${user.email}')" class="btn btn-secondary btn-sm" title="Send password reset email">
                <i class="fas fa-key"></i>
            </button>
            ${isSelf ? '' : `<button type="button" onclick="removeUser(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`}`;
        container.appendChild(div);
    });

    loadStatusesSection();
}

function loadStatusesSection() {
    const container = document.getElementById('roomStatusItems');
    if (!container) return;
    container.innerHTML = '';
    (hotelData.settings.roomStatuses || []).forEach((st, i) => {
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;gap:8px;margin-bottom:10px;align-items:center;flex-wrap:wrap;';
        div.innerHTML = `
            <input type="text" value="${st.label}" placeholder="Label"
                style="flex:1;min-width:120px;" class="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                onchange="hotelData.settings.roomStatuses[${i}].label=this.value">
            <input type="color" value="${st.color}"
                style="width:44px;height:44px;padding:2px;border:2px solid #e5e7eb;border-radius:8px;cursor:pointer;"
                onchange="hotelData.settings.roomStatuses[${i}].color=this.value">
            <label style="display:flex;align-items:center;gap:6px;font-size:0.85rem;color:#374151;cursor:pointer;white-space:nowrap;">
                <input type="checkbox" ${st.bookable ? 'checked' : ''}
                    onchange="hotelData.settings.roomStatuses[${i}].bookable=this.checked"
                    style="width:16px;height:16px;cursor:pointer;">
                Bookable
            </label>
            ${st.system
                ? `<span style="font-size:0.72rem;font-weight:700;padding:3px 8px;border-radius:9999px;background:#e5e7eb;color:#6b7280;">SYSTEM</span>`
                : `<button type="button" onclick="removeRoomStatus(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`
            }`;
        container.appendChild(div);
    });
}

function addUser() {
    document.getElementById('newUserName').value = '';
    document.getElementById('newUserEmail').value = '';
    document.getElementById('newUserPassword').value = '';
    document.getElementById('newUserRole').value = 'reception';
    document.getElementById('addUserError').style.display = 'none';
    openModal('addUserModal');
}

function handleAddUserSubmit(e) {
    e.preventDefault();
    const name     = document.getElementById('newUserName').value.trim();
    const email    = document.getElementById('newUserEmail').value.trim();
    const password = document.getElementById('newUserPassword').value;
    const role     = document.getElementById('newUserRole').value;
    const errEl    = document.getElementById('addUserError');
    const btn      = document.getElementById('addUserBtn');
    errEl.style.display = 'none';
    btn.disabled = true;

    const secondApp = firebase.initializeApp(firebase.app().options, 'addUser_' + Date.now());
    secondApp.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const uid     = cred.user.uid;
            const profile = { uid, name, email, role };
            if (!hotelData.users) hotelData.users = [];
            hotelData.users.push(profile);
            // Remove from banned list in case this user was previously deleted
            return window.fbDb.ref('bannedUsers/' + uid).remove().catch(() => {})
                .then(() => window.fbDb.ref('users/' + uid).set({ name, email, role }))
                .then(() => saveDataToStorage())
                .then(() => secondApp.delete());
        })
        .then(() => {
            btn.disabled = false;
            closeModal('addUserModal');
            loadSettingsPage();
            showToast('User added successfully!', 'success');
        })
        .catch(err => {
            btn.disabled = false;
            // If email already exists in Auth, it may be a previously deleted user
            if (err.code === 'auth/email-already-in-use') {
                errEl.textContent = 'This email already exists in the system. If this was a deleted user, please use a different email address or contact support.';
            } else {
                errEl.textContent = err.message;
            }
            errEl.style.display = 'block';
            secondApp.delete().catch(() => {});
        });
}

function updateUserField(index, field, value) {
    if (!hotelData.users[index]) return;
    hotelData.users[index][field] = value;
    const uid = hotelData.users[index].uid;
    if (uid && window.fbDb) {
        window.fbDb.ref('users/' + uid + '/' + field).set(value).catch(() => {});
    }
    saveDataToStorage();
}

function sendPasswordReset(email) {
    // Open inline password change modal instead of sending email
    openChangePasswordModal(email);
}

let _passwordChangeTargetEmail = null;

function openChangePasswordModal(email) {
    _passwordChangeTargetEmail = email;
    document.getElementById('newPasswordInput').value = '';
    document.getElementById('confirmPasswordInput').value = '';
    document.getElementById('changePasswordError').style.display = 'none';
    openModal('changePasswordModal');
}

function handleChangePassword(e) {
    e.preventDefault();
    const newPass = document.getElementById('newPasswordInput').value;
    const confirmPass = document.getElementById('confirmPasswordInput').value;
    const errEl = document.getElementById('changePasswordError');
    const btn = document.getElementById('changePasswordBtn');

    if (newPass !== confirmPass) {
        errEl.textContent = 'Passwords do not match.';
        errEl.style.display = 'block';
        return;
    }
    if (newPass.length < 6) {
        errEl.textContent = 'Password must be at least 6 characters.';
        errEl.style.display = 'block';
        return;
    }

    errEl.style.display = 'none';
    btn.disabled = true;

    // Update current user's password (admin changing their own)
    // OR admin changing another user's password via Firebase Auth
    const currentUser = window.fbAuth.currentUser;

    if (_passwordChangeTargetEmail && currentUser && currentUser.email === _passwordChangeTargetEmail) {
        // Changing own password
        currentUser.updatePassword(newPass)
            .then(() => {
                btn.disabled = false;
                closeModal('changePasswordModal');
                showToast('Password updated successfully!', 'success');
            })
            .catch(err => {
                btn.disabled = false;
                errEl.textContent = err.message;
                errEl.style.display = 'block';
            });
    } else {
        // For changing another user's password, we need to use Firebase Admin SDK
        // Client-side cannot change other users' passwords directly
        // We'll store the new password in the user's profile and they can use it on next login
        // (This is a workaround — full implementation requires Cloud Functions)
        const targetUser = hotelData.users.find(u => u.email === _passwordChangeTargetEmail);
        if (targetUser && targetUser.uid) {
            window.fbDb.ref('users/' + targetUser.uid + '/tempPassword').set(newPass)
                .then(() => {
                    btn.disabled = false;
                    closeModal('changePasswordModal');
                    showToast('Password marked for update. User must re-login for it to take effect.', 'success');
                    // Also update in hotelData
                    if (!targetUser.tempPassword) targetUser.tempPassword = newPass;
                    saveDataToStorage();
                })
                .catch(err => {
                    btn.disabled = false;
                    errEl.textContent = err.message;
                    errEl.style.display = 'block';
                });
        } else {
            btn.disabled = false;
            errEl.textContent = 'User not found.';
            errEl.style.display = 'block';
        }
    }
}

function removeUser(index) {
    const user = hotelData.users[index];
    if (!user) return;
    if (user.uid === loggedInUser?.uid || user.email === loggedInUser?.email) {
        showToast(t('toast_cannot_delete_self'), 'error');
        return;
    }
    if (!confirm('Remove user ' + user.name + '?')) return;

    if (user.uid && window.fbDb) {
        // Remove user profile from DB
        window.fbDb.ref('users/' + user.uid).remove().catch(() => {});
        // Ban the UID so they cannot log in again even if Auth account persists
        window.fbDb.ref('bannedUsers/' + user.uid).set({ email: user.email, bannedAt: new Date().toISOString() }).catch(() => {});
        // Remove from hotelData users list in Firebase
        window.fbDb.ref('hotelData/users').once('value').then(snap => {
            const users = snap.val() || [];
            const filtered = Array.isArray(users)
                ? users.filter((_, i) => i !== index)
                : Object.values(users).filter(u => u.uid !== user.uid);
            window.fbDb.ref('hotelData/users').set(filtered).catch(() => {});
        }).catch(() => {});
    }

    hotelData.users.splice(index, 1);
    saveDataToStorage();
    showToast('User deleted successfully.', 'success');
    loadSettingsPage();
}

function addRoomStatus() {
    if (!hotelData.settings.roomStatuses) hotelData.settings.roomStatuses = [];
    hotelData.settings.roomStatuses.push({ id: 'status_' + Date.now(), label: 'New Status', color: '#6b7280', bookable: false });
    saveDataToStorage();
    loadStatusesSection();
}

function removeRoomStatus(index) {
    const st = hotelData.settings.roomStatuses[index];
    if (st && st.system) return;
    hotelData.settings.roomStatuses.splice(index, 1);
    saveDataToStorage();
    loadStatusesSection();
}

// ==================== UTILITY FUNCTIONS ====================
function updateCurrentDate() {
    const date = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    document.getElementById('currentDate').textContent = date.toLocaleDateString(locale, options);
}

function addActivity(description, roomNumber = null, action = 'action', amount = null, guestName = null) {
    const entry = {
        description,
        roomNumber,
        action,
        amount,
        guestName,
        timestamp: new Date().toISOString(),
        userName: loggedInUser?.name || 'System',
        userRole: loggedInUser?.role || 'system'
    };
    hotelData.activities.push(entry);
    if (hotelData.activities.length > 100) {
        hotelData.activities = hotelData.activities.slice(-100);
    }
    if (window.fbDb) {
        window.fbDb.ref('logs').push(entry).catch(() => {});
    }
    saveDataToStorage();
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast alert alert-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==================== AUTH SYSTEM ====================
function checkAuth() {
    showLogin();
}

function showLogin() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        const nameEl = document.getElementById('loginHotelName');
        if (nameEl) nameEl.textContent = hotelData.settings.hotelName;
        translatePage();
    }
}

function showApp() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) overlay.style.display = 'none';
    applyRoleUI();

    // Reset all pages and sidebar active states
    document.querySelectorAll('.page-content').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));

    const role = loggedInUser.role;
    if (role === 'cleaner') {
        const cp = document.getElementById('cleanerStatus');
        if (cp) cp.style.display = 'block';
        const ci = document.querySelector('.sidebar-item[data-roles="cleaner"]');
        if (ci) ci.classList.add('active');
        document.getElementById('pageTitle').textContent = t('cleaner_page_title');
        loadCleanerPage();
    } else if (role === 'reception') {
        const ci = document.getElementById('checkIn');
        if (ci) ci.style.display = 'block';
        const cib = document.querySelector('.sidebar-item[onclick*="checkIn"]');
        if (cib) cib.classList.add('active');
        document.getElementById('pageTitle').textContent = t('nav_checkin');
        loadCheckInPage();
    } else {
        const dash = document.getElementById('dashboard');
        if (dash) dash.style.display = 'block';
        const di = document.querySelector('.sidebar-item[onclick*="dashboard"]');
        if (di) di.classList.add('active');
        document.getElementById('pageTitle').textContent = t('nav_dashboard');
        loadDashboard();
    }
    const userEl = document.getElementById('userDisplayName');
    if (userEl) userEl.textContent = `${loggedInUser.name} (${t('role_' + loggedInUser.role)})`;
    updateNotificationBell();
}

function handleLogin(e) {
    e.preventDefault();
    const email    = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errEl    = document.getElementById('loginError');
    const btn      = e.target.querySelector('button[type="submit"]');
    errEl.style.display = 'none';
    if (btn) btn.disabled = true;

    window.fbAuth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            const uid = cred.user.uid;
            // Check banned status — fail silently so login still works if path doesn't exist in rules yet
            const banCheck = window.fbDb
                ? window.fbDb.ref('bannedUsers/' + uid).once('value').catch(() => null)
                : Promise.resolve(null);
            return banCheck.then(banSnap => {
                if (banSnap && banSnap.exists()) {
                    window.fbAuth.signOut();
                    throw new Error('This account has been deleted from the system.');
                }
                return window.fbDb.ref('users/' + uid).once('value').then(snap => {
                    const profile = snap.val();
                    if (!profile) throw new Error(t('login_error') || 'User profile not found.');
                    loggedInUser = { uid, ...profile };
                    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                    return window.fbDb.ref('hotelData').once('value');
                });
            });
        })
        .then(dataSnap => {
            const fbData = dataSnap.val();
            if (fbData) { hotelData = fbMerge(fbData); localStorage.setItem('hotelData', JSON.stringify(hotelData)); }
            startShiftSession();
            if (btn) btn.disabled = false;
            showApp();
            setupFirebaseRealtimeListener();
        })
        .catch(err => {
            if (btn) btn.disabled = false;
            errEl.style.display = 'block';
            const authErrs = ['auth/wrong-password','auth/user-not-found','auth/invalid-credential','auth/invalid-email'];
            errEl.textContent = authErrs.includes(err.code) ? (t('login_error') || 'Invalid email or password.') : err.message;
        });
}

const PAGE_ACCESS = {
    dashboard: ['admin'],
    rooms: ['admin'],
    checkIn: ['admin', 'reception'],
    checkOut: ['admin', 'reception'],
    services: ['admin'],
    history: ['admin', 'reception'],
    reports: ['admin'],
    purchases: ['admin', 'reception'],
    outsideIncome: ['admin', 'reception'],
    settings: ['admin'],
    cleanerStatus: ['admin', 'cleaner', 'reception'],
};

function applyRoleUI() {
    const role = loggedInUser?.role || 'reception';
    document.querySelectorAll('.sidebar-item[data-roles]').forEach(item => {
        const roles = item.dataset.roles.split(',');
        item.style.display = roles.includes(role) ? '' : 'none';
    });
    const userEl = document.getElementById('userDisplayName');
    if (userEl) userEl.textContent = `${loggedInUser.name} (${t('role_' + role)})`;

    // Cleaner nav visible to all three roles — always labelled "Room Status"
}

// ==================== SHIFT SESSIONS ====================
// Tracks actual login→logout sessions per staff member (not calendar days), so a shift that
// crosses midnight stays together in one report instead of being split across two dates.
function startShiftSession() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) hotelData.shiftLog = [];
    // Close any stale open shift for this staff first (e.g. browser closed without logging out)
    hotelData.shiftLog.forEach(s => { if (s.staff === staff && !s.logoutAt) s.logoutAt = new Date().toISOString(); });
    hotelData.shiftLog.push({
        id: Math.random().toString(36).substring(2, 11),
        staff,
        loginAt: new Date().toISOString(),
        logoutAt: null
    });
    saveDataToStorage();
}

// Closes the current staff member's open shift. Returns its id (or null if none was open).
function endShiftSession() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) return null;
    const open = [...hotelData.shiftLog].reverse().find(s => s.staff === staff && !s.logoutAt);
    if (!open) return null;
    open.logoutAt = new Date().toISOString();
    saveDataToStorage();
    return open.id;
}

// Ensures the current staff member always has an open shift to fall back to — covers sessions
// that were already logged in before this feature existed (no shiftLog entry yet).
function getOrStartCurrentShift() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) hotelData.shiftLog = [];
    let open = [...hotelData.shiftLog].reverse().find(s => s.staff === staff && !s.logoutAt);
    if (!open) {
        open = { id: Math.random().toString(36).substring(2, 11), staff, loginAt: new Date().toISOString(), logoutAt: null };
        hotelData.shiftLog.push(open);
        saveDataToStorage();
    }
    return open;
}

function downloadShiftReport(autoExcel = false, shiftId = null, monthKey = null, staffOverride = null) {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const esc = s => String(s == null ? '—' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    const hotel  = hotelData.settings?.hotelName || 'Hotel';
    const myName = loggedInUser?.name || loggedInUser?.email || '—';
    const isAdmin = loggedInUser?.role === 'admin';
    const staff  = (isAdmin && staffOverride) ? staffOverride : myName;
    const isOwnSession = staff === myName;
    const byMe  = name => !(!name || name === '—') && name === staff;

    // Admins can browse every staff member's shifts; everyone else only sees their own.
    const allStaffNames = isAdmin
        ? [...new Set((hotelData.shiftLog || []).map(s => s.staff))].sort()
        : [myName];
    const staffOptionsHtml = allStaffNames.map(n =>
        `<option value="${esc(n)}" ${n === staff ? 'selected' : ''}>${esc(n)}</option>`
    ).join('');

    // Shifts are tracked by actual login→logout time, not calendar day, so a shift that
    // crosses midnight (e.g. 10pm–6am) stays together as one report instead of being split.
    // Only auto-open a "current" shift when no specific one was requested — otherwise (e.g. right
    // after logout just closed it) this would immediately re-open a brand-new duplicate session.
    // Never auto-open a shift while an admin is just browsing someone else's history.
    if (!shiftId && isOwnSession) getOrStartCurrentShift();
    const allMyShifts = (hotelData.shiftLog || [])
        .filter(s => s.staff === staff)
        .sort((a, b) => new Date(b.loginAt) - new Date(a.loginAt));

    const monthKeyOf   = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
    const monthLabelOf = d => d.toLocaleString([], { month: 'long', year: 'numeric' });

    // Resolve which shift we're showing: explicit shift id wins, then a shift inside the
    // requested month, then fall back to the most recent shift overall.
    let shift = (shiftId && allMyShifts.find(s => s.id === shiftId)) || null;
    if (!shift && monthKey) {
        shift = allMyShifts.find(s => monthKeyOf(new Date(s.loginAt)) === monthKey) || null;
    }
    if (!shift) shift = allMyShifts[0];

    const activeMonthKey = monthKeyOf(new Date(shift.loginAt));
    const myShifts = allMyShifts.filter(s => monthKeyOf(new Date(s.loginAt)) === activeMonthKey);

    const shiftStart = new Date(shift.loginAt);
    const shiftEnd    = shift.logoutAt ? new Date(shift.logoutAt) : now;
    const inShift = d => { if (!d) return false; const dt = new Date(d); return dt >= shiftStart && dt <= shiftEnd; };
    const fmtShiftTime = d => d.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const shiftLabel = `${fmtShiftTime(shiftStart)} → ${shift.logoutAt ? fmtShiftTime(shiftEnd) : 'now (current)'}`;
    const shiftOptionsHtml = myShifts.map(s => {
        const st = new Date(s.loginAt);
        const en = s.logoutAt ? new Date(s.logoutAt) : null;
        const label = `${fmtShiftTime(st)} → ${en ? fmtShiftTime(en) : 'now (current)'}`;
        return `<option value="${s.id}" ${s.id === shift.id ? 'selected' : ''}>${esc(label)}</option>`;
    }).join('');
    // One option per distinct month that has at least one shift, most recent first
    const monthKeys = [...new Set(allMyShifts.map(s => monthKeyOf(new Date(s.loginAt))))];
    const monthOptionsHtml = monthKeys.map(k => {
        const [y, m] = k.split('-').map(Number);
        const label = monthLabelOf(new Date(y, m - 1, 1));
        return `<option value="${k}" ${k === activeMonthKey ? 'selected' : ''}>${esc(label)}</option>`;
    }).join('');

    const allGuests = [...(hotelData.guests || [])];
    const resLog    = [...(hotelData.reservationLog || [])];
    const allRooms  = [...(hotelData.rooms || [])];

    const checkInsToday  = allGuests.filter(g => inShift(g.checkIn)      && byMe(g.checkedInBy));
    const checkOutsToday = allGuests.filter(g => inShift(g.checkedOutAt) && byMe(g.checkedOutBy));
    const reservesToday  = resLog.filter(e => inShift(e.reservedAt)      && byMe(e.reservedBy));

    const servicesToday = [];
    allGuests.forEach(g => {
        if (!Array.isArray(g.orders)) return;
        g.orders.filter(o => inShift(o.timestamp) && byMe(o.addedBy)).forEach(o => {
            const room = allRooms.find(r => r.id === g.roomId);
            servicesToday.push({ guestName: g.name, roomNum: room ? room.number : '—', order: o, isCheckedOut: !!g.checkedOutAt });
        });
    });

    // ── Totals ──
    let ciCashIQD = 0, ciCashUSD = 0, ciCardIQD = 0;
    checkInsToday.forEach(g => { ciCashIQD += g.depositCashIQD||0; ciCashUSD += g.depositCashUSD||0; ciCardIQD += g.depositCardIQD||0; });

    let coCashIQD = 0, coCashUSD = 0, coCardIQD = 0;
    checkOutsToday.forEach(g => { coCashIQD += g.checkoutCashIQD||0; coCashUSD += g.checkoutCashUSD||0; coCardIQD += g.checkoutCardIQD||0; });

    let resCashIQD = 0, resCashUSD = 0, resCardIQD = 0;
    reservesToday.forEach(e => { resCashIQD += e.depositCashIQD||0; resCashUSD += e.depositCashUSD||0; resCardIQD += e.depositCardIQD||0; });

    // Services for still-active guests counted separately (checked-out services already in coCashIQD/coCardIQD)
    const svcActiveIQD = servicesToday.filter(s => !s.isCheckedOut).reduce((sum, s) => sum + (s.order.price||0)*(s.order.quantity||1), 0);
    const svcTotalIQD  = servicesToday.reduce((sum, s) => sum + (s.order.price||0)*(s.order.quantity||1), 0);

    // Outside income added by this staff member during this shift
    const outsideIncomeToday = (hotelData.outsideIncome || []).filter(p => inShift(p.date) && byMe(p.addedBy));
    const oiIQD = outsideIncomeToday.reduce((sum, p) => sum + (p.priceIQD||0), 0);
    const oiUSD = outsideIncomeToday.reduce((sum, p) => sum + (p.priceUSD||0), 0);

    // Purchases made by this staff member during this shift (deducted from vault)
    const purchasesToday = (hotelData.purchases || []).filter(p => inShift(p.date) && byMe(p.addedBy));
    const purchIQD = purchasesToday.reduce((sum, p) => sum + (p.priceIQD != null ? p.priceIQD : (p.price||0)), 0);
    const purchUSD = purchasesToday.reduce((sum, p) => sum + (p.priceUSD||0), 0);

    const grandIQD = ciCashIQD + ciCardIQD + coCashIQD + coCardIQD + resCashIQD + resCardIQD + svcActiveIQD + oiIQD - purchIQD;
    const grandUSD = ciCashUSD + coCashUSD + resCashUSD + oiUSD - purchUSD;
    const dateStr  = `${shiftStart.getFullYear()}-${pad(shiftStart.getMonth()+1)}-${pad(shiftStart.getDate())}`;

    // ── HTML table builder (shared for Excel + Print) ──
    function buildTableHtml(forPrint) {
        const C = forPrint
            ? { title:'#222', sect:'#333', colHdr:'#555', sub:'#ddd', subC:'#000', vHdr:'#222', vRow:'#f5f5f5', grand:'#111', even:'#f9f9f9', note:'#fffbe6' }
            : { title:'#1e3a8a', sect:'#1d4ed8', colHdr:'#3b82f6', sub:'#bfdbfe', subC:'#1e3a5f', vHdr:'#14532d', vRow:'#f0fdf4', grand:'#15803d', even:'#f0f7ff', note:'#fefce8' };
        const cell  = (v, s='') => `<td style="padding:6px 8px;border:1px solid #ddd;${s}">${esc(v)}</td>`;
        const hcell = (v, s='') => `<td style="padding:7px 10px;font-weight:700;color:#fff;background:${C.colHdr};border:1px solid #fff;${s}">${esc(v)}</td>`;
        const shead = (v, n) => `<tr><td colspan="${n}" style="padding:9px 10px;font-weight:700;color:#fff;background:${C.sect};font-size:12px;letter-spacing:1px;text-transform:uppercase;border-top:4px solid #fff;">${esc(v)}</td></tr>`;
        const sub   = (cells) => `<tr>${cells.map(v=>`<td style="padding:6px 10px;font-weight:700;background:${C.sub};color:${C.subC};border:1px solid #ccc;">${esc(v)}</td>`).join('')}</tr>`;
        const empty = (msg, n) => `<tr><td colspan="${n}" style="padding:8px;color:#9ca3af;font-style:italic;background:${C.note};">${esc(msg)}</td></tr>`;
        const drow  = (cells, i) => `<tr>${cells.map(v=>`<td style="padding:6px 8px;border:1px solid #ddd;background:${i%2===0?C.even:'#fff'};">${esc(v)}</td>`).join('')}</tr>`;

        let h = `<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:12px;">`;

        // Header
        h += `<tr><td colspan="8" style="padding:14px;font-size:17px;font-weight:700;color:#fff;background:${C.title};text-align:center;letter-spacing:2px;">${esc(hotel)} — SHIFT REPORT</td></tr>`;
        h += `<tr><td colspan="8" style="padding:7px 10px;background:${C.even};"><b>Staff:</b> ${esc(staff)}</td></tr>`;
        h += `<tr><td colspan="8" style="padding:7px 10px;background:${C.even};"><b>Shift:</b> ${esc(shiftLabel)} &nbsp;&nbsp; <b>Generated:</b> ${now.toLocaleString()}</td></tr>`;
        h += `<tr><td colspan="8" style="padding:6px 10px;background:${C.note};color:#92400e;font-style:italic;">Filtered to this staff member's activity during this shift only</td></tr>`;
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // CHECK-IN DEPOSITS
        h += shead('Check-in Deposits', 8);
        h += `<tr>${['#','Guest Name','Room','Check-in Time','Cash (IQD)','Cash ($)','MasterCard (IQD)','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (checkInsToday.length) {
            checkInsToday.forEach((g, i) => {
                const room = allRooms.find(r => r.id === g.roomId);
                const ci = g.depositCashIQD||0, cu = g.depositCashUSD||0, ca = g.depositCardIQD||0;
                h += drow([i+1, g.name||'—', room?`Room ${room.number}`:'—', g.checkIn?new Date(g.checkIn).toLocaleString():'—', ci>0?`IQD ${fmtIQD(ci)}`:'—', cu>0?`$${fmtUSD(cu)}`:'—', ca>0?`IQD ${fmtIQD(ca)}`:'—', g.notes||'—'], i);
            });
        } else { h += empty('No check-ins today', 8); }
        h += sub(['','','','SUBTOTAL', `IQD ${fmtIQD(ciCashIQD)}`, `$${fmtUSD(ciCashUSD)}`, `IQD ${fmtIQD(ciCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // CHECK-OUT PAYMENTS
        h += shead('Check-out Payments Collected', 8);
        h += `<tr>${['#','Guest Name','Room','Check-out Time','Cash (IQD)','Cash ($)','MasterCard (IQD)','Note'].map(v=>hcell(v)).join('')}</tr>`;
        if (checkOutsToday.length) {
            checkOutsToday.forEach((g, i) => {
                const room = allRooms.find(r => r.id === g.roomId);
                const ci = g.checkoutCashIQD||0, cu = g.checkoutCashUSD||0, ca = g.checkoutCardIQD||0;
                h += drow([i+1, g.name||'—', room?`Room ${room.number}`:'—', g.checkedOutAt?new Date(g.checkedOutAt).toLocaleString():'—', ci>0?`IQD ${fmtIQD(ci)}`:'—', cu>0?`$${fmtUSD(cu)}`:'—', ca>0?`IQD ${fmtIQD(ca)}`:'—', g.checkoutNote||'—'], i);
            });
        } else { h += empty('No check-outs today', 8); }
        h += sub(['','','','SUBTOTAL', `IQD ${fmtIQD(coCashIQD)}`, `$${fmtUSD(coCashUSD)}`, `IQD ${fmtIQD(coCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // RESERVATION DEPOSITS
        h += shead('Reservation Deposits', 8);
        h += `<tr>${['#','Guest Name','Room','Reserved At','Cash (IQD)','Cash ($)','MasterCard (IQD)','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (reservesToday.length) {
            reservesToday.forEach((e, i) => {
                const ci = e.depositCashIQD||0, cu = e.depositCashUSD||0, ca = e.depositCardIQD||0;
                h += drow([i+1, e.guestName||'—', `Room ${e.roomNumber||'—'}`, e.reservedAt?new Date(e.reservedAt).toLocaleString():'—', ci>0?`IQD ${fmtIQD(ci)}`:'—', cu>0?`$${fmtUSD(cu)}`:'—', ca>0?`IQD ${fmtIQD(ca)}`:'—', e.notes||'—'], i);
            });
        } else { h += empty('No reservations today', 8); }
        h += sub(['','','','SUBTOTAL', `IQD ${fmtIQD(resCashIQD)}`, `$${fmtUSD(resCashUSD)}`, `IQD ${fmtIQD(resCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // SERVICES
        h += shead('Services Added Today', 8);
        h += `<tr>${['#','Guest Name','Room','Service','Qty','Unit Price (IQD)','Total (IQD)','Status'].map(v=>hcell(v)).join('')}</tr>`;
        if (servicesToday.length) {
            servicesToday.forEach((s, i) => {
                const o = s.order, tot = (o.price||0)*(o.quantity||1);
                h += drow([i+1, s.guestName||'—', `Room ${s.roomNum}`, o.name||'—', o.quantity||1, o.price>0?`IQD ${fmtIQD(o.price)}`:'—', tot>0?`IQD ${fmtIQD(tot)}`:'—', s.isCheckedOut?'In checkout balance':'Collected (active room)'], i);
            });
        } else { h += empty('No services today', 8); }
        h += sub(['','','','','','TOTAL (all)', `IQD ${fmtIQD(svcTotalIQD)}`, `Active rooms: IQD ${fmtIQD(svcActiveIQD)}`]);
        h += `<tr><td colspan="8" style="padding:6px;"></td></tr>`;

        // OUTSIDE INCOME
        h += shead('Outside Income', 8);
        h += `<tr>${['#','Name','Date','Price (IQD)','Price ($)','','','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (outsideIncomeToday.length) {
            outsideIncomeToday.forEach((p, i) => {
                h += drow([i+1, p.name||'—', p.date?new Date(p.date).toLocaleString():'—', p.priceIQD>0?`IQD ${fmtIQD(p.priceIQD)}`:'—', p.priceUSD>0?`$${fmtUSD(p.priceUSD)}`:'—', '', '', p.notes||'—'], i);
            });
        } else { h += empty('No outside income today', 8); }
        h += sub(['','','SUBTOTAL', `IQD ${fmtIQD(oiIQD)}`, `$${fmtUSD(oiUSD)}`, '', '', '']);
        h += `<tr><td colspan="8" style="padding:6px;"></td></tr>`;

        // PURCHASES (DEDUCTIONS)
        h += shead('Purchases (Deductions)', 8);
        h += `<tr>${['#','Name','Date','Price (IQD)','Price ($)','','','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (purchasesToday.length) {
            purchasesToday.forEach((p, i) => {
                const iqd = p.priceIQD != null ? p.priceIQD : (p.price||0);
                h += drow([i+1, p.name||'—', p.date?new Date(p.date).toLocaleString():'—', iqd>0?`IQD ${fmtIQD(iqd)}`:'—', p.priceUSD>0?`$${fmtUSD(p.priceUSD)}`:'—', '', '', p.notes||'—'], i);
            });
        } else { h += empty('No purchases today', 8); }
        h += sub(['','','SUBTOTAL', purchIQD>0?`- IQD ${fmtIQD(purchIQD)}`:'—', purchUSD>0?`- $${fmtUSD(purchUSD)}`:'—', '', '', '']);
        h += `<tr><td colspan="8" style="padding:6px;"></td></tr>`;

        // VAULT SUMMARY
        h += `<tr><td colspan="8" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.vHdr};font-size:13px;text-align:center;letter-spacing:1px;text-transform:uppercase;">Vault Summary — Net Total</td></tr>`;
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;
        h += `<tr>${['Source','IQD','USD ($)'].map((v,i)=>`<td colspan="${i===0?4:2}" style="padding:7px 10px;font-weight:700;background:${C.sub};color:${C.subC};">${esc(v)}</td>`).join('')}</tr>`;

        const vrow = (lbl, iqd, usd) => `<tr>
            <td colspan="4" style="padding:7px 10px;background:${C.vRow};">${esc(lbl)}</td>
            <td colspan="2" style="padding:7px 10px;background:${C.vRow};text-align:right;">${esc(iqd)}</td>
            <td colspan="2" style="padding:7px 10px;background:${C.vRow};text-align:right;">${esc(usd)}</td>
        </tr>`;
        const vneg = (lbl, iqd, usd) => `<tr>
            <td colspan="4" style="padding:7px 10px;background:#fef2f2;color:#dc2626;font-weight:600;">${esc(lbl)}</td>
            <td colspan="2" style="padding:7px 10px;background:#fef2f2;color:#dc2626;font-weight:600;text-align:right;">${esc(iqd)}</td>
            <td colspan="2" style="padding:7px 10px;background:#fef2f2;color:#dc2626;font-weight:600;text-align:right;">${esc(usd)}</td>
        </tr>`;
        h += vrow('Check-in Deposits (Cash)',          `IQD ${fmtIQD(ciCashIQD)}`,  `$${fmtUSD(ciCashUSD)}`);
        h += vrow('Check-in Deposits (MasterCard)',    `IQD ${fmtIQD(ciCardIQD)}`,  '—');
        h += vrow('Check-out Payments (Cash)',         `IQD ${fmtIQD(coCashIQD)}`,  `$${fmtUSD(coCashUSD)}`);
        h += vrow('Check-out Payments (MasterCard)',   `IQD ${fmtIQD(coCardIQD)}`,  '—');
        h += vrow('Reservation Deposits (Cash)',       `IQD ${fmtIQD(resCashIQD)}`, `$${fmtUSD(resCashUSD)}`);
        h += vrow('Reservation Deposits (MasterCard)', `IQD ${fmtIQD(resCardIQD)}`, '—');
        h += vrow('Services (Active Rooms)',           `IQD ${fmtIQD(svcActiveIQD)}`,'—');
        h += vrow('Outside Income',                   `IQD ${fmtIQD(oiIQD)}`,       `$${fmtUSD(oiUSD)}`);
        h += vneg('Purchases (Deducted)',              purchIQD>0?`- IQD ${fmtIQD(purchIQD)}`:'—', purchUSD>0?`- $${fmtUSD(purchUSD)}`:'—');
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;
        h += `<tr>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;">NET VAULT TOTAL (IQD)</td>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;text-align:right;">IQD ${fmtIQD(grandIQD)}</td>
        </tr>`;
        h += `<tr>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;">NET VAULT TOTAL (USD)</td>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;text-align:right;">$${fmtUSD(grandUSD)}</td>
        </tr>`;
        h += `</table>`;
        return h;
    }

    // ── Auto-download (used on logout) — skip the modal, just save the Excel file ──
    if (autoExcel) {
        const tableHtml = buildTableHtml(false);
        const fullHtml  = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shift Report</title></head><body>${tableHtml}</body></html>`;
        const blob = new Blob([fullHtml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `ShiftReport_${(staff).replace(/\s+/g,'_')}_${dateStr}.xls`; a.click();
        URL.revokeObjectURL(url);
        return;
    }

    // ── Show modal ──
    document.getElementById('shiftReportOverlay')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'shiftReportOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.72);z-index:9999;display:flex;align-items:center;justify-content:center;';

    overlay.innerHTML = `
        <div style="background:#fff;border-radius:16px;width:94vw;max-width:1080px;max-height:92vh;
                    display:flex;flex-direction:column;box-shadow:0 30px 80px rgba(0,0,0,0.45);overflow:hidden;">
            <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;padding:16px 22px;
                        display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
                <div>
                    <div style="font-size:17px;font-weight:700;letter-spacing:1px;">Shift Report</div>
                    <div style="font-size:12px;opacity:0.82;margin-top:2px;">${esc(staff)} &mdash; ${esc(shiftLabel)}</div>
                    <div style="display:flex;gap:6px;margin-top:6px;">
                        ${isAdmin ? `<select id="srStaffSelect" style="font-size:12px;padding:4px 8px;border-radius:6px;border:none;background:rgba(255,255,255,0.18);color:#fff;cursor:pointer;">
                            ${staffOptionsHtml}
                        </select>` : ''}
                        <select id="srMonthSelect" style="font-size:12px;padding:4px 8px;border-radius:6px;border:none;background:rgba(255,255,255,0.18);color:#fff;cursor:pointer;">
                            ${monthOptionsHtml}
                        </select>
                        <select id="srShiftSelect" style="font-size:12px;padding:4px 8px;border-radius:6px;border:none;background:rgba(255,255,255,0.18);color:#fff;cursor:pointer;max-width:240px;">
                            ${shiftOptionsHtml}
                        </select>
                    </div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                    <button id="srExcelBtn" style="background:#10b981;color:#fff;border:none;border-radius:8px;
                            padding:8px 16px;font-weight:600;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;">
                        <i class="fas fa-file-excel"></i> Download Excel
                    </button>
                    <button id="srPrintBtn" style="background:#6366f1;color:#fff;border:none;border-radius:8px;
                            padding:8px 16px;font-weight:600;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;">
                        <i class="fas fa-print"></i> Print
                    </button>
                    <button id="srCloseBtn" style="background:rgba(255,255,255,0.18);color:#fff;border:none;
                            border-radius:8px;padding:8px 13px;cursor:pointer;font-size:20px;line-height:1;">&times;</button>
                </div>
            </div>
            <div id="shiftReportContent" style="overflow-y:auto;padding:20px;flex:1;background:#f8fafc;">
                ${buildTableHtml(false)}
            </div>
        </div>`;

    document.body.appendChild(overlay);

    document.getElementById('srCloseBtn').onclick  = () => overlay.remove();
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    document.getElementById('srShiftSelect').onchange = (e) => downloadShiftReport(false, e.target.value, activeMonthKey, staff);
    document.getElementById('srMonthSelect').onchange = (e) => downloadShiftReport(false, null, e.target.value, staff);
    document.getElementById('srStaffSelect')?.addEventListener('change', (e) => downloadShiftReport(false, null, null, e.target.value));

    document.getElementById('srExcelBtn').onclick = () => {
        const tableHtml = buildTableHtml(false);
        const fullHtml  = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shift Report</title></head><body>${tableHtml}</body></html>`;
        const blob = new Blob([fullHtml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `ShiftReport_${(staff).replace(/\s+/g,'_')}_${dateStr}.xls`; a.click();
        URL.revokeObjectURL(url);
    };

    document.getElementById('srPrintBtn').onclick = () => {
        const tableHtml = buildTableHtml(true);
        const pw = window.open('', '_blank', 'width=960,height=750');
        pw.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shift Report — ${esc(staff)}</title>
        <style>
            body { margin: 20px; font-family: Arial, sans-serif; }
            table { border-collapse: collapse; width: 100%; font-size: 11px; }
            td { border: 1px solid #bbb; padding: 5px 7px; }
            @media print {
                body { margin: 10mm; }
                button { display: none !important; }
            }
        </style></head><body>
        ${tableHtml}
        <br>
        <button onclick="window.print()" style="margin-top:12px;padding:10px 28px;font-size:14px;cursor:pointer;
                background:#333;color:#fff;border:none;border-radius:6px;">
            Print / Save as PDF
        </button>
        </body></html>`);
        pw.document.close();
        setTimeout(() => pw.print(), 600);
    };
}

function logout() {
    if (!confirm(t('logout_confirm') || 'Are you sure you want to logout?')) return;
    if (loggedInUser && (loggedInUser.role === 'reception' || loggedInUser.role === 'admin')) {
        const closedShiftId = endShiftSession();
        downloadShiftReport(true, closedShiftId);
    }
    if (window.fbDb) window.fbDb.ref('hotelData').off();
    window.fbAuth.signOut().then(() => {
        sessionStorage.removeItem('loggedInUser');
        loggedInUser = null;
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        showLogin();
    });
}

// ==================== STORAGE ====================
function saveDataToStorage() {
    if (window.fbDb && loggedInUser) {
        window.fbDb.ref('hotelData').set(hotelData).catch(() => {});
    }
}

function loadDataFromStorage() {
    try {
        const stored = localStorage.getItem('hotelData');
        if (stored) {
            const parsed = JSON.parse(stored);
            const rawStatuses = (parsed.settings && parsed.settings.roomStatuses) || hotelData.settings.roomStatuses;
            hotelData = {
                ...hotelData,
                ...parsed,
                settings: {
                    ...hotelData.settings,
                    ...(parsed.settings || {}),
                    roomTypes: (parsed.settings && parsed.settings.roomTypes) || hotelData.settings.roomTypes,
                    serviceCategories: (parsed.settings && parsed.settings.serviceCategories) || hotelData.settings.serviceCategories,
                    roomStatuses: ensureDefaultRoomStatuses(rawStatuses)
                },
                purchases: parsed.purchases || [],
                outsideIncome: parsed.outsideIncome || [],
                shiftLog: parsed.shiftLog || [],
                activities: parsed.activities || [],
                rooms: migrateRoomStatuses(parsed.rooms || [], rawStatuses),
                guests: parsed.guests || [],
                orders: parsed.orders || [],
                priceHistory: parsed.priceHistory || [],
                users: (parsed.users && parsed.users.length) ? parsed.users : hotelData.users
            };
        }
    } catch (e) {
        console.error('Error loading data:', e);
    }
}

// ==================== ORDER MANAGEMENT ====================
function handleOrderSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const category = document.getElementById('orderCategory').value;
    const itemName = document.getElementById('orderItemName').value.trim();
    const order = {
        id: Math.random().toString(36).substring(2, 11),
        category,
        name: itemName || category,
        quantity: parseInt(document.getElementById('orderQuantity').value),
        price: parseFloat(document.getElementById('orderPrice').value.replace(/,/g, '')),
        timestamp: new Date().toISOString(),
        addedBy: loggedInUser ? (loggedInUser.name || loggedInUser.email || loggedInUser.role || 'Unknown') : 'Unknown'
    };

    if (selectedRoom) {
        const guest = hotelData.guests.find(g => g.id === selectedRoom.currentGuest.id);
        if (guest) {
            if (!Array.isArray(guest.orders)) guest.orders = [];
            guest.orders.push(order);
            saveDataToStorage();
            showToast(t('toast_service_added'), 'success');
            closeModal('orderModal');
            // Refresh whichever page is currently visible
            const servicesVisible = document.getElementById('services').style.display !== 'none';
            if (servicesVisible) loadServicesPage();
        }
    }
}

function viewRoomDetails(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;

    const cfg = getStatusConfig(room.status);
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    const statusLabel = cfg.label;
    let guestHtml = '';
    if (room.status === 'occupied' && room.currentGuest) {
        const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
        if (guest) {
            const checkIn = new Date(guest.checkIn).toLocaleString(locale);
            const checkOut = guest.checkOut ? new Date(guest.checkOut).toLocaleString(locale) : t('open_label');
            guestHtml = `
                <div style="background:#f0fdf4;border-left:4px solid #10b981;border-radius:8px;padding:14px;margin-top:16px;">
                    <p class="font-semibold text-gray-700 mb-2"><i class="fas fa-user mr-2 text-green-600"></i>${t('current_guest_label')}</p>
                    <p><span class="text-gray-500">${t('label_full_name')}:</span> <strong>${guest.name}</strong></p>
                    <p><span class="text-gray-500">${t('phone_label')}:</span> ${guest.phone || '-'}</p>
                    <p><span class="text-gray-500">${t('check_in_label')}:</span> ${checkIn}</p>
                    <p><span class="text-gray-500">${t('check_out_label')}:</span> ${checkOut}</p>
                    <p><span class="text-gray-500">${t('label_num_guests')}:</span> ${guest.numGuests}</p>
                </div>`;
        }
    }

    document.getElementById('roomInfoContent').innerHTML = `
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="info-item"><div class="info-label">${t('label_room_number')}</div><div class="info-value">${t('room_prefix')} ${room.number}</div></div>
            <div class="info-item"><div class="info-label">${t('col_type')}</div><div class="info-value">${room.type}</div></div>
            <div class="info-item"><div class="info-label">${t('floor_label')}</div><div class="info-value">${t('floor_prefix')} ${room.floor}</div></div>
            <div class="info-item"><div class="info-label">${t('capacity_label')}</div><div class="info-value">${room.capacity} ${t('guests_label')}</div></div>
            <div class="info-item"><div class="info-label">${t('per_night')}</div><div class="info-value">IQD ${fmtIQD(room.price)}</div></div>
            <div class="info-item"><div class="info-label">Status</div><div class="info-value"><span style="background:${cfg.color}22;color:${cfg.color};padding:4px 10px;border-radius:9999px;font-size:0.75rem;font-weight:700;">${statusLabel}</span></div></div>
        </div>
        ${room.description ? `<p class="text-gray-600 text-sm mb-4">${room.description}</p>` : ''}
        ${guestHtml}
        <div class="flex gap-3 mt-6">
            <button onclick="closeModal('roomInfoModal');openRoomModal(${room.id})" class="btn btn-secondary flex-1"><i class="fas fa-edit"></i> ${t('btn_edit_room')}</button>
            <button onclick="closeModal('roomInfoModal')" class="btn btn-primary flex-1"><i class="fas fa-check"></i> ${t('close')}</button>
        </div>`;

    openModal('roomInfoModal');
}

// New function for adding orders during checkout
function openCheckoutOrderModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;

    selectedRoom = room;
    _populateOrderModal();
    openModal('orderModal');
}

// Function to modify checkout date and recalculate pricing
function modifyCheckoutDate(roomId, newDateString) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);

    if (!room || !guest) return;

    const newCheckOutDate = new Date(newDateString);
    const checkInDate = new Date(guest.checkIn);

    // Validate: checkout date must be after check-in date
    if (newCheckOutDate <= checkInDate) {
        showToast(t('toast_checkout_after'), 'error');
        document.getElementById('checkoutDateModify').value = new Date(guest.checkOut).toISOString().slice(0, 16);
        return;
    }

    // Update the guest's checkout date
    guest.checkOut = newCheckOutDate.toISOString();
    saveDataToStorage();

    // Reload the checkout form with updated pricing
    loadCheckOutForm(roomId);
    showToast(t('toast_checkout_updated'), 'success');
}

// Function to remove an accidentally added order
function removeOrder(roomId, orderId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);

    if (!room || !guest) return;

    const orderIndex = guest.orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;

    const orderName = guest.orders[orderIndex].name;
    guest.orders.splice(orderIndex, 1);
    saveDataToStorage();

    // Reload the checkout form with updated totals
    loadCheckOutForm(roomId);
    showToast(`"${orderName}" removed from order!`, 'success');
}

// ==================== EXPORT FUNCTIONALITY ====================
function openExportModal() {
    const sel = document.getElementById('exportUserFilter');
    if (sel) {
        sel.innerHTML = '<option value="all">All Users</option>';
        (hotelData.users || []).forEach(u => {
            const opt = document.createElement('option');
            opt.value = u.name || u.email;
            opt.textContent = `${u.name} (${u.role})`;
            sel.appendChild(opt);
        });
    }
    setExportRange('all');
    openModal('exportModal');
}

function setExportRange(type) {
    const today = new Date();
    const fmt = d => d.toISOString().split('T')[0];
    let from;
    const to = fmt(today);
    if (type === 'today') {
        from = to;
    } else if (type === 'week') {
        const d = new Date(today); d.setDate(d.getDate() - 7); from = fmt(d);
    } else if (type === 'month') {
        from = fmt(new Date(today.getFullYear(), today.getMonth(), 1));
    } else if (type === 'year') {
        from = fmt(new Date(today.getFullYear(), 0, 1));
    } else {
        from = '2000-01-01';
    }
    const el = id => document.getElementById(id);
    if (el('exportDateFrom')) el('exportDateFrom').value = from;
    if (el('exportDateTo'))   el('exportDateTo').value = to;
}

function executeExport() {
    ensureXLSX().then(() => {
        if (!window.XLSX) { showToast('Excel library not loaded. Try again.', 'error'); return; }

        const fromStr = document.getElementById('exportDateFrom')?.value;
        const toStr   = document.getElementById('exportDateTo')?.value;
        const userFilter = document.getElementById('exportUserFilter')?.value || 'all';

        const fromDate = fromStr ? new Date(fromStr + 'T00:00:00') : new Date(0);
        const toDate   = toStr   ? new Date(toStr   + 'T23:59:59') : new Date();

        const inRange = d => { if (!d) return false; const dt = new Date(d); return dt >= fromDate && dt <= toDate; };
        const userMatch = n => userFilter === 'all' || n === userFilter;

        const wb    = XLSX.utils.book_new();
        const hotel = hotelData.settings?.hotelName || 'Hotel';
        const range = `${fromDate.toLocaleDateString()} – ${toDate.toLocaleDateString()}`;
        const sel   = id => document.getElementById(id)?.checked;

        const addSheet = (name, rows, widths) => {
            const ws = XLSX.utils.aoa_to_sheet(rows);
            if (widths) ws['!cols'] = widths.map(w => ({ wch: w }));
            XLSX.utils.book_append_sheet(wb, ws, name);
        };

        const allGuests  = hotelData.guests || [];
        const checkins   = allGuests.filter(g => inRange(g.checkIn) && userMatch(g.checkedInBy));
        const checkouts  = allGuests.filter(g => g.checkedOutAt && inRange(g.checkedOutAt) && userMatch(g.checkedOutBy));
        const resLog     = (hotelData.reservationLog || []).filter(e => inRange(e.reservedAt) && userMatch(e.reservedBy));
        const purchases  = (hotelData.purchases || []).filter(p => inRange(p.date));
        const activities = (hotelData.activities || []).filter(a => inRange(a.timestamp) && userMatch(a.userName));

        // ── SUMMARY ──
        if (sel('exp_summary')) {
            const roomRevIQD = checkouts.filter(g => g.roomCurrency === 'IQD').reduce((s,g) => s+(g.roomAmountPaid||0), 0);
            const roomRevUSD = checkouts.filter(g => g.roomCurrency === '$').reduce((s,g)  => s+(g.roomAmountPaid||0), 0);
            const svcIQD     = checkouts.reduce((s,g) => s+(g.serviceAmountIQD||0), 0);
            const depIQD     = resLog.reduce((s,e) => s+(e.depositIQD||0), 0);
            const depUSD     = resLog.reduce((s,e) => s+(e.depositUSD||0), 0);
            const incIQD = roomRevIQD + svcIQD + depIQD;
            const incUSD = roomRevUSD + depUSD;
            const pIQD = purchases.reduce((s,p) => { const v = p.priceIQD!=null?p.priceIQD:(p.price||0); return s+v; }, 0);
            const pUSD = purchases.reduce((s,p) => s+(p.priceUSD||0), 0);
            const checkInDepIQD = checkins.reduce((s,g) => s+(g.depositIQD||0), 0);
            const checkInDepUSD = checkins.reduce((s,g) => s+(g.depositUSD||0), 0);
            addSheet('Summary', [
                [`${hotel} — Export Report`],
                ['Period:', range],
                ['Generated:', new Date().toLocaleString()],
                ['Generated by:', loggedInUser?.name || '—'],
                ['User filter:', userFilter === 'all' ? 'All Users' : userFilter],
                [],
                ['FINANCIAL SUMMARY', 'IQD', 'USD ($)'],
                ['Room Revenue', `IQD ${fmtIQD(roomRevIQD)}`, `$${roomRevUSD.toFixed(2)}`],
                ['Services Revenue', `IQD ${fmtIQD(svcIQD)}`, '—'],
                ['Reservation Deposits', `IQD ${fmtIQD(depIQD)}`, `$${depUSD.toFixed(2)}`],
                ['Check-in Deposits', `IQD ${fmtIQD(checkInDepIQD)}`, `$${checkInDepUSD.toFixed(2)}`],
                ['Total Income', `IQD ${fmtIQD(incIQD)}`, `$${incUSD.toFixed(2)}`],
                ['Total Purchases', `IQD ${fmtIQD(pIQD)}`, `$${pUSD.toFixed(2)}`],
                ['NET REVENUE', `IQD ${fmtIQD(incIQD - pIQD)}`, `$${(incUSD - pUSD).toFixed(2)}`],
                [],
                ['OPERATIONAL SUMMARY', 'Count'],
                ['Check-ins (period)', checkins.length],
                ['Check-outs (period)', checkouts.length],
                ['Reservations (period)', resLog.length],
                ['  ↳ Active', resLog.filter(e => e.status==='active').length],
                ['  ↳ Cancelled', resLog.filter(e => e.status==='cancelled').length],
                ['Purchases (period)', purchases.length],
                ['Activities logged', activities.length],
            ], [28, 22, 16]);
        }

        // ── CHECK-INS ──
        if (sel('exp_checkins')) {
            const rows = [['#','Guest Name','Phone','Nationality','ID Type','ID Number','Room','Type','Floor','Check-in','Exp. Checkout','Nights','Rate/Night (IQD)','Rate/Night ($)','Deposit (IQD)','Deposit ($)','Guests','Checked In By']];
            checkins.forEach((g, i) => {
                const room = hotelData.rooms.find(r => r.id === g.roomId);
                const nights = g.checkIn && g.checkOut ? Math.ceil((new Date(g.checkOut)-new Date(g.checkIn))/86400000) : '—';
                rows.push([i+1, g.name||'—', g.phone||'—', g.nationality||'—', g.idType||'—', g.idNumber||'—',
                    room?`Room ${room.number}`:'—', room?room.type:'—', room?room.floor:'—',
                    g.checkIn?new Date(g.checkIn).toLocaleString():'—',
                    g.checkOut?new Date(g.checkOut).toLocaleString():'—',
                    nights, g.basePriceIQD||0, g.basePriceUSD||0,
                    g.depositIQD||0, g.depositUSD||0,
                    g.numGuests||1, g.checkedInBy||'—']);
            });
            if (rows.length===1) rows.push(['No check-ins in this period']);
            addSheet('Check-ins', rows, [4,18,14,14,12,14,10,14,6,20,20,7,16,12,14,12,7,16]);
        }

        // ── CHECK-OUTS ──
        if (sel('exp_checkouts')) {
            const rows = [['#','Guest Name','Phone','Room','Type','Check-in','Check-out','Nights','Room Rev (IQD)','Room Rev ($)','Services (IQD)','Total IQD','Total ($)','Payment','Note','Checked Out By']];
            checkouts.forEach((g, i) => {
                const room = hotelData.rooms.find(r => r.id === g.roomId);
                const nights = g.checkIn && g.checkedOutAt ? Math.ceil((new Date(g.checkedOutAt)-new Date(g.checkIn))/86400000) : '—';
                const rIQD = g.roomCurrency==='IQD' ? (g.roomAmountPaid||0) : 0;
                const rUSD = g.roomCurrency==='$'   ? (g.roomAmountPaid||0) : 0;
                const svc  = g.serviceAmountIQD || 0;
                rows.push([i+1, g.name||'—', g.phone||'—',
                    room?`Room ${room.number}`:'—', room?room.type:'—',
                    g.checkIn?new Date(g.checkIn).toLocaleString():'—',
                    g.checkedOutAt?new Date(g.checkedOutAt).toLocaleString():'—',
                    nights,
                    rIQD>0?`IQD ${fmtIQD(rIQD)}`:'—', rUSD>0?`$${rUSD.toFixed(2)}`:'—',
                    svc>0?`IQD ${fmtIQD(svc)}`:'—',
                    rIQD>0?`IQD ${fmtIQD(rIQD+svc)}`:'—', rUSD>0?`$${rUSD.toFixed(2)}`:'—',
                    g.paymentMethod||'—', g.checkoutNote||'—', g.checkedOutBy||'—']);
            });
            if (rows.length===1) rows.push(['No check-outs in this period']);
            addSheet('Check-outs', rows, [4,18,13,10,13,20,20,7,16,12,14,14,10,14,20,16]);
        }

        // ── RESERVATIONS ──
        if (sel('exp_reservations')) {
            const rows = [['#','Room','Guest Name','Phone','Reserved At','Arrival Date','Deposit (IQD)','Deposit ($)','Status','Cancelled At','Reserved By']];
            resLog.forEach((e, i) => {
                const depI = (e.depositIQD||0)>0 ? `IQD ${fmtIQD(e.depositIQD)}` : '—';
                const depU = (e.depositUSD||0)>0 ? `$${e.depositUSD.toFixed(2)}` : '—';
                rows.push([i+1, `Room ${e.roomNumber}`, e.guestName||'—', e.phone||'—',
                    e.reservedAt?new Date(e.reservedAt).toLocaleString():'—',
                    e.arrivalDate?new Date(e.arrivalDate).toLocaleString():'—',
                    depI, depU,
                    e.status==='cancelled'?'Cancelled':'Active',
                    e.cancelledAt?new Date(e.cancelledAt).toLocaleString():'—',
                    e.reservedBy||'—']);
            });
            if (rows.length===1) rows.push(['No reservations in this period']);
            const tI = resLog.reduce((s,e)=>s+(e.depositIQD||0),0);
            const tU = resLog.reduce((s,e)=>s+(e.depositUSD||0),0);
            rows.push([], ['','','','','','TOTAL DEPOSITS:',`IQD ${fmtIQD(tI)}`,`$${tU.toFixed(2)}`]);
            addSheet('Reservations', rows, [4,10,18,14,20,20,16,12,10,20,16]);
        }

        // ── PURCHASES ──
        if (sel('exp_purchases')) {
            const rows = [['#','Item Name','Price (IQD)','Price ($)','Notes','Date']];
            let tI=0, tU=0;
            purchases.forEach((p, i) => {
                const iqd=p.priceIQD!=null?p.priceIQD:(p.price||0), usd=p.priceUSD||0;
                tI+=iqd; tU+=usd;
                rows.push([i+1, p.name||'—',
                    iqd>0?`IQD ${fmtIQD(iqd)}`:'—',
                    usd>0?`$${fmtUSD(usd)}`:'—',
                    p.notes||'—',
                    p.date?new Date(p.date).toLocaleDateString():'—']);
            });
            if (rows.length===1) rows.push(['No purchases in this period']);
            rows.push([], ['','TOTALS:',`IQD ${fmtIQD(tI)}`,`$${fmtUSD(tU)}`,'','']);
            addSheet('Purchases', rows, [4,24,16,14,24,14]);
        }

        // ── REVENUE BY ROOM ──
        if (sel('exp_revenue')) {
            const rows = [['#','Room','Type','Floor','Stays','Room Rev (IQD)','Room Rev ($)','Services (IQD)','Res. Deposits (IQD)','Res. Deposits ($)','Check-in Deposits (IQD)','Check-in Deposits ($)','Total IQD','Total ($)']];
            let tRI=0,tRU=0,tS=0,tDI=0,tDU=0,tCDI=0,tCDU=0;
            hotelData.rooms.forEach((room, i) => {
                const stays = allGuests.filter(g => g.roomId===room.id && g.checkedOutAt && inRange(g.checkedOutAt));
                const rI = stays.filter(g=>g.roomCurrency==='IQD').reduce((s,g)=>s+(g.roomAmountPaid||0),0);
                const rU = stays.filter(g=>g.roomCurrency==='$').reduce((s,g)=>s+(g.roomAmountPaid||0),0);
                const sv = stays.reduce((s,g)=>s+(g.serviceAmountIQD||0),0);
                const roomRes = (hotelData.reservationLog||[]).filter(e=>e.roomId===room.id && inRange(e.reservedAt));
                const dI = roomRes.reduce((s,e)=>s+(e.depositIQD||0),0);
                const dU = roomRes.reduce((s,e)=>s+(e.depositUSD||0),0);
                // Check-in deposits for this room (all guests who checked in)
                const roomGuests = allGuests.filter(g => g.roomId===room.id && inRange(g.checkIn));
                const cI = roomGuests.reduce((s,g)=>s+(g.depositIQD||0),0);
                const cU = roomGuests.reduce((s,g)=>s+(g.depositUSD||0),0);
                tRI+=rI; tRU+=rU; tS+=sv; tDI+=dI; tDU+=dU; tCDI+=cI; tCDU+=cU;
                rows.push([i+1,`Room ${room.number}`,room.type,room.floor,stays.length,
                    rI>0?`IQD ${fmtIQD(rI)}`:'—', rU>0?`$${rU.toFixed(2)}`:'—',
                    sv>0?`IQD ${fmtIQD(sv)}`:'—', dI>0?`IQD ${fmtIQD(dI)}`:'—', dU>0?`$${dU.toFixed(2)}`:'—',
                    cI>0?`IQD ${fmtIQD(cI)}`:'—', cU>0?`$${cU.toFixed(2)}`:'—',
                    `IQD ${fmtIQD(rI+sv+dI+cI)}`, `$${(rU+dU+cU).toFixed(2)}`]);
            });
            rows.push([],['','TOTALS','','','',`IQD ${fmtIQD(tRI)}`,`$${tRU.toFixed(2)}`,`IQD ${fmtIQD(tS)}`,`IQD ${fmtIQD(tDI)}`,`$${tDU.toFixed(2)}`,`IQD ${fmtIQD(tCDI)}`,`$${tCDU.toFixed(2)}`,`IQD ${fmtIQD(tRI+tS+tDI+tCDI)}`,`$${(tRU+tDU+tCDU).toFixed(2)}`]);
            addSheet('Revenue by Room', rows, [4,10,14,6,6,16,12,14,14,12,14,12,14,12]);
        }

        // ── SERVICES (grouped by guest/room) ──
        if (sel('exp_services')) {
            // Column header row
            const rows = [
                ['Room', 'Guest Name', 'Service / Item', 'Category', 'Qty', 'Price (IQD)', 'Total (IQD)', 'Date & Time', 'Added By']
            ];
            let grandTotal = 0;
            let hasAny = false;

            const guestsWithOrders = allGuests.filter(g =>
                inRange(g.checkIn) &&
                userMatch(g.checkedInBy) &&
                (g.orders || []).length > 0
            );

            guestsWithOrders.forEach(g => {
                const room = hotelData.rooms.find(r => r.id === g.roomId);
                const roomLabel = room ? `Room ${room.number}` : '(Room removed)';
                const orders = g.orders || [];
                const guestTotal = orders.reduce((s, o) => s + (o.price||0)*(o.quantity||1), 0);
                grandTotal += guestTotal;
                hasAny = true;

                const checkIn  = g.checkIn      ? new Date(g.checkIn).toLocaleDateString()      : '—';
                const checkOut = g.checkedOutAt  ? new Date(g.checkedOutAt).toLocaleDateString() : (g.checkOut ? new Date(g.checkOut).toLocaleDateString() : 'Still in');

                // ── Guest/Room header row ──
                rows.push([
                    roomLabel,
                    g.name || '—',
                    `Check-in: ${checkIn}  →  Check-out: ${checkOut}`,
                    '',
                    '',
                    '',
                    `Guest Total: IQD ${fmtIQD(guestTotal)}`,
                    '',
                    ''
                ]);

                // ── Service child rows (indented: cols A & B blank) ──
                orders.forEach(o => {
                    const total   = (o.price||0) * (o.quantity||1);
                    const ts      = o.timestamp ? new Date(o.timestamp).toLocaleString() : '—';
                    const addedBy = o.addedBy || g.checkedInBy || '—';
                    rows.push([
                        '',
                        '',
                        `  ↳  ${o.name || '—'}`,
                        o.category || '—',
                        o.quantity || 1,
                        `IQD ${fmtIQD(o.price || 0)}`,
                        `IQD ${fmtIQD(total)}`,
                        ts,
                        addedBy
                    ]);
                });

                // blank separator between guests
                rows.push(['', '', '', '', '', '', '', '', '']);
            });

            if (!hasAny) rows.push(['No services recorded in this period']);

            // Grand total row
            rows.push(['', '', '', '', '', 'GRAND TOTAL:', `IQD ${fmtIQD(grandTotal)}`, '', '']);

            addSheet('Services', rows, [16, 18, 32, 14, 5, 16, 18, 20, 16]);
        }

        // ── ACTIVITY LOG ──
        if (sel('exp_activities')) {
            const rows = [['#','Date & Time','Description','User','Role','Room','Action','Amount']];
            activities.forEach((a, i) => {
                rows.push([i+1,
                    a.timestamp?new Date(a.timestamp).toLocaleString():'—',
                    a.description||'—', a.userName||'—', a.userRole||'—',
                    a.roomNumber||'—', a.action||'—',
                    a.amount!=null?String(a.amount):'—']);
            });
            if (rows.length===1) rows.push(['No activities in this period']);
            addSheet('Activity Log', rows, [4,20,42,16,12,8,14,12]);
        }

        if (wb.SheetNames.length===0) { showToast('Select at least one report type.','error'); return; }

        const uTag = userFilter!=='all' ? `-${userFilter.replace(/\s+/g,'_')}` : '';
        const filename = `${hotel}-Report${uTag}-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, filename);
        closeModal('exportModal');
        showToast(`Exported ${wb.SheetNames.length} sheet(s) successfully!`, 'success');
    });
}

function getDateRange(period) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let startDate;

    switch(period) {
        case 'daily':
            startDate = new Date(today);
            break;
        case 'weekly':
            startDate = new Date(today);
            startDate.setDate(startDate.getDate() - 7);
            break;
        case 'monthly':
            startDate = new Date(today);
            startDate.setMonth(startDate.getMonth() - 1);
            break;
        case 'yearly':
            startDate = new Date(today);
            startDate.setFullYear(startDate.getFullYear() - 1);
            break;
        default:
            startDate = new Date(0);
    }

    return { startDate, endDate: now };
}

function filterDataByDateRange(startDate, endDate) {
    const filteredGuests = hotelData.guests.filter(guest => {
        const checkedOutDate = guest.checkedOutAt ? new Date(guest.checkedOutAt) : new Date(guest.checkOut);
        return checkedOutDate >= startDate && checkedOutDate <= endDate;
    });

    const filteredActivities = hotelData.activities.filter(activity => {
        const activityDate = new Date(activity.timestamp);
        return activityDate >= startDate && activityDate <= endDate;
    });

    return { filteredGuests, filteredActivities };
}

function createStyledWorkbook(period, startDate, endDate, filteredGuests, filteredActivities) {
    const wb = XLSX.utils.book_new();

    // Sheet 1: Summary Dashboard
    const summaryData = [
        [`${hotelData.settings.hotelName} - ${period.toUpperCase()} Report`],
        [],
        ["Report Period", `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`],
        ["Generated On", new Date().toLocaleString()],
        [],
        ["SUMMARY METRICS"],
        ["Total Guests", filteredGuests.length],
        ["Total Revenue", `${hotelData.settings.currencySymbol}${filteredGuests.reduce((sum, g) => sum + (g.totalSpent || 0), 0).toFixed(2)}`],
        ["Average Stay Value", `${hotelData.settings.currencySymbol}${(filteredGuests.reduce((sum, g) => sum + (g.totalSpent || 0), 0) / Math.max(filteredGuests.length, 1)).toFixed(2)}`],
        ["Total Orders", filteredGuests.reduce((sum, g) => sum + g.orders.length, 0)],
    ];

    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
    summaryWs['!cols'] = [{ wch: 25 }, { wch: 35 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");

    // Sheet 2: Guest Details
    const guestHeaders = ["Guest Name", "Phone", "Email", "Room", "Check-In", "Check-Out", "Nights", "Total Spent", "Discount", "Orders"];
    const guestData = [guestHeaders];

    filteredGuests.forEach((guest) => {
        const room = hotelData.rooms.find(r => r.id === guest.roomId);
        const roomNumber = room ? room.number : 'N/A';
        const nights = Math.ceil((new Date(guest.checkOut) - new Date(guest.checkIn)) / (1000 * 60 * 60 * 24));
        const orderCount = guest.orders.length;
        const discountText = guest.discountType === 'percentage' ? `${guest.discount}%` : `${hotelData.settings.currencySymbol}${guest.discount}`;

        guestData.push([
            guest.name,
            guest.phone,
            guest.email,
            roomNumber,
            new Date(guest.checkIn).toLocaleString(),
            new Date(guest.checkOut).toLocaleString(),
            nights,
            `${hotelData.settings.currencySymbol}${(guest.totalSpent || 0).toFixed(2)}`,
            discountText,
            orderCount
        ]);
    });

    const guestWs = XLSX.utils.aoa_to_sheet(guestData);
    guestWs['!cols'] = [{ wch: 18 }, { wch: 14 }, { wch: 20 }, { wch: 8 }, { wch: 20 }, { wch: 20 }, { wch: 8 }, { wch: 14 }, { wch: 12 }, { wch: 8 }];
    XLSX.utils.book_append_sheet(wb, guestWs, "Guest Details");

    // Sheet 3: Orders Summary
    const allOrders = filteredGuests.flatMap(g => g.orders.map(o => ({ ...o, guestName: g.name })));
    const orderHeaders = ["Guest Name", "Order Item", "Quantity", "Unit Price", "Total Amount"];
    const orderData = [orderHeaders];

    if (allOrders.length > 0) {
        const totalOrderRevenue = allOrders.reduce((sum, o) => sum + (o.price * o.quantity), 0);

        allOrders.forEach((order) => {
            const total = order.price * order.quantity;
            orderData.push([
                order.guestName,
                order.name,
                order.quantity,
                `${hotelData.settings.currencySymbol}${order.price.toFixed(2)}`,
                `${hotelData.settings.currencySymbol}${total.toFixed(2)}`
            ]);
        });

        // Add total row
        orderData.push([
            "",
            "TOTAL ORDERS REVENUE",
            "",
            "",
            `${hotelData.settings.currencySymbol}${totalOrderRevenue.toFixed(2)}`
        ]);
    } else {
        orderData.push(["No orders in this period"]);
    }

    const orderWs = XLSX.utils.aoa_to_sheet(orderData);
    orderWs['!cols'] = [{ wch: 18 }, { wch: 20 }, { wch: 10 }, { wch: 12 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, orderWs, "Orders");

    // Sheet 4: Activities Log
    const activityHeaders = ["Date & Time", "Description", "Action", "Room", "Guest Name", "Amount"];
    const activityData = [activityHeaders];

    filteredActivities.forEach((activity) => {
        const timestamp = new Date(activity.timestamp).toLocaleString();
        const room = activity.roomNumber || '-';
        const guestName = activity.guestName || '-';
        const amount = activity.amount ? `${hotelData.settings.currencySymbol}${activity.amount.toFixed(2)}` : '-';

        activityData.push([
            timestamp,
            activity.description,
            activity.action,
            room,
            guestName,
            amount
        ]);
    });

    const activityWs = XLSX.utils.aoa_to_sheet(activityData);
    activityWs['!cols'] = [{ wch: 22 }, { wch: 35 }, { wch: 15 }, { wch: 8 }, { wch: 18 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, activityWs, "Activities");

    return wb;
}

function exportData(period) {
    ensureXLSX().then(() => {
        try {
            if (!window.XLSX) {
                showToast('Error: Excel library loading. Please try again in 2 seconds.', 'error');
                return;
            }

            const { startDate, endDate } = getDateRange(period);
            const { filteredGuests, filteredActivities } = filterDataByDateRange(startDate, endDate);

            if (filteredGuests.length === 0 && filteredActivities.length === 0) {
                showToast('No data available for this period.', 'warning');
            }

            const wb = createStyledWorkbook(period, startDate, endDate, filteredGuests, filteredActivities);
            const filename = `${hotelData.settings.hotelName}-${period}-export-${new Date().toISOString().split('T')[0]}.xlsx`;

            XLSX.writeFile(wb, filename);
            showToast(`${period.charAt(0).toUpperCase() + period.slice(1)} export downloaded successfully!`, 'success');
        } catch (error) {
            console.error('Export error:', error);
            showToast('Error exporting data: ' + error.message, 'error');
        }
    });
}

function exportAllData() {
    ensureXLSX().then(() => {
        try {
            if (!window.XLSX) {
                showToast('Error: Excel library loading. Please try again in 2 seconds.', 'error');
                return;
            }

            const allStartDate = new Date(0);
            const allEndDate = new Date();
            const wb = createStyledWorkbook('all-time', allStartDate, allEndDate, hotelData.guests, hotelData.activities);
            const filename = `${hotelData.settings.hotelName}-complete-export-${new Date().toISOString().split('T')[0]}.xlsx`;

            XLSX.writeFile(wb, filename);
            showToast('Complete data export downloaded successfully!', 'success');
        } catch (error) {
            console.error('Export error:', error);
            showToast('Error exporting data: ' + error.message, 'error');
        }
    });
}

// ==================== SERVICES ====================
function loadServicesPage() {
    populateFilterSelects('svcFilterFloor', 'svcFilterType');
    const statusEl = document.getElementById('svcFilterStatus');
    if (statusEl) statusEl.value = 'all';
    displayServiceRooms(hotelData.rooms);
}

function filterServiceRoomsAdvanced() {
    const status = document.getElementById('svcFilterStatus')?.value || 'all';
    const floor  = document.getElementById('svcFilterFloor')?.value  || 'all';
    const type   = document.getElementById('svcFilterType')?.value   || 'all';
    displayServiceRooms(applyRoomFilters(hotelData.rooms, { status, floor, type }));
}

function resetServiceFilters() {
    ['svcFilterStatus','svcFilterFloor','svcFilterType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    displayServiceRooms(hotelData.rooms);
}

function displayServiceRooms(rooms) {
    const grid = document.getElementById('servicesRoomsGrid');
    grid.innerHTML = '';

    rooms.forEach(room => {
        const isOccupied = room.status === 'occupied';
        const cfg = getStatusConfig(room.status);

        const card = document.createElement('div');
        card.className = `room-card bg-white rounded-lg p-6 ${isOccupied ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed'}`;
        card.style.cssText = `border-left:4px solid ${cfg.color};`;
        card.onclick = isOccupied ? () => openRoomServiceModal(room.id) : () => showToast(t('toast_no_guest'), 'warning');
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${t('room_prefix')} ${room.number}</h3>
                    <p class="text-gray-600 text-sm">${room.type} — ${t('floor_prefix')} ${room.floor}</p>
                </div>
                <span class="badge" style="background:${cfg.color}20;color:${cfg.color};">
                    <i class="fas fa-circle text-xs mr-1"></i>${cfg.label}
                </span>
            </div>
            <div class="mb-3">
                <p class="text-2xl font-bold text-green-600">$${room.price}</p>
                <p class="text-xs text-gray-500">${t('per_night')}</p>
            </div>
            <div class="text-sm mb-4">
                <p class="text-gray-600">${t('capacity_label')}: <span class="font-semibold">${room.capacity} ${t('guests_label')}</span></p>
                ${isOccupied && room.currentGuest ? `<p class="text-gray-600">${t('guest_label')}: <span class="font-semibold">${room.currentGuest.name}</span></p>` : ''}
            </div>
            ${isOccupied
                ? `<button class="btn btn-primary w-full btn-sm" style="justify-content:center;">
                       <i class="fas fa-plus"></i> ${t('btn_add_service')}
                   </button>`
                : `<p class="text-xs text-gray-400 text-center">${t('not_occupied')}</p>`
            }
        `;
        grid.appendChild(card);
    });
}

function _populateOrderModal() {
    const select = document.getElementById('orderCategory');
    select.innerHTML = '';
    (hotelData.settings.serviceCategories || []).forEach(cat => {
        const opt = document.createElement('option');
        const display = catName(cat);
        const valueKey = typeof cat === 'object' ? (cat.en || cat.ar) : cat;
        opt.value = valueKey;
        opt.textContent = display;
        select.appendChild(opt);
    });
    document.getElementById('orderItemName').value = '';
    document.getElementById('orderQuantity').value = 1;
    document.getElementById('orderPrice').value = '';
}

function openRoomServiceModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;

    selectedRoom = room;

    _populateOrderModal();
    openModal('orderModal');
}

// ==================== PURCHASES ====================
function loadPurchasesPage() {
    const tbody = document.getElementById('purchasesTable');
    const purchases = hotelData.purchases;

    if (!purchases || purchases.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-gray-500 py-8">${t('no_purchases')}</td></tr>`;
        return;
    }

    tbody.innerHTML = purchases.map((p, i) => {
        const date = new Date(p.date).toLocaleDateString();
        const iqd = p.priceIQD != null ? p.priceIQD : (p.price || 0);
        const usd = p.priceUSD || 0;
        const iqdCell = iqd > 0 ? `IQD ${fmtIQD(iqd)}` : '—';
        const usdCell = usd > 0 ? `$${fmtUSD(usd)}` : '—';
        return `<tr>
            <td>${i + 1}</td>
            <td>${p.name}</td>
            <td>${iqdCell}</td>
            <td>${usdCell}</td>
            <td>${p.notes || '—'}</td>
            <td>${date}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletePurchase(${i})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>`;
    }).join('');
}

function handlePurchaseSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const name = document.getElementById('purchaseName').value.trim();
    const priceIQD = parseFloat((document.getElementById('purchasePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('purchasePriceUSD').value) || 0;
    const notes = document.getElementById('purchaseNotes').value.trim();

    if (!name || (priceIQD <= 0 && priceUSD <= 0)) {
        showToast('Enter a name and at least one price.', 'error');
        return;
    }

    hotelData.purchases.push({ name, priceIQD, priceUSD, notes, date: new Date().toISOString(), addedBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    closeModal('purchaseModal');
    document.getElementById('purchaseForm').reset();
    showToast(t('toast_purchase_added'), 'success');
    loadPurchasesPage();
}

function deletePurchase(index) {
    if (!requireOnline()) return;
    hotelData.purchases.splice(index, 1);
    saveDataToStorage();
    showToast(t('toast_purchase_deleted'), 'success');
    loadPurchasesPage();
}

function loadOutsideIncomePage() {
    const tbody = document.getElementById('outsideIncomeTable');
    const items = hotelData.outsideIncome || [];

    if (!items.length) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-gray-500 py-8">${t('no_outside_income')}</td></tr>`;
        return;
    }

    tbody.innerHTML = items.map((p, i) => {
        const date = new Date(p.date).toLocaleDateString();
        const iqdCell = p.priceIQD > 0 ? `IQD ${fmtIQD(p.priceIQD)}` : '—';
        const usdCell = p.priceUSD > 0 ? `$${fmtUSD(p.priceUSD)}` : '—';
        return `<tr>
            <td>${i + 1}</td>
            <td>${p.name}</td>
            <td>${iqdCell}</td>
            <td>${usdCell}</td>
            <td>${p.notes || '—'}</td>
            <td>${date}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteOutsideIncome(${i})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>`;
    }).join('');
}

function handleOutsideIncomeSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const name = document.getElementById('outsideIncomeName').value.trim();
    const priceIQD = parseFloat((document.getElementById('outsideIncomePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('outsideIncomePriceUSD').value) || 0;
    const notes = document.getElementById('outsideIncomeNotes').value.trim();

    if (!name || (priceIQD <= 0 && priceUSD <= 0)) {
        showToast('Enter a name and at least one price.', 'error');
        return;
    }

    if (!Array.isArray(hotelData.outsideIncome)) hotelData.outsideIncome = [];
    hotelData.outsideIncome.push({ name, priceIQD, priceUSD, notes, date: new Date().toISOString(), addedBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    closeModal('outsideIncomeModal');
    document.getElementById('outsideIncomeForm').reset();
    showToast(t('toast_outside_income_added'), 'success');
    loadOutsideIncomePage();
}

function deleteOutsideIncome(index) {
    if (!requireOnline()) return;
    hotelData.outsideIncome.splice(index, 1);
    saveDataToStorage();
    showToast(t('toast_outside_income_deleted'), 'success');
    loadOutsideIncomePage();
}

// ==================== NOTIFICATIONS ====================
function updateNotificationBell() {
    if (!loggedInUser || loggedInUser.role !== 'admin') return;
    const wrap = document.getElementById('notifBellWrap');
    if (!wrap) return;
    wrap.style.display = '';

    const lastSeen = localStorage.getItem('notifLastSeenAt') || '1970-01-01T00:00:00.000Z';
    const unseen = (hotelData.reservationLog || []).filter(e =>
        e.status === 'cancelled' && e.cancelledAt && e.cancelledAt > lastSeen
    );
    const badge = document.getElementById('notifBadge');
    if (badge) {
        if (unseen.length > 0) {
            badge.style.display = 'flex';
            badge.textContent = unseen.length > 9 ? '9+' : String(unseen.length);
        } else {
            badge.style.display = 'none';
        }
    }
}

function toggleNotifPanel() {
    const panel = document.getElementById('notifPanel');
    const backdrop = document.getElementById('notifBackdrop');
    if (!panel) return;
    const isOpen = panel.style.display !== 'none';
    if (isOpen) {
        closeNotifPanel();
    } else {
        // Populate list
        const list = document.getElementById('notifList');
        const cancelled = [...(hotelData.reservationLog || [])]
            .filter(e => e.status === 'cancelled')
            .sort((a, b) => (b.cancelledAt || '').localeCompare(a.cancelledAt || ''));
        if (cancelled.length === 0) {
            list.innerHTML = `<div style="padding:20px;text-align:center;color:#9ca3af;font-size:0.88rem;">No cancelled reservations</div>`;
        } else {
            const lastSeen = localStorage.getItem('notifLastSeenAt') || '1970-01-01T00:00:00.000Z';
            list.innerHTML = cancelled.map(e => {
                const isNew = e.cancelledAt && e.cancelledAt > lastSeen;
                const bg = isNew ? '#fef9f0' : '#fff';
                const depParts = [];
                if ((e.depositIQD || 0) > 0) depParts.push(`IQD ${fmtIQD(e.depositIQD)}`);
                if ((e.depositUSD || 0) > 0) depParts.push(`$${e.depositUSD.toFixed(2)}`);
                const depStr = depParts.length ? depParts.join(' + ') : '—';
                const cancelDate = e.cancelledAt ? new Date(e.cancelledAt).toLocaleString() : '—';
                return `<div style="padding:12px 16px;border-bottom:1px solid #f3f4f6;background:${bg};">
                    ${isNew ? '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ef4444;margin-right:6px;vertical-align:middle;"></span>' : ''}
                    <span style="font-weight:600;color:#1f2937;font-size:0.88rem;">${t('room_prefix')} ${e.roomNumber} — ${e.guestName}</span>
                    <div style="color:#6b7280;font-size:0.78rem;margin-top:3px;">
                        Deposit: ${depStr}<br>
                        Cancelled: ${cancelDate}
                    </div>
                </div>`;
            }).join('');
        }
        // Mark all as seen
        localStorage.setItem('notifLastSeenAt', new Date().toISOString());
        updateNotificationBell();
        panel.style.display = '';
        if (backdrop) backdrop.style.display = '';
    }
}

function closeNotifPanel() {
    const panel = document.getElementById('notifPanel');
    const backdrop = document.getElementById('notifBackdrop');
    if (panel) panel.style.display = 'none';
    if (backdrop) backdrop.style.display = 'none';
}

// ==================== FIREBASE ====================

function toArr(val) {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    return Object.values(val).filter(v => v != null);
}

function fbMerge(fbData) {
    const rawStatuses = (fbData.settings && fbData.settings.roomStatuses) || hotelData.settings.roomStatuses;
    return {
        ...hotelData,
        ...fbData,
        rooms:      migrateRoomStatuses(toArr(fbData.rooms).map(r => ({ ...r, priceHistory: toArr(r.priceHistory) })), rawStatuses),
        guests:     toArr(fbData.guests).map(g => ({ ...g, orders: toArr(g.orders) })),
        activities:     toArr(fbData.activities),
        purchases:      toArr(fbData.purchases),
        outsideIncome:  toArr(fbData.outsideIncome),
        shiftLog:       toArr(fbData.shiftLog),
        reservationLog: toArr(fbData.reservationLog),
        users:          toArr(fbData.users),
        settings:   { ...hotelData.settings, ...(fbData.settings || {}),
            roomStatuses: ensureDefaultRoomStatuses(rawStatuses) }
    };
}

function setupFirebaseRealtimeListener() {
    window.fbDb.ref('hotelData').on('value', snap => {
        const data = snap.val();
        if (!data) return;
        hotelData = fbMerge(data);
        localStorage.setItem('hotelData', JSON.stringify(hotelData));
        updateNotificationBell();
        // Refresh whichever page is currently visible
        const visible = document.querySelector('.page-content[style*="display: block"], .page-content[style*="display:block"]');
        if (visible) refreshPage(visible.id);
    });
}

function refreshPage(pageId) {
    switch (pageId) {
        case 'dashboard':     loadDashboard();     break;
        case 'checkIn':       loadCheckInPage();   break;
        case 'checkOut':      loadCheckOutPage();  break;
        case 'rooms':         displayRoomsGrid(hotelData.rooms); break;
        case 'history':       loadHistoryPage();   break;
        case 'reports':       loadReportsPage();   break;
        case 'purchases':     loadPurchasesPage(); break;
        case 'outsideIncome': loadOutsideIncomePage(); break;
        case 'cleanerStatus': loadCleanerPage();   break;
    }
}

function setupOnlineWatcher() {
    window.fbDb.ref('.info/connected').on('value', snap => {
        isOnline = snap.val() === true;
        const dot = document.getElementById('syncStatus');
        if (dot) {
            dot.style.background = isOnline ? '#10b981' : '#ef4444';
            dot.title = isOnline ? 'Online' : 'No internet connection';
        }
    });
}

function requireOnline() {
    if (isOnline) return true;
    showToast('No internet connection. Please reconnect and try again.', 'error');
    return false;
}

function checkFirstRun() {
    if (!window.fbDb) { showLogin(); return; }
    window.fbDb.ref('users').limitToFirst(1).once('value').then(snap => {
        if (!snap.exists()) {
            showFirstRunSetup();
        } else {
            showLogin();
        }
    }).catch(() => showLogin());
}

function showFirstRunSetup() {
    const overlay = document.getElementById('firstRunOverlay');
    if (overlay) overlay.style.display = 'flex';
    const loginOv = document.getElementById('loginOverlay');
    if (loginOv) loginOv.style.display = 'none';
}

function handleFirstRun(e) {
    e.preventDefault();
    const name     = document.getElementById('setupName').value.trim();
    const email    = document.getElementById('setupEmail').value.trim();
    const password = document.getElementById('setupPassword').value;
    const errEl    = document.getElementById('setupError');
    const btn      = e.target.querySelector('button[type="submit"]');
    errEl.style.display = 'none';
    if (btn) btn.disabled = true;

    window.fbAuth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const uid     = cred.user.uid;
            const profile = { name, email, role: 'admin' };
            loggedInUser  = { uid, ...profile };
            if (!hotelData.users) hotelData.users = [];
            hotelData.users.push({ uid, ...profile });
            sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            return window.fbDb.ref('users/' + uid).set(profile)
                .then(() => window.fbDb.ref('hotelData').set(hotelData));
        })
        .then(() => {
            startShiftSession();
            if (btn) btn.disabled = false;
            document.getElementById('firstRunOverlay').style.display = 'none';
            showApp();
            setupFirebaseRealtimeListener();
        })
        .catch(err => {
            if (btn) btn.disabled = false;
            errEl.textContent = err.message;
            errEl.style.display = 'block';
        });
}
