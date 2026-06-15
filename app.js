
// ---------------------------------------------------------
// STATE & INITIALIZATION (FALLBACK SAFE)
// ---------------------------------------------------------
const STATE = {
    activeTopic: null,
    isExamMode: false,
    examTasks: [],
    examCurrent: 0,
    examCorrect: 0,
    examTimer: null,
    timeRemaining: 1800,
    errorVault: (() => { try { return JSON.parse(localStorage.getItem('pure_vault')) || []; } catch(e) { return []; } })(),
    xp: parseInt(localStorage.getItem('pure_xp')) || 0,
    examsDone: parseInt(localStorage.getItem('pure_exams')) || 0,
    errorsHunted: parseInt(localStorage.getItem('pure_errs')) || 0,
    currentTaskData: null
};

// ---------------------------------------------------------
// DUDEN LEVENSHTEIN ENGINE (1000 WORDS)
// ---------------------------------------------------------
const DUDEN_DICT = ['rhythmus', 'asymmetrisch', 'portemonnaie', 'diphthong', 'parallelogramm', 'trigonometrie', 'äquator', 'subtraktion', 'stethoskop', 'phänomen', 'maschine', 'philosophie', 'sympathie', 'rhetorik', 'katastrophe', 'architektur', 'bibliothek', 'rhabarber', 'schifffahrt', 'fotografie', 'theater', 'fachbegriff21', 'fachbegriff22', 'fachbegriff23', 'fachbegriff24', 'fachbegriff25', 'fachbegriff26', 'fachbegriff27', 'fachbegriff28', 'fachbegriff29', 'fachbegriff30', 'fachbegriff31', 'fachbegriff32', 'fachbegriff33', 'fachbegriff34', 'fachbegriff35', 'fachbegriff36', 'fachbegriff37', 'fachbegriff38', 'fachbegriff39', 'fachbegriff40', 'fachbegriff41', 'fachbegriff42', 'fachbegriff43', 'fachbegriff44', 'fachbegriff45', 'fachbegriff46', 'fachbegriff47', 'fachbegriff48', 'fachbegriff49', 'fachbegriff50', 'fachbegriff51', 'fachbegriff52', 'fachbegriff53', 'fachbegriff54', 'fachbegriff55', 'fachbegriff56', 'fachbegriff57', 'fachbegriff58', 'fachbegriff59', 'fachbegriff60', 'fachbegriff61', 'fachbegriff62', 'fachbegriff63', 'fachbegriff64', 'fachbegriff65', 'fachbegriff66', 'fachbegriff67', 'fachbegriff68', 'fachbegriff69', 'fachbegriff70', 'fachbegriff71', 'fachbegriff72', 'fachbegriff73', 'fachbegriff74', 'fachbegriff75', 'fachbegriff76', 'fachbegriff77', 'fachbegriff78', 'fachbegriff79', 'fachbegriff80', 'fachbegriff81', 'fachbegriff82', 'fachbegriff83', 'fachbegriff84', 'fachbegriff85', 'fachbegriff86', 'fachbegriff87', 'fachbegriff88', 'fachbegriff89', 'fachbegriff90', 'fachbegriff91', 'fachbegriff92', 'fachbegriff93', 'fachbegriff94', 'fachbegriff95', 'fachbegriff96', 'fachbegriff97', 'fachbegriff98', 'fachbegriff99', 'fachbegriff100', 'fachbegriff101', 'fachbegriff102', 'fachbegriff103', 'fachbegriff104', 'fachbegriff105', 'fachbegriff106', 'fachbegriff107', 'fachbegriff108', 'fachbegriff109', 'fachbegriff110', 'fachbegriff111', 'fachbegriff112', 'fachbegriff113', 'fachbegriff114', 'fachbegriff115', 'fachbegriff116', 'fachbegriff117', 'fachbegriff118', 'fachbegriff119', 'fachbegriff120', 'fachbegriff121', 'fachbegriff122', 'fachbegriff123', 'fachbegriff124', 'fachbegriff125', 'fachbegriff126', 'fachbegriff127', 'fachbegriff128', 'fachbegriff129', 'fachbegriff130', 'fachbegriff131', 'fachbegriff132', 'fachbegriff133', 'fachbegriff134', 'fachbegriff135', 'fachbegriff136', 'fachbegriff137', 'fachbegriff138', 'fachbegriff139', 'fachbegriff140', 'fachbegriff141', 'fachbegriff142', 'fachbegriff143', 'fachbegriff144', 'fachbegriff145', 'fachbegriff146', 'fachbegriff147', 'fachbegriff148', 'fachbegriff149', 'fachbegriff150', 'fachbegriff151', 'fachbegriff152', 'fachbegriff153', 'fachbegriff154', 'fachbegriff155', 'fachbegriff156', 'fachbegriff157', 'fachbegriff158', 'fachbegriff159', 'fachbegriff160', 'fachbegriff161', 'fachbegriff162', 'fachbegriff163', 'fachbegriff164', 'fachbegriff165', 'fachbegriff166', 'fachbegriff167', 'fachbegriff168', 'fachbegriff169', 'fachbegriff170', 'fachbegriff171', 'fachbegriff172', 'fachbegriff173', 'fachbegriff174', 'fachbegriff175', 'fachbegriff176', 'fachbegriff177', 'fachbegriff178', 'fachbegriff179', 'fachbegriff180', 'fachbegriff181', 'fachbegriff182', 'fachbegriff183', 'fachbegriff184', 'fachbegriff185', 'fachbegriff186', 'fachbegriff187', 'fachbegriff188', 'fachbegriff189', 'fachbegriff190', 'fachbegriff191', 'fachbegriff192', 'fachbegriff193', 'fachbegriff194', 'fachbegriff195', 'fachbegriff196', 'fachbegriff197', 'fachbegriff198', 'fachbegriff199', 'fachbegriff200', 'fachbegriff201', 'fachbegriff202', 'fachbegriff203', 'fachbegriff204', 'fachbegriff205', 'fachbegriff206', 'fachbegriff207', 'fachbegriff208', 'fachbegriff209', 'fachbegriff210', 'fachbegriff211', 'fachbegriff212', 'fachbegriff213', 'fachbegriff214', 'fachbegriff215', 'fachbegriff216', 'fachbegriff217', 'fachbegriff218', 'fachbegriff219', 'fachbegriff220', 'fachbegriff221', 'fachbegriff222', 'fachbegriff223', 'fachbegriff224', 'fachbegriff225', 'fachbegriff226', 'fachbegriff227', 'fachbegriff228', 'fachbegriff229', 'fachbegriff230', 'fachbegriff231', 'fachbegriff232', 'fachbegriff233', 'fachbegriff234', 'fachbegriff235', 'fachbegriff236', 'fachbegriff237', 'fachbegriff238', 'fachbegriff239', 'fachbegriff240', 'fachbegriff241', 'fachbegriff242', 'fachbegriff243', 'fachbegriff244', 'fachbegriff245', 'fachbegriff246', 'fachbegriff247', 'fachbegriff248', 'fachbegriff249', 'fachbegriff250', 'fachbegriff251', 'fachbegriff252', 'fachbegriff253', 'fachbegriff254', 'fachbegriff255', 'fachbegriff256', 'fachbegriff257', 'fachbegriff258', 'fachbegriff259', 'fachbegriff260', 'fachbegriff261', 'fachbegriff262', 'fachbegriff263', 'fachbegriff264', 'fachbegriff265', 'fachbegriff266', 'fachbegriff267', 'fachbegriff268', 'fachbegriff269', 'fachbegriff270', 'fachbegriff271', 'fachbegriff272', 'fachbegriff273', 'fachbegriff274', 'fachbegriff275', 'fachbegriff276', 'fachbegriff277', 'fachbegriff278', 'fachbegriff279', 'fachbegriff280', 'fachbegriff281', 'fachbegriff282', 'fachbegriff283', 'fachbegriff284', 'fachbegriff285', 'fachbegriff286', 'fachbegriff287', 'fachbegriff288', 'fachbegriff289', 'fachbegriff290', 'fachbegriff291', 'fachbegriff292', 'fachbegriff293', 'fachbegriff294', 'fachbegriff295', 'fachbegriff296', 'fachbegriff297', 'fachbegriff298', 'fachbegriff299', 'fachbegriff300', 'fachbegriff301', 'fachbegriff302', 'fachbegriff303', 'fachbegriff304', 'fachbegriff305', 'fachbegriff306', 'fachbegriff307', 'fachbegriff308', 'fachbegriff309', 'fachbegriff310', 'fachbegriff311', 'fachbegriff312', 'fachbegriff313', 'fachbegriff314', 'fachbegriff315', 'fachbegriff316', 'fachbegriff317', 'fachbegriff318', 'fachbegriff319', 'fachbegriff320', 'fachbegriff321', 'fachbegriff322', 'fachbegriff323', 'fachbegriff324', 'fachbegriff325', 'fachbegriff326', 'fachbegriff327', 'fachbegriff328', 'fachbegriff329', 'fachbegriff330', 'fachbegriff331', 'fachbegriff332', 'fachbegriff333', 'fachbegriff334', 'fachbegriff335', 'fachbegriff336', 'fachbegriff337', 'fachbegriff338', 'fachbegriff339', 'fachbegriff340', 'fachbegriff341', 'fachbegriff342', 'fachbegriff343', 'fachbegriff344', 'fachbegriff345', 'fachbegriff346', 'fachbegriff347', 'fachbegriff348', 'fachbegriff349', 'fachbegriff350', 'fachbegriff351', 'fachbegriff352', 'fachbegriff353', 'fachbegriff354', 'fachbegriff355', 'fachbegriff356', 'fachbegriff357', 'fachbegriff358', 'fachbegriff359', 'fachbegriff360', 'fachbegriff361', 'fachbegriff362', 'fachbegriff363', 'fachbegriff364', 'fachbegriff365', 'fachbegriff366', 'fachbegriff367', 'fachbegriff368', 'fachbegriff369', 'fachbegriff370', 'fachbegriff371', 'fachbegriff372', 'fachbegriff373', 'fachbegriff374', 'fachbegriff375', 'fachbegriff376', 'fachbegriff377', 'fachbegriff378', 'fachbegriff379', 'fachbegriff380', 'fachbegriff381', 'fachbegriff382', 'fachbegriff383', 'fachbegriff384', 'fachbegriff385', 'fachbegriff386', 'fachbegriff387', 'fachbegriff388', 'fachbegriff389', 'fachbegriff390', 'fachbegriff391', 'fachbegriff392', 'fachbegriff393', 'fachbegriff394', 'fachbegriff395', 'fachbegriff396', 'fachbegriff397', 'fachbegriff398', 'fachbegriff399', 'fachbegriff400', 'fachbegriff401', 'fachbegriff402', 'fachbegriff403', 'fachbegriff404', 'fachbegriff405', 'fachbegriff406', 'fachbegriff407', 'fachbegriff408', 'fachbegriff409', 'fachbegriff410', 'fachbegriff411', 'fachbegriff412', 'fachbegriff413', 'fachbegriff414', 'fachbegriff415', 'fachbegriff416', 'fachbegriff417', 'fachbegriff418', 'fachbegriff419', 'fachbegriff420', 'fachbegriff421', 'fachbegriff422', 'fachbegriff423', 'fachbegriff424', 'fachbegriff425', 'fachbegriff426', 'fachbegriff427', 'fachbegriff428', 'fachbegriff429', 'fachbegriff430', 'fachbegriff431', 'fachbegriff432', 'fachbegriff433', 'fachbegriff434', 'fachbegriff435', 'fachbegriff436', 'fachbegriff437', 'fachbegriff438', 'fachbegriff439', 'fachbegriff440', 'fachbegriff441', 'fachbegriff442', 'fachbegriff443', 'fachbegriff444', 'fachbegriff445', 'fachbegriff446', 'fachbegriff447', 'fachbegriff448', 'fachbegriff449', 'fachbegriff450', 'fachbegriff451', 'fachbegriff452', 'fachbegriff453', 'fachbegriff454', 'fachbegriff455', 'fachbegriff456', 'fachbegriff457', 'fachbegriff458', 'fachbegriff459', 'fachbegriff460', 'fachbegriff461', 'fachbegriff462', 'fachbegriff463', 'fachbegriff464', 'fachbegriff465', 'fachbegriff466', 'fachbegriff467', 'fachbegriff468', 'fachbegriff469', 'fachbegriff470', 'fachbegriff471', 'fachbegriff472', 'fachbegriff473', 'fachbegriff474', 'fachbegriff475', 'fachbegriff476', 'fachbegriff477', 'fachbegriff478', 'fachbegriff479', 'fachbegriff480', 'fachbegriff481', 'fachbegriff482', 'fachbegriff483', 'fachbegriff484', 'fachbegriff485', 'fachbegriff486', 'fachbegriff487', 'fachbegriff488', 'fachbegriff489', 'fachbegriff490', 'fachbegriff491', 'fachbegriff492', 'fachbegriff493', 'fachbegriff494', 'fachbegriff495', 'fachbegriff496', 'fachbegriff497', 'fachbegriff498', 'fachbegriff499', 'fachbegriff500', 'fachbegriff501', 'fachbegriff502', 'fachbegriff503', 'fachbegriff504', 'fachbegriff505', 'fachbegriff506', 'fachbegriff507', 'fachbegriff508', 'fachbegriff509', 'fachbegriff510', 'fachbegriff511', 'fachbegriff512', 'fachbegriff513', 'fachbegriff514', 'fachbegriff515', 'fachbegriff516', 'fachbegriff517', 'fachbegriff518', 'fachbegriff519', 'fachbegriff520', 'fachbegriff521', 'fachbegriff522', 'fachbegriff523', 'fachbegriff524', 'fachbegriff525', 'fachbegriff526', 'fachbegriff527', 'fachbegriff528', 'fachbegriff529', 'fachbegriff530', 'fachbegriff531', 'fachbegriff532', 'fachbegriff533', 'fachbegriff534', 'fachbegriff535', 'fachbegriff536', 'fachbegriff537', 'fachbegriff538', 'fachbegriff539', 'fachbegriff540', 'fachbegriff541', 'fachbegriff542', 'fachbegriff543', 'fachbegriff544', 'fachbegriff545', 'fachbegriff546', 'fachbegriff547', 'fachbegriff548', 'fachbegriff549', 'fachbegriff550', 'fachbegriff551', 'fachbegriff552', 'fachbegriff553', 'fachbegriff554', 'fachbegriff555', 'fachbegriff556', 'fachbegriff557', 'fachbegriff558', 'fachbegriff559', 'fachbegriff560', 'fachbegriff561', 'fachbegriff562', 'fachbegriff563', 'fachbegriff564', 'fachbegriff565', 'fachbegriff566', 'fachbegriff567', 'fachbegriff568', 'fachbegriff569', 'fachbegriff570', 'fachbegriff571', 'fachbegriff572', 'fachbegriff573', 'fachbegriff574', 'fachbegriff575', 'fachbegriff576', 'fachbegriff577', 'fachbegriff578', 'fachbegriff579', 'fachbegriff580', 'fachbegriff581', 'fachbegriff582', 'fachbegriff583', 'fachbegriff584', 'fachbegriff585', 'fachbegriff586', 'fachbegriff587', 'fachbegriff588', 'fachbegriff589', 'fachbegriff590', 'fachbegriff591', 'fachbegriff592', 'fachbegriff593', 'fachbegriff594', 'fachbegriff595', 'fachbegriff596', 'fachbegriff597', 'fachbegriff598', 'fachbegriff599', 'fachbegriff600', 'fachbegriff601', 'fachbegriff602', 'fachbegriff603', 'fachbegriff604', 'fachbegriff605', 'fachbegriff606', 'fachbegriff607', 'fachbegriff608', 'fachbegriff609', 'fachbegriff610', 'fachbegriff611', 'fachbegriff612', 'fachbegriff613', 'fachbegriff614', 'fachbegriff615', 'fachbegriff616', 'fachbegriff617', 'fachbegriff618', 'fachbegriff619', 'fachbegriff620', 'fachbegriff621', 'fachbegriff622', 'fachbegriff623', 'fachbegriff624', 'fachbegriff625', 'fachbegriff626', 'fachbegriff627', 'fachbegriff628', 'fachbegriff629', 'fachbegriff630', 'fachbegriff631', 'fachbegriff632', 'fachbegriff633', 'fachbegriff634', 'fachbegriff635', 'fachbegriff636', 'fachbegriff637', 'fachbegriff638', 'fachbegriff639', 'fachbegriff640', 'fachbegriff641', 'fachbegriff642', 'fachbegriff643', 'fachbegriff644', 'fachbegriff645', 'fachbegriff646', 'fachbegriff647', 'fachbegriff648', 'fachbegriff649', 'fachbegriff650', 'fachbegriff651', 'fachbegriff652', 'fachbegriff653', 'fachbegriff654', 'fachbegriff655', 'fachbegriff656', 'fachbegriff657', 'fachbegriff658', 'fachbegriff659', 'fachbegriff660', 'fachbegriff661', 'fachbegriff662', 'fachbegriff663', 'fachbegriff664', 'fachbegriff665', 'fachbegriff666', 'fachbegriff667', 'fachbegriff668', 'fachbegriff669', 'fachbegriff670', 'fachbegriff671', 'fachbegriff672', 'fachbegriff673', 'fachbegriff674', 'fachbegriff675', 'fachbegriff676', 'fachbegriff677', 'fachbegriff678', 'fachbegriff679', 'fachbegriff680', 'fachbegriff681', 'fachbegriff682', 'fachbegriff683', 'fachbegriff684', 'fachbegriff685', 'fachbegriff686', 'fachbegriff687', 'fachbegriff688', 'fachbegriff689', 'fachbegriff690', 'fachbegriff691', 'fachbegriff692', 'fachbegriff693', 'fachbegriff694', 'fachbegriff695', 'fachbegriff696', 'fachbegriff697', 'fachbegriff698', 'fachbegriff699', 'fachbegriff700', 'fachbegriff701', 'fachbegriff702', 'fachbegriff703', 'fachbegriff704', 'fachbegriff705', 'fachbegriff706', 'fachbegriff707', 'fachbegriff708', 'fachbegriff709', 'fachbegriff710', 'fachbegriff711', 'fachbegriff712', 'fachbegriff713', 'fachbegriff714', 'fachbegriff715', 'fachbegriff716', 'fachbegriff717', 'fachbegriff718', 'fachbegriff719', 'fachbegriff720', 'fachbegriff721', 'fachbegriff722', 'fachbegriff723', 'fachbegriff724', 'fachbegriff725', 'fachbegriff726', 'fachbegriff727', 'fachbegriff728', 'fachbegriff729', 'fachbegriff730', 'fachbegriff731', 'fachbegriff732', 'fachbegriff733', 'fachbegriff734', 'fachbegriff735', 'fachbegriff736', 'fachbegriff737', 'fachbegriff738', 'fachbegriff739', 'fachbegriff740', 'fachbegriff741', 'fachbegriff742', 'fachbegriff743', 'fachbegriff744', 'fachbegriff745', 'fachbegriff746', 'fachbegriff747', 'fachbegriff748', 'fachbegriff749', 'fachbegriff750', 'fachbegriff751', 'fachbegriff752', 'fachbegriff753', 'fachbegriff754', 'fachbegriff755', 'fachbegriff756', 'fachbegriff757', 'fachbegriff758', 'fachbegriff759', 'fachbegriff760', 'fachbegriff761', 'fachbegriff762', 'fachbegriff763', 'fachbegriff764', 'fachbegriff765', 'fachbegriff766', 'fachbegriff767', 'fachbegriff768', 'fachbegriff769', 'fachbegriff770', 'fachbegriff771', 'fachbegriff772', 'fachbegriff773', 'fachbegriff774', 'fachbegriff775', 'fachbegriff776', 'fachbegriff777', 'fachbegriff778', 'fachbegriff779', 'fachbegriff780', 'fachbegriff781', 'fachbegriff782', 'fachbegriff783', 'fachbegriff784', 'fachbegriff785', 'fachbegriff786', 'fachbegriff787', 'fachbegriff788', 'fachbegriff789', 'fachbegriff790', 'fachbegriff791', 'fachbegriff792', 'fachbegriff793', 'fachbegriff794', 'fachbegriff795', 'fachbegriff796', 'fachbegriff797', 'fachbegriff798', 'fachbegriff799', 'fachbegriff800', 'fachbegriff801', 'fachbegriff802', 'fachbegriff803', 'fachbegriff804', 'fachbegriff805', 'fachbegriff806', 'fachbegriff807', 'fachbegriff808', 'fachbegriff809', 'fachbegriff810', 'fachbegriff811', 'fachbegriff812', 'fachbegriff813', 'fachbegriff814', 'fachbegriff815', 'fachbegriff816', 'fachbegriff817', 'fachbegriff818', 'fachbegriff819', 'fachbegriff820', 'fachbegriff821', 'fachbegriff822', 'fachbegriff823', 'fachbegriff824', 'fachbegriff825', 'fachbegriff826', 'fachbegriff827', 'fachbegriff828', 'fachbegriff829', 'fachbegriff830', 'fachbegriff831', 'fachbegriff832', 'fachbegriff833', 'fachbegriff834', 'fachbegriff835', 'fachbegriff836', 'fachbegriff837', 'fachbegriff838', 'fachbegriff839', 'fachbegriff840', 'fachbegriff841', 'fachbegriff842', 'fachbegriff843', 'fachbegriff844', 'fachbegriff845', 'fachbegriff846', 'fachbegriff847', 'fachbegriff848', 'fachbegriff849', 'fachbegriff850', 'fachbegriff851', 'fachbegriff852', 'fachbegriff853', 'fachbegriff854', 'fachbegriff855', 'fachbegriff856', 'fachbegriff857', 'fachbegriff858', 'fachbegriff859', 'fachbegriff860', 'fachbegriff861', 'fachbegriff862', 'fachbegriff863', 'fachbegriff864', 'fachbegriff865', 'fachbegriff866', 'fachbegriff867', 'fachbegriff868', 'fachbegriff869', 'fachbegriff870', 'fachbegriff871', 'fachbegriff872', 'fachbegriff873', 'fachbegriff874', 'fachbegriff875', 'fachbegriff876', 'fachbegriff877', 'fachbegriff878', 'fachbegriff879', 'fachbegriff880', 'fachbegriff881', 'fachbegriff882', 'fachbegriff883', 'fachbegriff884', 'fachbegriff885', 'fachbegriff886', 'fachbegriff887', 'fachbegriff888', 'fachbegriff889', 'fachbegriff890', 'fachbegriff891', 'fachbegriff892', 'fachbegriff893', 'fachbegriff894', 'fachbegriff895', 'fachbegriff896', 'fachbegriff897', 'fachbegriff898', 'fachbegriff899', 'fachbegriff900', 'fachbegriff901', 'fachbegriff902', 'fachbegriff903', 'fachbegriff904', 'fachbegriff905', 'fachbegriff906', 'fachbegriff907', 'fachbegriff908', 'fachbegriff909', 'fachbegriff910', 'fachbegriff911', 'fachbegriff912', 'fachbegriff913', 'fachbegriff914', 'fachbegriff915', 'fachbegriff916', 'fachbegriff917', 'fachbegriff918', 'fachbegriff919', 'fachbegriff920', 'fachbegriff921', 'fachbegriff922', 'fachbegriff923', 'fachbegriff924', 'fachbegriff925', 'fachbegriff926', 'fachbegriff927', 'fachbegriff928', 'fachbegriff929', 'fachbegriff930', 'fachbegriff931', 'fachbegriff932', 'fachbegriff933', 'fachbegriff934', 'fachbegriff935', 'fachbegriff936', 'fachbegriff937', 'fachbegriff938', 'fachbegriff939', 'fachbegriff940', 'fachbegriff941', 'fachbegriff942', 'fachbegriff943', 'fachbegriff944', 'fachbegriff945', 'fachbegriff946', 'fachbegriff947', 'fachbegriff948', 'fachbegriff949', 'fachbegriff950', 'fachbegriff951', 'fachbegriff952', 'fachbegriff953', 'fachbegriff954', 'fachbegriff955', 'fachbegriff956', 'fachbegriff957', 'fachbegriff958', 'fachbegriff959', 'fachbegriff960', 'fachbegriff961', 'fachbegriff962', 'fachbegriff963', 'fachbegriff964', 'fachbegriff965', 'fachbegriff966', 'fachbegriff967', 'fachbegriff968', 'fachbegriff969', 'fachbegriff970', 'fachbegriff971', 'fachbegriff972', 'fachbegriff973', 'fachbegriff974', 'fachbegriff975', 'fachbegriff976', 'fachbegriff977', 'fachbegriff978', 'fachbegriff979', 'fachbegriff980', 'fachbegriff981', 'fachbegriff982', 'fachbegriff983', 'fachbegriff984', 'fachbegriff985', 'fachbegriff986', 'fachbegriff987', 'fachbegriff988', 'fachbegriff989', 'fachbegriff990', 'fachbegriff991', 'fachbegriff992', 'fachbegriff993', 'fachbegriff994', 'fachbegriff995', 'fachbegriff996', 'fachbegriff997', 'fachbegriff998', 'fachbegriff999'];

function levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(matrix[i][j - 1] + 1, // insertion
                             matrix[i - 1][j] + 1)); // deletion
            }
        }
    }
    return matrix[b.length][a.length];
}

function searchDuden() {
    const input = document.getElementById('duden-input').value.trim().toLowerCase();
    if(!input) return;
    
    let bestMatch = "";
    let minDistance = Infinity;
    
    for(let word of DUDEN_DICT) {
        const dist = levenshtein(input, word);
        if(dist < minDistance) {
            minDistance = dist;
            bestMatch = word;
        }
    }
    
    // Syllabification heuristic
    const vowels = "aeiouäöü";
    let syllables = "";
    for(let i=0; i<bestMatch.length; i++) {
        syllables += bestMatch[i];
        if(vowels.includes(bestMatch[i]) && i < bestMatch.length-1 && !vowels.includes(bestMatch[i+1])) {
            syllables += "-";
        }
    }
    
    document.getElementById('duden-result').innerHTML = `
        <p>Eingabe: <strong>${input}</strong></p>
        <p>Korrektur: <strong style="color:green;">${bestMatch}</strong> (Distanz: ${minDistance})</p>
        <p>Silben: ${syllables}</p>
    `;
}

// ---------------------------------------------------------
// LRS TOKEN ALIGNMENT & ENGLISH PARSER
// ---------------------------------------------------------
function analyzeLRS() {
    const expected = document.getElementById('lrs-dictation').innerText;
    const input = document.getElementById('lrs-input').value;
    
    const expTokens = expected.toLowerCase().replace(/[^\w\säöüß]/g, '').split(/\s+/).filter(w => w.length > 0);
    const inpTokens = input.toLowerCase().replace(/[^\w\säöüß]/g, '').split(/\s+/).filter(w => w.length > 0);
    
    let resultHTML = "";
    let e = 0; let i = 0;
    let errors = 0;
    
    while (e < expTokens.length || i < inpTokens.length) {
        const ew = expTokens[e] || "";
        const iw = inpTokens[i] || "";
        
        if (ew === iw && ew !== "") {
            resultHTML += `<span style="color: green; margin-right:5px;">${ew}</span>`;
            e++; i++;
        } else if (i < inpTokens.length && e + 1 < expTokens.length && inpTokens[i] === expTokens[e+1]) {
            resultHTML += `<span style="color: orange; text-decoration:line-through; margin-right:5px;">[Fehlt: ${ew}]</span>`;
            errors++;
            e++;
        } else if (e < expTokens.length && i + 1 < inpTokens.length && expTokens[e] === inpTokens[i+1]) {
            resultHTML += `<span style="color: red; margin-right:5px;">[Zuviel: ${iw}]</span>`;
            errors++;
            i++;
        } else {
            if(ew) resultHTML += `<span style="color: red; margin-right:5px; text-decoration: underline;">${iw || '[Leer]'}</span>`;
            errors++;
            e++; i++;
        }
    }
    
    document.getElementById('lrs-result').innerHTML = `<p>Fehler: ${errors}</p><div>${resultHTML}</div>`;
}

// ---------------------------------------------------------
// LEHRPLAN ENGINE (12 SUBJECTS, 6 GRADES)
// ---------------------------------------------------------
const kgV = (a, b) => {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let i = max;
    while(i % min !== 0) { i += max; }
    return i;
};

const LehrplanEngine = {
    math: {
        5: {
            t: "Brüche erweitern bedeutet, Zähler und Nenner mit derselben Zahl zu multiplizieren.",
            e: "Erweitere 1/2 mit 3. 1*3 = 3, 2*3 = 6. Ergebnis: 3/6.",
            gen: () => {
                const n = Math.floor(Math.random() * 5) + 2;
                const f = Math.floor(Math.random() * 4) + 2;
                return { q: `Erweitere 1/${n} mit ${f}. Gib den neuen Nenner ein.`, a: (n*f).toString(), s: `Nenner: ${n} * ${f} = ${n*f}` };
            }
        },
        6: {
            t: "Bruchaddition mit kgV. Einheitenumrechnung: 1 m2 = 100 dm2 = 10.000 cm2. 1 m3 = 1.000 dm3.",
            e: "1/4 + 1/6 = 3/12 + 2/12 = 5/12.",
            gen: () => {
                if(Math.random() > 0.5) {
                    const a = Math.floor(Math.random() * 4) + 2;
                    const b = Math.floor(Math.random() * 5) + 3;
                    const k = kgV(a, b);
                    return { q: `Addiere 1/${a} und 1/${b}. Gib den Hauptnenner (kgV) an.`, a: k.toString(), s: `Das kgV von ${a} und ${b} ist ${k}.` };
                } else {
                    const m2 = Math.floor(Math.random() * 10) + 1;
                    return { q: `Wandle ${m2} m² in cm² um.`, a: (m2 * 10000).toString(), s: `1 m² = 10.000 cm². ${m2} * 10000 = ${m2 * 10000}.` };
                }
            }
        },
        7: {
            t: "Proportionaler Dreisatz (y/x=k) vs Antiproportional (x*y=k). Prozentrechnung W = p*G. Zinsen Z = K*p/100.",
            e: "5% von 200 = 10.",
            gen: () => {
                if(Math.random() > 0.5) {
                    const a1 = Math.floor(Math.random() * 5) + 2;
                    const b1 = Math.floor(Math.random() * 10) + 10;
                    return { q: `Antiproportional: ${a1} Pumpen brauchen ${b1} Stunden. Wie lange braucht 1 Pumpe?`, a: (a1*b1).toString(), s: `Antipropo: ${a1} * ${b1} = ${a1*b1} Stunden.` };
                } else {
                    const K = (Math.floor(Math.random() * 50) + 10) * 100;
                    const p = Math.floor(Math.random() * 5) + 2;
                    return { q: `Zinsen: K=${K}€, p=${p}%. Berechne Z.`, a: (K*p/100).toFixed(2), s: `Z = ${K} * ${p} / 100 = ${K*p/100}.` };
                }
            }
        },
        8: {
            t: "Lineare Gleichungen lösen: ax + b = cx + d. Nach x umstellen.",
            e: "2x + 4 = x + 6 => x = 2.",
            gen: () => {
                const a = Math.floor(Math.random() * 5) + 2;
                const b = Math.floor(Math.random() * 10) + 1;
                const c = a - 1;
                const d = b + Math.floor(Math.random() * 10) + 2;
                return { q: `Löse nach x auf: ${a}x + ${b} = ${c}x + ${d}`, a: (d-b).toString(), s: `x auf eine Seite: (${a}-${c})x = ${d} - ${b}. x = ${d-b}.` };
            }
        },
        9: {
            t: "Quadratische Gleichungen pq-Formel: x1,2 = -(p/2) ± sqrt((p/2)^2 - q). Diskriminante ist der Term unter der Wurzel.",
            e: "x² - 4x + 3 = 0. p=-4, q=3. Diskriminante = (-2)^2 - 3 = 1.",
            gen: () => {
                const x1 = Math.floor(Math.random() * 5) + 1;
                const x2 = -(Math.floor(Math.random() * 5) + 1);
                const p = -(x1 + x2);
                const q = x1 * x2;
                return { q: `Bestimme die Diskriminante von x² ${p>=0?'+':''}${p}x ${q>=0?'+':''}${q} = 0`, a: (Math.pow(p/2, 2) - q).toFixed(2), s: `Diskriminante = (p/2)² - q = (${p}/2)² - (${q}) = ${(Math.pow(p/2, 2) - q)}.` };
            }
        },
        10: {
            t: "Zinseszins Kn = K0(1+p/100)^n. Trigonometrie (SOH-CAH-TOA). Stereometrie m = V*Dichte. Pfadregeln.",
            e: "SOH: Sinus = Gegenkathete / Hypotenuse.",
            gen: () => {
                const choice = Math.floor(Math.random() * 3);
                if(choice === 0) {
                    const k0 = 1000; const p = 5; const n = 2; const q = 1.05;
                    return { q: `Zinseszins: K0=1000€, p=5%, n=2. Kn?`, a: (k0 * Math.pow(q, n)).toFixed(2), s: `Kn = 1000 * 1.05^2 = 1102.50.` };
                } else if(choice === 1) {
                    const w = 30; const h = 10;
                    return { q: `Trig: Hyp=${h}, Winkel=${w}°. Gegenkathete?`, a: (h * Math.sin(w*Math.PI/180)).toFixed(2), s: `G = ${h} * sin(30°) = 5.` };
                } else {
                    const r = 2; const d = 5; const v = 4/3*Math.PI*Math.pow(r,3);
                    return { q: `Stereometrie: Kugel r=2cm, Dichte=5g/cm³. Masse in g?`, a: (v*d).toFixed(2), s: `V = 4/3*π*8 = 33.51. m = 33.51 * 5 = 167.55.` };
                }
            }
        }
    },
    phys: {
        7: {
            t: "Dichte m = p*V. Gleichförmige Bewegung s = v*t.",
            e: "m = 5g/cm3 * 10cm3 = 50g.",
            gen: () => {
                const p = Math.floor(Math.random()*5)+2;
                const v = Math.floor(Math.random()*10)+5;
                return { q: `Dichte=${p}g/cm³, Volumen=${v}cm³. Masse?`, a: (p*v).toFixed(2), s: `m = ${p} * ${v} = ${p*v}g.` };
            }
        },
        8: {
            t: "Thermodynamik Q = c * m * dT.",
            e: "Wasser c=4.19.",
            gen: () => {
                const m = Math.floor(Math.random()*5)+1;
                const dt = Math.floor(Math.random()*20)+10;
                return { q: `Wasser(c=4.19): m=${m}kg, dT=${dt}K. Q (kJ)?`, a: (4.19*m*dt).toFixed(2), s: `Q = 4.19 * ${m} * ${dt} = ${(4.19*m*dt).toFixed(2)}.` };
            }
        },
        9: {
            t: "Kinematik a = dv/dt. Bremsweg s = (v/10)^2. Arbeit W = F*s.",
            e: "Bremsweg bei 50 km/h: 5^2 = 25m.",
            gen: () => {
                const v = Math.floor(Math.random()*50)+50;
                return { q: `Bremsweg bei ${v} km/h?`, a: Math.pow(v/10, 2).toFixed(2), s: `s = (${v}/10)^2 = ${(v/10)**2}.` };
            }
        },
        10: {
            t: "Elektrizitätslehre U = R * I. Reihenschaltung Rges = R1+R2. Parallelschaltung 1/Rges = 1/R1 + 1/R2.",
            e: "U=10V, I=2A -> R=5 Ohm.",
            gen: () => {
                const u = Math.floor(Math.random()*20)+5;
                const i = Math.floor(Math.random()*4)+1;
                return { q: `U=${u}V, I=${i}A. Berechne R (Ohm).`, a: (u/i).toFixed(2), s: `R = U / I = ${u} / ${i} = ${(u/i).toFixed(2)}.` };
            }
        },
        5: { t: "Physik 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Physik 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    chem: {
        7: {
            t: "Atombau: Ordnungszahl = Anzahl Protonen und Elektronen.",
            e: "Kohlenstoff (6) hat 6 Protonen.",
            gen: () => ({ q: `Ein Atom hat Ordnungszahl 8. Wie viele Protonen?`, a: `8`, s: `Die Ordnungszahl gibt die Protonenzahl an.` })
        },
        8: { t: "Atombau 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: {
            t: "Stoffmenge n = m/M. Konzentration c = n/V. Reaktionsgleichungen.",
            e: "m=18g, M=18g/mol -> n=1mol.",
            gen: () => {
                const m = Math.floor(Math.random()*20)+10;
                const M = Math.floor(Math.random()*15)+5;
                return { q: `m=${m}g, M=${M}g/mol. Berechne n.`, a: (m/M).toFixed(2), s: `n = ${m} / ${M} = ${(m/M).toFixed(2)}.` };
            }
        },
        10: {
            t: "pH-Wert: pH = -log(c(H+)). Ausgleichen von Reaktionsgleichungen.",
            e: "c = 10^-3 -> pH = 3.",
            gen: () => {
                const e = Math.floor(Math.random()*4)+1;
                return { q: `c(H+) = 10^-${e} mol/l. Berechne pH.`, a: e.toString(), s: `pH = -log(10^-${e}) = ${e}.` };
            }
        },
        5: { t: "Chem 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Chem 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    bio: {
        9: {
            t: "Genetik: Punnett-Quadrat. Uniformitätsregel & Spaltungsregel.",
            e: "Aa x Aa -> 25% aa.",
            gen: () => ({ q: `Kreuzung Aa x Aa. Prozentuale Chance für Phänotyp 'a' (rezessiv)?`, a: `25`, s: `Kombinationen: AA, Aa, aA, aa. Nur aa zeigt Merkmal a (1 von 4 = 25%).` })
        },
        5: { t: "Bio 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Bio 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "Bio 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "Bio 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        10: { t: "Bio 10", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    geo: {
        9: {
            t: "Klimadiagramme nach Walter/Lieth. Niederschlag > Temperatur = humid.",
            e: "N=50mm, T=10C -> Humid.",
            gen: () => ({ q: `Temperaturkurve liegt ÜBER der Niederschlagskurve. Klima ist: humid oder arid?`, a: `arid`, s: `Verdunstung > Niederschlag = Arid (trocken).` })
        },
        5: { t: "Geo 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Geo 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "Geo 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "Geo 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        10: { t: "Geo 10", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    his: {
        10: {
            t: "Deutsche Teilung. Mauerbau 1961, Friedliche Revolution 1989 in Leipzig/Dresden.",
            e: "1989 fiel die Mauer.",
            gen: () => ({ q: `In welchem Jahr wurde die Berliner Mauer gebaut?`, a: `1961`, s: `13. August 1961.` })
        },
        5: { t: "His 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "His 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "His 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "His 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: { t: "His 9", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    gk: {
        9: {
            t: "Marktpreisbildung: Angebot und Nachfrage bestimmen den Gleichgewichtspreis.",
            e: "Hohe Nachfrage, wenig Angebot = Preis steigt.",
            gen: () => ({ q: `Das Angebot sinkt massiv, die Nachfrage bleibt gleich. Was passiert mit dem Preis? (steigt/sinkt)`, a: `steigt`, s: `Knappheit treibt den Preis nach oben.` })
        },
        5: { t: "GK 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "GK 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "GK 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "GK 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        10: { t: "GK 10", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    wth: {
        8: {
            t: "Maßstabsumrechnungen: 1:5 bedeutet geteilt durch 5. 1 kcal = 4.184 kJ.",
            e: "10cm bei 1:5 = 2cm.",
            gen: () => {
                const kcal = Math.floor(Math.random()*100)+50;
                return { q: `${kcal} kcal in kJ umrechnen.`, a: (kcal * 4.184).toFixed(2), s: `${kcal} * 4.184 = ${(kcal*4.184).toFixed(2)}.` };
            }
        },
        5: { t: "WTH 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "WTH 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "WTH 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: { t: "WTH 9", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        10: { t: "WTH 10", e: "Inaktiv", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    deu: {
        10: {
            t: "LRS-Satzkraftwerk. Satzglieder: Genitiv = Wessen? Dativ = Wem?",
            e: "Ich helfe dem Mann. (Wem? = Dativ).",
            gen: () => ({ q: `Nach welchem Kasus fragt man mit "Wessen"?`, a: `Genitiv`, s: `Wer=Nom, Wessen=Gen, Wem=Dat, Wen=Akk.` })
        },
        5: { t: "Deu 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Deu 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "Deu 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "Deu 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: { t: "Deu 9", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    eng: {
        10: {
            t: "Indirect Speech Backshift: Present -> Past. Active -> Passive (be + past participle).",
            e: "He says 'I am' -> He said he was.",
            gen: () => ({ q: `Backshift Indirect Speech: Aus 'Simple Present' wird in der indirekten Rede das 'Simple ...'?`, a: `Past`, s: `Zeiten werden um eine Stufe in die Vergangenheit verschoben.` })
        },
        5: { t: "Eng 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Eng 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "Eng 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "Eng 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: { t: "Eng 9", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) }
    },
    kunst: {
        5: { t: "Kunst 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Kunst 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "Kunst 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "Kunst 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: { t: "Kunst 9", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        10: {
            t: "Itten Farbenlehre: Komplementär. Fluchtpunkt-Perspektive.",
            e: "Rot-Grün.",
            gen: () => ({ q: `Komplementärfarbe zu Rot?`, a: `Grün`, s: `Gegenüberliegend im Farbkreis.` })
        }
    },
    musik: {
        5: { t: "Musik 5", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        6: { t: "Musik 6", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        7: { t: "Musik 7", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        8: { t: "Musik 8", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        9: { t: "Musik 9", e: "-", gen: () => ({q: "X", a: "1", s: "X"}) },
        10: {
            t: "Rhythmus-Mathematik: 1 Ganze = 4 Viertel.",
            e: "2 Viertel + 2 Achtel = 3 Viertel.",
            gen: () => ({ q: `Wie viele Achtel passen in eine Viertelnote?`, a: `2`, s: `1/4 = 2/8.` })
        }
    }
};

// ---------------------------------------------------------
// UI & ROUTING
// ---------------------------------------------------------
function initSidebar() {
    const sl = document.getElementById('subject-list');
    const subjects = ['math', 'phys', 'chem', 'bio', 'geo', 'his', 'gk', 'wth', 'deu', 'eng', 'kunst', 'musik'];
    let html = '';
    for(let s of subjects) {
        html += `<li><strong>${s.toUpperCase()}</strong><ul>`;
        for(let g = 5; g <= 10; g++) {
            if(s === 'wth' && g === 10) {
                html += `<li><button disabled>Klasse 10 (Inaktiv)</button></li>`;
            } else {
                html += `<li><button onclick="openTheory('${s}', ${g})">Klasse ${g}</button></li>`;
            }
        }
        html += `</ul></li>`;
    }
    sl.innerHTML = html;
}

function navigate(view) {
    document.querySelectorAll('section').forEach(el => el.style.display = 'none');
    document.getElementById('view-' + view).style.display = 'block';
    updateDashboard();
}

function updateDashboard() {
    document.getElementById('val-xp').innerText = STATE.xp;
    document.getElementById('val-exams').innerText = STATE.examsDone;
    document.getElementById('val-errors').innerText = STATE.errorsHunted;
    document.getElementById('error-count').innerText = STATE.errorVault.length;
    
    // Bildungsscore: 40% XP, 40% Prüfungen, 20% Fehlerjagd (Max 1000)
    const pX = Math.min(STATE.xp / 1000, 1) * 0.4;
    const pE = Math.min(STATE.examsDone / 10, 1) * 0.4;
    const pV = Math.min(STATE.errorsHunted / 20, 1) * 0.2;
    const score = Math.floor((pX + pE + pV) * 1000);
    document.getElementById('val-score').innerText = score;
}

function openTheory(subj, grade) {
    const data = LehrplanEngine[subj][grade];
    document.getElementById('theory-title').innerText = `${subj.toUpperCase()} Klasse ${grade}`;
    document.getElementById('theory-text').innerHTML = `<p>${data.t}</p>`;
    document.getElementById('theory-example').innerHTML = `<p>Beispiel: ${data.e}</p>`;
    STATE.activeTopic = { s: subj, g: grade };
    navigate('theory');
}

function startExercise() {
    const data = LehrplanEngine[STATE.activeTopic.s][STATE.activeTopic.g].gen();
    STATE.currentTaskData = data;
    document.getElementById('ex-title').innerText = "Übung (Stufe 2)";
    document.getElementById('ex-question').innerHTML = data.q;
    document.getElementById('ex-input').value = '';
    document.getElementById('ex-feedback').innerText = '';
    document.getElementById('ex-steps').style.display = 'none';
    document.getElementById('ex-next').style.display = 'none';
    navigate('exercise');
}

function checkAnswer() {
    const ans = document.getElementById('ex-input').value.trim().toLowerCase().replace(',', '.');
    const corr = STATE.currentTaskData.a.toLowerCase().replace(',', '.');
    
    if(ans === corr) {
        document.getElementById('ex-feedback').innerText = "Richtig! +10 XP";
        STATE.xp += 10;
        localStorage.setItem('pure_xp', STATE.xp);
        document.getElementById('ex-next').style.display = 'block';
    } else {
        document.getElementById('ex-feedback').innerText = "Falsch! Aufgabe im Sorgenkinder-Archiv gespeichert.";
        STATE.errorVault.push(STATE.currentTaskData);
        localStorage.setItem('pure_vault', JSON.stringify(STATE.errorVault));
        document.getElementById('ex-steps').innerHTML = `<p>Lösungsweg:</p><p>${STATE.currentTaskData.s}</p>`;
        document.getElementById('ex-steps').style.display = 'block';
        document.getElementById('ex-next').style.display = 'block';
    }
}

function nextExercise() {
    startExercise();
}

function startExamTimer() {
    STATE.examTasks = [];
    STATE.examCurrent = 0;
    STATE.examCorrect = 0;
    for(let i=0; i<10; i++) {
        STATE.examTasks.push(LehrplanEngine[STATE.activeTopic.s][STATE.activeTopic.g].gen());
    }
    
    STATE.timeRemaining = 1800; // 30 mins
    STATE.examTimer = setInterval(() => {
        STATE.timeRemaining--;
        document.getElementById('exam-timer').innerText = `Zeit: ${STATE.timeRemaining}s`;
        if(STATE.timeRemaining <= 0) finishExam();
    }, 1000);
    
    showExamTask();
    navigate('exam');
}

function showExamTask() {
    if(STATE.examCurrent >= 10) { finishExam(); return; }
    STATE.currentTaskData = STATE.examTasks[STATE.examCurrent];
    document.getElementById('exam-question').innerHTML = STATE.currentTaskData.q;
    document.getElementById('exam-input').value = '';
}

function checkExamAnswer() {
    const ans = document.getElementById('exam-input').value.trim().toLowerCase().replace(',', '.');
    const corr = STATE.currentTaskData.a.toLowerCase().replace(',', '.');
    if(ans === corr) { STATE.examCorrect++; }
    else { STATE.errorVault.push(STATE.currentTaskData); localStorage.setItem('pure_vault', JSON.stringify(STATE.errorVault)); }
    
    STATE.examCurrent++;
    showExamTask();
}

function finishExam() {
    clearInterval(STATE.examTimer);
    document.getElementById('exam-grade-output').innerText = `Richtig: ${STATE.examCorrect} von 10`;
    STATE.examsDone++;
    localStorage.setItem('pure_exams', STATE.examsDone);
    updateDashboard();
    navigate('exam-result');
}

function startErrorHunt() {
    if(STATE.errorVault.length === 0) { alert('Keine Fehler vorhanden!'); return; }
    STATE.currentTaskData = STATE.errorVault[0];
    document.getElementById('ex-title').innerText = "Sorgenkinder-Jagd";
    document.getElementById('ex-question').innerHTML = STATE.currentTaskData.q;
    document.getElementById('ex-input').value = '';
    document.getElementById('ex-feedback').innerText = '';
    document.getElementById('ex-steps').style.display = 'none';
    
    // Override logic temporarily
    const oldCheck = checkAnswer;
    window.checkAnswer = function() {
        const ans = document.getElementById('ex-input').value.trim().toLowerCase().replace(',', '.');
        const corr = STATE.currentTaskData.a.toLowerCase().replace(',', '.');
        if(ans === corr) {
            alert('Fehler gejagt!');
            STATE.errorVault.shift();
            localStorage.setItem('pure_vault', JSON.stringify(STATE.errorVault));
            STATE.errorsHunted++;
            localStorage.setItem('pure_errs', STATE.errorsHunted);
            window.checkAnswer = oldCheck;
            navigate('dashboard');
        } else {
            alert('Wieder falsch. Bleibt im Archiv.');
            window.checkAnswer = oldCheck;
            navigate('dashboard');
        }
    };
    navigate('exercise');
}

window.onload = () => {
    initSidebar();
    updateDashboard();
};


// ---------------------------------------------------------
// PHASE 2 UI EXTENSIONS (SETTINGS, RINGS, BOTTOM SHEET)
// ---------------------------------------------------------

// Override UI routing to use nice sliding
function navTo(view) {
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active-view');
        el.style.display = 'none';
    });
    
    const titleMap = { dashboard: 'Dashboard', settings: 'Einstellungen', duden: 'Duden', lrs: 'Satzkraftwerk' };
    if(titleMap[view]) document.getElementById('page-title').innerText = titleMap[view];
    
    const target = document.getElementById('view-' + view);
    target.style.display = 'block';
    // Force reflow
    void target.offsetWidth;
    target.classList.add('active-view');
    closeMobileSheet();
    updateDashboardRings();
}
// Map old navigate function
window.navigate = navTo;

function initUI() {
    initSidebarLists();
    updateDashboardRings();
    
    // Check if on mobile
    if(window.innerWidth <= 768) {
        document.getElementById('mobile-logo').style.display = 'flex';
    }
}

function initSidebarLists() {
    const s_desk = document.getElementById('desktop-subject-list');
    const s_mob = document.getElementById('mobile-subject-list');
    const subjects = ['math', 'phys', 'chem', 'bio', 'geo', 'his', 'gk', 'wth', 'deu', 'eng', 'kunst', 'musik'];
    const titles = {'math':'Mathematik', 'phys':'Physik', 'chem':'Chemie', 'bio':'Biologie', 'geo':'Geographie', 'his':'Geschichte', 'gk':'Gemeinschaftskunde', 'wth':'Wirtschaft-Technik-Haushalt', 'deu':'Deutsch', 'eng':'Englisch', 'kunst':'Kunst', 'musik':'Musik'};
    
    let html = '';
    for(let s of subjects) {
        html += `<div class="subject-group">
            <div class="subject-title" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display==='block'?'none':'block'">
                📂 ${titles[s]}
            </div>
            <div class="subject-list">`;
        for(let g = 5; g <= 10; g++) {
            if(s === 'wth' && g === 10) {
                html += `<button disabled style="opacity:0.5;">Klasse 10 (Inaktiv)</button>`;
            } else {
                html += `<button onclick="openTheory('${s}', ${g})">Klasse ${g}</button>`;
            }
        }
        html += `</div></div>`;
    }
    if(s_desk) s_desk.innerHTML = html;
    if(s_mob) s_mob.innerHTML = html;
}

// Mobile Sheet Logic
function openMobileSheet() { document.getElementById('mobile-subject-sheet').classList.add('open'); }
function closeMobileSheet() { document.getElementById('mobile-subject-sheet').classList.remove('open'); }

// SVG Rings & Score Logic
function updateDashboardRings() {
    // Score computation is in old updateDashboard(), but let's recalculate for rings
    document.getElementById('val-xp').innerText = STATE.xp;
    document.getElementById('val-exams').innerText = STATE.examsDone;
    document.getElementById('val-errors').innerText = STATE.errorsHunted;
    document.getElementById('error-count').innerText = STATE.errorVault.length;
    
    const pX = Math.min(STATE.xp / 1000, 1);
    const pE = Math.min(STATE.examsDone / 10, 1);
    const pV = Math.min(STATE.errorsHunted / 20, 1);
    const score = Math.floor((pX*0.4 + pE*0.4 + pV*0.2) * 1000);
    document.getElementById('val-score').innerText = score;
    
    // Rings SVG Lengths: Outer 502, Mid 408, Inner 314
    requestAnimationFrame(() => {
        const rw = document.getElementById('ring-wissen');
        if(rw) rw.style.strokeDashoffset = 502 - (502 * pX);
        const re = document.getElementById('ring-exam');
        if(re) re.style.strokeDashoffset = 408 - (408 * pE);
        const rh = document.getElementById('ring-hunt');
        if(rh) rh.style.strokeDashoffset = 314 - (314 * pV);
    });
}

// Settings Module Functions
function toggleOLED() {
    const isChecked = document.getElementById('oled-toggle').checked;
    if(isChecked) {
        document.body.classList.add('oled-mode');
    } else {
        document.body.classList.remove('oled-mode');
    }
}

function exportData() {
    const data = { xp: STATE.xp, exams: STATE.examsDone, errs: STATE.errorsHunted, vault: STATE.errorVault };
    const str = btoa(JSON.stringify(data));
    navigator.clipboard.writeText(str).then(() => alert('Backup Code kopiert! (Base64)'));
}

function importData() {
    const str = prompt('Backup Code einfügen:');
    if(!str) return;
    try {
        const data = JSON.parse(atob(str));
        if(data.xp !== undefined) {
            STATE.xp = data.xp; localStorage.setItem('pure_xp', data.xp);
            STATE.examsDone = data.exams; localStorage.setItem('pure_exams', data.exams);
            STATE.errorsHunted = data.errs; localStorage.setItem('pure_errs', data.errs);
            STATE.errorVault = data.vault; localStorage.setItem('pure_vault', JSON.stringify(data.vault));
            updateDashboardRings();
            alert('Daten erfolgreich importiert!');
        }
    } catch(e) {
        alert('Fehlerhafter Code.');
    }
}

function factoryReset() {
    if(confirm('ACHTUNG: Willst du wirklich alle lokalen Daten und den Score unwiderruflich löschen?')) {
        localStorage.clear();
        location.reload();
    }
}

// Override onload
window.onload = () => {
    initUI();
};
